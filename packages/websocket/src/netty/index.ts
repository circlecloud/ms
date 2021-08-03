import { JavaServerOptions, ServerEvent, WebSocketServer } from '../server'
import { Request } from '../server/request'

import { NettyClient } from './client'
import { AttributeKeys, Keys } from './constants'
import { WebSocketDetect } from './websocket_detect'
import { WebSocketHandler } from './websocket_handler'

class NettyWebSocketServer extends WebSocketServer {
    constructor(pipeline: any, options: JavaServerOptions) {
        super(pipeline, options)
    }

    protected initialize() {
        let connectEvent = this.options.event
        try { this.instance.remove(Keys.Detect) } catch (error) { }
        this.instance.addFirst(Keys.Detect, new WebSocketDetect(connectEvent).getHandler())
        connectEvent.on(ServerEvent.detect, (ctx, channel) => {
            channel.pipeline().addFirst(Keys.Handler, new WebSocketHandler(this.options).getHandler())
            ctx.fireChannelRead(channel)
        })
        connectEvent.on(ServerEvent.connect, (ctx) => {
            this.onconnect(ctx)
        })
        connectEvent.on(ServerEvent.message, (ctx, msg) => {
            this.onmessage(ctx, msg.text())
        })
        connectEvent.on(ServerEvent.disconnect, (ctx, cause) => {
            this.ondisconnect(ctx, cause)
        })
        connectEvent.on(ServerEvent.error, (ctx, error) => {
            this.onerror(ctx, error)
        })
    }

    protected getId(ctx: any) {
        try {
            return ctx.channel().id() + ''
        } catch (error) {
            console.log(Object.toString.apply(ctx))
            console.ex(error)
        }
    }

    protected getRequest(ctx) {
        let channel = ctx.channel()
        let req = channel.attr(AttributeKeys.Request).get()
        let headers = {}
        let nativeHeaders = req.headers()
        nativeHeaders.forEach(function (header) {
            headers[header.getKey()] = header.getValue()
        })
        let request = new Request(req.uri(), req.method().name(), headers)
        request.connection = {
            remoteAddress: channel.remoteAddress() + ''
        }
        return request
    }

    protected getSocket(ctx) {
        return new NettyClient(ctx.channel())
    }

    protected doClose() {
        if (this.instance.names().contains(Keys.Detect)) {
            this.instance.remove(Keys.Detect)
        }
    }
}

export {
    NettyWebSocketServer,
    NettyClient
}
