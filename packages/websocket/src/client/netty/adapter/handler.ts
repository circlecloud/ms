const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')
export abstract class WebSocketClientHandlerAdapter {
    private _Handler
    constructor() {
        let WebSocketClientHandlerAdapterImpl = Java.extend(SimpleChannelInboundHandler, {
            isSharable: this.isSharable.bind(this),
            handlerAdded: this.handlerAdded.bind(this),
            channelActive: this.channelActive.bind(this),
            channelInactive: this.channelInactive.bind(this),
            channelRead0: this.channelRead0.bind(this),
            exceptionCaught: this.exceptionCaught.bind(this)
        })
        this._Handler = new WebSocketClientHandlerAdapterImpl()
    }
    abstract isSharable(): void
    abstract handlerAdded(ctx: any): void
    abstract channelActive(ctx: any): void
    abstract channelInactive(ctx: any): void
    abstract channelRead0(ctx: any, msg: any): void
    abstract exceptionCaught(ctx: any, cause: Error): void
    getHandler() {
        return this._Handler
    }
}
