declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                 class EntityOcelot extends cn.nukkit.entity.passive.EntityAnimal {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public initEntity(): void;
                    // @ts-ignore
                    public isBreedingItem(item: cn.nukkit.item.Item): boolean;
                }
            }
        }
    }
}
