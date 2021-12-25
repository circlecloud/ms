// import { Decoder, Encoder, Packet, PacketType } from "socket.io-parser"
import { Decoder, Encoder, Packet, PacketType } from "../socket.io-parser"
// import debugModule = require("debug")
import url = require("url")
// import type { IncomingMessage } from "http"
import type { Server } from "./index"
import type { Namespace } from "./namespace"
import type { EventsMap } from "./typed-events"
import type { Socket } from "./socket"
// import type { SocketId } from "socket.io-adapter"
import type { SocketId } from "../socket.io-adapter"
import type { Socket as EngineIOSocket } from '../engine.io/socket'

// const debug = debugModule("socket.io:client");

interface WriteOptions {
    compress?: boolean
    volatile?: boolean
    preEncoded?: boolean
    wsPreEncoded?: string
}

export class Client<
    ListenEvents extends EventsMap,
    EmitEvents extends EventsMap,
    ServerSideEvents extends EventsMap
    > {
    public readonly conn: EngineIOSocket
    /**
     * @private
     */
    readonly id: string
    private readonly server: Server<ListenEvents, EmitEvents, ServerSideEvents>
    private readonly encoder: Encoder
    private readonly decoder: any
    private sockets: Map<
        SocketId,
        Socket<ListenEvents, EmitEvents, ServerSideEvents>
    > = new Map()
    private nsps: Map<
        string,
        Socket<ListenEvents, EmitEvents, ServerSideEvents>
    > = new Map()
    private connectTimeout: NodeJS.Timeout

    /**
     * Client constructor.
     *
     * @param server instance
     * @param conn
     * @package
     */
    constructor(
        server: Server<ListenEvents, EmitEvents, ServerSideEvents>,
        conn: EngineIOSocket
    ) {
        this.server = server
        this.conn = conn
        this.encoder = server.encoder
        this.decoder = new server._parser.Decoder()
        this.id = conn.id
        this.setup()
    }

    /**
     * @return the reference to the request that originated the Engine.IO connection
     *
     * @public
     */
    public get request(): any/** IncomingMessage */ {
        return this.conn.request
    }

    /**
     * Sets up event listeners.
     *
     * @private
     */
    private setup() {
        console.debug(`socket.io client setup conn ${this.conn.id}`)
        this.onclose = this.onclose.bind(this)
        this.ondata = this.ondata.bind(this)
        this.onerror = this.onerror.bind(this)
        this.ondecoded = this.ondecoded.bind(this)

        // @ts-ignore
        this.decoder.on("decoded", this.ondecoded)
        this.conn.on("data", this.ondata)
        this.conn.on("error", this.onerror)
        this.conn.on("close", this.onclose)

        this.connectTimeout = setTimeout(() => {
            if (this.nsps.size === 0) {
                console.debug(`no namespace joined yet, close the client ${this.id}`)
                this.close()
            } else {
                console.debug(`the client ${this.id} has already joined a namespace, nothing to do`)
            }
        }, this.server._connectTimeout)
    }

    /**
     * Connects a client to a namespace.
     *
     * @param {String} name - the namespace
     * @param {Object} auth - the auth parameters
     * @private
     */
    private connect(name: string, auth: object = {}): void {
        if (this.server._nsps.has(name)) {
            console.debug(`socket.io client ${this.id} connecting to namespace ${name}`)
            return this.doConnect(name, auth)
        }

        this.server._checkNamespace(
            name,
            auth,
            (
                dynamicNspName:
                    | Namespace<ListenEvents, EmitEvents, ServerSideEvents>
                    | false
            ) => {
                if (dynamicNspName) {
                    console.debug(`dynamic namespace ${dynamicNspName} was created`)
                    this.doConnect(name, auth)
                } else {
                    console.debug(`creation of namespace ${name} was denied`)
                    this._packet({
                        type: PacketType.CONNECT_ERROR,
                        nsp: name,
                        data: {
                            message: "Invalid namespace",
                        },
                    })
                }
            }
        )
    }

    /**
     * Connects a client to a namespace.
     *
     * @param name - the namespace
     * @param {Object} auth - the auth parameters
     *
     * @private
     */
    private doConnect(name: string, auth: object): void {
        const nsp = this.server.of(name)

        // @java-patch multi thread need direct callback socket
        const socket = nsp._add(this, auth, (socket) => {
            this.sockets.set(socket.id, socket)
            this.nsps.set(nsp.name, socket)

            if (this.connectTimeout) {
                clearTimeout(this.connectTimeout)
                this.connectTimeout = undefined
            }
        })
    }

    /**
     * Disconnects from all namespaces and closes transport.
     *
     * @private
     */
    _disconnect(): void {
        for (const socket of this.sockets.values()) {
            socket.disconnect()
        }
        this.sockets.clear()
        this.close()
    }

    /**
     * Removes a socket. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket: Socket<ListenEvents, EmitEvents, ServerSideEvents>): void {
        if (this.sockets.has(socket.id)) {
            const nsp = this.sockets.get(socket.id)!.nsp.name
            this.sockets.delete(socket.id)
            this.nsps.delete(nsp)
        } else {
            console.debug("ignoring remove for", socket.id)
        }
        // @java-patch  disconnect client when no live socket
        process.nextTick(() => {
            if (this.sockets.size == 0) {
                this.onclose('no live socket')
            }
        })
    }

    /**
     * Closes the underlying connection.
     *
     * @private
     */
    private close(): void {
        console.debug(`client ${this.id} close - reason: forcing transport close`)
        if ("open" === this.conn.readyState) {
            console.debug("forcing transport close")
            this.conn.close()
            this.onclose("forced server close")
        }
    }

    /**
   * Writes a packet to the transport.
   *
   * @param {Object} packet object
   * @param {Object} opts
   * @private
   */
    _packet(packet: Packet | any[], opts: WriteOptions = {}): void {
        if (this.conn.readyState !== "open") {
            console.debug(`client ${this.id} ignoring packet write ${JSON.stringify(packet)}`)
            return
        }
        const encodedPackets = opts.preEncoded
            ? (packet as any[]) // previous versions of the adapter incorrectly used socket.packet() instead of writeToEngine()
            : this.encoder.encode(packet as Packet)
        for (const encodedPacket of encodedPackets) {
            this.writeToEngine(encodedPacket, opts)
        }
    }

    private writeToEngine(
        encodedPacket: String | Buffer,
        opts: WriteOptions
    ): void {
        if (opts.volatile && !this.conn.transport.writable) {
            console.debug(`client ${this.id} volatile packet is discarded since the transport is not currently writable`)
            return
        }
        this.conn.write(encodedPacket, opts)
    }

    /**
     * Called with incoming transport data.
     *
     * @private
     */
    private ondata(data): void {
        // try/catch is needed for protocol violations (GH-1880)
        try {
            this.decoder.add(data)
        } catch (error: any) {
            this.onerror(error)
        }
    }

    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    private ondecoded(packet: Packet): void {
        if (PacketType.CONNECT === packet.type) {
            if (this.conn.protocol === 3) {
                const parsed = url.parse(packet.nsp, true)
                this.connect(parsed.pathname!, parsed.query)
            } else {
                this.connect(packet.nsp, packet.data)
            }
        } else {
            const socket = this.nsps.get(packet.nsp)
            if (socket) {
                process.nextTick(function () {
                    socket._onpacket(packet)
                })
            } else {
                console.debug(`client ${this.id} no socket for namespace ${packet.nsp}.`)
            }
        }
    }

    /**
     * Handles an error.
     *
     * @param {Object} err object
     * @private
     */
    private onerror(err): void {
        for (const socket of this.sockets.values()) {
            socket._onerror(err)
        }
        this.conn.close()
    }

    /**
     * Called upon transport close.
     *
     * @param reason
     * @private
     */
    private onclose(reason: string): void {
        console.debug(`client ${this.id} close with reason ${reason}`)

        // ignore a potential subsequent `close` event
        this.destroy()

        // `nsps` and `sockets` are cleaned up seamlessly
        for (const socket of this.sockets.values()) {
            socket._onclose(reason)
        }
        this.sockets.clear()

        this.decoder.destroy() // clean up decoder
    }

    /**
     * Cleans up event listeners.
     * @private
     */
    private destroy(): void {
        this.conn.removeListener("data", this.ondata)
        this.conn.removeListener("error", this.onerror)
        this.conn.removeListener("close", this.onclose)
        // @ts-ignore
        this.decoder.removeListener("decoded", this.ondecoded)

        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout)
            this.connectTimeout = undefined
        }
    }
}
