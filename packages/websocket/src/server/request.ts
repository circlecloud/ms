import { WebSocketClient } from "./client"
interface HttpHeaders {
    [name: string]: string
}
interface Connection {
    remoteAddress: string
}
export class Request {
    public id: string
    public url: string
    public method: string
    public headers: HttpHeaders
    public connection: Connection
    public websocket: WebSocketClient

    public _query: any

    constructor(url: string, method = "GET", headers = {}) {
        this.url = url
        this.method = method
        this.headers = headers
    }
}
