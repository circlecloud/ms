import { EventEmitter } from 'events'
import { Parser } from './parser'
import { Packet } from './packet'
import { Namespace, Server, Socket } from './index'
import { PacketTypes, SubPacketTypes } from './types'
import { ServerEvent } from './constants'
import { SocketId } from './adapter'

const parser = new Parser()

export class Client extends EventEmitter implements Client {
    public readonly conn
    /**
     * @private
     */
    readonly id: string
    private readonly server: Server
    // private readonly encoder: Encoder
    private readonly decoder: any
    private sockets: Map<SocketId, Socket>
    private nsps: Map<string, Socket>
    private connectTimeout: NodeJS.Timeout

    constructor(server: Server, conn) {
        super()
        this.server = server
        this.conn = conn
        // this.encoder = server.encoder
        this.decoder = server._parser
        this.id = this.conn.id + ''
        this.setup()
        // =============================
        this.sockets = new Map()
        this.nsps = new Map()
        this.conn.on(ServerEvent.disconnect, (reason) => {
            this.onclose(reason)
        })
    }
    /**
     * @return the reference to the request that originated the Engine.IO connection
     *
     * @public
     */
    public get request(): any /**IncomingMessage */ {
        return this.conn.request
    }
    /**
     * Sets up event listeners.
     *
     * @private
     */
    private setup() {
        // @ts-ignore
        // this.decoder.on("decoded", this.ondecoded)
        this.conn.on("data", this.ondata.bind(this))
        this.conn.on("error", this.onerror.bind(this))
        this.conn.on("close", this.onclose.bind(this))
        console.debug(`setup client ${this.id}`)
        this.connectTimeout = setTimeout(() => {
            if (this.nsps.size === 0) {
                console.debug("no namespace joined yet, close the client")
                this.close()
            } else {
                console.debug("the client has already joined a namespace, nothing to do")
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
    private connect(name: string, auth: object = {}) {
        console.debug(`client ${this.id} connecting to namespace ${name} has: ${this.server._nsps[name]}`)
        if (this.server._nsps.has(name)) {
            return this.doConnect(name, auth)
        }

        this.server._checkNamespace(name, auth, (dynamicNsp: Namespace) => {
            if (dynamicNsp) {
                console.debug(`dynamic namespace ${dynamicNsp.name} was created`)
                this.doConnect(name, auth)
            } else {
                console.debug(`creation of namespace ${name} was denied`)
                this._packet({
                    type: PacketTypes.MESSAGE,
                    sub_type: SubPacketTypes.ERROR,
                    nsp: name,
                    data: {
                        message: "Invalid namespace"
                    }
                })
            }
        })
    }
    doConnect(name, auth: object) {
        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout)
            this.connectTimeout = null
        }
        const nsp = this.server.of(name)

        const socket = nsp._add(this, auth, () => {
            console.debug(`doConnect set sockets ${socket.id}`)
            this.sockets.set(socket.id, socket)
            console.debug(`doConnect set nsps ${nsp.name}`)
            this.nsps.set(nsp.name, socket)
        })
    }
    /**
     * Disconnects from all namespaces and closes transport.
     *
     * @private
     */
    _disconnect() {
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
    _remove(socket: Socket) {
        if (this.sockets.has(socket.id)) {
            const nsp = this.sockets.get(socket.id).nsp.name
            this.sockets.delete(socket.id)
            this.nsps.delete(nsp)
        } else {
            console.debug(`ignoring remove for ${socket.id}`,)
        }
    }
    /**
     * Closes the underlying connection.
     *
     * @private
     */
    private close() {
        if ("open" == this.conn.readyState) {
            console.debug("forcing transport close")
            this.onclose("forced server close")
            this.conn.close()
        }
    }
    /**
     * Writes a packet to the transport.
     *
     * @param {Object} packet object
     * @param {Object} opts
     * @private
     */
    _packet(packet, opts = { preEncoded: false }) {
        // opts = opts || {}
        // const self = this

        // // this writes to the actual connection
        // function writeToEngine(encodedPackets) {
        //     if (opts.volatile && !self.conn.transport.writable) return
        //     for (let i = 0; i < encodedPackets.length; i++) {
        //         self.conn.write(encodedPackets[i], { compress: opts.compress })
        //     }
        // }

        // if ("open" == this.conn.readyState) {
        //     debug("writing packet %j", packet)
        //     if (!opts.preEncoded) {
        //         // not broadcasting, need to encode
        //         writeToEngine(this.encoder.encode(packet)) // encode, then write results to engine
        //     } else {
        //         // a broadcast pre-encodes a packet
        //         writeToEngine(packet)
        //     }
        // } else {
        //     debug("ignoring packet write %j", packet)
        // }
        this.conn.send(opts.preEncoded ? packet as unknown as string : parser.encode(packet))
    }
    /**
     * Called with incoming transport data.
     *
     * @private
     */
    private ondata(data) {
        // try/catch is needed for protocol violations (GH-1880)
        try {
            this.decoder.add(data)
        } catch (e) {
            this.onerror(e)
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet: Packet) {
        if (SubPacketTypes.CONNECT == packet.sub_type) {
            this.connect(packet.nsp, packet.data)
        } else {
            const socket = this.nsps.get(packet.nsp)
            if (socket) {
                process.nextTick(function () {
                    socket._onpacket(packet)
                })
            } else {
                console.debug(`client ${this.id} no socket for namespace ${packet.nsp} avalibe socket: `)
                this.nsps.forEach((v, k) => console.debug(`- ${k} => ${v}`))
            }
        }
    }
    /**
     * Handles an error.
     *
     * @param {Object} err object
     * @private
     */
    private onerror(err) {
        for (const socket of this.sockets.values()) {
            socket._onerror(err)
        }
        this.conn.close()
    }
    onclose(reason?: string) {
        console.debug(`client ${this.id} close with reason ${reason}`)
        // ignore a potential subsequent `close` event
        this.destroy()
        // `nsps` and `sockets` are cleaned up seamlessly
        for (const socket of this.sockets.values()) {
            socket._onclose(reason)
        }
        this.sockets.clear()
        // this.decoder.destroy(); // clean up decoder
    }

    destroy() {
        // this.conn.removeListener('data', this.ondata);
        // this.conn.removeListener('error', this.onerror);
        // this.conn.removeListener('close', this.onclose);
        // this.decoder.removeListener('decoded', this.ondecoded);
    };
}
