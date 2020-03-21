import { PacketTypes, SubPacketTypes } from './types'

export interface Packet {
    type: PacketTypes;
    sub_type?: SubPacketTypes;
    nsp?: string;
    id?: number;
    name?: string;
    data?: any;
    attachments?: any;
}
