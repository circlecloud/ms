// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                abstract class BlockEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    protected block: org.bukkit.block.Block;
                    /**
                     * Gets the block involved in this event.
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block;
                }
            }
        }
    }
}
