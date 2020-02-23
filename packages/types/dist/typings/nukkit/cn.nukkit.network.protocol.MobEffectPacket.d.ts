declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class MobEffectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static EVENT_ADD: number;
                    // @ts-ignore
                    public static EVENT_MODIFY: number;
                    // @ts-ignore
                    public static EVENT_REMOVE: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public eventId: number;
                    // @ts-ignore
                    public effectId: number;
                    // @ts-ignore
                    public amplifier: number;
                    // @ts-ignore
                    public particles: boolean;
                    // @ts-ignore
                    public duration: number;
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
