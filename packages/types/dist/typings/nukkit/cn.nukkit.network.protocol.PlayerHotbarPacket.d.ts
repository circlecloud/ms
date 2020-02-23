declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class PlayerHotbarPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public selectedHotbarSlot: number;
                    // @ts-ignore
                    public windowId: number;
                    // @ts-ignore
                    public selectHotbarSlot: boolean;
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
