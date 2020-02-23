declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace mob {
                // @ts-ignore
                abstract class EntityMob extends cn.nukkit.entity.EntityCreature {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean;
                }
            }
        }
    }
}
