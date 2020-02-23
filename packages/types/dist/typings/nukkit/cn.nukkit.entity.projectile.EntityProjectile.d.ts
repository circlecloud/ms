declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                // @ts-ignore
                abstract class EntityProjectile extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static DATA_SHOOTER_ID: number;
                    // @ts-ignore
                    public shootingEntity: cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public hadCollision: boolean;
                    // @ts-ignore
                    public closeOnCollide: boolean;
                    // @ts-ignore
                    protected damage: number;
                    // @ts-ignore
                    protected getDamage(): number;
                    // @ts-ignore
                    protected getBaseDamage(): number;
                    // @ts-ignore
                    public getResultDamage(): number;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                }
            }
        }
    }
}
