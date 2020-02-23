declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                abstract class EntityAnimal extends cn.nukkit.entity.EntityCreature implements cn.nukkit.entity.EntityAgeable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public isBaby(): boolean;
                    // @ts-ignore
                    public isBreedingItem(item: cn.nukkit.item.Item): boolean;
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                }
            }
        }
    }
}
