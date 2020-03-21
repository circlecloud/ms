const ChannelInboundHandlerAdapter = Java.type('io.netty.channel.ChannelInboundHandlerAdapter')

export abstract class WebSocketHandlerAdapter {
    private _Handler;
    constructor() {
        let ChannelInboundHandlerAdapterImpl = Java.extend(ChannelInboundHandlerAdapter, {
            channelRead: this.channelRead.bind(this)
        })
        this._Handler = new ChannelInboundHandlerAdapterImpl()
    }
    abstract channelRead(ctx: any, channel: any);
    getHandler() {
        return this._Handler;
    }
}
