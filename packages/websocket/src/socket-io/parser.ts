import { Packet } from "./packet";
import { PacketTypes, SubPacketTypes } from "./types";

export class Parser {
    encode(packet: Packet): string {
        let origin = JSON.stringify(packet)
        // first is type
        let str = '' + packet.type;
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
            if (packet.name == undefined) { throw new Error(`SubPacketTypes.EVENT name can't be empty!`) }
            packet.data = [packet.name, ...packet.data]
        }
        // json data
        if (null != packet.data) {
            let payload = this.tryStringify(packet.data);
            if (payload !== false) {
                str += payload;
            } else {
                return '4"encode error"'
            }
        }
        console.trace(`encoded ${origin} as ${str}`);
        return str;
    }
    tryStringify(str: any) {
        try {
            return JSON.stringify(str);
        } catch (e) {
            return false;
        }
    }
    decode(str: string): Packet {
        let i = 0;
        // ignore parse binary
        // if ((frame.getByte(0) == 'b' && frame.getByte(1) == '4')
        //     || frame.getByte(0) == 4 || frame.getByte(0) == 1) {
        //     return parseBinary(head, frame);
        // }
        // look up type
        let p: Packet = {
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
            let buf = '';
            while (str.charAt(++i) !== '-') {
                buf += str.charAt(i);
                if (i == str.length) break;
            }
            if (buf != `${Number(buf)}` || str.charAt(i) !== '-') {
                return this.error('Illegal attachments');
            }
            p.attachments = Number(buf);
        }

        // look up namespace (if any)
        if ('/' === str.charAt(i + 1)) {
            p.nsp = '';
            while (++i) {
                let c = str.charAt(i);
                if (',' === c) break;
                p.nsp += c;
                if (i === str.length) break;
            }
        } else {
            p.nsp = '/';
        }

        // look up id
        let next = str.charAt(i + 1);
        if ('' !== next && !isNaN(Number(next))) {
            let id = ''
            while (++i) {
                let c = str.charAt(i);
                if (null == c || isNaN(Number(c))) {
                    --i;
                    break;
                }
                id += str.charAt(i);
                if (i === str.length) break;
            }
            p.id = Number(id);
        }

        // ignore binary packet
        if (p.sub_type == SubPacketTypes.BINARY_EVENT) {
            return this.error('not support binary parse...')
        }

        // look up json data
        if (str.charAt(++i)) {
            let payload = this.tryParse(str.substr(i));
            let isPayloadValid = payload !== false && (p.sub_type == SubPacketTypes.ERROR || Array.isArray(payload));
            if (isPayloadValid) {
                p.name = payload[0];
                p.data = payload.slice(1);
            } else {
                return this.error('invalid payload ' + str.substr(i));
            }
        }

        console.trace(`decoded ${str} as ${JSON.stringify(p)}`);
        return p;
    }

    tryParse(str: string) {
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