declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class PlayerActionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ACTION_START_BREAK: number;
                    // @ts-ignore
                    public static ACTION_ABORT_BREAK: number;
                    // @ts-ignore
                    public static ACTION_STOP_BREAK: number;
                    // @ts-ignore
                    public static ACTION_GET_UPDATED_BLOCK: number;
                    // @ts-ignore
                    public static ACTION_DROP_ITEM: number;
                    // @ts-ignore
                    public static ACTION_START_SLEEPING: number;
                    // @ts-ignore
                    public static ACTION_STOP_SLEEPING: number;
                    // @ts-ignore
                    public static ACTION_RESPAWN: number;
                    // @ts-ignore
                    public static ACTION_JUMP: number;
                    // @ts-ignore
                    public static ACTION_START_SPRINT: number;
                    // @ts-ignore
                    public static ACTION_STOP_SPRINT: number;
                    // @ts-ignore
                    public static ACTION_START_SNEAK: number;
                    // @ts-ignore
                    public static ACTION_STOP_SNEAK: number;
                    // @ts-ignore
                    public static ACTION_DIMENSION_CHANGE_REQUEST: number;
                    // @ts-ignore
                    public static ACTION_DIMENSION_CHANGE_ACK: number;
                    // @ts-ignore
                    public static ACTION_START_GLIDE: number;
                    // @ts-ignore
                    public static ACTION_STOP_GLIDE: number;
                    // @ts-ignore
                    public static ACTION_BUILD_DENIED: number;
                    // @ts-ignore
                    public static ACTION_CONTINUE_BREAK: number;
                    // @ts-ignore
                    public static ACTION_SET_ENCHANTMENT_SEED: number;
                    // @ts-ignore
                    public static ACTION_START_SWIMMING: number;
                    // @ts-ignore
                    public static ACTION_STOP_SWIMMING: number;
                    // @ts-ignore
                    public static ACTION_START_SPIN_ATTACK: number;
                    // @ts-ignore
                    public static ACTION_STOP_SPIN_ATTACK: number;
                    // @ts-ignore
                    public entityId: number;
                    // @ts-ignore
                    public action: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public face: number;
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
