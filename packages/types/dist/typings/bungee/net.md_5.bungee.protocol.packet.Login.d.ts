declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class Login extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(entityId: number, gameMode: number, dimension: number, seed: number, difficulty: number, maxPlayers: number, levelType: string, viewDistance: number, reducedDebugInfo: boolean, normalRespawn: boolean)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getEntityId(): number;
                        // @ts-ignore
                        public getGameMode(): number;
                        // @ts-ignore
                        public getDimension(): number;
                        // @ts-ignore
                        public getSeed(): number;
                        // @ts-ignore
                        public getDifficulty(): number;
                        // @ts-ignore
                        public getMaxPlayers(): number;
                        // @ts-ignore
                        public getLevelType(): string;
                        // @ts-ignore
                        public getViewDistance(): number;
                        // @ts-ignore
                        public isReducedDebugInfo(): boolean;
                        // @ts-ignore
                        public isNormalRespawn(): boolean;
                        // @ts-ignore
                        public setEntityId(entityId: number): void;
                        // @ts-ignore
                        public setGameMode(gameMode: number): void;
                        // @ts-ignore
                        public setDimension(dimension: number): void;
                        // @ts-ignore
                        public setSeed(seed: number): void;
                        // @ts-ignore
                        public setDifficulty(difficulty: number): void;
                        // @ts-ignore
                        public setMaxPlayers(maxPlayers: number): void;
                        // @ts-ignore
                        public setLevelType(levelType: string): void;
                        // @ts-ignore
                        public setViewDistance(viewDistance: number): void;
                        // @ts-ignore
                        public setReducedDebugInfo(reducedDebugInfo: boolean): void;
                        // @ts-ignore
                        public setNormalRespawn(normalRespawn: boolean): void;
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
