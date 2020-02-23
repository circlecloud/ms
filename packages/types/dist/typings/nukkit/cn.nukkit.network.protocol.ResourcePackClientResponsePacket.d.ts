declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ResourcePackClientResponsePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static STATUS_REFUSED: number;
                    // @ts-ignore
                    public static STATUS_SEND_PACKS: number;
                    // @ts-ignore
                    public static STATUS_HAVE_ALL_PACKS: number;
                    // @ts-ignore
                    public static STATUS_COMPLETED: number;
                    // @ts-ignore
                    public responseStatus: number;
                    // @ts-ignore
                    public packEntries: cn.nukkit.network.protocol.ResourcePackClientResponsePacket.Entry[];
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
