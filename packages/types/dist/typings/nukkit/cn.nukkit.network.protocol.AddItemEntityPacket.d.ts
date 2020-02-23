declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class AddItemEntityPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public entityUniqueId: number;
                    // @ts-ignore
                    public entityRuntimeId: number;
                    // @ts-ignore
                    public item: cn.nukkit.item.Item;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public speedX: number;
                    // @ts-ignore
                    public speedY: number;
                    // @ts-ignore
                    public speedZ: number;
                    // @ts-ignore
                    public metadata: cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public isFromFishing: boolean;
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
