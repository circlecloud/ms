declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockBreakEvent implements org.bukkit.event.Cancellable {
                    constructor(theBlock: org.bukkit.block.Block, player: org.bukkit.entity.Player)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Sets whether or not the block will drop items as it normally would.
                     */
                    public setDropItems(dropItems: boolean): void;
                    /**
                     * Gets whether or not the block will drop items.
                     */
                    public isDropItems(): boolean;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
