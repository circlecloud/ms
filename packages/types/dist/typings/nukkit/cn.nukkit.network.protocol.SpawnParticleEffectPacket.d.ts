declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class SpawnParticleEffectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public dimensionId: number;
                    // @ts-ignore
                    public uniqueEntityId: number;
                    // @ts-ignore
                    public position: cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public identifier: string;
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
