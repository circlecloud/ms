import { EventEmitter } from 'events'
import { ServerOptions } from '../socket-io'
import { ServerEvent } from '../socket-io/constants'
import { TextWebSocketFrameHandlerAdapter } from './adapter'

export class TextWebSocketFrameHandler extends TextWebSocketFrameHandlerAdapter {
    private event: EventEmitter
    constructor(options: ServerOptions) {
        super()
        this.event = options.event
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
