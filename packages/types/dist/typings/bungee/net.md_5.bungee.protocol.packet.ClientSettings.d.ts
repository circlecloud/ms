declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class ClientSettings extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(locale: string, viewDistance: number, chatFlags: number, chatColours: boolean, difficulty: number, skinParts: number, mainHand: number)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getLocale(): string;
                        // @ts-ignore
                        public getViewDistance(): number;
                        // @ts-ignore
                        public getChatFlags(): number;
                        // @ts-ignore
                        public isChatColours(): boolean;
                        // @ts-ignore
                        public getDifficulty(): number;
                        // @ts-ignore
                        public getSkinParts(): number;
                        // @ts-ignore
                        public getMainHand(): number;
                        // @ts-ignore
                        public setLocale(locale: string): void;
                        // @ts-ignore
                        public setViewDistance(viewDistance: number): void;
                        // @ts-ignore
                        public setChatFlags(chatFlags: number): void;
                        // @ts-ignore
                        public setChatColours(chatColours: boolean): void;
                        // @ts-ignore
                        public setDifficulty(difficulty: number): void;
                        // @ts-ignore
                        public setSkinParts(skinParts: number): void;
                        // @ts-ignore
                        public setMainHand(mainHand: number): void;
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
