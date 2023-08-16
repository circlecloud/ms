import { EventEmitter } from 'events'
import { WebSocket } from './index'
import { ClientEvent, CloseEvent, ErrorEvent, Event, MessageEvent, WebSocketHeader } from './interface'

export abstract class Transport extends EventEmitter {
    protected _url: string
    protected _state: number = WebSocket.CONNECTING
    protected _protocol: string
    protected _headers: WebSocketHeader = {}

    protected _closeFrameReceived = false;
    protected _closeFrameSent = false;

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

    get readyState() {
        return this._state
    }

    set readyState(state: number) {
        this._state = state
    }

    connect() {
        this.doConnect()
    }

    send(text: string) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        try {
            this.doSend(text)
        } catch (error: any) {
            this.onerror({ error })
        }
    }

    close(code: number = 1000, reason: string = '', wasClean: boolean = false) {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            this.abortHandshake(new Error(msg));
            return;
        }
        if (code != 1000 && (code < 3000 || code > 4999)) {
            throw new Error(`The code must be either 1000, or between 3000 and 4999. ${code} is neither.`)
        }
        this.readyState = WebSocket.CLOSING
        try {
            this.doClose(code, reason, wasClean)
        } catch (error: any) {
            this.onerror({ error })
        }
    }

    onconnection(event: Event) {
        this._state == WebSocket.CONNECTING
        this.emit('connecting', event)
    }

    onconnect(event: Event) {
        if (this.readyState != WebSocket.OPEN) {
            this.readyState = WebSocket.OPEN
            this.emit(ClientEvent.open, event)
        } else {
            console.debug(`WebSocket Transport ${this.id} call onconnect but state is ${this.readyState}`)
        }
    }

    onmessage(event: MessageEvent) {
        this.emit(ClientEvent.message, event)
    }

    onerror(event: ErrorEvent) {
        this.emit(ClientEvent.error, event)
    }

    onclose(event: CloseEvent) {
        console.debug(`WebSocket Transport ${this.id} call onclose CloseEvent[code: ${event.code}, reason: ${event.reason}]`)
        if (this.readyState != WebSocket.CLOSED) {
            this.readyState = WebSocket.CLOSED
            this.emit(ClientEvent.close, event)
        } else {
            console.debug(`WebSocket Transport ${this.id} call onclose but state is ${this.readyState} CloseEvent[code: ${event.code}, reason: ${event.reason}]`)
        }
    }

    receiverClose(code: number, reason: string) {
        console.debug(`Netty Handler receeve close code: ${code} reason: ${reason}`)
        // if not set code then set code to 1000
        if (code === -1) { code = this._closeFrameSent ? 1005 : 1001 }
        this.readyState = WebSocket.CLOSING
        this._closeFrameReceived = true;
        this.doClose(code, reason)
    }

    abstract getId(): string
    abstract doConnect(): void
    abstract doSend(text: string): void
    abstract doClose(code: number, reason: string, wasClean?: boolean): void
    abstract abortHandshake(reason: Error): void
}
