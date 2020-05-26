import { EventEmitter } from 'events'

import { ServerEvent } from './constants';
import { Namespace } from './namespace';
import { Client } from './client';
import { SocketIO } from './interfaces'
import { Parser } from './parser'
import { PacketTypes, SubPacketTypes } from './types';
import { Packet } from './packet';
import { Socket } from './socket';
import { Adapter } from './adapter';

interface ServerOptions extends SocketIO.ServerOptions {
    event?: EventEmitter;
    root?: string;
}

interface WebSocketServer extends EventEmitter {
    close(): void
}

class Server implements SocketIO.Server {
    private websocketServer: WebSocketServer;
    private allClients: { [key: string]: Client };

    engine: { ws: any; };
    nsps: { [namespace: string]: Namespace; };
    sockets: Namespace;
    json: SocketIO.Server;
    volatile: SocketIO.Server;
    local: SocketIO.Server;
    parser = new Parser();
    _adapter: Adapter;
    options: ServerOptions;

    constructor(instance: any, options: ServerOptions) {
        if (!instance) { throw new Error('instance can\'t be undefiend!') }
        this.allClients = {};
        this.nsps = {};
        this.sockets = new Namespace('/', this);
        this.nsps['/'] = this.sockets;
        if (instance.class.name.startsWith('io.netty.channel')) {
            let { NettyWebSocketServer } = require("../server")
            this.websocketServer = new NettyWebSocketServer(instance, Object.assign({
                event: new EventEmitter(),
                path: '/socket.io',
                root: root + '/wwwroot'
            }, options));
        } else {
            let { TomcatWebSocketServer } = require("../tomcat/server")
            this.websocketServer = new TomcatWebSocketServer(instance, options);
        }
        this.initServer()
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
        if (!arguments.length) return this.options.path;
        this.options.path = v.replace(/\/$/, '');
        return this;
    }
    adapter(): Adapter;
    adapter(v: any): SocketIO.Server;
    adapter(v?: any): Adapter | SocketIO.Server {
        if (!arguments.length) return this._adapter;
        this._adapter = v;
        for (var i in this.nsps) {
            if (this.nsps.hasOwnProperty(i)) {
                this.nsps[i].initAdapter();
            }
        }
        return this;
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
    onconnection(socket: Client): SocketIO.Server {
        this.allClients[socket.id] = socket;
        socket.packet({
            type: PacketTypes.OPEN,
            data: {
                sid: socket.id,
                upgrades: [],
                pingInterval: 25000,
                pingTimeout: 5000
            }
        })
        this.sockets.add(socket);
        return this;
    }
    of(nsp: string): Namespace {
        if (!this.nsps[nsp]) {
            this.nsps[nsp] = new Namespace(nsp, this);
        }
        return this.nsps[nsp];
    }
    close(fn?: () => void): void {
        for (let socket in this.sockets.sockets) {
            this.sockets.sockets[socket].onclose()
        }
        this.websocketServer.close();
    }
    on(event: "connection", listener: (socket: SocketIO.Socket) => void): SocketIO.Namespace;
    on(event: "connect", listener: (socket: SocketIO.Socket) => void): SocketIO.Namespace;
    on(event: string, listener: Function): SocketIO.Namespace;
    on(event: any, listener: any): SocketIO.Namespace {
        return this.sockets.on(event, listener);
    }
    to(room: string): SocketIO.Namespace {
        return this.sockets.to(room);
    }
    in(room: string): SocketIO.Namespace {
        return this.sockets.in(room);
    }
    use(fn: (socket: SocketIO.Socket, fn: (err?: any) => void) => void): SocketIO.Namespace {
        return this.sockets.use(fn);
    }
    emit(event: string, ...args: any[]): SocketIO.Namespace {
        // @ts-ignore
        return this.sockets.emit(event, ...args);
    }
    send(...args: any[]): SocketIO.Namespace {
        return this.sockets.send(...args);
    }
    write(...args: any[]): SocketIO.Namespace {
        return this.sockets.write(...args);
    }
    clients(...args: any[]): SocketIO.Namespace {
        return this.sockets.clients(args[0]);
    }
    compress(...args: any[]): SocketIO.Namespace {
        return this.sockets.compress(args[0])
    }
    // ===============================
    checkNamespace(name, query, fn) {
        fn(false);
    };

    private initServer() {
        this.websocketServer.on(ServerEvent.connect, (socket: SocketIO.EngineSocket) => {
            let client = new Client(this, socket);
            this.onconnection(client);
        })
        this.websocketServer.on(ServerEvent.message, (socket: SocketIO.EngineSocket, text) => {
            this.processPacket(this.parser.decode(text), this.allClients[socket.id]);
        })
        this.websocketServer.on(ServerEvent.error, (socket: SocketIO.EngineSocket, cause) => {
            console.error(`Client ${socket.id} cause error: ` + cause)
            console.ex(cause)
        })
    }

    private processPacket(packet: Packet, client: Client) {
        switch (packet.type) {
            case PacketTypes.PING:
                client.packet({
                    type: PacketTypes.PONG,
                    data: packet.data
                })
                break;
            case PacketTypes.UPGRADE:
                break;
            case PacketTypes.MESSAGE:
                this.processSubPacket(packet, client);
                break;
            case PacketTypes.CLOSE:
                client.onclose()
                break;
        }
    }

    private processSubPacket(packet: Packet, client: Client) {
        let namespace = this.nsps[packet.nsp]
        if (!namespace) {
            client.packet({
                type: PacketTypes.MESSAGE,
                sub_type: SubPacketTypes.ERROR,
                data: 'not support dynamic namespace: ' + packet.nsp
            });
            client.disconnect();
            return;
        }
        namespace.process(packet, client);
    }
}
export {
    Server,
    Socket,
    Client,
    ServerOptions
}
