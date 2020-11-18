import { EventEmitter } from 'events'
import { Namespace } from './namespace'
import { Parser } from './parser'
import { Socket } from './socket'

export type SocketId = string
export type Room = string

export interface BroadcastFlags {
    volatile?: boolean
    compress?: boolean
    local?: boolean
    broadcast?: boolean
    binary?: boolean
}

export interface BroadcastOptions {
    rooms: Set<Room>
    except?: Set<SocketId>
    flags?: BroadcastFlags
}

export class Adapter extends EventEmitter implements Adapter {
    rooms: Map<Room, Set<SocketId>>
    sids: Map<SocketId, Set<Room>>
    private readonly encoder: Parser
    parser: Parser

    constructor(readonly nsp: Namespace) {
        super()
        this.rooms = new Map()
        this.sids = new Map()
        this.parser = nsp.server._parser
        this.encoder = this.parser
    }

    /**
     * Adds a socket to a list of room.
     *
     * @param {String} socket id
     * @param {String} rooms
     * @param {Function} callback
     * @api public
     */
    addAll(id: SocketId, rooms: Set<Room>): Promise<void> | void {
        for (const room of rooms) {
            if (!this.sids.has(id)) {
                this.sids.set(id, new Set())
            }
            this.sids.get(id).add(room)

            if (!this.rooms.has(room)) {
                this.rooms.set(room, new Set())
            }
            this.rooms.get(room).add(id)
        }
    }
    del(id: string, room: string, callback?: (err?: any) => void): void {
        if (this.sids.has(id)) {
            this.sids.get(id).delete(room)
        }

        if (this.rooms.has(room)) {
            this.rooms.get(room).delete(id)
            if (this.rooms.get(room).size === 0) this.rooms.delete(room)
        }
        callback && callback.bind(null, null)
    }
    delAll(id: string): void {
        if (!this.sids.has(id)) {
            return
        }

        for (const room of this.sids.get(id)) {
            if (this.rooms.has(room)) {
                this.rooms.get(room).delete(id)
                if (this.rooms.get(room).size === 0) this.rooms.delete(room)
            }
        }

        this.sids.delete(id)
    }

    /**
     * Broadcasts a packet.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @public
     */
    public broadcast(packet: any, opts: BroadcastOptions): void {
        const rooms = opts.rooms
        const except = opts.except || new Set()
        const flags = opts.flags || {}
        const packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress
        }
        const ids = new Set()

        packet.nsp = this.nsp.name
        const encodedPackets = this.encoder.encode(packet)

        if (rooms.size) {
            for (const room of rooms) {
                if (!this.rooms.has(room)) continue

                for (const id of this.rooms.get(room)) {
                    if (ids.has(id) || except.has(id)) continue
                    const socket = this.nsp.sockets.get(id)
                    if (socket) {
                        socket.packet(encodedPackets as any, packetOpts)
                        ids.add(id)
                    }
                }
            }
        } else {
            for (const [id] of this.sids) {
                if (except.has(id)) continue
                const socket = this.nsp.sockets.get(id)
                if (socket) socket.packet(encodedPackets as any, packetOpts)
            }
        }
    }

    /**
     * Gets a list of sockets by sid.
     *
     * @param {Set<Room>} rooms   the explicit set of rooms to check.
     */
    public sockets(rooms: Set<Room>): Promise<Set<SocketId>> {
        const sids = new Set<SocketId>()
        if (rooms.size) {
            for (const room of rooms) {
                if (!this.rooms.has(room)) continue
                for (const id of this.rooms.get(room)) {
                    if (this.nsp.sockets.has(id)) {
                        sids.add(id)
                    }
                }
            }
        } else {
            for (const [id] of this.sids) {
                if (this.nsp.sockets.has(id)) sids.add(id)
            }
        }
        return Promise.resolve(sids)
    }

    /**
     * Gets the list of rooms a given socket has joined.
     *
     * @param {SocketId} id   the socket id
     */
    public socketRooms(id: SocketId): Set<Room> | undefined {
        return this.sids.get(id)
    }
}
