declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class UpdateEquipmentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public windowId: number;
                    // @ts-ignore
                    public windowType: number;
                    // @ts-ignore
                    public unknown: number;
                    // @ts-ignore
                    public eid: number;
                    // @ts-ignore
                    public namedtag: number[];
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
