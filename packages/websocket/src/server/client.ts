import { EventEmitter } from 'events'
import { SocketIO } from 'socket-io/interfaces';

const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')

export class NettyClient extends EventEmitter implements SocketIO.EngineSocket {
    private _id: string;
    private channel: any

    server: any;
    readyState: string;
    remoteAddress: string;
    upgraded: boolean;
    request: any;
    transport: any;

    constructor(server: any, channel: any) {
        super();
        this.server = server;
        this.channel = channel;
        this._id = channel.id();
    }

    get id() {
        return this._id;
    }
    send(text: string) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text))
    }
}
