import { EventEmitter } from 'events'
import { Parser } from './parser'
import { Packet } from './packet'
import { Namespace, Server, Socket } from './index'
import { PacketTypes, SubPacketTypes } from './types'
import { ServerEvent } from './constants'
import { SocketId } from './adapter'
import { Transport } from '../transport'

const parser = new Parser()

export class Client extends EventEmitter {
    public readonly conn: Transport
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

    private checkIntervalTimer: NodeJS.Timeout
    private upgradeTimeoutTimer: NodeJS.Timeout
    private pingTimeoutTimer: NodeJS.Timeout
    private pingIntervalTimer: NodeJS.Timeout

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
        // ================== engine.io
        this.onOpen()
        // ================== Transport
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
        console.debug(`client ${this.id} connecting to namespace ${name} has: ${this.server._nsps.has(name)}`)
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
            this.sockets.set(socket.id, socket)
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
            this.sockets.delete(socket.id)
            this.nsps.delete(socket.nsp.name)
        } else {
            console.debug(`ignoring remove for ${socket.id}`,)
        }
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
    private close() {
        console.debug(`client ${this.id} close`)
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
    _packet(packet: Packet, opts = { preEncoded: false }) {
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
        if ("open" == this.conn.readyState) {
            this.conn.send(opts.preEncoded ? packet as unknown as string : parser.encode(packet))
        } else {
            console.debug(`ignoring write packet ${JSON.stringify(packet)} to client ${this.id} is already close!`)
        }
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
            process.nextTick(() => {
                const socket = this.nsps.get(packet.nsp)
                if (socket) {
                    socket._onpacket(packet)
                } else {
                    console.debug(`client ${this.id} no socket for namespace ${packet.nsp}.`)
                }
            })
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
        this.conn.readyState = "closing"
        // ======= engine.io
        this.onClose(reason)
        // cleanup connectTimeout
        if (this.connectTimeout) {
            clearTimeout(this.connectTimeout)
            this.connectTimeout = null
        }
        console.debug(`client ${this.id} close with reason ${reason}`)
        // ignore a potential subsequent `close` event
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
    }

    //================== engine.io
    onOpen() {
        this.conn.readyState = "open"
        this._packet({
            type: PacketTypes.OPEN,
            data: {
                sid: this.id,
                upgrades: [],
                pingInterval: this.server.options.pingInterval,
                pingTimeout: this.server.options.pingTimeout
            }
        })
        this.schedulePing()
    }

    onPacket(packet: Packet) {
        if ("open" === this.conn.readyState) {
            // export packet event
            // debug("packet")
            // this.emit("packet", packet)

            // Reset ping timeout on any packet, incoming data is a good sign of
            // other side's liveness
            this.resetPingTimeout(this.server.options.pingInterval + this.server.options.pingTimeout * 2)
            switch (packet.type) {
                case PacketTypes.PING:
                    this._packet({
                        type: PacketTypes.PONG,
                        data: packet.data
                    })
                    break
                case PacketTypes.PONG:
                    this.schedulePing()
                    break
                case PacketTypes.UPGRADE:
                    break
                case PacketTypes.MESSAGE:
                    this.ondecoded(packet)
                    break
                case PacketTypes.CLOSE:
                    this.onclose()
                    break
                default:
                    console.log(`client ${this.id} reciver unknow packet type: ${packet.type}`)
            }
        } else {
            console.debug(`packet received with closed client ${this.id}`)
        }
    }
    /**
     * Called upon transport considered closed.
     * Possible reasons: `ping timeout`, `client error`, `parse error`,
     * `transport error`, `server close`, `transport close`
     */
    onClose(reason, description?: string) {
        // if ("closed" !== this.conn.readyState) {
        clearTimeout(this.pingIntervalTimer)
        clearTimeout(this.pingTimeoutTimer)

        clearInterval(this.checkIntervalTimer)
        this.checkIntervalTimer = null
        clearTimeout(this.upgradeTimeoutTimer)
        //     this.emit("close", reason, description)
        // }
    }
    /**
     * Pings client every `this.pingInterval` and expects response
     * within `this.pingTimeout` or closes connection.
     *
     * @api private
     */
    schedulePing() {
        clearTimeout(this.pingIntervalTimer)
        this.pingIntervalTimer = setTimeout(() => {
            this.resetPingTimeout(this.server.options.pingTimeout)
            process.nextTick(() => this._packet({ type: PacketTypes.PING }))
        }, this.server.options.pingInterval)
    }

    /**
     * Resets ping timeout.
     *
     * @api private
     */
    resetPingTimeout(timeout) {
        clearTimeout(this.pingTimeoutTimer)
        this.pingTimeoutTimer = setTimeout(() => {
            if (this.conn.readyState === "closed") return
            this.onclose("ping timeout")
        }, timeout)
    }
}
