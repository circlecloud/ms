declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                abstract class BlockEvent {
                    constructor(theBlock: org.bukkit.block.Block)
                    protected block: org.bukkit.block.Block;
                    /**
                     * Gets the block involved in this event.
                     */
                    public getBlock(): org.bukkit.block.Block;
                }
            }
        }
    }
}
