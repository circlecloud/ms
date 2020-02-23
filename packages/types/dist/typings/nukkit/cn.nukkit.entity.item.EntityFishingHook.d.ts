declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityFishingHook extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static WAIT_CHANCE: number;
                    // @ts-ignore
                    public static CHANCE: number;
                    // @ts-ignore
                    public chance: boolean;
                    // @ts-ignore
                    public waitChance: number;
                    // @ts-ignore
                    public attracted: boolean;
                    // @ts-ignore
                    public attractTimer: number;
                    // @ts-ignore
                    public caught: boolean;
                    // @ts-ignore
                    public coughtTimer: number;
                    // @ts-ignore
                    public fish: cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public rod: cn.nukkit.item.Item;
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
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public getWaterHeight(): number;
                    // @ts-ignore
                    public fishBites(): void;
                    // @ts-ignore
                    public spawnFish(): void;
                    // @ts-ignore
                    public attractFish(): boolean;
                    // @ts-ignore
                    public reelLine(): void;
                    // @ts-ignore
                    public spawnTo(player: cn.nukkit.Player): void;
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void;
                }
            }
        }
    }
}
