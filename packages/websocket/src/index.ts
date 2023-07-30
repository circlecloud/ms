/// <reference types="@ccms/nashorn" />
/// <reference types="@javatypes/tomcat-websocket-api" />

import { WebSocketServer } from './server'
import { Server, ServerOptions } from './socket.io'

interface SocketIOStatic {
    /**
     * Default Server constructor
     */
    (): Server

    /**
     * Creates a new Server
     * @param srv The HTTP server that we're going to bind to
     * @param opts An optional parameters object
     */
    (srv: any, opts?: Partial<ServerOptions>): Server

    /**
     * Creates a new Server
     * @param port A port to bind to, as a number, or a string
     * @param An optional parameters object
     */
    (port: string | number, opts?: Partial<ServerOptions>): Server

    /**
     * Creates a new Server
     * @param A parameters object
     */
    (opts: Partial<ServerOptions>): Server

    /**
     * Backwards compatibility
     * @see io().listen()
     */
    listen?: SocketIOStatic
}

type SocketStatic = SocketIOStatic & { Instance?: symbol }

let singletonServer: Server

// @ts-ignore
let io: SocketStatic = function io(pipeline: any, options: Partial<JavaServerOptions>, singleton = true) {
    if (singleton) {
        if (!singletonServer) {
            singletonServer = new Server(WebSocketServer.attach(pipeline, options), options)
            process.emit('websocket.create', singletonServer)
            process.on('exit', () => {
                singletonServer.close()
            })
        }
        return singletonServer
    }
    return new Server(WebSocketServer.attach(pipeline, options), options)
}
io.Instance = Symbol("@ccms/websocket")
export default io
export * from './socket.io'
export * from './client'
export * from './server'
export * from './engine.io/transport'
export * as client from './socket.io-client'
