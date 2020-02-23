declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityPotion extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static DATA_POTION_ID: number;
                    // @ts-ignore
                    public potionId: number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getLength(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    protected getGravity(): number;
                    // @ts-ignore
                    protected getDrag(): number;
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                }
            }
        }
    }
}
