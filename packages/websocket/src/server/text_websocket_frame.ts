import { TextWebSocketFrameHandlerAdapter } from '../netty'
import { EventEmitter } from 'events'
import { ServerEvent } from './constants'
import { NettyWebSocketServerOptions } from './config';

export class TextWebSocketFrameHandler extends TextWebSocketFrameHandlerAdapter {
    private event: EventEmitter;
    constructor(options: NettyWebSocketServerOptions) {
        super()
        this.event = options.event;
    }
    userEventTriggered(ctx: any, evt: any) {
        if (evt == 'HANDSHAKE_COMPLETE') {
            this.event.emit(ServerEvent.connect, ctx)
        }
    }
    channelRead0(ctx: any, msg: any) {
        this.event.emit(ServerEvent.message, ctx, msg)
    }
}
