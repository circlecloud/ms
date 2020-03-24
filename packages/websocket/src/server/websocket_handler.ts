import { EventEmitter } from 'events'

import { Keys } from './constants'
import { WebSocketHandlerAdapter } from "../netty"
import { HttpRequestHandler } from './httprequest'
import { TextWebSocketFrameHandler } from './text_websocket_frame'
import { ServerOptions } from '../socket-io'

const CharsetUtil = Java.type('io.netty.util.CharsetUtil')

const HttpServerCodec = Java.type('io.netty.handler.codec.http.HttpServerCodec')
const ChunkedWriteHandler = Java.type('io.netty.handler.stream.ChunkedWriteHandler')
const HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator')
const WebSocketServerProtocolHandler = Java.type('io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler')

export class WebSocketHandler extends WebSocketHandlerAdapter {
    private options: ServerOptions;
    constructor(options: ServerOptions) {
        super()
        this.options = options;
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
            pipeline.addLast('websocket', new WebSocketServerProtocolHandler(this.options.path, true))
            pipeline.addLast('websocket_handler', new TextWebSocketFrameHandler(this.options).getHandler())
        }
        pipeline.remove(Keys.Handler)
        msg.resetReaderIndex()
        ctx.fireChannelRead(msg)
    }
}
