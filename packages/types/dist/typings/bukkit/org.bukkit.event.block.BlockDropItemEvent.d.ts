declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockDropItemEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blockState: org.bukkit.block.BlockState, player: org.bukkit.entity.Player, items: java.util.List)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets the BlockState of the block involved in this event before it was
                     * broken.
                     */
                    // @ts-ignore
                    public getBlockState(): org.bukkit.block.BlockState;
                    /**
                     * Gets list of the Item drops caused by the block break.
                     * This list is mutable - removing an item from it will cause it to not
                     * drop. It is not legal however to add new items to the list.
                     */
                    // @ts-ignore
                    public getItems(): java.util.List;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
