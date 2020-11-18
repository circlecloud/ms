import { EventEmitter } from 'events'
import { InnerClient } from '../interfaces'
import { AttributeKeys } from './constants'

const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')

export class NettyClient extends EventEmitter implements InnerClient {
    private _id: string
    private channel: any

    server: any
    readyState: string
    remoteAddress: string
    upgraded: boolean
    request: any

    constructor(server: any, channel: any) {
        super()
        this.server = server
        this.readyState = 'open'
        this.remoteAddress = channel.remoteAddress() + ''
        this.upgraded = true
        this.request = channel.attr(AttributeKeys.Request).get()

        this.channel = channel
        this._id = channel.id() + ''
    }

    get id() {
        return this._id
    }
    send(text: string) {
        if (this.readyState == 'open') {
            this.channel.writeAndFlush(new TextWebSocketFrame(text))
        } else {
            console.debug(`send message ${text} to close client ${this._id}`)
        }
    }
    close() {
        if (this.readyState = 'open') {
            this.channel.close()
            this.readyState = 'close'
        }
    }
}
