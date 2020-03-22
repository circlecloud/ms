import { EventEmitter } from 'events'

import { ServerEvent, Keys } from './constants'
import { WebSocketDetect } from './websocket_detect'
import { WebSocketHandler } from './websocket_handler'
import { NettyClient } from './client'
import { NettyWebSocketServerOptions } from './config'

class NettyWebSocketServer {
    private event: EventEmitter
    private pipeline: any;
    private allClients: { [key: string]: NettyClient };

    constructor(pipeline: any, options: NettyWebSocketServerOptions) {
        this.event = new EventEmitter();
        this.allClients = {};
        this.pipeline = pipeline;
        let connectEvent = options.event;
        this.pipeline.addFirst(Keys.Detect, new WebSocketDetect(connectEvent).getHandler())
        connectEvent.on(ServerEvent.detect, (ctx, channel) => {
            channel.pipeline().addFirst(Keys.Handler, new WebSocketHandler(options).getHandler())
            ctx.fireChannelRead(channel)
        })
        connectEvent.on(ServerEvent.connect, (ctx) => {
            let nettyClient = new NettyClient(this, ctx.channel());
            this.allClients[nettyClient.id] = nettyClient;
            this.event.emit(ServerEvent.connect, nettyClient);
        })
        connectEvent.on(ServerEvent.message, (ctx, msg) => {
            let channel = ctx.channel();
            this.event.emit(ServerEvent.message, this.allClients[channel.id()], msg.text())
        })
    }

    disable() {
        if (this.pipeline.names().contains(Keys.Detect)) {
            this.pipeline.remove(Keys.Detect)
        }
    }

    on(event: string, listener: (...args: any[]) => void) {
        this.event.on(event, listener)
    }
}

export {
    NettyWebSocketServer,
    ServerEvent,
    NettyClient
};