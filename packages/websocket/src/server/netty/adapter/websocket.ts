const ChannelInboundHandlerAdapter = Java.type('io.netty.channel.ChannelInboundHandlerAdapter')

export abstract class WebSocketHandlerAdapter {
    private _Handler
    constructor() {
        let ChannelInboundHandlerAdapterImpl = Java.extend(ChannelInboundHandlerAdapter, {
            isSharable: () => true,
            channelRead: this.channelRead.bind(this),
            channelInactive: this.channelInactive.bind(this),
            channelUnregistered: this.exceptionCaught.bind(this),
            exceptionCaught: this.exceptionCaught.bind(this)
        })
        this._Handler = new ChannelInboundHandlerAdapterImpl()
    }
    abstract channelRead(ctx: any, channel: any)
    channelInactive(ctx: any) {
        ctx.fireChannelInactive()
    }
    channelUnregistered(ctx: any) {
        ctx.fireChannelUnregistered()
    }
    abstract exceptionCaught(ctx: any, cause: Error)
    getHandler() {
        return this._Handler
    }
}
