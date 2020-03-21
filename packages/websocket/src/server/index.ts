import { EventEmitter } from 'events'

import { ServerEvent, Keys } from './constants'
import { WebSocketDetect } from './websocket_detect'
import { WebSocketHandler } from './websocket_handler'
import { NettyClient } from './client'

interface NettyWebSocketServerOptions {
    path?: string;
}

class NettyWebSocketServer {
    private event: EventEmitter
    private pipeline: any;
    private allClients: { [key: string]: NettyClient };

    constructor(pipeline: any, options: NettyWebSocketServerOptions) {
        this.event = new EventEmitter();
        this.allClients = {};
        this.pipeline = pipeline;
        let connectEvent = new EventEmitter();
        this.pipeline.addFirst(Keys.Detect, new WebSocketDetect(connectEvent).getHandler())
        connectEvent.on(ServerEvent.detect, (ctx, channel) => {
            channel.pipeline().addFirst(Keys.Handler, new WebSocketHandler(connectEvent).getHandler())
            ctx.fireChannelRead(channel)
        })
        connectEvent.on(ServerEvent.connect, (ctx) => {
            let nettyClient = new NettyClient(ctx.channel());
            this.allClients[nettyClient.id] = nettyClient;
            this.event.emit(ServerEvent.connect, nettyClient);
        })
        connectEvent.on(ServerEvent.message, (ctx, msg) => {
            let channel = ctx.channel();
            this.allClients[channel.id()]?.emit(ServerEvent.message, msg.text())
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