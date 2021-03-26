import { EventEmitter } from 'events'

import { Transport } from '../transport'

interface ServerOptions {
    event?: EventEmitter
    root?: string
    /**
     * name of the path to capture
     * @default "/socket.io"
     */
    path: string
}

interface WebSocketServerImpl extends EventEmitter {
    close(): void
}

export class WebSocketServer extends EventEmitter {
    options: Partial<ServerOptions>
    private websocketServer: WebSocketServerImpl

    constructor(instance: any, options: Partial<ServerOptions>) {
        super()
        if (!instance) { throw new Error('instance can\'t be undefiend!') }
        this.options = Object.assign({
            event: new EventEmitter(),
            path: '/ws',
            root: root + '/wwwroot',
        }, options)
        this.selectServerImpl(instance)
    }

    on(event: "connect", cb: (transport: Transport) => void): this
    on(event: "message", cb: (transport: Transport, text: string) => void): this
    on(event: "disconnect", cb: (transport: Transport, reason: string) => void): this
    on(event: "error", cb: (transport: Transport, cause: Error) => void): this
    on(event: string, cb: (transport: Transport, extra?: any) => void): this {
        this.websocketServer.on(event, cb)
        return this
    }

    private selectServerImpl(instance: any) {
        let WebSocketServerImpl = undefined
        if (instance.class.name.startsWith('io.netty.channel')) {
            WebSocketServerImpl = require("../netty").NettyWebSocketServer
        } else {
            WebSocketServerImpl = require("../tomcat").TomcatWebSocketServer
        }
        this.websocketServer = new WebSocketServerImpl(instance, this.options)
    }
}
