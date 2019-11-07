// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockBreakEvent extends org.bukkit.event.block.BlockExpEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, player: org.bukkit.entity.Player)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Sets whether or not the block will drop items as it normally would.
                     */
                    // @ts-ignore
                    public setDropItems(dropItems: boolean): void;
                    /**
                     * Gets whether or not the block will drop items.
                     */
                    // @ts-ignore
                    public isDropItems(): boolean;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
