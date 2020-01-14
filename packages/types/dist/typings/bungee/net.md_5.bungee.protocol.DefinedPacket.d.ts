declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                abstract class DefinedPacket extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static writeString(s: string, buf: ByteBuf): void;
                    // @ts-ignore
                    public static readString(buf: ByteBuf): string;
                    // @ts-ignore
                    public static writeArray(b: number, buf: ByteBuf): void;
                    // @ts-ignore
                    public static toArray(buf: ByteBuf): number[];
                    // @ts-ignore
                    public static readArray(buf: ByteBuf): number[];
                    // @ts-ignore
                    public static readArray(buf: ByteBuf, limit: number): number[];
                    // @ts-ignore
                    public static readVarIntArray(buf: ByteBuf): number[];
                    // @ts-ignore
                    public static writeStringArray(s: java.util.List, buf: ByteBuf): void;
                    // @ts-ignore
                    public static readStringArray(buf: ByteBuf): java.util.List;
                    // @ts-ignore
                    public static readVarInt(input: ByteBuf): number;
                    // @ts-ignore
                    public static readVarInt(input: ByteBuf, maxBytes: number): number;
                    // @ts-ignore
                    public static writeVarInt(value: number, output: ByteBuf): void;
                    // @ts-ignore
                    public static readVarShort(buf: ByteBuf): number;
                    // @ts-ignore
                    public static writeVarShort(buf: ByteBuf, toWrite: number): void;
                    // @ts-ignore
                    public static writeUUID(value: java.util.UUID, output: ByteBuf): void;
                    // @ts-ignore
                    public static readUUID(input: ByteBuf): java.util.UUID;
                    // @ts-ignore
                    public read(buf: ByteBuf): void;
                    // @ts-ignore
                    public read(buf: ByteBuf, direction: any /*net.md_5.bungee.protocol.ProtocolConstants.Direction*/, protocolVersion: number): void;
                    // @ts-ignore
                    public write(buf: ByteBuf): void;
                    // @ts-ignore
                    public write(buf: ByteBuf, direction: any /*net.md_5.bungee.protocol.ProtocolConstants.Direction*/, protocolVersion: number): void;
                    // @ts-ignore
                    public abstract handle(handler: any /*net.md_5.bungee.protocol.AbstractPacketHandler*/): void;
                    // @ts-ignore
                    public abstract equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public abstract hashCode(): number;
                    // @ts-ignore
                    public abstract toString(): string;
                }
            }
        }
    }
}
