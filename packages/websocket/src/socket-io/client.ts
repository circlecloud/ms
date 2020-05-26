import { EventEmitter } from 'events'
import { Parser } from './parser'
import { Packet } from './packet';
import { SocketIO } from './interfaces'
import { Server, Socket } from './index';
import { PacketTypes, SubPacketTypes } from './types';
import { ServerEvent } from './constants';

const parser = new Parser();

export class Client extends EventEmitter implements SocketIO.Client {
    id: string;
    server: Server;
    conn: SocketIO.EngineSocket;
    request: any;
    sockets: { [id: string]: Socket; };
    nsps: { [nsp: string]: SocketIO.Socket; };
    connectBuffer: any;

    constructor(server: Server, engine: SocketIO.EngineSocket) {
        super();
        this.server = server;
        this.conn = engine;
        this.id = this.conn.id + '';
        this.request = engine.request;
        this.sockets = {};
        this.nsps = {};

        this.conn.on(ServerEvent.disconnect, (reason) => {
            this.onclose(reason)
        })
    }
    connect(name, query) {
        if (this.server.nsps[name]) {
            // console.debug(`connecting to namespace ${name}`);
            return this.doConnect(name, query);
        }
        this.server.checkNamespace(name, query, (dynamicNsp) => {
            if (dynamicNsp) {
                // console.debug('dynamic namespace %s was created', dynamicNsp.name);
                this.doConnect(name, query);
            } else {
                // console.debug('creation of namespace %s was denied', name);
                this.packet({
                    type: PacketTypes.MESSAGE,
                    sub_type: SubPacketTypes.ERROR,
                    nsp: name,
                    data: 'Invalid namespace'
                });
            }
        })
    }
    doConnect(name, query) {
        var nsp = this.server.of(name);
        if ('/' != name && !this.nsps['/']) {
            this.connectBuffer.push(name);
            return;
        }
        var socket = nsp.add(this, query, () => {
            this.sockets[socket.id] = socket;
            this.nsps[nsp.name] = socket;

            if ('/' == nsp.name && this.connectBuffer.length > 0) {
                this.connectBuffer.forEach(this.connect, this);
                this.connectBuffer = [];
            }
        });
    }
    packet(packet: Packet, opts: any = { preEncoded: false }) {
        this.conn.send(opts.preEncoded ? packet as unknown as string : parser.encode(packet))
    }
    onclose(reason?: string) {
        // debug('client close with reason %s', reason);
        // ignore a potential subsequent `close` event
        this.destroy();
        // `nsps` and `sockets` are cleaned up seamlessly
        for (var id in this.sockets) {
            if (this.sockets.hasOwnProperty(id)) {
                this.sockets[id].onclose(reason);
            }
        }
        this.sockets = {};
        // this.decoder.destroy(); // clean up decoder
    }
    disconnect() {
        if ('open' == this.conn.readyState) {
            // debug('forcing transport close');
            this.conn.close();
            this.onclose('forced server close');
        }
    }
    remove(socket: Socket) {
        if (this.sockets.hasOwnProperty(socket.id)) {
            var nsp = this.sockets[socket.id].nsp.name;
            delete this.sockets[socket.id];
            delete this.nsps[nsp];
        } else {
            // debug('ignoring remove for %s', socket.id);
        }
    }
    destroy() {
        // this.conn.removeListener('data', this.ondata);
        // this.conn.removeListener('error', this.onerror);
        // this.conn.removeListener('close', this.onclose);
        // this.decoder.removeListener('decoded', this.ondecoded);
    };
}
