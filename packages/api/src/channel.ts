import { injectable, inject, provideSingleton } from "@ccms/container"

export namespace channel {
    /**
    * handle plugin message
    * @param data byte[]
    */
    export type ChannelListener = (data: any, exts?: any) => void

    @injectable()
    export abstract class Channel {
        private listenerMap = [];
        /**
         * 注册通道
         * @param plugin 插件
         * @param channel 通道
         * @param exec 执行器
         */
        listen(plugin: any, channel: string, exec: ChannelListener) {
            if (!plugin || !plugin.description || !plugin.description.name) throw new TypeError('Plugin can\'t be undefiend!')
            let name = plugin.description.name
            let listener = this.register(channel, exec)
            if (!this.listenerMap[name]) this.listenerMap[name] = []
            let offExec = () => {
                this.unregister(channel, listener)
                console.debug(`[${name}] unregister channel ${channel}`)
            }
            var off = {
                channel,
                listener,
                off: offExec
            }
            this.listenerMap[name].push(off)
            console.debug(`[${name}] register channel ${channel} => ${exec.name || '[anonymous]'}`)
            return off
        }
        /**
         * 关闭插件注册的通道
         * @param plugin 插件
         */
        disable(plugin: any) {
            var channelCache = this.listenerMap[plugin.description.name]
            if (channelCache) {
                channelCache.forEach(t => t.off())
                delete this.listenerMap[plugin.description.name]
            }
        }
        /**
         * Send Channel Message
         * @param player recover target
         * @param channel ChannelName
         * @param data byte[]
         */
        abstract send(player: any, channel: string, data: any)
        /**
         * register channel
         * @param channel ChannelName
         */
        abstract register(channel: string, listener: ChannelListener): any
        /**
         * unregister channel
         * @param channel ChannelName
         */
        abstract unregister(channel: string, listener?: any): void
    }
    export namespace proxy {
        const CHANNEL_NAME = "BungeeCord"
        const ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
        const DataOutputStream = Java.type('java.io.DataOutputStream')
        const ByteStreams = Java.type('com.google.common.io.ByteStreams')
        namespace bungeecord {
            export class SubChannelBuilder {
                private channel: Channel
                private player: any
                private params: string[]
                constructor(channel: Channel, player: any) {
                    this.channel = channel
                    this.player = player
                    this.params = []
                }
                connect(server: string) {
                    this.params.push("Connect")
                    this.params.push(server)
                }
                connectOther(player: string, server: string) {
                    this.params.push("ConnectOther")
                    this.params.push(player)
                    this.params.push(server)
                }
                ip() {
                    this.params.push("IP")
                }
                ipOther(player: string) {
                    this.params.push("IPOther")
                    this.params.push(player)
                }
                playerCount(server: string | "ALL") {
                    this.params.push("PlayerCount")
                    this.params.push(server)
                }
                /**
                 * Get a list of players connected on a certain server, or on ALL the servers.
                 * @param server count server
                 * Response:
                 * String server = in.readUTF(); // The name of the server you got the player list of, as given in args.  
                 * String[] playerList = in.readUTF().split(", ");
                 */
                playerList(server: string | "ALL") {
                    this.params.push("PlayerList")
                    this.params.push(server)
                }
                /**
                 * Get a list of server name strings, as defined in BungeeCord's config.yml
                 * Response:
                 * String[] serverList = in.readUTF().split(", ");
                 */
                getServers() {
                    this.params.push("GetServers")
                    return this.finalSend()
                }
                /**
                 * Get this server's name, as defined in BungeeCord's config.yml
                 */
                getServer() {
                    this.params.push("GetServer")
                    return this.finalSend()
                }
                broadcast(message: string) {
                    this.message("ALL", message)
                    return this.finalSend()
                }
                /**
                 * Send a message (as in, a chat message) to the specified player.
                 * @param player who reciver message
                 * @param message message content
                 */
                message(player: string | "ALL", message: string) {
                    this.params.push("Message")
                    this.params.push(player)
                    this.params.push(message)
                    return this.finalSend()
                }
                /**
                 * Send a raw message (as in, a chat message) to the specified player. The advantage of this method over Message is that you can include click events and hover events.
                 * @param player who reciver message
                 * @param message message content
                 */
                messageRaw(player: string | "ALL", json: string) {
                    this.params.push("MessageRaw")
                    this.params.push(player)
                    this.params.push(json)
                    return this.finalSend()
                }
                forwardAll(channel: string, data: any) {
                    this.forward("ALL", channel, data)
                }
                /**
                 * Send a custom plugin message to said server. This is one of the most useful channels ever.  
                 * Remember, the sending and receiving server(s) need to have a player online.
                 * @param server reciver
                 * @param channel channelName
                 * @param data data
                 */
                forward(server: string | "ALL", channel: string, data: any) {
                    this.params.push("Forward")
                    this.params.push(server)
                    this.params.push(channel)
                    this.params.push(typeof data === "string" ? data : JSON.stringify(data))
                    return this.finalSend()
                }
                /**
                 * Send a custom plugin message to said server. This is one of the most useful channels ever.  
                 * Remember, the sending and receiving server(s) need to have a player online.
                 * @param server reciver
                 * @param channel channelName
                 * @param data data
                 */
                forwardToPlayer(server: string | "ALL", channel: string, data: any) {
                    this.params.push("Forward")
                    this.params.push(server)
                    this.params.push(channel)
                    this.params.push(typeof data === "string" ? data : JSON.stringify(data))
                    return this.finalSend()
                }
                generic(...args: string[]) {
                    args && this.params.concat(...args)
                    return this.finalSend()
                }
                private send(...middlewares: ((out: java.io.DataOutputStream) => void)[]) {
                    let byteArray = new ByteArrayOutputStream()
                    let out = new DataOutputStream(byteArray)
                    this.params.forEach(utf => out.writeUTF(utf))
                    for (let middleware of middlewares) {
                        middleware(out)
                    }
                    this.channel.send(this.player, CHANNEL_NAME, byteArray.toByteArray())
                }
                private finalSend() {
                    return {
                        send: this.send.bind(this)
                    }
                }
            }
        }
        @provideSingleton(BungeeCord)
        export class BungeeCord {
            @inject(Channel)
            private channel: Channel
            /**
             * 获得代理
             * @param player 玩家
             */
            for(player: any): bungeecord.SubChannelBuilder {
                return new bungeecord.SubChannelBuilder(this.channel, player)
            }
        }
    }
}
