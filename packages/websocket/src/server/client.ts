import { EventEmitter } from 'events'
export abstract class WebSocketClient extends EventEmitter {
    public id: string
    public _socket: any
    abstract send(text: string, opts?: any, callback?: (err?: Error) => void)
    abstract close()
}
