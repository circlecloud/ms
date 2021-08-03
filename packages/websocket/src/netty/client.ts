import { WebSocketClient } from '../server/client'

const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')

export class NettyClient extends WebSocketClient {
    private channel: any

    constructor(channel: any) {
        super()
        this.id = channel.id() + ''
        this.channel = channel
    }

    send(text: string, opts?: any, callback?: (err?: Error) => void) {
        try {
            this.channel.writeAndFlush(new TextWebSocketFrame(text))
            callback?.()
        } catch (error) {
            callback?.(error)
        }
    }

    close() {
        this.channel.close()
    }
}
