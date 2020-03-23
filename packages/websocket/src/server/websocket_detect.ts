import { EventEmitter } from 'events'
import { WebSocketHandlerAdapter } from "../netty"
import { ServerEvent } from './constants'

export class WebSocketDetect extends WebSocketHandlerAdapter {
    private event: EventEmitter;
    constructor(event: EventEmitter) {
        super()
        this.event = event;
    }
    channelRead(ctx: any, channel: any) {
        this.event.emit(ServerEvent.detect, ctx, channel);
    }
}