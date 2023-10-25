
import { EventEmitter } from 'events'
import { Transport } from './transport'
import { ClientEvent, CloseEvent, ErrorEvent, Event, EventType, MessageEvent, WebSocketHeader } from './interface'

export class WebSocketManager {
    private clients = new Map<string, WebSocket>()

    constructor() {
        process.on('exit', () => {
            for (const client of this.clients.values()) {
                client.close(1000, `client ${client.id} close connect due process exit.`)
            }
            this.clients.clear()
        })
    }

    add(client: WebSocket) {
        this.clients.set(client.id, client)
    }

    del(client: WebSocket) {
        client.removeAllListeners()
        this.clients.delete(client.id)
    }
}

export const manager = new WebSocketManager()

export class WebSocket extends EventEmitter {
    public static manager: WebSocketManager = manager

    public static CONNECTING = 0
    public static OPEN = 1
    public static CLOSING = 2
    public static CLOSED = 3

    public binaryType: 'blob' | 'arraybuffer'

    protected _url: string
    protected _headers: WebSocketHeader = {}

    private client: Transport

    constructor(url: string, subProtocol: string | string[] = '', headers: WebSocketHeader = {}) {
        super()
        this._url = url
        this._headers = headers
        try {
            let TransportImpl = require('./netty').NettyWebSocket
            this.client = new TransportImpl(url, subProtocol, headers)
            console.debug('create websocket from ' + this.client.constructor.name)
        } catch (error: any) {
            console.error('create websocket impl error: ' + error)
            console.ex(error)
            return
        }
        // mamanger connected client
        manager.add(this)
        this.client.on(ClientEvent.close, (_) => manager.del(this))
        // add event forward
        this.client.on(ClientEvent.open, (event) => this.onopen?.(event))
        this.client.on(ClientEvent.message, (event) => this.onmessage?.(event))
        this.client.on(ClientEvent.close, (event) => this.onclose?.(event))
        this.client.on(ClientEvent.error, (event) => this.onerror?.(event))
        setTimeout(() => this.client.connect(), 20)
    }
    get id() {
        return this.client.id
    }
    get bufferedAmount() {
        throw new Error("Method not implemented.")
    }
    get extensions() {
        throw new Error("Method not implemented.")
    }
    get protocol() {
        return this.client.protocol
    }
    get readyState() {
        return this.client.readyState
    }
    get url() {
        return this._url
    }

    public onopen: (event: Event) => void
    public onmessage: (event: MessageEvent) => void
    public onclose: (event: CloseEvent) => void
    public onerror: (event: ErrorEvent) => void

    public on(eventName: EventType, listener: (...args: any[]) => void): this {
        this.client.on(eventName, listener)
        return this
    }
    public emit(eventName: EventType, ...args: any[]): boolean {
        return this.client.emit(eventName, ...args)
    }

    public send(data: any) {
        return this.client.send(data)
    }

    public close(code?: number, reason?: string) {
        return this.client.close(code, reason)
    }
}
global.setGlobal('WebSocket', WebSocket)
