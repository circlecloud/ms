declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityPainting extends cn.nukkit.entity.EntityHanging {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static motives: cn.nukkit.entity.item.EntityPainting.Motive[];
                    // @ts-ignore
                    public static getMotive(name: string): cn.nukkit.entity.item.EntityPainting.Motive;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public createAddEntityPacket(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public getArt(): cn.nukkit.entity.item.EntityPainting.Motive;
                    // @ts-ignore
                    public getMotive(): cn.nukkit.entity.item.EntityPainting.Motive;
                }
            }
        }
    }
}
