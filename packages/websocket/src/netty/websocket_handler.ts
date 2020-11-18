import { ServerOptions } from '../socket-io'
import { ServerEvent } from '../socket-io/constants'

import { Keys } from './constants'
import { HttpRequestHandler } from './httprequest'
import { WebSocketHandlerAdapter } from "./adapter"
import { TextWebSocketFrameHandler } from './text_websocket_frame'

const CharsetUtil = Java.type('io.netty.util.CharsetUtil')
const HttpServerCodec = Java.type('io.netty.handler.codec.http.HttpServerCodec')
const ChunkedWriteHandler = Java.type('io.netty.handler.stream.ChunkedWriteHandler')
const HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator')
const WebSocketServerProtocolHandler = Java.type('io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler')

export class WebSocketHandler extends WebSocketHandlerAdapter {
    private options: ServerOptions
    constructor(options: ServerOptions) {
        super()
        this.options = options
    }
    channelRead(ctx: any, msg: any) {
        msg.markReaderIndex()
        let message: string = msg.toString(CharsetUtil.UTF_8)
        let channel = ctx.channel()
        let pipeline = channel.pipeline()
        if (message.indexOf('HTTP/1.1') > 0) {
            pipeline.names().forEach(f => {
                if (f == Keys.Handler || f.indexOf(Keys.Default) > -1) { return }
                pipeline.remove(f)
            })
            pipeline.addLast('http', new HttpServerCodec())
            pipeline.addLast('chunk', new ChunkedWriteHandler())
            pipeline.addLast('httpobj', new HttpObjectAggregator(64 * 1024))
            pipeline.addLast('http_request', new HttpRequestHandler(this.options).getHandler())
            // this.options.path, null, false, 655360, false, true, false, 10000
            pipeline.addLast('websocket', new WebSocketServerProtocolHandler(this.options.path, true))
            pipeline.addLast('websocket_handler', new TextWebSocketFrameHandler(this.options).getHandler())
        }
        pipeline.remove(Keys.Handler)
        msg.resetReaderIndex()
        ctx.fireChannelRead(msg)
    }

    channelInactive(ctx: any) {
        console.debug('WebSocketHandler channelInactive ' + ctx)
        this.options.event.emit(ServerEvent.disconnect, ctx, 'client disconnect')
        ctx.channelInactive()
    }

    channelUnregistered(ctx: any) {
        console.debug('WebSocketHandler channelUnregistered ' + ctx)
        this.options.event.emit(ServerEvent.disconnect, ctx, 'client disconnect')
        ctx.fireChannelUnregistered()
    }

    exceptionCaught(ctx: any, cause: Error) {
        this.options.event.emit(ServerEvent.error, ctx, cause)
    }
}
