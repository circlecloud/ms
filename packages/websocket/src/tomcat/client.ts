import { EventEmitter } from 'events'
import { SocketIO } from '../socket-io/interfaces';

export class TomcatClient extends EventEmitter implements SocketIO.EngineSocket {
    private _id: string;
    private session: any

    server: any;
    readyState: string;
    remoteAddress: string;
    upgraded: boolean;
    request: any;
    transport: any;

    constructor(server: any, session: any) {
        super();
        this.server = server;
        this.readyState = 'open';
        this.remoteAddress = session + ''
        this.upgraded = true;
        this.request = {
            uri: () => {
                return session.getRequestURI() + ''
            },
            headers: () => {
                return []
            }
        };
        this.transport = null;

        this.session = session;
        this._id = session.getId();
    }

    get id() {
        return this._id;
    }
    send(text: string) {
        this.session.getBasicRemote().sendText(text)
    }
    close() {
        this.session.close();
    }
}
