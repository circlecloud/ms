declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                 class EntityPanda extends cn.nukkit.entity.passive.EntityAnimal {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public getLength(): number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public initEntity(): void;
                }
            }
        }
    }
}
