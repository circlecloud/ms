import { EventEmitter } from 'events'

import { SocketIOClient } from './client'
import { SocketIO } from './interfaces';

export class Namespace implements SocketIO.Namespace {
    private event: EventEmitter;
    private allClients: { [key: string]: SocketIOClient };
    private roomClients: { [key: string]: Set<string> };
    private clientRooms: { [key: string]: Set<string> };

    name: string;
    server: SocketIO.Server;
    sockets: { [id: string]: SocketIO.Socket; };
    connected: { [id: string]: SocketIO.Socket; };
    adapter: SocketIO.Adapter;
    json: SocketIO.Namespace;

    constructor(name: string) {
        this.name = name;
        this.event = new EventEmitter();
        this.allClients = {};
        this.roomClients = {};
        this.clientRooms = {};
    }
    use(fn: (socket: SocketIO.Socket, fn: (err?: any) => void) => void): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    to(room: string): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    in(room: string): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    send(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    write(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    on(event: "connection", listener: (socket: SocketIO.Socket) => void): this;
    on(event: "connect", listener: (socket: SocketIO.Socket) => void): this;
    on(event: string, listener: Function): this;
    on(event: any, listener: any) {
        return this;
    }
    clients(fn: Function): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    compress(compress: boolean): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    addListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    once(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    off(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeAllListeners(event?: string | symbol): this {
        throw new Error("Method not implemented.");
    }
    setMaxListeners(n: number): this {
        throw new Error("Method not implemented.");
    }
    getMaxListeners(): number {
        throw new Error("Method not implemented.");
    }
    listeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    rawListeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    emit(event: string | symbol, ...args: any[]): boolean {
        throw new Error("Method not implemented.");
    }
    listenerCount(type: string | symbol): number {
        throw new Error("Method not implemented.");
    }
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    eventNames(): (string | symbol)[] {
        throw new Error("Method not implemented.");
    }

}
