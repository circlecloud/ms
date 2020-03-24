import { TextWebSocketFrameHandlerAdapter } from '../netty'
import { EventEmitter } from 'events'
import { ServerEvent } from './constants'
import { ServerOptions } from '../socket-io';

export class TextWebSocketFrameHandler extends TextWebSocketFrameHandlerAdapter {
    private event: EventEmitter;
    constructor(options: ServerOptions) {
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
    exceptionCaught(ctx: any, cause: Error) {
        this.event.emit(ServerEvent.error, ctx, cause)
    }
}
