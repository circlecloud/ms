import { provideSingleton, Autowired, optional } from '@ccms/container'
import { channel } from './channel'

export namespace proxy {
    const ByteArrayOutputStream = Java.type('java.io.ByteArrayOutputStream')
    const DataOutputStream = Java.type('java.io.DataOutputStream')
    namespace bungeecord {
        const CHANNEL_NAME = "BungeeCord"
        export class SubChannelBuilder {
            private channel: channel.Channel
            private player: any
            private params: string[]
            constructor(channel: channel.Channel, player: any) {
                this.channel = channel
                this.player = player
                this.params = []
            }
            connect(server: string) {
                this.params.push("Connect")
                this.params.push(server)
                return this.finalSend()
            }
            connectOther(player: string, server: string) {
                this.params.push("ConnectOther")
                this.params.push(player)
                this.params.push(server)
                return this.finalSend()
            }
            ip() {
                this.params.push("IP")
                return this.finalSend()
            }
            ipOther(player: string) {
                this.params.push("IPOther")
                this.params.push(player)
                return this.finalSend()
            }
            playerCount(server: string | "ALL") {
                this.params.push("PlayerCount")
                this.params.push(server)
                return this.finalSend()
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
                return this.finalSend()
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
                return this.forward("ALL", channel, data)
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
                return this.channel.send(this.player, CHANNEL_NAME, byteArray.toByteArray())
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
        @optional()
        @Autowired()
        private channel: channel.Channel
        /**
         * 获得代理
         * @param player 玩家
         */
        for(player: any): bungeecord.SubChannelBuilder {
            return new bungeecord.SubChannelBuilder(this.channel, player)
        }
    }
}
