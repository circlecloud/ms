import { NettyWebSocket } from '.'
import { WebSocketClientHandlerAdapter } from './adapter/handler'

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
        if (ctx.newPromise) {
            this.handshakeFuture = ctx.newPromise()
        } else {
            this.handshakeFuture = new DefaultChannelPromise(ctx.channel(), ctx.executor())
        }
    }
    channelActive(ctx: any) {
        this.handshaker.handshake(ctx.channel())
    }
    channelInactive(ctx: any) {
        if (this.client.readyStatus != WebSocket.CLOSED) {
            this.client.onclose({ code: 1006, reason: 'client connection channel inactive.' })
        }
    }
    channelRead0(ctx: any, msg: any) {
        let ch = ctx.channel()
        if (!this.handshaker.isHandshakeComplete()) {
            // web socket client connected
            this.handshaker.finishHandshake(ch, msg)
            this.handshakeFuture.setSuccess()
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
            this.client.close(1000, 'server close connection.')
        }
    }
    exceptionCaught(ctx: any, cause: Error) {
        console.debug(`${ctx} exceptionCaught ${cause}`)
        this.client.onerror({ error: cause })
        if (!this.handshakeFuture.isDone()) {
            this.handshakeFuture.setFailure(cause)
        }
    }
}
