declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ResourcePackStackPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public mustAccept: boolean;
                    // @ts-ignore
                    public behaviourPackStack: cn.nukkit.resourcepacks.ResourcePack[];
                    // @ts-ignore
                    public resourcePackStack: cn.nukkit.resourcepacks.ResourcePack[];
                    // @ts-ignore
                    public isExperimental: boolean;
                    // @ts-ignore
                    public gameVersion: string;
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
