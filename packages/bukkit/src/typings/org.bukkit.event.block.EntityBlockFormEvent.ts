declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class EntityBlockFormEvent {
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
