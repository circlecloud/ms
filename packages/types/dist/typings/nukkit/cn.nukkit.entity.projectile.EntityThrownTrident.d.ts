declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                // @ts-ignore
                 class EntityThrownTrident extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity, critical: boolean)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static DATA_SOURCE_ID: number;
                    // @ts-ignore
                    protected trident: cn.nukkit.item.Item;
                    // @ts-ignore
                    protected gravity: number;
                    // @ts-ignore
                    protected drag: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getLength(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getGravity(): number;
                    // @ts-ignore
                    public getDrag(): number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setItem(item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public setCritical(): void;
                    // @ts-ignore
                    public setCritical(value: boolean): void;
                    // @ts-ignore
                    public isCritical(): boolean;
                    // @ts-ignore
                    public getResultDamage(): number;
                    // @ts-ignore
                    protected getBaseDamage(): number;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public spawnTo(player: cn.nukkit.Player): void;
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    public create(type: java.lang.Object, source: cn.nukkit.level.Position, args: java.lang.Object): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}
