import { EventEmitter } from 'events'

import { SocketIO } from "./interfaces";
import { Packet } from './packet';
import { PacketTypes, SubPacketTypes } from './types';
import { Client } from './client';
import { Namespace } from './namespace';

export class Socket extends EventEmitter implements SocketIO.Socket {
    private event: EventEmitter;

    nsp: Namespace;
    server: SocketIO.Server;
    adapter: SocketIO.Adapter;
    id: string;
    request: any;
    client: Client;
    conn: SocketIO.EngineSocket;
    rooms: { [id: string]: string; };
    acks: { [id: string]: Function; };
    connected: boolean;
    disconnected: boolean;
    handshake: SocketIO.Handshake;
    json: SocketIO.Socket;
    volatile: SocketIO.Socket;
    broadcast: SocketIO.Socket;
    fns: any[];
    _rooms: string[];

    constructor(nsp: Namespace, client: Client, query = {}) {
        super();
        this.nsp = nsp;
        this.server = nsp.server;
        this.adapter = this.nsp.adapter;
        this.id = nsp.name !== '/' ? nsp.name + '#' + client.id : client.id;
        this.client = client;
        this.request = client.request;
        this.conn = client.conn;
        this.rooms = {};
        this.acks = {};
        this.connected = true;
        this.disconnected = false;
        // this.handshake = this.buildHandshake(query);
        this.fns = [];
        // this.flags = {};
        this._rooms = [];

        this.event = new EventEmitter();
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
        this.client.close();
        return this;
    }
    compress(compress: boolean): SocketIO.Socket {
        throw new Error("Method not implemented.");
    }
    error(err: any): void {
        throw new Error("Method not implemented.");
    }

    // ==========================================

    buildHandshake(query): SocketIO.Handshake {
        let requestQuery = this.request.uri();
        return {
            headers: this.request.headers(),
            time: (new Date) + '',
            address: this.conn.remoteAddress,
            xdomain: !!this.request.headers.origin,
            secure: !!this.request.connection.encrypted,
            issued: +(new Date),
            url: this.request.url,
            query: Object.assign(query, requestQuery)
        }
    }

    on(event: string, callback: (...args: any[]) => void) {
        this.event.on(event, callback);
        return this
    }
    emit(event: string, ...args: any[]): boolean {
        this.packet({
            type: PacketTypes.MESSAGE,
            sub_type: SubPacketTypes.EVENT,
            name: event,
            data: args[0]
        })
        return true;
    }
    packet(packet: Packet) {
        packet.nsp = this.nsp.name;
        this.client.packet(packet);
    }
    onconnect() {
        this.nsp.connected[this.id] = this;
        this.client.sockets[this.id] = this;
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
    onclose(reason) {
        if (!this.connected) return this;
        // debug('closing socket - reason %s', reason);
        this.emit('disconnecting', reason);
        this.leaveAll();
        this.nsp.remove(this);
        this.client.remove(this);
        this.connected = false;
        this.disconnected = true;
        delete this.nsp.connected[this.id];
        this.emit('disconnect', reason);
    };
    onpacket(packet: Packet) {
        switch (packet.sub_type) {
            case SubPacketTypes.EVENT:
                this.onevent(packet);
                break;
            case SubPacketTypes.BINARY_EVENT:
                this.onevent(packet);
                break;
            case SubPacketTypes.ACK:
                this.onack(packet);
                break;
            case SubPacketTypes.BINARY_ACK:
                this.onack(packet);
                break;
            case SubPacketTypes.DISCONNECT:
                this.ondisconnect();
                break;
            case SubPacketTypes.ERROR:
                this.onerror(new Error(packet.data));
        }
    }
    onerror(error: Error) {

    }
    ondisconnect() {
        this.onclose
    }
    onevent(packet: Packet) {
        // console.debug('emitting event %j', args);
        if (null != packet.id) {
            // console.debug('attaching ack callback to event');
            this.dispatch(packet, this.ack(packet.id))
        }
        this.dispatch(packet);
    };
    ack(id: number) {
        var sent = false;
        return (...args: any[]) => {
            if (sent) return;
            this.packet({
                id: id,
                type: PacketTypes.MESSAGE,
                sub_type: this.hasBin(args) ? SubPacketTypes.BINARY_ACK : SubPacketTypes.ACK,
                data: args
            });
            sent = true;
        }
    }
    onack(packet: Packet) {
        var ack = this.acks[packet.id];
        if ('function' == typeof ack) {
            // debug('calling ack %s with %j', packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        } else {
            // debug('bad ack %s', packet.id);
        }
    }
    dispatch(packet: Packet, ack?: Function) {
        if (ack) { this.acks[packet.id] = ack; }
        this.event.emit(packet.name, packet.data)
    }
    private hasBin(obj: any) {
        return false;
    }
}
