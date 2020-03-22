import { EventEmitter } from 'events'

import { Client } from './client'
import { SocketIO } from './interfaces';
import { ServerEvent } from '../server';
import { Socket } from './socket';
import { Adapter } from './adapter';
import { Server } from './index'

export class Namespace extends EventEmitter implements SocketIO.Namespace {
    name: string;
    server: Server;
    sockets: { [id: string]: SocketIO.Socket; };
    connected: { [id: string]: SocketIO.Socket; };
    adapter: SocketIO.Adapter;
    json: SocketIO.Namespace;

    constructor(name: string) {
        super();
        this.name = name;
        this.sockets = {};
        this.connected = {};
        this.adapter = new Adapter(this);
    }
    initAdapter() {
        let adp = this.server.adapter()
        this.adapter = new adp()
    }
    add(client: Client) {
        let nameClient = new Socket(this, client, {});
        this.sockets[client.id] = nameClient;
        client.nsps[this.name] = nameClient;
        this.onconnection(nameClient);
    }
    use(fn: (socket: SocketIO.Socket, fn: (err?: any) => void) => void): SocketIO.Namespace {
        // TODO
        return this;
    }
    to(room: string): SocketIO.Namespace {
        // TODO
        return this;
    }
    in(room: string): SocketIO.Namespace {
        return this.to(room);
    }
    send(...args: any[]): SocketIO.Namespace {
        // TODO
        return this;
    }
    write(...args: any[]): SocketIO.Namespace {
        return this.send(...args);
    }
    clients(fn: Function): SocketIO.Namespace {
        return fn(Object.values(this.sockets))
    }
    compress(compress: boolean): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    private onconnection(socket: any) {
        let client = socket as Socket;
        this.sockets[client.id] = client;
        client.onconnect()
        this.emit(ServerEvent.connect, socket);
        this.emit(ServerEvent.connection, socket);
    }
}
