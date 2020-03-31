declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityPrimedTNT extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityExplosive {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, source: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    protected fuse: number;
                    // @ts-ignore
                    protected source: cn.nukkit.entity.Entity;
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
                    protected getBaseOffset(): number;
                    // @ts-ignore
                    public canCollide(): boolean;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean;
                    // @ts-ignore
                    public saveNBT(): void;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public explode(): void;
                    // @ts-ignore
                    public getSource(): cn.nukkit.entity.Entity;
                }
            }
        }
    }
}