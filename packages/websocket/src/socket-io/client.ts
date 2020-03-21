import { EventEmitter } from 'events'
import { Parser } from './parser'
import { Packet } from './packet';
import { PacketTypes, SubPacketTypes } from './types';
import { ServerEvent, NettyClient } from '../server';
import { SocketIO } from './interfaces'

const parser = new Parser();

export class SocketIOClient implements SocketIO.Client {
    private nettyClient: NettyClient;
    private event: EventEmitter
    private _id: string;

    server: SocketIO.Server;
    conn: SocketIO.EngineSocket;
    request: any;
    sockets: { [id: string]: SocketIO.Socket; };
    nsps: { [nsp: string]: SocketIO.Socket; };

    constructor(nettyClient: NettyClient) {
        this.event = new EventEmitter()
        this.nettyClient = nettyClient;
        this._id = this.nettyClient.id;
        this.event.emit('connect', this);
        this.nettyClient.on(ServerEvent.message, (text) => this.process(text))
    }

    get id() {
        return this._id;
    }
    connect() {
        this.packet({
            type: PacketTypes.OPEN,
            data: {
                sid: this._id,
                upgrades: [],
                pingInterval: 25000,
                pingTimeout: 5000
            }
        })
        this.packet({
            type: PacketTypes.MESSAGE,
            sub_type: SubPacketTypes.CONNECT
        })
    }
    emit(event: string, data: any) {
        this.packet({
            type: PacketTypes.MESSAGE,
            sub_type: SubPacketTypes.EVENT,
            name: event,
            data
        })
    }
    send(data: any) {
        this.emit("message", data);
    }
    packet(packet: Packet) {
        this.nettyClient.send(parser.encode(packet))
    }

    private process(text: string) {
        let packet = parser.decode(text);
        switch (packet.type) {
            case PacketTypes.OPEN:
                break;
            case PacketTypes.PING:
                this.packet({
                    type: PacketTypes.PONG
                })
                break;
            case PacketTypes.MESSAGE:
                switch (packet.sub_type) {
                    case SubPacketTypes.CONNECT:
                        this.nettyClient.send(text);
                        break;
                    case SubPacketTypes.EVENT:
                        this.event.emit(packet.name, packet.data);
                        break;
                }
                break;
        }
    }
}
