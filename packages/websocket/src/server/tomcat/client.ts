import { WebSocketClient } from '../client'

export class TomcatClient extends WebSocketClient {
    private session: javax.websocket.Session

    constructor(session: javax.websocket.Session) {
        super()
        this.id = session.getId() + ''
        this.session = session
    }
    send(text: string, opts?: any, callback?: (err?: Error) => void) {
        Java.synchronized(() => {
            try {
                this.session.getBasicRemote().sendText(text)
                callback?.()
            } catch (error: any) {
                callback?.(error)
            }
        }, this.session)()
    }
    close() {
        this.session.close()
    }
}
