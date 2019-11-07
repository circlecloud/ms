declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustByBlockEvent extends org.bukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: org.bukkit.block.Block, combustee: org.bukkit.entity.Entity, duration: number)
                    /**
                     * The combuster can be lava or a block that is on fire.
                     * <p>
                     * WARNING: block may be null.
                     */
                    // @ts-ignore
                    public getCombuster(): org.bukkit.block.Block;
                }
            }
        }
    }
}
