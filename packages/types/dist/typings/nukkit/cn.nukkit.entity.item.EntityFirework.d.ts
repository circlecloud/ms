declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                // @ts-ignore
                 class EntityFirework extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public setFirework(item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                }
            }
        }
    }
}
