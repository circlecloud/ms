import { EventEmitter } from 'events'
import { SocketIO } from './interfaces';
import { Namespace } from './namespace';
import { Parser } from './parser';

export class Adapter extends EventEmitter implements SocketIO.Adapter {
    nsp: SocketIO.Namespace;
    rooms: Rooms;
    sids: { [id: string]: { [room: string]: boolean; }; };
    parser: Parser
    constructor(nsp: Namespace) {
        super()
        this.parser = nsp.server.parser;
    }
    add(id: string, room: string, callback?: (err?: any) => void): void {
        return this.addAll(id, [room], callback);
    }
    /**
     * Adds a socket to a list of room.
     *
     * @param {String} socket id
     * @param {String} rooms
     * @param {Function} callback
     * @api public
     */
    addAll(id, rooms, fn) {
        for (var i = 0; i < rooms.length; i++) {
            var room = rooms[i];
            this.sids[id] = this.sids[id] || {};
            this.sids[id][room] = true;
            this.rooms[room] = this.rooms[room] || new Room();
            this.rooms[room].add(id);
        }
        fn && fn.bind(null, null)
    };
    del(id: string, room: string, callback?: (err?: any) => void): void {
        if (this.sids[id]) delete this.sids[id][room];

        if (this.rooms.hasOwnProperty(room)) {
            this.rooms[room].del(id);
            if (this.rooms[room].length === 0) delete this.rooms[room];
        }
        callback && callback.bind(null, null)
    }

    delAll(id: string): void {
        var rooms = this.sids[id];
        if (rooms) {
            for (var room in rooms) {
                if (this.rooms.hasOwnProperty(room)) {
                    this.rooms[room].del(id);
                    if (this.rooms[room].length === 0) delete this.rooms[room];
                }
            }
        }
        delete this.sids[id];
    }
    broadcast(packet: any, opts: { rooms?: string[]; except?: string[]; flags?: { [flag: string]: boolean; }; }): void {
        var rooms = opts.rooms || [];
        var except = opts.except || [];
        var flags = opts.flags || {};
        var packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress
        };
        var ids = {};
        var self = this;
        var socket;

        packet.nsp = this.nsp.name;
        let encodedPackets = this.parser.encode(packet)
        if (rooms.length) {
            for (var i = 0; i < rooms.length; i++) {
                var room = self.rooms[rooms[i]];
                if (!room) continue;
                var sockets = room.sockets;
                for (var id in sockets) {
                    if (sockets.hasOwnProperty(id)) {
                        if (ids[id] || ~except.indexOf(id)) continue;
                        socket = self.nsp.connected[id];
                        if (socket) {
                            socket.packet(encodedPackets, packetOpts);
                            ids[id] = true;
                        }
                    }
                }
            }
        } else {
            for (var id in self.sids) {
                if (self.sids.hasOwnProperty(id)) {
                    if (~except.indexOf(id)) continue;
                    socket = self.nsp.connected[id];
                    if (socket) socket.packet(encodedPackets, packetOpts);
                }
            }
        }
    }
}

class Rooms implements SocketIO.Rooms {
    [room: string]: Room;
}

class Room implements SocketIO.Room {
    sockets: { [id: string]: boolean; };
    length: number;
    constructor() {
        this.sockets = {};
        this.length = 0;
    }
    add(id) {
        if (!this.sockets.hasOwnProperty(id)) {
            this.sockets[id] = true;
            this.length++;
        }
    }
    del(id) {
        if (this.sockets.hasOwnProperty(id)) {
            delete this.sockets[id];
            this.length--;
        }
    }
}