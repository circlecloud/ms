declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class Chat extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(message: string)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(message: string, position: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getMessage(): string;
                        // @ts-ignore
                        public getPosition(): number;
                        // @ts-ignore
                        public setMessage(message: string): void;
                        // @ts-ignore
                        public setPosition(position: number): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
