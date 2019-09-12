declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockBurnEvent {
                    constructor(block: org.bukkit.block.Block)
                    constructor(block: org.bukkit.block.Block, ignitingBlock: org.bukkit.block.Block)
                    /**
                     * Gets the block which ignited this block.
                     */
                    public getIgnitingBlock(): org.bukkit.block.Block;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
