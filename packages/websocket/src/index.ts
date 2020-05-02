/// <reference types="@ccms/nashorn" />

import { Server, ServerOptions } from './socket-io'

interface SocketIOStatic {
	/**
	 * Default Server constructor
	 */
    (): Server;

	/**
	 * Creates a new Server
	 * @param srv The HTTP server that we're going to bind to
	 * @param opts An optional parameters object
	 */
    (srv: any, opts?: ServerOptions): Server;

	/**
	 * Creates a new Server
	 * @param port A port to bind to, as a number, or a string
	 * @param An optional parameters object
	 */
    (port: string | number, opts?: ServerOptions): Server;

	/**
	 * Creates a new Server
	 * @param A parameters object
	 */
    (opts: ServerOptions): Server;

	/**
	 * Backwards compatibility
	 * @see io().listen()
	 */
    listen?: SocketIOStatic;
}

type SocketStatic = SocketIOStatic & { Instance?: symbol }

// @ts-ignore
let io: SocketStatic = function (pipeline: any, options: ServerOptions) {
    return new Server(pipeline, options)
}
io.Instance = Symbol("@ccms/websocket")
export default io
export * from './socket-io'
