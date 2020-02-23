declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace mob {
                // @ts-ignore
                 class EntityCreeper extends cn.nukkit.entity.mob.EntityMob {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static DATA_SWELL_DIRECTION: number;
                    // @ts-ignore
                    public static DATA_SWELL: number;
                    // @ts-ignore
                    public static DATA_SWELL_OLD: number;
                    // @ts-ignore
                    public static DATA_POWERED: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public isPowered(): boolean;
                    // @ts-ignore
                    public setPowered(bolt: cn.nukkit.entity.weather.EntityLightningStrike): void;
                    // @ts-ignore
                    public setPowered(powered: boolean): void;
                    // @ts-ignore
                    public onStruckByLightning(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[];
                }
            }
        }
    }
}
