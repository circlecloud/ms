import { Packet } from "./packet";
import { PacketTypes, SubPacketTypes } from "./types";

export class Parser {
    encode(packet: Packet): string {
        // first is type
        var str = '' + packet.type;
        if (packet.type == PacketTypes.PONG) {
            if (packet.data) { str += packet.data };
            return str;
        }
        if (packet.sub_type != undefined) {
            str += packet.sub_type;
        }
        // attachments if we have them
        if ([SubPacketTypes.BINARY_EVENT, SubPacketTypes.BINARY_ACK].includes(packet.sub_type)) {
            str += packet.attachments + '-';
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (packet.nsp && '/' !== packet.nsp) {
            str += packet.nsp + ',';
        }
        // immediately followed by the id
        if (null != packet.id) {
            str += packet.id;
        }
        if (packet.sub_type == SubPacketTypes.EVENT) {
            packet.data = [packet.name, packet.data]
        }
        // json data
        if (null != packet.data) {
            var payload = this.tryStringify(packet.data);
            if (payload !== false) {
                str += payload;
            } else {
                return '4"encode error"'
            }
        }
        console.debug(`encoded ${JSON.stringify(packet)} as ${str}`);
        return str;
    }
    tryStringify(str) {
        try {
            return JSON.stringify(str);
        } catch (e) {
            return false;
        }
    }
    decode(str: string): Packet {
        var i = 0;
        // ignore parse binary
        // if ((frame.getByte(0) == 'b' && frame.getByte(1) == '4')
        //     || frame.getByte(0) == 4 || frame.getByte(0) == 1) {
        //     return parseBinary(head, frame);
        // }
        // look up type
        var p: Packet = {
            type: Number(str.charAt(i))
        };
        if (null == PacketTypes[p.type]) {
            return this.error('unknown packet type ' + p.type);
        }
        // if str empty return
        if (str.length == i + 1) {
            return p;
        }
        // if is ping packet read data and return
        if (PacketTypes.PING == p.type) {
            p.data = str.substr(++i);
            return p;
        }
        // look up sub type
        p.sub_type = Number(str.charAt(++i));
        if (null == PacketTypes[p.sub_type]) {
            return this.error('unknown sub packet type ' + p.type);
        }
        // look up attachments if type binary
        if ([SubPacketTypes.BINARY_ACK, SubPacketTypes.BINARY_EVENT].includes(p.sub_type)) {
            var buf = '';
            while (str.charAt(++i) !== '-') {
                buf += str.charAt(i);
                if (i == str.length) break;
            }
            if (buf != `${Number(buf)}` || str.charAt(i) !== '-') {
                throw new Error('Illegal attachments');
            }
            p.attachments = Number(buf);
        }

        // look up namespace (if any)
        if ('/' === str.charAt(i + 1)) {
            p.nsp = '';
            while (++i) {
                var c = str.charAt(i);
                if (',' === c) break;
                p.nsp += c;
                if (i === str.length) break;
            }
        } else {
            p.nsp = '/';
        }

        // look up id
        var next = str.charAt(i + 1);
        if ('' !== next && Number.isNaN(Number(next))) {
            var id = ''
            while (++i) {
                var c = str.charAt(i);
                if (null == c || Number.isNaN(Number(c))) {
                    --i;
                    break;
                }
                id += str.charAt(i);
                if (i === str.length) break;
            }
            p.id = Number(id);
        }

        // look up packet name
        if (p.sub_type == SubPacketTypes.EVENT) {

        }
        // ignore binary packet
        if (p.sub_type == SubPacketTypes.BINARY_EVENT) {
            return this.error('not support binary parse...')
        }

        // look up json data
        if (str.charAt(++i)) {
            var payload = this.tryParse(str.substr(i));
            var isPayloadValid = payload !== false && (p.sub_type == SubPacketTypes.ERROR || Array.isArray(payload));
            if (isPayloadValid) {
                p.name = payload[0];
                p.data = payload[1];
            } else {
                return this.error('invalid payload');
            }
        }

        console.debug(`decoded ${str} as ${JSON.stringify(p)}`);
        return p;
    }

    tryParse(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return false;
        }
    }

    error(error: string): Packet {
        return {
            type: PacketTypes.MESSAGE,
            sub_type: SubPacketTypes.ERROR,
            data: 'parser error: ' + error
        };
    }
}