export enum PacketTypes {
    OPEN,
    CLOSE,
    PING,
    PONG,
    MESSAGE,
    UPGRADE,
    NOOP,
}
export enum SubPacketTypes {
    CONNECT,
    DISCONNECT,
    EVENT,
    ACK,
    ERROR,
    BINARY_EVENT,
    BINARY_ACK
}
