declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class Team extends net.md_5.bungee.protocol.DefinedPacket {
                        /**
                         * Packet to destroy a team.
                         */
                        // @ts-ignore
                        constructor(name: string)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: string, mode: number, displayName: string, prefix: string, suffix: string, nameTagVisibility: string, collisionRule: string, color: number, friendlyFire: number, players: string)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getName(): string;
                        /**
                         * 0 - create, 1 remove, 2 info update, 3 player add, 4 player remove.
                         */
                        // @ts-ignore
                        public getMode(): number;
                        // @ts-ignore
                        public getDisplayName(): string;
                        // @ts-ignore
                        public getPrefix(): string;
                        // @ts-ignore
                        public getSuffix(): string;
                        // @ts-ignore
                        public getNameTagVisibility(): string;
                        // @ts-ignore
                        public getCollisionRule(): string;
                        // @ts-ignore
                        public getColor(): number;
                        // @ts-ignore
                        public getFriendlyFire(): number;
                        // @ts-ignore
                        public getPlayers(): java.lang.String[];
                        // @ts-ignore
                        public setName(name: string): void;
                        /**
                         * 0 - create, 1 remove, 2 info update, 3 player add, 4 player remove.
                         */
                        // @ts-ignore
                        public setMode(mode: number): void;
                        // @ts-ignore
                        public setDisplayName(displayName: string): void;
                        // @ts-ignore
                        public setPrefix(prefix: string): void;
                        // @ts-ignore
                        public setSuffix(suffix: string): void;
                        // @ts-ignore
                        public setNameTagVisibility(nameTagVisibility: string): void;
                        // @ts-ignore
                        public setCollisionRule(collisionRule: string): void;
                        // @ts-ignore
                        public setColor(color: number): void;
                        // @ts-ignore
                        public setFriendlyFire(friendlyFire: number): void;
                        // @ts-ignore
                        public setPlayers(players: string): void;
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
