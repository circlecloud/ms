declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                 class PacketWrapper extends java.lang.Object {
                    // @ts-ignore
                    constructor(packet: net.md_5.bungee.protocol.DefinedPacket, buf: ByteBuf)
                    // @ts-ignore
                    public packet: net.md_5.bungee.protocol.DefinedPacket;
                    // @ts-ignore
                    public buf: ByteBuf;
                    // @ts-ignore
                    public trySingleRelease(): void;
                    // @ts-ignore
                    public setReleased(released: boolean): void;
                }
            }
        }
    }
}
