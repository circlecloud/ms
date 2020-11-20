import { Transport } from '../transport'
import { AttributeKeys } from './constants'

const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')

export class NettyClient extends Transport {
    private channel: any

    constructor(server: any, channel: any) {
        super(server)
        this.remoteAddress = channel.remoteAddress() + ''
        this.request = channel.attr(AttributeKeys.Request).get()

        this._id = channel.id() + ''
        this.channel = channel
    }

    doSend(text: string) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text))
    }
    doClose() {
        this.channel.close()
    }
}
