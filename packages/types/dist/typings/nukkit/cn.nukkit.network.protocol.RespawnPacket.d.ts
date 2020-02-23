declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class RespawnPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static STATE_SEARCHING_FOR_SPAWN: number;
                    // @ts-ignore
                    public static STATE_READY_TO_SPAWN: number;
                    // @ts-ignore
                    public static STATE_CLIENT_READY_TO_SPAWN: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public respawnState: number;
                    // @ts-ignore
                    public runtimeEntityId: number;
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
