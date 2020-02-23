declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class SetSpawnPositionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_PLAYER_SPAWN: number;
                    // @ts-ignore
                    public static TYPE_WORLD_SPAWN: number;
                    // @ts-ignore
                    public spawnType: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public spawnForced: boolean;
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
