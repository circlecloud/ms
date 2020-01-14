declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class TabCompleteRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(transactionId: number, cursor: string)
                        // @ts-ignore
                        constructor(cursor: string, assumeCommand: boolean, hasPosition: boolean, position: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                    }
                }
            }
        }
    }
}
