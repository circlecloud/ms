const TypeParameterMatcher = Java.type('io.netty.util.internal.TypeParameterMatcher')
const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')
const FullHttpRequestMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.FullHttpRequest'))

export abstract class HttpRequestHandlerAdapter {
    private _Handler
    constructor() {
        let HttpRequestHandlerAdapterImpl = Java.extend(SimpleChannelInboundHandler, {
            isSharable: () => true,
            acceptInboundMessage: (msg: any) => {
                return FullHttpRequestMatcher.match(msg)
            },
            channelRead0: this.channelRead0.bind(this)
        })
        this._Handler = new HttpRequestHandlerAdapterImpl()
    }
    abstract channelRead0(ctx: any, request: any)
    getHandler() {
        return this._Handler
    }
}
