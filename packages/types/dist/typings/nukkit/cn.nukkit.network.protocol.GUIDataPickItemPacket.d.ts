declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class GUIDataPickItemPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public hotbarSlot: number;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public decode(): void;
                }
            }
        }
    }
}
