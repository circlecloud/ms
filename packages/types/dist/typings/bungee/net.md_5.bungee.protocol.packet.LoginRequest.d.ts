declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class LoginRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(data: string)
                        // @ts-ignore
                        public read(buf: ByteBuf): void;
                        // @ts-ignore
                        public write(buf: ByteBuf): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getData(): string;
                        // @ts-ignore
                        public setData(data: string): void;
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