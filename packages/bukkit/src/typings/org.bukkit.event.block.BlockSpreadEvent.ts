declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockSpreadEvent {
                    constructor(block: org.bukkit.block.Block, source: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the source block involved in this event.
                     */
                    public getSource(): org.bukkit.block.Block;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
