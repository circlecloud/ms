declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class EncryptionRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(serverId: string, publicKey: number, verifyToken: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getServerId(): string;
                        // @ts-ignore
                        public getPublicKey(): number[];
                        // @ts-ignore
                        public getVerifyToken(): number[];
                        // @ts-ignore
                        public setServerId(serverId: string): void;
                        // @ts-ignore
                        public setPublicKey(publicKey: number): void;
                        // @ts-ignore
                        public setVerifyToken(verifyToken: number): void;
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
