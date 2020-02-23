declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class MovePlayerPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static MODE_NORMAL: number;
                    // @ts-ignore
                    public static MODE_RESET: number;
                    // @ts-ignore
                    public static MODE_TELEPORT: number;
                    // @ts-ignore
                    public static MODE_PITCH: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public yaw: number;
                    // @ts-ignore
                    public headYaw: number;
                    // @ts-ignore
                    public pitch: number;
                    // @ts-ignore
                    public mode: number;
                    // @ts-ignore
                    public onGround: boolean;
                    // @ts-ignore
                    public ridingEid: number;
                    // @ts-ignore
                    public int1: number;
                    // @ts-ignore
                    public int2: number;
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
