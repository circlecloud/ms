import { EventEmitter } from 'events'

import { NettyWebSocketServer } from '../server'
import { ServerEvent } from '../server/constants';

import { Namespace } from './namespace';
import { SocketIOClient } from './client';
import { SocketIO } from './interfaces'

export class SocketIOServer implements SocketIO.Server {
    private event: EventEmitter;
    private nettyServer: NettyWebSocketServer;
    private allClients: { [key: string]: SocketIOClient };
    private namespaces: { [key: string]: Namespace };

    engine: { ws: any; };
    nsps: { [namespace: string]: SocketIO.Namespace; };
    sockets: SocketIO.Namespace;
    json: SocketIO.Server;
    volatile: SocketIO.Server;
    local: SocketIO.Server;

    constructor(pipeline: any, options: SocketIO.ServerOptions) {
        if (!pipeline) { throw new Error('Netty Pipeline can\'t be undefiend!') }
        this.event = new EventEmitter();
        this.allClients = {};
        this.namespaces = {};
        this.nettyServer = new NettyWebSocketServer(pipeline, {

        });
        this.nettyServer.on(ServerEvent.connect, (nettyClient) => {
            let client = new SocketIOClient(nettyClient);
            this.allClients[client.id] = client;
            client.connect();
        })
    }

    checkRequest(req: any, fn: (err: any, success: boolean) => void): void {
        throw new Error("Method not implemented.");
    }
    serveClient(): boolean;
    serveClient(v: boolean): SocketIO.Server;
    serveClient(v?: any): boolean | SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    path(): string;
    path(v: string): SocketIO.Server;
    path(v?: any): string | SocketIO.Server {
        return this;
    }
    adapter();
    adapter(v: any): SocketIO.Server;
    adapter(v?: any): SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    origins(): string | string[];
    origins(v: string | string[]): SocketIO.Server;
    origins(fn: (origin: string, callback: (error: string, success: boolean) => void) => void): SocketIO.Server;
    origins(fn?: any): string | string[] | SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    attach(srv: any, opts?: SocketIO.ServerOptions): SocketIO.Server;
    attach(port: number, opts?: SocketIO.ServerOptions): SocketIO.Server;
    attach(port: any, opts?: any): SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    listen(srv: any, opts?: SocketIO.ServerOptions): SocketIO.Server;
    listen(port: number, opts?: SocketIO.ServerOptions): SocketIO.Server;
    listen(port: any, opts?: any): SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    bind(srv: any): SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    onconnection(socket: any): SocketIO.Server {
        throw new Error("Method not implemented.");
    }
    of(nsp: string | Function | RegExp): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    close(fn?: () => void): void {
        throw new Error("Method not implemented.");
    }
    on(event: "connection", listener: (socket: SocketIO.Socket) => void): SocketIO.Namespace;
    on(event: "connect", listener: (socket: SocketIO.Socket) => void): SocketIO.Namespace;
    on(event: string, listener: Function): SocketIO.Namespace;
    on(event: any, listener: any): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    to(room: string): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    in(room: string): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    use(fn: (socket: SocketIO.Socket, fn: (err?: any) => void) => void): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    emit(event: string, ...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    send(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    write(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    clients(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }
    compress(...args: any[]): SocketIO.Namespace {
        throw new Error("Method not implemented.");
    }

    disable() {
        this.nettyServer.disable();
    }
}