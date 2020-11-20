import { EventEmitter } from 'events'

export abstract class Transport extends EventEmitter {
    protected _id: string

    server: any
    readyState: 'opening' | 'open' | 'closing' | 'closed'
    remoteAddress: string
    upgraded: boolean
    request: any

    constructor(server: any) {
        super()
        this.server = server
        this.readyState = 'open'
        this.upgraded = true
    }
    get id() {
        return this._id
    }
    send(text: string) {
        if (this.readyState == 'open') {
            this.doSend(text)
        } else {
            console.debug(`send message ${text} to close client ${this._id}`)
        }
    }
    close() {
        if ("closed" === this.readyState || "closing" === this.readyState) { return }
        this.doClose()
        this.readyState = 'closed'
    }
    abstract doSend(text: string)
    abstract doClose()
}
