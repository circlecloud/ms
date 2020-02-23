declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                // @ts-ignore
                 class EntityArrow extends cn.nukkit.entity.projectile.EntityProjectile {
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
                    public static PICKUP_NONE: number;
                    // @ts-ignore
                    public static PICKUP_ANY: number;
                    // @ts-ignore
                    public static PICKUP_CREATIVE: number;
                    // @ts-ignore
                    protected pickupMode: number;
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
                    public saveNBT(): void;
                    // @ts-ignore
                    public getPickupMode(): number;
                    // @ts-ignore
                    public setPickupMode(pickupMode: number): void;
                }
            }
        }
    }
}
