import { EventEmitter } from 'events'
import parser_v4 from "../engine.io-parser"
import type { WebSocketClient } from '../server/client'
/**
 * Noop function.
 *
 * @api private
 */

function noop() { }

export abstract class Transport extends EventEmitter {
    public sid: string
    public req /**http.IncomingMessage */
    public socket: WebSocketClient
    public writable: boolean
    public readyState: string
    public discarded: boolean
    public protocol: Number
    public parser: any
    public perMessageDeflate: any
    public supportsBinary: boolean = false

    /**
     * Transport constructor.
     *
     * @param {http.IncomingMessage} request
     * @api public
     */
    constructor(req) {
        super()
        this.readyState = "open"
        this.discarded = false
        this.protocol = req._query.EIO === "4" ? 4 : 3 // 3rd revision by default
        this.parser = parser_v4//= this.protocol === 4 ? parser_v4 : parser_v3
    }

    /**
     * Flags the transport as discarded.
     *
     * @api private
     */
    discard() {
        this.discarded = true
    }

    /**
     * Called with an incoming HTTP request.
     *
     * @param {http.IncomingMessage} request
     * @api private
     */
    onRequest(req) {
        console.debug(`engine.io transport ${this.socket.id} setting request`, JSON.stringify(req))
        this.req = req
    }

    /**
     * Closes the transport.
     *
     * @api private
     */
    close(fn?) {
        if ("closed" === this.readyState || "closing" === this.readyState) return

        this.readyState = "closing"
        this.doClose(fn || noop)
    }

    /**
     * Called with a transport error.
     *
     * @param {String} message error
     * @param {Object} error description
     * @api private
     */
    onError(msg: string, desc?: string) {
        if (this.listeners("error").length) {
            const err: any = new Error(msg)
            err.type = "TransportError"
            err.description = desc
            this.emit("error", err)
        } else {
            console.debug(`ignored transport error ${msg} (${desc})`)
        }
    }

    /**
     * Called with parsed out a packets from the data stream.
     *
     * @param {Object} packet
     * @api private
     */
    onPacket(packet) {
        this.emit("packet", packet)
    }

    /**
     * Called with the encoded packet data.
     *
     * @param {String} data
     * @api private
     */
    onData(data) {
        this.onPacket(this.parser.decodePacket(data))
    }

    /**
     * Called upon transport close.
     *
     * @api private
     */
    onClose() {
        this.readyState = "closed"
        this.emit("close")
    }
    abstract get supportsFraming()
    abstract get name()
    abstract send(...args: any[])
    abstract doClose(d: Function)
}
