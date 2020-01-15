declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class ScoreboardScore extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(itemName: string, action: number, scoreName: string, value: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getItemName(): string;
                        /**
                         * 0 = create / update, 1 = remove.
                         */
                        // @ts-ignore
                        public getAction(): number;
                        // @ts-ignore
                        public getScoreName(): string;
                        // @ts-ignore
                        public getValue(): number;
                        // @ts-ignore
                        public setItemName(itemName: string): void;
                        /**
                         * 0 = create / update, 1 = remove.
                         */
                        // @ts-ignore
                        public setAction(action: number): void;
                        // @ts-ignore
                        public setScoreName(scoreName: string): void;
                        // @ts-ignore
                        public setValue(value: number): void;
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
