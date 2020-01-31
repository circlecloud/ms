/// <reference types="@ms/ployfill" />

const TypeParameterMatcher = Java.type('io.netty.util.internal.TypeParameterMatcher')
const TextWebSocketFrameMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.websocketx.TextWebSocketFrame'))
const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')

export default abstract class TextWebSocketFrameHandlerAdapter {
    private _Handler;
    constructor() {
        this._Handler == Java.extend(SimpleChannelInboundHandler, {
            userEventTriggered: this.userEventTriggered,
            acceptInboundMessage: (msg: any) => {
                return TextWebSocketFrameMatcher.match(msg)
            },
            channelRead0: this.channelRead0
        })
    }
    abstract userEventTriggered(ctx: any, evt: any);
    abstract channelRead0(ctx: any, msg: any);
    getHandler() {
        return this._Handler;
    }
}
