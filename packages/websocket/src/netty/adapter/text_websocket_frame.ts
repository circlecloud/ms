const TypeParameterMatcher = Java.type('io.netty.util.internal.TypeParameterMatcher')
const TextWebSocketFrameMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.websocketx.TextWebSocketFrame'))
const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')

export abstract class TextWebSocketFrameHandlerAdapter {
    private _Handler
    constructor() {
        let TextWebSocketFrameHandlerAdapterImpl = Java.extend(SimpleChannelInboundHandler, {
            isSharable: () => true,
            userEventTriggered: this.userEventTriggered.bind(this),
            acceptInboundMessage: (msg: any) => {
                return TextWebSocketFrameMatcher.match(msg)
            },
            channelRead0: this.channelRead0.bind(this),
            exceptionCaught: this.exceptionCaught.bind(this)
        })
        this._Handler = new TextWebSocketFrameHandlerAdapterImpl()
    }
    abstract userEventTriggered(ctx: any, evt: any)
    abstract channelRead0(ctx: any, msg: any)
    abstract exceptionCaught(ctx: any, cause: Error)
    getHandler() {
        return this._Handler
    }
}
