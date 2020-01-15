declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class TabCompleteRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(transactionId: number, cursor: string)
                        // @ts-ignore
                        constructor(cursor: string, assumeCommand: boolean, hasPosition: boolean, position: number)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getTransactionId(): number;
                        // @ts-ignore
                        public getCursor(): string;
                        // @ts-ignore
                        public isAssumeCommand(): boolean;
                        // @ts-ignore
                        public isHasPositon(): boolean;
                        // @ts-ignore
                        public getPosition(): number;
                        // @ts-ignore
                        public setTransactionId(transactionId: number): void;
                        // @ts-ignore
                        public setCursor(cursor: string): void;
                        // @ts-ignore
                        public setAssumeCommand(assumeCommand: boolean): void;
                        // @ts-ignore
                        public setHasPositon(hasPositon: boolean): void;
                        // @ts-ignore
                        public setPosition(position: number): void;
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
