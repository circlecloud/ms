const TypeParameterMatcher = Java.type('io.netty.util.internal.TypeParameterMatcher')
const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')
const FullHttpRequestMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.FullHttpRequest'))

export default abstract class HttpRequestHandlerAdapter {
    private _Handler;
    constructor() {
        this._Handler == Java.extend(SimpleChannelInboundHandler, {
            acceptInboundMessage: (msg: any) => {
                return FullHttpRequestMatcher.match(msg)
            },
            channelRead0: this.channelRead0
        })
    }
    abstract channelRead0(ctx: any, msg: any);
    getHandler() {
        return this._Handler;
    }
}