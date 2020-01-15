declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                     class PlayerListItem extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number): void;
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void;
                        // @ts-ignore
                        public getAction(): net.md_5.bungee.protocol.packet.PlayerListItem.Action;
                        // @ts-ignore
                        public getItems(): net.md_5.bungee.protocol.packet.PlayerListItem.Item[];
                        // @ts-ignore
                        public setAction(action: net.md_5.bungee.protocol.packet.PlayerListItem.Action): void;
                        // @ts-ignore
                        public setItems(items: net.md_5.bungee.protocol.packet.PlayerListItem.Item): void;
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
