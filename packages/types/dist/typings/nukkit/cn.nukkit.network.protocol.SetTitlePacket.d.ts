declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class SetTitlePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_CLEAR: number;
                    // @ts-ignore
                    public static TYPE_RESET: number;
                    // @ts-ignore
                    public static TYPE_TITLE: number;
                    // @ts-ignore
                    public static TYPE_SUBTITLE: number;
                    // @ts-ignore
                    public static TYPE_ACTION_BAR: number;
                    // @ts-ignore
                    public static TYPE_ANIMATION_TIMES: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public text: string;
                    // @ts-ignore
                    public fadeInTime: number;
                    // @ts-ignore
                    public stayTime: number;
                    // @ts-ignore
                    public fadeOutTime: number;
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
