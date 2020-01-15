declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class ScoreboardObjective extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: string, value: string, type: net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay, action: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public getValue(): string;
                        // @ts-ignore
                        public getType(): net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay;
                        /**
                         * 0 to create, 1 to remove, 2 to update display text.
                         */
                        // @ts-ignore
                        public getAction(): number;
                        // @ts-ignore
                        public setName(name: string): void;
                        // @ts-ignore
                        public setValue(value: string): void;
                        // @ts-ignore
                        public setType(type: net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay): void;
                        /**
                         * 0 to create, 1 to remove, 2 to update display text.
                         */
                        // @ts-ignore
                        public setAction(action: number): void;
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
