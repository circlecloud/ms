declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityBreakDoorEvent extends org.bukkit.event.entity.EntityChangeBlockEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, targetBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                }
            }
        }
    }
}
