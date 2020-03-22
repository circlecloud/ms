import { EventEmitter } from 'events'

import { SocketIOClient } from "socket-io";
import { SocketIO } from "./interfaces";
import { Packet } from './packet';
import { PacketTypes, SubPacketTypes } from './types';

export class Socket extends EventEmitter implements SocketIO.Socket {
    nsp: SocketIO.Namespace;
    server: SocketIO.Server;
    adapter: SocketIO.Adapter;
    id: string;
    request: any;
    client: SocketIOClient;
    conn: SocketIO.EngineSocket;
    rooms: { [id: string]: string; };
    connected: boolean;
    disconnected: boolean;
    handshake: SocketIO.Handshake;
    json: SocketIO.Socket;
    volatile: SocketIO.Socket;
    broadcast: SocketIO.Socket;
    fns: any[];
    _rooms: string[];

    constructor(nsp, client, query) {
        super();
        this.nsp = nsp;
        this.server = nsp.server;
        this.adapter = this.nsp.adapter;
        this.id = nsp.name !== '/' ? nsp.name + '#' + client.id : client.id;
        this.client = client;
        this.conn = client.conn;
        this.rooms = {};
        // this.acks = {};
        this.connected = true;
        this.disconnected = false;
        // this.handshake = this.buildHandshake(query);
        this.fns = [];
        // this.flags = {};
        this._rooms = [];
    }

    to(room: string): SocketIO.Socket {
        if (!~this._rooms.indexOf(room)) this._rooms.push(room);
        return this;
    }
    in(room: string): SocketIO.Socket {
        return this.to(room);
    }
    use(fn: (packet: SocketIO.Packet, next: (err?: any) => void) => void): SocketIO.Socket {
        throw new Error("Method not implemented.");
    }
    send(...args: any[]): SocketIO.Socket {
        this.emit("message", ...args)
        return this;
    }
    write(...args: any[]): SocketIO.Socket {
        return this.send(...args);
    }
    join(rooms: string | string[], fn?: (err?: any) => void): SocketIO.Socket {
        if (!Array.isArray(rooms)) {
            rooms = [rooms];
        }
        rooms = rooms.filter((room) => {
            return !this.rooms.hasOwnProperty(room);
        });
        if (!rooms.length) {
            fn && fn(null);
            return this;
        }
        return this;
    }
    leave(name: string, fn?: Function): SocketIO.Socket {
        delete this.rooms[name];
        fn && fn(null)
        return this;
    }
    leaveAll(): void {
        this.adapter.delAll(this.id);
        this.rooms = {};
    }
    disconnect(close?: boolean): SocketIO.Socket {
        throw new Error("Method not implemented.");
    }
    compress(compress: boolean): SocketIO.Socket {
        throw new Error("Method not implemented.");
    }
    error(err: any): void {
        throw new Error("Method not implemented.");
    }

    packet(packet: Packet) {
        this.client.packet(packet);
    }

    onconnect() {
        this.nsp.connected[this.id] = this;
        this.join(this.id);
        // var skip = this.nsp.name === '/' && this.nsp.fns.length === 0;
        // if (skip) {
        // debug('packet already sent in initial handshake');
        // } else {
        this.packet({
            type: PacketTypes.MESSAGE,
            sub_type: SubPacketTypes.CONNECT
        });
        // }
    }
}