import { EventEmitter } from 'events'

import { Client } from './client'
import { ServerEvent } from './constants'
import { RESERVED_EVENTS, Socket } from './socket'
import { Adapter, Room, SocketId } from './adapter'
import { Server } from './index'
import { Packet } from './packet'
import { PacketTypes, SubPacketTypes } from './types'

export interface ExtendedError extends Error {
    data?: any
}

export class Namespace extends EventEmitter {
    public readonly name: string
    public readonly sockets: Map<SocketId, Socket>

    public adapter: Adapter

    /** @private */
    readonly server: Server
    json: Namespace

    /** @private */
    _fns: Array<
        (socket: Socket, next: (err: ExtendedError) => void) => void
    > = [];

    /** @private */
    _rooms: Set<Room>

    /** @private */
    _flags: any = {}

    /** @private */
    _ids: number = 0

    constructor(server: Server, name: string) {
        super()
        this.server = server
        this.name = name + ''
        this._initAdapter()
        // =======================
        this.sockets = new Map()
        this._rooms = new Set()
    }
    _initAdapter() {
        // @ts-ignore
        this.adapter = new (this.server.adapter())(this)
    }
    /**
     * Sets up namespace middleware.
     *
     * @return {Namespace} self
     * @public
     */
    public use(
        fn: (socket: Socket, next: (err?: ExtendedError) => void) => void
    ): Namespace {
        this._fns.push(fn)
        return this
    }
    /**
     * Executes the middleware for an incoming client.
     *
     * @param {Socket} socket - the socket that will get added
     * @param {Function} fn - last fn call in the middleware
     * @private
     */
    private run(socket: Socket, fn: (err: ExtendedError) => void) {
        const fns = this._fns.slice(0)
        if (!fns.length) return fn(null)

        function run(i) {
            fns[i](socket, function (err) {
                // upon error, short-circuit
                if (err) return fn(err)

                // if no middleware left, summon callback
                if (!fns[i + 1]) return fn(null)

                // go on to next
                run(i + 1)
            })
        }

        run(0)
    }
    to(name: string): Namespace {
        this._rooms.add(name)
        return this
    }
    in(name: string): Namespace {
        return this.to(name)
    }
    _add(client: Client, query?: any, fn?: () => void) {
        const socket = new Socket(this, client, query || {})
        console.debug(`client ${client.id} adding socket ${socket.id} to nsp ${this.name}`)
        this.run(socket, err => {
            process.nextTick(() => {
                if ("open" == client.conn.readyState) {
                    if (err)
                        return socket._error({
                            message: err.message,
                            data: err.data
                        })

                    // track socket
                    this.sockets.set(socket.id, socket)

                    // it's paramount that the internal `onconnect` logic
                    // fires before user-set events to prevent state order
                    // violations (such as a disconnection before the connection
                    // logic is complete)
                    socket._onconnect()
                    if (fn) fn()

                    // fire user-set events
                    super.emit(ServerEvent.connect, socket)
                    super.emit(ServerEvent.connection, socket)
                } else {
                    console.debug(`next called after client ${client.id} was closed - ignoring socket`)
                }
            })
        })
        return socket
    }
    /**
     * Removes a client. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket: Socket): void {
        if (this.sockets.has(socket.id)) {
            console.debug(`namespace ${this.name} remove socket ${socket.id}`)
            this.sockets.delete(socket.id)
        } else {
            console.debug(`namespace ${this.name} ignoring remove for ${socket.id}`)
        }
    }
    emit(event: string, ...args: any[]): boolean {
        if (RESERVED_EVENTS.has(event)) {
            throw new Error(`"${event}" is a reserved event name`)
        }
        // set up packet object
        var packet = {
            type: PacketTypes.MESSAGE,
            sub_type: (this._flags.binary !== undefined ? this._flags.binary : this.hasBin(args)) ? SubPacketTypes.BINARY_EVENT : SubPacketTypes.EVENT,
            name: event,
            data: args
        }

        if ('function' == typeof args[args.length - 1]) {
            throw new Error('Callbacks are not supported when broadcasting')
        }

        var rooms = new Set(this._rooms)
        var flags = Object.assign({}, this._flags)

        // reset flags
        this._rooms.clear()
        this._flags = {}

        this.adapter.broadcast(packet, {
            rooms: new Set(rooms),
            flags: flags
        })
        // @ts-ignore
        return this
    }
    send(...args: any[]): Namespace {
        this.emit('message', ...args)
        return this
    }
    write(...args: any[]): Namespace {
        return this.send(...args)
    }
    /**
     * Gets a list of clients.
     *
     * @return {Namespace} self
     * @public
     */
    public allSockets(): Promise<Set<SocketId>> {
        if (!this.adapter) {
            throw new Error("No adapter for this namespace, are you trying to get the list of clients of a dynamic namespace?")
        }
        const rooms = new Set(this._rooms)
        this._rooms.clear()
        return this.adapter.sockets(rooms)
    }

    /**
     * Sets the compress flag.
     *
     * @param {Boolean} compress - if `true`, compresses the sending data
     * @return {Namespace} self
     * @public
     */
    public compress(compress: boolean): Namespace {
        this._flags.compress = compress
        return this
    }

    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @return {Namespace} self
     * @public
     */
    public get volatile(): Namespace {
        this._flags.volatile = true
        return this
    }

    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @return {Namespace} self
     * @public
     */
    public get local(): Namespace {
        this._flags.local = true
        return this
    }

    hasBin(args: any[]) {
        return false
    }
    clients(fn: (sockets: Socket[]) => Namespace): Namespace {
        return fn(Object.values(this.sockets))
    }
    close() {
        this.removeAllListeners(ServerEvent.connect)
        this.removeAllListeners(ServerEvent.connection)
        Object.values(this.sockets).forEach(socket => socket.disconnect(false))
    }
}
