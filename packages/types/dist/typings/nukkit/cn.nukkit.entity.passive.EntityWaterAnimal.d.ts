declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                abstract class EntityWaterAnimal extends cn.nukkit.entity.EntityCreature implements cn.nukkit.entity.EntityAgeable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public isBaby(): boolean;
                }
            }
        }
    }
}
