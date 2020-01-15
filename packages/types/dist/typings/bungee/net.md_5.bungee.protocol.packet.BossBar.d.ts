declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class BossBar extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, action: number)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getUuid(): java.util.UUID;
                        // @ts-ignore
                        public getAction(): number;
                        // @ts-ignore
                        public getTitle(): string;
                        // @ts-ignore
                        public getHealth(): number;
                        // @ts-ignore
                        public getColor(): number;
                        // @ts-ignore
                        public getDivision(): number;
                        // @ts-ignore
                        public getFlags(): number;
                        // @ts-ignore
                        public setUuid(uuid: java.util.UUID): void;
                        // @ts-ignore
                        public setAction(action: number): void;
                        // @ts-ignore
                        public setTitle(title: string): void;
                        // @ts-ignore
                        public setHealth(health: number): void;
                        // @ts-ignore
                        public setColor(color: number): void;
                        // @ts-ignore
                        public setDivision(division: number): void;
                        // @ts-ignore
                        public setFlags(flags: number): void;
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
