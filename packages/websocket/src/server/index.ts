import { EventEmitter } from 'events'

import { ServerEvent, Keys } from './constants'
import { WebSocketDetect } from './websocket_detect'
import { WebSocketHandler } from './websocket_handler'
import { NettyClient } from './client'
import { ServerOptions, Server } from '../socket-io'

class NettyWebSocketServer extends EventEmitter {
    private pipeline: any;
    private allClients: { [key: string]: NettyClient };

    constructor(pipeline: any, options: ServerOptions) {
        super()
        this.allClients = {};
        this.pipeline = pipeline;
        let connectEvent = options.event;
        try { this.pipeline.remove(Keys.Detect) } catch (error) { }
        this.pipeline.addFirst(Keys.Detect, new WebSocketDetect(connectEvent).getHandler())
        connectEvent.on(ServerEvent.detect, (ctx, channel) => {
            channel.pipeline().addFirst(Keys.Handler, new WebSocketHandler(options).getHandler())
            ctx.fireChannelRead(channel)
        })
        connectEvent.on(ServerEvent.connect, (ctx) => {
            let nettyClient = new NettyClient(this, ctx.channel());
            this.allClients[nettyClient.id] = nettyClient;
            this.emit(ServerEvent.connect, nettyClient);
        })
        connectEvent.on(ServerEvent.message, (ctx, msg) => {
            this.emit(ServerEvent.message, this.allClients[ctx.channel().id()], msg.text())
        })
        connectEvent.on(ServerEvent.error, (ctx, cause) => {
            this.emit(ServerEvent.error, this.allClients[ctx.channel().id()], cause)
        })
    }
    close() {
        if (this.pipeline.names().contains(Keys.Detect)) {
            this.pipeline.remove(Keys.Detect)
        }
        Object.values(this.allClients).forEach(client => client.close())
    }
}

export {
    NettyWebSocketServer,
    ServerEvent,
    NettyClient
};