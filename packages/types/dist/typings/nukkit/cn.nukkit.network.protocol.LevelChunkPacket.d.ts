declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LevelChunkPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public chunkX: number;
                    // @ts-ignore
                    public chunkZ: number;
                    // @ts-ignore
                    public subChunkCount: number;
                    // @ts-ignore
                    public cacheEnabled: boolean;
                    // @ts-ignore
                    public blobIds: number[];
                    // @ts-ignore
                    public data: number[];
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                }
            }
        }
    }
}
