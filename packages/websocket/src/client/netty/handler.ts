import { NettyWebSocket } from '.'
import { WebSocketClientHandlerAdapter } from './adapter/handler'

const Throwable = Java.type('java.lang.Throwable')
const RuntimeException = Java.type('java.lang.RuntimeException')

const CharsetUtil = Java.type('io.netty.util.CharsetUtil')
const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')
const CloseWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.CloseWebSocketFrame')
const FullHttpResponse = Java.type('io.netty.handler.codec.http.FullHttpResponse')
const DefaultChannelPromise = Java.type('io.netty.channel.DefaultChannelPromise')

export class WebSocketClientHandler extends WebSocketClientHandlerAdapter {
    public handshaker: any
    public handshakeFuture: any//ChannelPromise
    private client: NettyWebSocket
    constructor(handshaker: any, client: NettyWebSocket) {
        super()
        this.handshaker = handshaker
        this.client = client
    }
    isSharable() {
        return true
    }
    handlerAdded(ctx: any) {
        this.client.onconnection({})
        if (ctx.newPromise) {
            this.handshakeFuture = ctx.newPromise()
        } else {
            this.handshakeFuture = new DefaultChannelPromise(ctx.channel(), ctx.executor())
        }
    }
    channelActive(ctx: any) {
        this.handshaker.handshake(ctx.channel())
        setTimeout(() => {
            this.abortHandshake(new Error('handshake timed out.'))
        }, 10000)
    }
    channelInactive(ctx: any) {
        this.client.close(1006, 'connection was closed abnormally.', true)
    }
    channelRead0(ctx: any, msg: any) {
        let ch = ctx.channel()
        if (!this.handshaker.isHandshakeComplete()) {
            console.debug(`Netty Handler channelRead0 websocket client connected`)
            // websocket client connected
            this.handshaker.finishHandshake(ch, msg)
            this.handshakeFuture.setSuccess()
            this.client.onconnect({})
            return
        }

        if (msg instanceof FullHttpResponse) {
            let response = msg
            throw new Error(`Unexpected FullHttpResponse (getStatus=${response.getStatus()}, content=${response.content().toString(CharsetUtil.UTF_8)})`)
        }

        let frame = msg
        if (frame instanceof TextWebSocketFrame) {
            this.client.onmessage({ data: frame.text() })
        } else if (frame instanceof CloseWebSocketFrame) {
            this.client.receiverClose(frame.statusCode(), frame.reasonText())
        }
    }
    abortHandshake(reason: Error) {
        if (this.handshakeFuture.isDone()) { return }
        if (!(reason instanceof Throwable)) {
            reason = new RuntimeException(reason)
        }
        this.handshakeFuture.setFailure(reason)
    }
    exceptionCaught(ctx: any, cause: Error) {
        console.debug(`${ctx} exceptionCaught ${cause}`)
        this.client.abortHandshake(cause)
        this.client.onerror({ error: cause })
    }
}
