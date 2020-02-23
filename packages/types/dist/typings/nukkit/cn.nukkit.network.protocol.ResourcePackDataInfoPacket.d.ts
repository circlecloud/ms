declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ResourcePackDataInfoPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_INVALID: number;
                    // @ts-ignore
                    public static TYPE_ADDON: number;
                    // @ts-ignore
                    public static TYPE_CACHED: number;
                    // @ts-ignore
                    public static TYPE_COPY_PROTECTED: number;
                    // @ts-ignore
                    public static TYPE_BEHAVIOR: number;
                    // @ts-ignore
                    public static TYPE_PERSONA_PIECE: number;
                    // @ts-ignore
                    public static TYPE_RESOURCE: number;
                    // @ts-ignore
                    public static TYPE_SKINS: number;
                    // @ts-ignore
                    public static TYPE_WORLD_TEMPLATE: number;
                    // @ts-ignore
                    public static TYPE_COUNT: number;
                    // @ts-ignore
                    public packId: java.util.UUID;
                    // @ts-ignore
                    public maxChunkSize: number;
                    // @ts-ignore
                    public chunkCount: number;
                    // @ts-ignore
                    public compressedPackSize: number;
                    // @ts-ignore
                    public sha256: number[];
                    // @ts-ignore
                    public premium: boolean;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
