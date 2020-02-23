declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class MoveEntityDeltaPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static FLAG_HAS_X: number;
                    // @ts-ignore
                    public static FLAG_HAS_Y: number;
                    // @ts-ignore
                    public static FLAG_HAS_Z: number;
                    // @ts-ignore
                    public static FLAG_HAS_YAW: number;
                    // @ts-ignore
                    public static FLAG_HAS_HEAD_YAW: number;
                    // @ts-ignore
                    public static FLAG_HAS_PITCH: number;
                    // @ts-ignore
                    public flags: number;
                    // @ts-ignore
                    public xDelta: number;
                    // @ts-ignore
                    public yDelta: number;
                    // @ts-ignore
                    public zDelta: number;
                    // @ts-ignore
                    public yawDelta: number;
                    // @ts-ignore
                    public headYawDelta: number;
                    // @ts-ignore
                    public pitchDelta: number;
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
