import { injectable } from "@ms/container";

export namespace channel {
    /**
    * handle plugin message
    * @param data byte[]
    */
    export type ChannelListener = (data: any) => void

    @injectable()
    export abstract class Channel {
        private listenerMap = [];

        listen(plugin: any, channel: string, exec: ChannelListener) {
            if (!plugin || !plugin.description || !plugin.description.name) throw new TypeError('Plugin can\'t be undefiend!');
            let name = plugin.description.name;
            let listener = this.register(channel, exec)
            if (!this.listenerMap[name]) this.listenerMap[name] = [];
            let offExec = () => {
                this.unregister(channel, listener);
                console.debug(`[${name}] unregister channel ${channel}`);
            };
            var off = {
                channel,
                listener,
                off: offExec
            };
            this.listenerMap[name].push(off);
            console.debug(`[${name}] register channel ${channel} => ${exec.name || '[anonymous]'}`);
            return off;
        }
        disable(plugin: any) {
            var channelCache = this.listenerMap[plugin.description.name];
            if (channelCache) {
                channelCache.forEach(t => t.off());
                delete this.listenerMap[plugin.description.name];
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
}
