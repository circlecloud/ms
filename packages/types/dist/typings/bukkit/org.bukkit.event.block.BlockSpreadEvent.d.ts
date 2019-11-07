declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockSpreadEvent extends org.bukkit.event.block.BlockFormEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, source: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the source block involved in this event.
                     */
                    // @ts-ignore
                    public getSource(): org.bukkit.block.Block;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
