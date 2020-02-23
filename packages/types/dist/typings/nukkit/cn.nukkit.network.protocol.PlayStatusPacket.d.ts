declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class PlayStatusPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static LOGIN_SUCCESS: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_CLIENT: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_SERVER: number;
                    // @ts-ignore
                    public static PLAYER_SPAWN: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_INVALID_TENANT: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_VANILLA_EDU: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_EDU_VANILLA: number;
                    // @ts-ignore
                    public static LOGIN_FAILED_SERVER_FULL: number;
                    // @ts-ignore
                    public status: number;
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
