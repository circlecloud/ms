import { EventEmitter } from 'events'
import { ServerEvent } from '../'

import { TextWebSocketFrameHandlerAdapter } from './adapter'

import type { JavaServerOptions } from '../'

export class TextWebSocketFrameHandler extends TextWebSocketFrameHandlerAdapter {
    private event: EventEmitter
    constructor(options: JavaServerOptions) {
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
