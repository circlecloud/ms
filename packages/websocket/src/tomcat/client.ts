import { Transport } from '../transport'

export class TomcatClient extends Transport {
    private session: javax.websocket.Session

    constructor(server: any, session: javax.websocket.Session) {
        super(server)
        this.remoteAddress = session + ''
        this.request = {
            uri: () => `${session.getRequestURI()}`,
            headers: () => []
        }
        this._id = session.getId() + ''
        this.session = session
    }
    doSend(text: string) {
        Java.synchronized(() => this.session.getBasicRemote().sendText(text), this.session)()
    }
    doClose() {
        this.session.close()
    }
}
