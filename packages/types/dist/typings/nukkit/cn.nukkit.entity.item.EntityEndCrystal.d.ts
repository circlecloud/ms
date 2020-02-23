declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityEndCrystal extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityExplosive {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public explode(): void;
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public showBase(): boolean;
                    // @ts-ignore
                    public setShowBase(value: boolean): void;
                }
            }
        }
    }
}
