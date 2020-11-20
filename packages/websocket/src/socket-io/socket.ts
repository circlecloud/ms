import { EventEmitter } from 'events'

import { Packet } from './packet'
import { PacketTypes, SubPacketTypes } from './types'
import { Client } from './client'
import { Namespace } from './namespace'
import * as querystring from 'querystring'
import { ServerEvent } from './constants'
import { Adapter, BroadcastFlags, Room, SocketId } from './adapter'
import { Server } from 'index'

export const RESERVED_EVENTS = new Set([
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    "newListener",
    "removeListener"
])

/**
 * The handshake details
 */
export interface Handshake {
    /**
     * The headers sent as part of the handshake
     */
    headers: object

    /**
     * The date of creation (as string)
     */
    time: string

    /**
     * The ip of the client
     */
    address: string

    /**
     * Whether the connection is cross-domain
     */
    xdomain: boolean

    /**
     * Whether the connection is secure
     */
    secure: boolean

    /**
     * The date of creation (as unix timestamp)
     */
    issued: number

    /**
     * The request URL string
     */
    url: string

    /**
     * The query object
     */
    query: any

    /**
     * The auth object
     */
    auth: any
}
export class Socket extends EventEmitter {
    nsp: Namespace

    public readonly id: SocketId
    public readonly handshake: Handshake

    public connected: boolean
    public disconnected: boolean

    private readonly server: Server
    private readonly adapter: Adapter

    client: Client
    private acks: Map<number, () => void>

    fns: any[]
    private flags: BroadcastFlags = {};
    private _rooms: Set<Room> = new Set();
    private _anyListeners: Array<(...args: any[]) => void>

    constructor(nsp: Namespace, client: Client, auth = {}) {
        super()
        this.nsp = nsp
        this.server = nsp.server
        this.adapter = this.nsp.adapter
        this.id = nsp.name !== '/' ? nsp.name + '#' + client.id : client.id
        this.client = client
        this.acks = new Map()
        this.connected = true
        this.disconnected = false
        this.handshake = this.buildHandshake(auth)

        this.fns = []
        this.flags = {}
        this._rooms = new Set()
    }
    emit(event: string, ...args: any[]): boolean {
        let packet: Packet = {
            type: PacketTypes.MESSAGE,
            sub_type: (this.flags.binary !== undefined ? this.flags.binary : this.hasBin(args)) ? SubPacketTypes.BINARY_EVENT : SubPacketTypes.EVENT,
            name: event,
            data: args
        }

        // access last argument to see if it's an ACK callback
        if (typeof args[args.length - 1] === "function") {
            if (this._rooms.size || this.flags.broadcast) {
                throw new Error("Callbacks are not supported when broadcasting")
            }

            // console.debug("emitting packet with ack id %d", this.nsp._ids)
            this.acks.set(this.nsp._ids, args.pop())
            packet.id = this.nsp._ids++
        }

        const rooms = new Set(this._rooms)
        const flags = Object.assign({}, this.flags)

        // reset flags
        this._rooms.clear()
        this.flags = {}

        if (rooms.size || flags.broadcast) {
            this.adapter.broadcast(packet, {
                except: new Set([this.id]),
                rooms: rooms,
                flags: flags
            })
        } else {
            // dispatch packet
            this.packet(packet, flags)
        }
        return true
    }
    to(name: Room): Socket {
        this._rooms.add(name)
        return this
    }
    in(room: string): Socket {
        return this.to(room)
    }
    use(fn: (packet: Packet, next: (err?: any) => void) => void): Socket {
        throw new Error("Method not implemented.")
    }
    send(...args: any[]): Socket {
        this.emit("message", ...args)
        return this
    }
    write(...args: any[]): Socket {
        return this.send(...args)
    }
    public join(rooms: Room | Array<Room>): Promise<void> | void {
        console.debug(`join room ${rooms}`)

        return this.adapter.addAll(
            this.id,
            new Set(Array.isArray(rooms) ? rooms : [rooms])
        )
    }
    /**
     * Leaves a room.
     *
     * @param {String} room
     * @return a Promise or nothing, depending on the adapter
     * @public
     */
    public leave(room: string): Promise<void> | void {
        console.debug(`leave room ${room}`)

        return this.adapter.del(this.id, room)
    }

    /**
     * Leave all rooms.
     *
     * @private
     */
    private leaveAll(): void {
        this.adapter.delAll(this.id)
    }

    /**
      * Called by `Namespace` upon successful
      * middleware execution (ie: authorization).
      * Socket is added to namespace array before
      * call to join, so adapters can access it.
      *
      * @private
      */
    _onconnect(): void {
        console.debug(`socket ${this.id} connected - writing packet`)
        this.join(this.id)
        this.packet({ type: PacketTypes.MESSAGE, sub_type: SubPacketTypes.CONNECT, data: { sid: this.id } })
    }
    _onpacket(packet: Packet) {
        switch (packet.sub_type) {
            // 2
            case SubPacketTypes.EVENT:
                this.onevent(packet)
                break
            // 5
            case SubPacketTypes.BINARY_EVENT:
                this.onevent(packet)
                break
            // 3
            case SubPacketTypes.ACK:
                this.onack(packet)
                break
            // 6
            case SubPacketTypes.BINARY_ACK:
                this.onack(packet)
                break
            // 1
            case SubPacketTypes.DISCONNECT:
                this.ondisconnect()
                break
            // 4
            case SubPacketTypes.ERROR:
                this._onerror(new Error(packet.data))
        }
    }
    onevent(packet: Packet) {
        if (null != packet.id) {
            console.trace(`attaching ack ${packet.id} callback to client ${this.id} event`)
            this.dispatch(packet, this.ack(packet.id))
        } else {
            this.dispatch(packet)
        }
    }
    ack(id: number) {
        let sent = false
        return (...args: any[]) => {
            if (sent) return
            this.packet({
                id: id,
                type: PacketTypes.MESSAGE,
                sub_type: this.hasBin(args) ? SubPacketTypes.BINARY_ACK : SubPacketTypes.ACK,
                data: args
            })
            sent = true
        }
    }
    onack(packet: Packet) {
        let ack = this.acks.get(packet.id)
        if ('function' == typeof ack) {
            console.trace(`calling ack ${packet.id} on socket ${this.id} with ${packet.data}`)
            ack.apply(this, packet.data)
            this.acks.delete(packet.id)
        } else {
            console.trace(`bad ack ${packet.id} on socket ${this.id}`)
        }
    }
    /**
     * Called upon client disconnect packet.
     *
     * @private
     */
    private ondisconnect(): void {
        console.debug(`socket ${this.id} got disconnect packet`)
        this._onclose("client namespace disconnect")
    }

    /**
     * Handles a client error.
     *
     * @private
     */
    _onerror(err): void {
        if (this.listeners("error").length) {
            super.emit("error", err)
        } else {
            console.error(`Missing error handler on 'socket(${this.id})'.`)
            console.error(err.stack)
        }
    }

    /**
     * Called upon closing. Called by `Client`.
     *
     * @param {String} reason
     * @throw {Error} optional error object
     *
     * @private
     */
    _onclose(reason: string) {
        if (!this.connected) return this
        console.debug(`closing socket ${this.id} - reason: ${reason} connected: ${this.connected}`)
        super.emit(ServerEvent.disconnecting, reason)
        this.leaveAll()
        this.nsp._remove(this)
        this.client._remove(this)
        this.connected = false
        this.disconnected = true
        super.emit(ServerEvent.disconnect, reason)
    }

    /**
     * Produces an `error` packet.
     *
     * @param {Object} err - error object
     *
     * @private
     */
    _error(err) {
        this.packet({ type: PacketTypes.MESSAGE, sub_type: SubPacketTypes.ERROR, data: err })
    }
    disconnect(close?: boolean): Socket {
        if (!this.connected) return this
        if (close) {
            this.client._disconnect()
        } else {
            this.packet({ type: PacketTypes.MESSAGE, sub_type: SubPacketTypes.DISCONNECT })
            this._onclose('server namespace disconnect')
        }
        return this
    }

    compress(compress: boolean): Socket {
        throw new Error("Method not implemented.")
    }

    /**
    * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
    * receive messages (because of network slowness or other issues, or because they’re connected through long polling
    * and is in the middle of a request-response cycle).
    *
    * @return {Socket} self
    * @public
    */
    public get volatile(): Socket {
        this.flags.volatile = true
        return this
    }

    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to every sockets but the
     * sender.
     *
     * @return {Socket} self
     * @public
     */
    public get broadcast(): Socket {
        this.flags.broadcast = true
        return this
    }

    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @return {Socket} self
     * @public
     */
    public get local(): Socket {
        this.flags.local = true
        return this
    }

    /**
     * A reference to the request that originated the underlying Engine.IO Socket.
     *
     * @public
     */
    public get request(): any {
        return this.client.request
    }

    /**
     * A reference to the underlying Client transport connection (Engine.IO Socket object).
     *
     * @public
     */
    public get conn() {
        return this.client.conn
    }

    /**
     * @public
     */
    public get rooms(): Set<Room> {
        return this.adapter.socketRooms(this.id) || new Set()
    }

    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    public onAny(listener: (...args: any[]) => void): Socket {
        this._anyListeners = this._anyListeners || []
        this._anyListeners.push(listener)
        return this
    }

    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    public prependAny(listener: (...args: any[]) => void): Socket {
        this._anyListeners = this._anyListeners || []
        this._anyListeners.unshift(listener)
        return this
    }

    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    public offAny(listener?: (...args: any[]) => void): Socket {
        if (!this._anyListeners) {
            return this
        }
        if (listener) {
            const listeners = this._anyListeners
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1)
                    return this
                }
            }
        } else {
            this._anyListeners = []
        }
        return this
    }

    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    public listenersAny() {
        return this._anyListeners || []
    }

    // ==========================================
    buildHandshake(auth): Handshake {
        let requestUri = this.request.uri()
        let headers = {}
        let nativeHeaders = this.request.headers()
        nativeHeaders.forEach(function (header) {
            headers[header.getKey()] = header.getValue()
        })
        return {
            headers: headers,
            time: new Date() + '',
            address: this.conn.remoteAddress + '',
            xdomain: !!headers['origin'],
            secure: false,
            issued: +new Date(),
            url: requestUri,
            query: querystring.parse(requestUri.indexOf('?') != -1 ? requestUri.split('?')[1] : ''),
            auth
        }
    }
    packet(packet: Packet, opts: any = { preEncoded: false }) {
        if (!opts.preEncoded) {
            packet.nsp = this.nsp.name
            opts.compress = false !== opts.compress
        }
        try {
            this.client._packet(packet, opts)
        } catch (error) {
            this._onerror(error)
        }
    }
    dispatch(packet: Packet, ack?: () => void) {
        if (ack) { this.acks.set(packet.id, ack) }
        super.emit(packet.name, ...packet.data, ack)
    }
    private hasBin(obj: any) {
        return false
    }
}
