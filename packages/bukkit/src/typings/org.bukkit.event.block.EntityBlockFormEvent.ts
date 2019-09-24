declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class EntityBlockFormEvent extends org.bukkit.event.block.BlockFormEvent {
                    constructor(entity: org.bukkit.entity.Entity, block: org.bukkit.block.Block, blockstate: org.bukkit.block.BlockState)
                    /**
                     * Get the entity that formed the block.
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
