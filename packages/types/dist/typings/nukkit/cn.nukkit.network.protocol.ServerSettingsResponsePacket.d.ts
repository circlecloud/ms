declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ServerSettingsResponsePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public formId: number;
                    // @ts-ignore
                    public data: string;
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
