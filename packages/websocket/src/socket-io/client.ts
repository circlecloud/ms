import { EventEmitter } from 'events'
import { Parser } from './parser'
import { Packet } from './packet';
import { PacketTypes, SubPacketTypes } from './types';
import { ServerEvent, NettyClient } from '../server';
import { SocketIO } from './interfaces'

const parser = new Parser();

export class Client extends EventEmitter implements SocketIO.Client {
    private nettyClient: NettyClient;
    private event: EventEmitter;
    private _id: string;

    server: SocketIO.Server;
    conn: SocketIO.EngineSocket;
    request: any;
    sockets: { [id: string]: SocketIO.Socket; };
    nsps: { [nsp: string]: SocketIO.Socket; };

    constructor(server: SocketIO.Server, nettyClient: NettyClient) {
        super();
        this.server = server;
        this.event = new EventEmitter();
        this.conn = nettyClient;
        this.nettyClient = nettyClient;
        this._id = this.nettyClient.id;
    }
    get id() {
        return this._id;
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
    send(data: any) {
        this.emit("message", data);
    }
    process(packet: Packet) {
        this.event.emit(packet.name, packet.data);
    }
    packet(packet: Packet) {
        this.nettyClient.send(parser.encode(packet))
    }
}
