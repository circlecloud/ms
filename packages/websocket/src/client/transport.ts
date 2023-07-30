import { EventEmitter } from 'events'
import { WebSocket } from './index'
import { ClientEvent, CloseEvent, ErrorEvent, Event, MessageEvent, WebSocketHeader } from './interface'

export abstract class Transport extends EventEmitter {
    protected _url: string
    protected _state: number = WebSocket.CONNECTING
    protected _protocol: string
    protected _headers: WebSocketHeader = {}

    constructor(uri: string, subProtocol: string = '', headers: WebSocketHeader = {}) {
        super()
        this._url = uri
        this._protocol = subProtocol
        this._headers = headers
    }

    get id() {
        return this.getId()
    }

    get protocol() {
        return this._protocol
    }

    get readyStatus() {
        return this._state
    }

    set readyStatus(state: number) {
        this._state = state
    }

    connect() {
        try {
            this.doConnect()
        } catch (error: any) {
            console.ex(error)
            this.onerror({ error })
        }
    }

    send(text: string) {
        try {
            this.doSend(text)
        } catch (error: any) {
            this.onerror({ error })
        }
    }

    close(code: number = 1000, reason: string = '') {
        if (this.readyStatus < WebSocket.CLOSING) {
            this.readyStatus = WebSocket.CLOSING
            try {
                this.doClose(code, reason)
            } catch (error: any) {
                this.onerror({ error })
            }
        } else {
            console.debug(`WebSocket Transport ${this.id} call close code ${code} reason ${reason} but state is ${this.readyStatus}`)
        }
    }

    onconnection(event: Event) {
        this._state == WebSocket.CONNECTING
        this.emit('connecting', event)
    }

    onconnect(event: Event) {
        if (this.readyStatus != WebSocket.OPEN) {
            this.readyStatus = WebSocket.OPEN
            this.emit(ClientEvent.open, event)
        } else {
            console.debug(`WebSocket Transport ${this.id} call onconnect but state is ${this.readyStatus}`)
        }
    }

    onmessage(event: MessageEvent) {
        this.emit(ClientEvent.message, event)
    }

    onerror(event: ErrorEvent) {
        this.emit(ClientEvent.error, event)
    }

    onclose(event: CloseEvent) {
        if (this.readyStatus != WebSocket.CLOSED) {
            this.readyStatus = WebSocket.CLOSED
            this.emit(ClientEvent.close, event)
        } else {
            console.debug(`WebSocket Transport ${this.id} call onclose but state is ${this.readyStatus} CloseEvent[code: ${event.code}, reason: ${event.reason}]`)
        }
    }

    abstract getId(): string
    abstract doConnect(): void
    abstract doSend(text: string): void
    abstract doClose(code: number, reason: string): void
}
