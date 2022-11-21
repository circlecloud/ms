
import { EventEmitter } from 'events'
import { Transport } from './transport'
import { CloseEvent, ErrorEvent, Event, EventType, MessageEvent, WebSocketHeader } from './interface'

export class WebSocketManager {
    private clients = new Map<string, WebSocket>()

    constructor() {
        process.on('exit', () => {
            for (const client of this.clients.values()) {
                client.close(0, `client ${client.id} close connect`)
            }
            this.clients.clear()
        })
    }

    add(client: WebSocket) {
        this.clients.set(client.id, client)
    }
    del(client: WebSocket) {
        this.clients.delete(client.id)
    }
}

export const manager = new WebSocketManager()

export class WebSocket extends EventEmitter {
    public static CONNECTING = 0
    public static OPEN = 1
    public static CLOSING = 2
    public static CLOSED = 3
    public binaryType: 'blob' | 'arraybuffer'
    protected manager: WebSocketManager

    protected _url: string
    protected _headers: WebSocketHeader = {}

    private client: Transport

    constructor(url: string, subProtocol: string | string[] = '', headers: WebSocketHeader = {}) {
        super()
        this.manager = manager
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
        this.client.on('open', (event) => {
            this.onopen?.(event)
            manager.add(this)
        })
        this.client.on('message', (event) => this.onmessage?.(event))
        this.client.on('close', (event) => {
            this.onclose?.(event)
            manager.del(this)
        })
        this.client.on('error', (event) => this.onerror?.(event))
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
        return this.client.readyStatus
    }
    get url() {
        return this._url
    }
    public onopen: (event: Event) => void
    public onmessage: (event: MessageEvent) => void
    public onclose: (event: CloseEvent) => void
    public onerror: (event: ErrorEvent) => void

    addEventListener(event: EventType, callback: () => void) {
        this[`on${event.toLowerCase()}`] = callback
        this.client.on(event, callback)
    }
    public send(data: any) {
        this.client.send(data)
    }
    public close(code?: number, reason?: string) {
        this.client.close(code, reason)
        this.removeAllListeners()
    }
}
global.setGlobal('WebSocket', WebSocket)
