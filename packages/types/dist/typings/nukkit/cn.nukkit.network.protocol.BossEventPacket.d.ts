declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class BossEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_SHOW: number;
                    // @ts-ignore
                    public static TYPE_REGISTER_PLAYER: number;
                    // @ts-ignore
                    public static TYPE_UPDATE: number;
                    // @ts-ignore
                    public static TYPE_HIDE: number;
                    // @ts-ignore
                    public static TYPE_UNREGISTER_PLAYER: number;
                    // @ts-ignore
                    public static TYPE_HEALTH_PERCENT: number;
                    // @ts-ignore
                    public static TYPE_TITLE: number;
                    // @ts-ignore
                    public static TYPE_UNKNOWN_6: number;
                    // @ts-ignore
                    public static TYPE_TEXTURE: number;
                    // @ts-ignore
                    public bossEid: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public playerEid: number;
                    // @ts-ignore
                    public healthPercent: number;
                    // @ts-ignore
                    public title: string;
                    // @ts-ignore
                    public unknown: number;
                    // @ts-ignore
                    public color: number;
                    // @ts-ignore
                    public overlay: number;
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
