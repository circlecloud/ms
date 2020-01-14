declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace entitymap {
                // @ts-ignore
                abstract class EntityMap extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static getEntityMap(version: number): net.md_5.bungee.entitymap.EntityMap;
                    // @ts-ignore
                    protected addRewrite(id: number, direction: any /*ProtocolConstants.Direction*/, varint: boolean): void;
                    // @ts-ignore
                    public rewriteServerbound(packet: ByteBuf, oldId: number, newId: number): void;
                    // @ts-ignore
                    public rewriteServerbound(packet: ByteBuf, oldId: number, newId: number, protocolVersion: number): void;
                    // @ts-ignore
                    public rewriteClientbound(packet: ByteBuf, oldId: number, newId: number): void;
                    // @ts-ignore
                    public rewriteClientbound(packet: ByteBuf, oldId: number, newId: number, protocolVersion: number): void;
                    // @ts-ignore
                    protected static rewriteInt(packet: ByteBuf, oldId: number, newId: number, offset: number): void;
                    // @ts-ignore
                    protected static rewriteVarInt(packet: ByteBuf, oldId: number, newId: number, offset: number): void;
                    // @ts-ignore
                    protected static rewriteMetaVarInt(packet: ByteBuf, oldId: number, newId: number, metaIndex: number): void;
                    // @ts-ignore
                    protected static rewriteMetaVarInt(packet: ByteBuf, oldId: number, newId: number, metaIndex: number, protocolVersion: number): void;
                }
            }
        }
    }
}
