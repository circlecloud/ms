declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class VideoStreamConnectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ACTION_OPEN: number;
                    // @ts-ignore
                    public static ACTION_CLOSE: number;
                    // @ts-ignore
                    public address: string;
                    // @ts-ignore
                    public screenshotFrequency: number;
                    // @ts-ignore
                    public action: number;
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
