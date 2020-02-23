declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LoginPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public username: string;
                    // @ts-ignore
                    public protocol: number;
                    // @ts-ignore
                    public clientUUID: java.util.UUID;
                    // @ts-ignore
                    public clientId: number;
                    // @ts-ignore
                    public skin: cn.nukkit.entity.data.Skin;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public getProtocol(): number;
                }
            }
        }
    }
}
