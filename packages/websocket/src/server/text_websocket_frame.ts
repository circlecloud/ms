import { TextWebSocketFrameHandlerAdapter } from '../netty'
import { EventEmitter } from 'events'
import { ServerEvent } from './constants'

export class TextWebSocketFrameHandler extends TextWebSocketFrameHandlerAdapter {
    private event: EventEmitter;
    constructor(event: EventEmitter) {
        super()
        this.event = event;
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
