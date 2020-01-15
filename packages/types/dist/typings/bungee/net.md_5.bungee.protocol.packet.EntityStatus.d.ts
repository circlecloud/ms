declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class EntityStatus extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(entityId: number, status: number)
                        // @ts-ignore
                        public static DEBUG_INFO_REDUCED: number;
                        // @ts-ignore
                        public static DEBUG_INFO_NORMAL: number;
                        // @ts-ignore
                        public read(buf: ByteBuf): void;
                        // @ts-ignore
                        public write(buf: ByteBuf): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getEntityId(): number;
                        // @ts-ignore
                        public getStatus(): number;
                        // @ts-ignore
                        public setEntityId(entityId: number): void;
                        // @ts-ignore
                        public setStatus(status: number): void;
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
