declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class RequestChunkRadiusPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public radius: number;
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
