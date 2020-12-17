import { EventEmitter } from 'events'

import { ServerOptions } from '../socket-io'
import { ServerEvent } from '../socket-io/constants'

import { NettyClient } from './client'
import { Keys } from './constants'
import { WebSocketDetect } from './websocket_detect'
import { WebSocketHandler } from './websocket_handler'

class NettyWebSocketServer extends EventEmitter {
    private pipeline: any
    private clients: Map<string, NettyClient>

    constructor(pipeline: any, options: ServerOptions) {
        super()
        this.clients = new Map()
        this.pipeline = pipeline
        let connectEvent = options.event
        try { this.pipeline.remove(Keys.Detect) } catch (error) { }
        this.pipeline.addFirst(Keys.Detect, new WebSocketDetect(connectEvent).getHandler())
        connectEvent.on(ServerEvent.detect, (ctx, channel) => {
            channel.pipeline().addFirst(Keys.Handler, new WebSocketHandler(options).getHandler())
            ctx.fireChannelRead(channel)
        })
        connectEvent.on(ServerEvent.connect, (ctx) => {
            let cid = ctx?.channel().id() + ''
            let nettyClient = new NettyClient(this, ctx.channel())
            this.clients.set(cid, nettyClient)
            this.emit(ServerEvent.connect, nettyClient)
        })
        connectEvent.on(ServerEvent.message, (ctx, msg) => {
            let cid = ctx?.channel().id() + ''
            if (this.clients.has(cid)) {
                this.emit(ServerEvent.message, this.clients.get(cid), msg.text())
            } else {
                console.error(`unknow client ${ctx} reciver message ${msg.text()}`)
            }
        })
        connectEvent.on(ServerEvent.disconnect, (ctx, cause) => {
            let cid = ctx?.channel().id() + ''
            if (this.clients.has(cid)) {
                this.emit(ServerEvent.disconnect, this.clients.get(cid), cause)
            } else {
                console.error(`unknow client ${ctx} disconnect cause ${cause}`)
            }
        })
        connectEvent.on(ServerEvent.error, (ctx, cause) => {
            let cid = ctx?.channel().id() + ''
            if (this.clients.has(cid)) {
                this.emit(ServerEvent.error, this.clients.get(cid), cause)
            } else {
                console.error(`unknow client ${ctx} cause error ${cause}`)
                console.ex(cause)
            }
        })
    }
    close() {
        if (this.pipeline.names().contains(Keys.Detect)) {
            this.pipeline.remove(Keys.Detect)
        }
        this.clients.forEach(client => client.close())
    }
}

export {
    NettyWebSocketServer,
    NettyClient
}
