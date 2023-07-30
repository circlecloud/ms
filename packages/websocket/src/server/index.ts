import { EventEmitter } from 'events'
import { ServerOptions } from '../socket.io'
import { WebSocketClient } from './client'

import type { Request } from './request'

export enum ServerEvent {
    detect = 'detect',
    request = 'request',
    upgrade = 'upgrade',
    connect = 'connect',
    connection = 'connection',
    message = 'message',
    error = 'error',
    disconnecting = 'disconnecting',
    disconnect = 'disconnect',
}

export interface JavaServerOptions extends ServerOptions {
    event?: EventEmitter
    root?: string
    httpRequestHandler?: (ctx, request) => void
}

export abstract class WebSocketServer extends EventEmitter {
    protected instance: any
    protected options: JavaServerOptions
    private clients: Map<string, WebSocketClient>

    public static attach(instance, options) {
        if (!instance) { throw new Error('instance can\'t be undefiend!') }
        options = Object.assign({
            event: new EventEmitter(),
            path: '/ws',
            root: root + Java.type("java.io.File").separatorChar + 'wwwroot',
        }, options)
        let WebSocketServerImpl = undefined
        if (instance.class.name.startsWith('io.netty.channel')) {
            WebSocketServerImpl = require("./netty").NettyWebSocketServer
        } else {
            WebSocketServerImpl = require("./tomcat").TomcatWebSocketServer
        }
        console.debug('create websocket server from ' + WebSocketServerImpl.name)
        return new WebSocketServerImpl(instance, options)
    }

    constructor(instance: any, options: JavaServerOptions) {
        super()
        this.instance = instance
        this.options = options
        this.clients = new Map()
        this.initialize()
    }
    protected onconnect(handler: any) {
        let id = this.getId(handler)
        console.log('client', id, 'connect')
        let request = this.getRequest(handler)
        request.id = id
        let websocket = this.getSocket(handler)
        this.clients.set(this.getId(handler), websocket)
        this.emit(ServerEvent.connect, request, websocket)
    }
    protected onmessage(handler: any, message: string) {
        this.execute(handler, (websocket) => websocket.emit(ServerEvent.message, message))
    }
    protected ondisconnect(handler: any, cause: string) {
        this.execute(handler, (websocket) => websocket.emit(ServerEvent.disconnect, cause))
    }
    protected onerror(handler: any, error: Error) {
        this.execute(handler, (websocket) => websocket.emit(ServerEvent.error, error))
    }
    protected execute(handler: any, callback: (websocket: WebSocketClient) => void) {
        let id = this.getId(handler)
        if (this.clients.has(id)) {
            this.clients.has(id) && callback(this.clients.get(id))
        } else {
            console.trace('ignore execute', handler, 'callback', callback)
        }
    }
    public close() {
        this.clients.forEach(websocket => websocket.close())
        this.doClose()
    }
    protected abstract initialize(): void
    protected abstract getId(handler: any): string
    protected abstract getRequest(handler: any): Request
    protected abstract getSocket(handler: any): WebSocketClient
    protected abstract doClose(): void
}
