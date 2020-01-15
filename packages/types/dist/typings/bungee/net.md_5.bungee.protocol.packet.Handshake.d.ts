declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class Handshake extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(protocolVersion: number, host: string, port: number, requestedProtocol: number)
                        // @ts-ignore
                        public read(buf: ByteBuf): void;
                        // @ts-ignore
                        public write(buf: ByteBuf): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getProtocolVersion(): number;
                        // @ts-ignore
                        public getHost(): string;
                        // @ts-ignore
                        public getPort(): number;
                        // @ts-ignore
                        public getRequestedProtocol(): number;
                        // @ts-ignore
                        public setProtocolVersion(protocolVersion: number): void;
                        // @ts-ignore
                        public setHost(host: string): void;
                        // @ts-ignore
                        public setPort(port: number): void;
                        // @ts-ignore
                        public setRequestedProtocol(requestedProtocol: number): void;
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
