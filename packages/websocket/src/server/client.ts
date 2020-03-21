import { EventEmitter } from 'events'

const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')

export class NettyClient {
    private event: EventEmitter

    private _id: string;
    private channel: any
    constructor(channel: any) {
        this.channel = channel;
        this._id = channel.id();
        this.event = new EventEmitter();
    }
    get id() {
        return this._id;
    }
    on(event: string, callback: (...args: any[]) => void) {
        this.event.on(event, callback);
    }
    emit(event: string, text: string) {
        this.event.emit(event, text);
    }
    send(text: string) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text))
    }
}
