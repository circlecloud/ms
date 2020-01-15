declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class Respawn extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(dimension: number, seed: number, difficulty: number, gameMode: number, levelType: string)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getDimension(): number;
                        // @ts-ignore
                        public getSeed(): number;
                        // @ts-ignore
                        public getDifficulty(): number;
                        // @ts-ignore
                        public getGameMode(): number;
                        // @ts-ignore
                        public getLevelType(): string;
                        // @ts-ignore
                        public setDimension(dimension: number): void;
                        // @ts-ignore
                        public setSeed(seed: number): void;
                        // @ts-ignore
                        public setDifficulty(difficulty: number): void;
                        // @ts-ignore
                        public setGameMode(gameMode: number): void;
                        // @ts-ignore
                        public setLevelType(levelType: string): void;
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
