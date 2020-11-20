import { EventEmitter } from 'events'

import { ServerEvent } from './constants'
import { Namespace } from './namespace'
import { Client } from './client'
import { Parser } from './parser'
import { PacketTypes, SubPacketTypes } from './types'
import { Packet } from './packet'
import { Socket } from './socket'
import { Adapter } from './adapter'
import { Transport } from '../transport'
import { ParentNamespace } from './parent-namespace'

interface EngineOptions {
    /**
     * how many ms without a pong packet to consider the connection closed
     * @default 5000
     */
    pingTimeout: number
    /**
     * how many ms before sending a new ping packet
     * @default 25000
     */
    pingInterval: number
    /**
     * how many ms before an uncompleted transport upgrade is cancelled
     * @default 10000
     */
    upgradeTimeout: number
    /**
     * how many bytes or characters a message can be, before closing the session (to avoid DoS).
     * @default 1e5 (100 KB)
     */
    maxHttpBufferSize: number
    /**
     * A function that receives a given handshake or upgrade request as its first parameter,
     * and can decide whether to continue or not. The second argument is a function that needs
     * to be called with the decided information: fn(err, success), where success is a boolean
     * value where false means that the request is rejected, and err is an error code.
     */
    // allowRequest: (
    //     req: http.IncomingMessage,
    //     fn: (err: string | null | undefined, success: boolean) => void
    // ) => void
    /**
     * the low-level transports that are enabled
     * @default ["polling", "websocket"]
     */
    // transports: Transport[]
    /**
     * whether to allow transport upgrades
     * @default true
     */
    allowUpgrades: boolean
    /**
     * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable.
     * @default false
     */
    perMessageDeflate: boolean | object
    /**
     * parameters of the http compression for the polling transports (see zlib api docs). Set to false to disable.
     * @default true
     */
    httpCompression: boolean | object
    /**
     * what WebSocket server implementation to use. Specified module must
     * conform to the ws interface (see ws module api docs). Default value is ws.
     * An alternative c++ addon is also available by installing uws module.
     */
    wsEngine: string
    /**
     * an optional packet which will be concatenated to the handshake packet emitted by Engine.IO.
     */
    initialPacket: any
    /**
     * configuration of the cookie that contains the client sid to send as part of handshake response headers. This cookie
     * might be used for sticky-session. Defaults to not sending any cookie.
     * @default false
     */
    // cookie: CookieSerializeOptions | boolean
    /**
     * the options that will be forwarded to the cors module
     */
    // cors: CorsOptions
}

interface AttachOptions {
    /**
     * name of the path to capture
     * @default "/engine.io"
     */
    path: string
    /**
     * destroy unhandled upgrade requests
     * @default true
     */
    destroyUpgrade: boolean
    /**
     * milliseconds after which unhandled requests are ended
     * @default 1000
     */
    destroyUpgradeTimeout: number
}

interface EngineAttachOptions extends EngineOptions, AttachOptions { }

interface ServerOptions extends EngineAttachOptions {
    event?: EventEmitter
    root?: string
    /**
     * name of the path to capture
     * @default "/socket.io"
     */
    path: string
    /**
     * whether to serve the client files
     * @default true
     */
    serveClient: boolean
    /**
     * the adapter to use
     * @default the in-memory adapter (https://github.com/socketio/socket.io-adapter)
     */
    adapter: any
    /**
     * the parser to use
     * @default the default parser (https://github.com/socketio/socket.io-parser)
     */
    parser: any
    /**
     * how many ms before a client without namespace is closed
     * @default 45000
     */
    connectTimeout: number
}

interface WebSocketServer extends EventEmitter {
    close(): void
}

class Server {
    public readonly sockets: Namespace

    /**
     * @private
     */
    _parser: Parser
    private readonly encoder

    /**
     * @private
     */
    _nsps: Map<string, Namespace>
    private parentNsps: Map<
        | string
        | RegExp
        | ((
            name: string,
            query: object,
            fn: (err: Error, success: boolean) => void
        ) => void),
        ParentNamespace
    > = new Map();
    private _adapter: Adapter
    // private _serveClient: boolean;
    private eio
    private engine: { ws: any }
    private _path: string
    private clientPathRegex: RegExp
    /**
     * @private
     */
    _connectTimeout: number

    options: Partial<ServerOptions>
    private websocketServer: WebSocketServer
    private allClients: Map<string, Client>

    constructor(instance: any, options: Partial<ServerOptions>) {
        if (!instance) { throw new Error('instance can\'t be undefiend!') }
        this.options = Object.assign({
            event: new EventEmitter(),
            path: '/socket.io',
            root: root + '/wwwroot',
            serveClient: false,
            connectTimeout: 45000,
            wsEngine: process.env.EIO_WS_ENGINE || "ws",
            pingTimeout: 5000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 1e6,
            transports: 'websocket',
            allowUpgrades: true,
            httpCompression: {
                threshold: 1024
            },
            cors: false
        }, options)
        this.initServerConfig()
        this.sockets = this.of('/')
        this.selectServerImpl(instance)
        this.initServer()
    }
    /**
     * Sets/gets whether client code is being served.
     *
     * @param {Boolean} v - whether to serve client code
     * @return {Server|Boolean} self when setting or value when getting
     * @public
     */
    public serveClient(v: boolean): Server
    public serveClient(): boolean
    public serveClient(v?: boolean): Server | boolean {
        throw new Error("Method not implemented.")
    }
    /**
     * Executes the middleware for an incoming namespace not already created on the server.
     *
     * @param {String} name - name of incoming namespace
     * @param {Object} auth - the auth parameters
     * @param {Function} fn - callback
     *
     * @private
     */
    _checkNamespace(
        name: string,
        auth: object,
        fn: (nsp: Namespace) => void
    ) {
        // if (this.parentNsps.size === 0) return fn(false)

        // const keysIterator = this.parentNsps.keys()

        // const run = () => {
        //     let nextFn = keysIterator.next()
        //     if (nextFn.done) {
        //         return fn(false)
        //     }
        //     nextFn.value(name, auth, (err, allow) => {
        //         if (err || !allow) {
        //             run()
        //         } else {
        //             fn(this.parentNsps.get(nextFn.value).createChild(name))
        //         }
        //     })
        // }
        fn(undefined)
    }
    /**
     * Sets the client serving path.
     *
     * @param {String} v pathname
     * @return {Server|String} self when setting or value when getting
     * @public
     */
    path(): string
    path(v: string): Server
    path(v?: any): string | Server {
        if (!arguments.length) return this._path

        this._path = v.replace(/\/$/, "")

        const escapedPath = this._path.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        this.clientPathRegex = new RegExp(
            "^" +
            escapedPath +
            "/socket\\.io(\\.min|\\.msgpack\\.min)?\\.js(\\.map)?$"
        )
        return this
    }
    /**
     * Set the delay after which a client without namespace is closed
     * @param v
     * @public
     */
    public connectTimeout(v: number): Server
    public connectTimeout(): number
    public connectTimeout(v?: number): Server | number {
        if (v === undefined) return this._connectTimeout
        this._connectTimeout = v
        return this
    }
    /**
     * Sets the adapter for rooms.
     *
     * @param {Adapter} v pathname
     * @return {Server|Adapter} self when setting or value when getting
     * @public
     */
    public adapter(): any
    public adapter(v: any)
    public adapter(v?): Server | any {
        if (!arguments.length) return this._adapter
        this._adapter = v
        for (const nsp of this._nsps.values()) {
            nsp._initAdapter()
        }
        return this
    }
    // /**
    //  * Attaches socket.io to a server or port.
    //  *
    //  * @param {http.Server|Number} srv - server or port
    //  * @param {Object} opts - options passed to engine.io
    //  * @return {Server} self
    //  * @public
    //  */
    // public listen(srv: http.Server, opts?: Partial<ServerOptions>): Server
    // public listen(srv: number, opts?: Partial<ServerOptions>): Server
    // public listen(srv: any, opts: Partial<ServerOptions> = {}): Server {
    //     return this.attach(srv, opts)
    // }

    // /**
    //  * Attaches socket.io to a server or port.
    //  *
    //  * @param {http.Server|Number} srv - server or port
    //  * @param {Object} opts - options passed to engine.io
    //  * @return {Server} self
    //  * @public
    //  */
    // public attach(srv: http.Server, opts?: Partial<ServerOptions>): Server
    // public attach(port: number, opts?: Partial<ServerOptions>): Server
    // public attach(srv: any, opts: Partial<ServerOptions> = {}): Server {
    //     if ("function" == typeof srv) {
    //         const msg =
    //             "You are trying to attach socket.io to an express " +
    //             "request handler function. Please pass a http.Server instance."
    //         throw new Error(msg)
    //     }

    //     // handle a port as a string
    //     if (Number(srv) == srv) {
    //         srv = Number(srv)
    //     }

    //     if ("number" == typeof srv) {
    //         debug("creating http server and binding to %d", srv)
    //         const port = srv
    //         srv = http.createServer((req, res) => {
    //             res.writeHead(404)
    //             res.end()
    //         })
    //         srv.listen(port)
    //     }

    //     // set engine.io path to `/socket.io`
    //     opts.path = opts.path || this._path

    //     this.initEngine(srv, opts)

    //     return this
    // }
    // /**
    //  * Initialize engine
    //  *
    //  * @param srv - the server to attach to
    //  * @param opts - options passed to engine.io
    //  * @private
    //  */
    // private initEngine(srv: http.Server, opts: Partial<EngineAttachOptions>) {
    //     // initialize engine
    //     debug("creating engine.io instance with opts %j", opts)
    //     this.eio = engine.attach(srv, opts)

    //     // attach static file serving
    //     if (this._serveClient) this.attachServe(srv)

    //     // Export http server
    //     this.httpServer = srv

    //     // bind to engine events
    //     this.bind(this.eio)
    // }

    // /**
    //  * Attaches the static file serving.
    //  *
    //  * @param {Function|http.Server} srv http server
    //  * @private
    //  */
    // private attachServe(srv) {
    //     debug("attaching client serving req handler")

    //     const evs = srv.listeners("request").slice(0)
    //     srv.removeAllListeners("request")
    //     srv.on("request", (req, res) => {
    //         if (this.clientPathRegex.test(req.url)) {
    //             this.serve(req, res)
    //         } else {
    //             for (let i = 0; i < evs.length; i++) {
    //                 evs[i].call(srv, req, res)
    //             }
    //         }
    //     })
    // }
    // /**
    //  * Handles a request serving of client source and map
    //  *
    //  * @param {http.IncomingMessage} req
    //  * @param {http.ServerResponse} res
    //  * @private
    //  */
    // private serve(req: http.IncomingMessage, res: http.ServerResponse) {
    //     const filename = req.url.replace(this._path, "")
    //     const isMap = dotMapRegex.test(filename)
    //     const type = isMap ? "map" : "source"

    //     // Per the standard, ETags must be quoted:
    //     // https://tools.ietf.org/html/rfc7232#section-2.3
    //     const expectedEtag = '"' + clientVersion + '"'

    //     const etag = req.headers["if-none-match"]
    //     if (etag) {
    //         if (expectedEtag == etag) {
    //             debug("serve client %s 304", type)
    //             res.writeHead(304)
    //             res.end()
    //             return
    //         }
    //     }

    //     debug("serve client %s", type)

    //     res.setHeader("Cache-Control", "public, max-age=0")
    //     res.setHeader(
    //         "Content-Type",
    //         "application/" + (isMap ? "json" : "javascript")
    //     )
    //     res.setHeader("ETag", expectedEtag)

    //     if (!isMap) {
    //         res.setHeader("X-SourceMap", filename.substring(1) + ".map")
    //     }
    //     Server.sendFile(filename, req, res)
    // }

    // /**
    //  * @param filename
    //  * @param req
    //  * @param res
    //  * @private
    //  */
    // private static sendFile(
    //     filename: string,
    //     req: http.IncomingMessage,
    //     res: http.ServerResponse
    // ) {
    //     const readStream = createReadStream(
    //         path.join(__dirname, "../client-dist/", filename)
    //     )
    //     const encoding = accepts(req).encodings(["br", "gzip", "deflate"])

    //     const onError = err => {
    //         if (err) {
    //             res.end()
    //         }
    //     }

    //     switch (encoding) {
    //         case "br":
    //             res.writeHead(200, { "content-encoding": "br" })
    //             readStream.pipe(createBrotliCompress()).pipe(res)
    //             pipeline(readStream, createBrotliCompress(), res, onError)
    //             break
    //         case "gzip":
    //             res.writeHead(200, { "content-encoding": "gzip" })
    //             pipeline(readStream, createGzip(), res, onError)
    //             break
    //         case "deflate":
    //             res.writeHead(200, { "content-encoding": "deflate" })
    //             pipeline(readStream, createDeflate(), res, onError)
    //             break
    //         default:
    //             res.writeHead(200)
    //             pipeline(readStream, res, onError)
    //     }
    // }

    // /**
    //  * Binds socket.io to an engine.io instance.
    //  *
    //  * @param {engine.Server} engine engine.io (or compatible) server
    //  * @return {Server} self
    //  * @public
    //  */
    // public bind(engine): Server {
    //     this.engine = engine
    //     this.engine.on("connection", this.onconnection.bind(this))
    //     return this
    // }
    /**
     * Called with each incoming transport connection.
     *
     * @param {engine.Socket} conn
     * @return {Server} self
     * @private
     */
    private onconnection(conn): Server {
        console.debug(`incoming connection with id ${conn.id}`)
        let client = new Client(this, conn)
        this.allClients.set(conn.id, client)
        return this
    }
    // of(nsp: string): Namespace {
    //     if (!this._nsps.has(nsp)) {
    //         console.debug(`create Namespace ${nsp}`)
    //         this._nsps.set(nsp, new Namespace(this, nsp))
    //     }
    //     return this._nsps.get(nsp)
    // }
    /**
     * Looks up a namespace.
     *
     * @param {String|RegExp|Function} name nsp name
     * @param {Function} [fn] optional, nsp `connection` ev handler
     * @public
     */
    public of(
        name:
            | string
            | RegExp
            | ((
                name: string,
                query: object,
                fn: (err: Error, success: boolean) => void
            ) => void),
        fn?: (socket: Socket) => void
    ) {
        if (typeof name === "function" || name instanceof RegExp) {
            const parentNsp = new ParentNamespace(this)
            console.debug(`initializing parent namespace ${parentNsp.name}`)
            if (typeof name === "function") {
                this.parentNsps.set(name, parentNsp)
            } else {
                this.parentNsps.set(
                    (nsp, conn, next) => next(null, (name as RegExp).test(nsp)),
                    parentNsp
                )
            }
            if (fn) {
                // @ts-ignore
                parentNsp.on("connect", fn)
            }
            return parentNsp
        }
        if (String(name)[0] !== "/") name = "/" + name
        let nsp = this._nsps.get(name)
        if (!nsp) {
            console.debug(`initializing namespace ${name}`)
            nsp = new Namespace(this, name)
            this._nsps.set(name, nsp)
        }
        if (fn) nsp.on("connect", fn)
        return nsp
    }
    close(fn?: () => void): void {
        this.clients.length
        for (const client of this.allClients.values()) {
            client._disconnect()
        }

        // this.engine.close()
        this.websocketServer.close()

        // if (this.httpServer) {
        //     this.httpServer.close(fn)
        // } else {
        fn && fn()
        // }
    }
    on(event: "connection", listener: (socket: Socket) => void): Namespace
    on(event: "connect", listener: (socket: Socket) => void): Namespace
    on(event: string, listener: Function): Namespace
    on(event: any, listener: any): Namespace {
        return this.sockets.on(event, listener)
    }
    to(room: string): Namespace {
        return this.sockets.to(room)
    }
    in(room: string): Namespace {
        return this.sockets.in(room)
    }
    use(fn: (socket: Socket, fn: (err?: any) => void) => void): Namespace {
        return this.sockets.use(fn)
    }
    emit(event: string, ...args: any[]): Namespace {
        // @ts-ignore
        return this.sockets.emit(event, ...args)
    }
    send(...args: any[]): Namespace {
        return this.sockets.send(...args)
    }
    write(...args: any[]): Namespace {
        return this.sockets.write(...args)
    }
    clients(...args: any[]): Namespace {
        return this.sockets.clients(args[0])
    }
    compress(...args: any[]): Namespace {
        return this.sockets.compress(args[0])
    }
    // ===============================
    private initServerConfig() {
        this.allClients = new Map()
        this._nsps = new Map()
        this.connectTimeout(this.options.connectTimeout || 45000)
        this._parser = this.options.parser || new Parser()
        this.adapter(this.options.adapter || Adapter)
    }
    private selectServerImpl(instance: any) {
        let WebSocketServerImpl = undefined
        if (instance.class.name.startsWith('io.netty.channel')) {
            WebSocketServerImpl = require("../netty").NettyWebSocketServer
        } else {
            WebSocketServerImpl = require("../tomcat").TomcatWebSocketServer
        }
        this.websocketServer = new WebSocketServerImpl(instance, this.options)
    }
    private initServer() {
        this.websocketServer.on(ServerEvent.connect, (transport: Transport) => {
            this.onconnection(transport)
        })
        this.websocketServer.on(ServerEvent.message, (transport: Transport, text) => {
            if (this.allClients.has(transport.id)) {
                let client = this.allClients.get(transport.id)
                client.onPacket(this._parser.decode(text))
            } else {
                console.error(`unknow transport ${transport.id} reciver message ${text}`)
            }
        })
        this.websocketServer.on(ServerEvent.disconnect, (transport: Transport, reason) => {
            if (this.allClients.has(transport.id)) {
                this.allClients.get(transport.id).onclose(reason)
                this.allClients.delete(transport.id)
            } else {
                console.error(`unknow transport ${transport?.id} disconnect cause ${reason}`)
            }
        })
        this.websocketServer.on(ServerEvent.error, (transport: Transport, cause) => {
            if (this.allClients.has(transport?.id)) {
                let client = this.allClients.get(transport?.id)
                if (client.listeners(ServerEvent.error).length) {
                    client.emit(ServerEvent.error, cause)
                } else {
                    console.error(`client ${client.id} cause error: ${cause}`)
                    console.ex(cause)
                }
            } else {
                console.error(`unknow transport ${transport?.id} cause error: ${cause}`)
                console.ex(cause)
            }
        })
    }
}

/**
 * Expose main namespace (/).
 */

const emitterMethods = Object.keys(EventEmitter.prototype).filter(function (
    key
) {
    return typeof EventEmitter.prototype[key] === "function"
})

emitterMethods.forEach(function (fn) {
    Server.prototype[fn] = function () {
        return this.sockets[fn].apply(this.sockets, arguments)
    }
})

export {
    Server,
    Socket,
    Client,
    Namespace,
    ServerOptions
}
