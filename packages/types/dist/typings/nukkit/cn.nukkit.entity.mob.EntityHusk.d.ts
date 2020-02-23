declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace mob {
                // @ts-ignore
                 class EntityHusk extends cn.nukkit.entity.mob.EntityMob implements cn.nukkit.entity.EntitySmite {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getName(): string;
                }
            }
        }
    }
}
