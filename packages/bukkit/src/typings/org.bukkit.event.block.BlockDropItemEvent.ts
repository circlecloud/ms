declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockDropItemEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, blockState: org.bukkit.block.BlockState, player: org.bukkit.entity.Player, items: any[] /*java.util.List*/)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets the BlockState of the block involved in this event before it was
                     * broken.
                     */
                    public getBlockState(): org.bukkit.block.BlockState;
                    /**
                     * Gets list of the Item drops caused by the block break.
                     * This list is mutable - removing an item from it will cause it to not
                     * drop. It is not legal however to add new items to the list.
                     */
                    public getItems(): any[] /*java.util.List*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
