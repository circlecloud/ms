declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class AddEntityPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static LEGACY_IDS: any;
                    // @ts-ignore
                    public entityUniqueId: number;
                    // @ts-ignore
                    public entityRuntimeId: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public id: string;
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
                    public yaw: number;
                    // @ts-ignore
                    public pitch: number;
                    // @ts-ignore
                    public headYaw: number;
                    // @ts-ignore
                    public metadata: cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public attributes: cn.nukkit.entity.Attribute[];
                    // @ts-ignore
                    public links: cn.nukkit.network.protocol.types.EntityLink[];
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
