import { EventEmitter } from 'events'

import { Client } from './client'
import { SocketIO } from './interfaces';
import { ServerEvent } from '../server';
import { Socket } from './socket';
import { Adapter } from './adapter';
import { Server } from './index'
import { Packet } from './packet';
import { SubPacketTypes } from './types';

export class Namespace extends EventEmitter implements SocketIO.Namespace {
    name: string;
    server: Server;
    sockets: { [id: string]: Socket; };
    connected: { [id: string]: Socket; };
    adapter: SocketIO.Adapter;
    json: SocketIO.Namespace;

    fns: any[];
    ids: number;
    rooms: string[];
    flags: { [key: string]: boolean };

    private events = ['connect', 'connection', 'newListener']

    constructor(name: string, server: Server) {
        super();
        this.name = name;
        this.server = server;
        this.sockets = {};
        this.connected = {};
        this.fns = [];
        this.ids = 0;
        this.rooms = [];
        this.flags = {};
        this.adapter = new Adapter(this);
    }
    initAdapter() {
        // @ts-ignore
        this.adapter = new (this.server.adapter())()
    }
    add(client: Client, query?: any, callback?: () => void) {
        // client.conn.request.url();
        let socket = new Socket(this, client, {});
        this.sockets[client.id] = socket;
        client.nsps[this.name] = socket;
        this.onconnection(socket);
        return socket;
    }
    del(client: Client) {
        let socket = this.sockets[client.id];
        socket.disconnect();
        delete this.sockets[client.id];
    }
    use(fn: (socket: SocketIO.Socket, fn: (err?: any) => void) => void): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    to(room: string): SocketIO.Namespace {
        if (!~this.rooms.indexOf(room)) this.rooms.push(room);
        return this;
    }
    in(room: string): SocketIO.Namespace {
        return this.to(room);
    }
    send(...args: any[]): SocketIO.Namespace {
        super.emit('message', ...args)
        return this;
    }
    write(...args: any[]): SocketIO.Namespace {
        return this.send(...args);
    }
    emit(event: string, ...args: any[]): boolean {
        if (~this.events.indexOf(event)) {
            super.emit(event, ...args);
            // @ts-ignore
            return this;
        }
        // set up packet object
        var packet = {
            type: (this.flags.binary !== undefined ? this.flags.binary : this.hasBin(args)) ? SubPacketTypes.BINARY_EVENT : SubPacketTypes.EVENT,
            data: args
        }

        if ('function' == typeof args[args.length - 1]) {
            throw new Error('Callbacks are not supported when broadcasting');
        }

        var rooms = this.rooms.slice(0);
        var flags = Object.assign({}, this.flags);

        // reset flags
        this.rooms = [];
        this.flags = {};

        this.adapter.broadcast(packet, {
            rooms: rooms,
            flags: flags
        });
        // @ts-ignore
        return this;
    }
    hasBin(args: any[]) {
        return false;
    }
    clients(fn: Function): SocketIO.Namespace {
        return fn(Object.values(this.sockets))
    }
    compress(compress: boolean): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    process(packet: Packet, client: Client) {
        switch (packet.sub_type) {
            case SubPacketTypes.CONNECT:
                this.add(client);
                break;
            case SubPacketTypes.DISCONNECT:
                this.del(client);
                break;
            case SubPacketTypes.EVENT:
                this.sockets[client.id].onpacket(packet);
                break;
        }
    }
    remove(socket: Socket) {
        if (this.sockets.hasOwnProperty(socket.id)) {
            delete this.sockets[socket.id];
        } else {
            // debug('ignoring remove for %s', socket.id);
        }
    }
    private onconnection(socket: any) {
        let client = socket as Socket;
        this.sockets[client.id] = client;
        client.onconnect()
        this.emit(ServerEvent.connect, socket);
        this.emit(ServerEvent.connection, socket);
    }
}
