declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class TabCompleteResponse extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(transactionId: number, suggestions: Suggestions)
                        // @ts-ignore
                        constructor(commands: java.util.List)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: any /*net.md_5.bungee.protocol.ProtocolConstants.Direction*/, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: any /*net.md_5.bungee.protocol.ProtocolConstants.Direction*/, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: any /*net.md_5.bungee.protocol.AbstractPacketHandler*/): void;
                    }
                }
            }
        }
    }
}
