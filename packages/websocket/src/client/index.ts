
import { EventEmitter } from 'events'
import { Transport } from './transport'
import { ClientEvent, CloseEvent, ErrorEvent, Event, EventType, MessageEvent, WebSocketHeader } from './interface'

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
        client.removeAllListeners()
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
        manager.add(this)
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
    set onopen(func: (event: Event) => void) {
        this.client.on(ClientEvent.open, func)
    }
    set onmessage(func: (event: MessageEvent) => void) {
        this.client.on(ClientEvent.message, func)
    }
    set onclose(func: (event: CloseEvent) => void) {
        this.client.on(ClientEvent.close, func)
        manager.del(this)
    }
    set onerror(func: (event: ErrorEvent) => void) {
        this.client.on(ClientEvent.error, func)
    }
    public send(data: any) {
        this.client.send(data)
    }
    public close(code?: number, reason?: string) {
        this.client.close(code, reason)
        manager.del(this)
    }
}
global.setGlobal('WebSocket', WebSocket)
