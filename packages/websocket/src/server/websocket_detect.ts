import { EventEmitter } from 'events'
import { WebSocketHandlerAdapter } from "../netty"
import { ServerEvent } from '../socket-io/constants'

export class WebSocketDetect extends WebSocketHandlerAdapter {
    private event: EventEmitter
    constructor(event: EventEmitter) {
        super()
        this.event = event
    }
    channelRead(ctx: any, channel: any) {
        this.event.emit(ServerEvent.detect, ctx, channel)
    }
    channelUnregistered(ctx: any) {
        this.event.emit(ServerEvent.disconnect, ctx, 'client disconnect')
        ctx.fireChannelUnregistered()
    }
    exceptionCaught(ctx: any, cause: Error) {
        this.event.emit(ServerEvent.error, ctx, cause)
    }
}
