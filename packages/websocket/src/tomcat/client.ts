import { EventEmitter } from 'events'
import { InnerClient } from '../interfaces'

export class TomcatClient extends EventEmitter implements InnerClient {
    private _id: string
    private session: javax.websocket.Session

    server: any
    readyState: string
    remoteAddress: string
    upgraded: boolean
    request: any

    constructor(server: any, session: javax.websocket.Session) {
        super()
        this.server = server
        this.readyState = 'open'
        this.remoteAddress = session + ''
        this.upgraded = true
        this.request = {
            uri: () => `${session.getRequestURI()}`,
            headers: () => []
        }

        this.session = session
        this._id = session.getId() + ''
    }

    get id() {
        return this._id
    }
    send(text: string) {
        if (this.readyState == 'open') {
            Java.synchronized(() => this.session.getBasicRemote().sendText(text), this.session)()
        } else {
            console.debug(`send message ${text} to close client ${this._id}`)
        }
    }
    close() {
        if (this.readyState == 'open') {
            this.readyState = 'close'
            this.session.close()
        }
    }
}
