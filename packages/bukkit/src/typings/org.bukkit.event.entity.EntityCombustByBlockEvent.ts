declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustByBlockEvent {
                    constructor(combuster: org.bukkit.block.Block, combustee: org.bukkit.entity.Entity, duration: number)
                    /**
                     * The combuster can be lava or a block that is on fire.
                     * <p>
                     * WARNING: block may be null.
                     */
                    public getCombuster(): org.bukkit.block.Block;
                }
            }
        }
    }
}
