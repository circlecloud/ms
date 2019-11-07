// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockDamageEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, block: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, instaBreak: boolean)
                    /**
                     * Gets the player damaging the block involved in this event.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets if the block is set to instantly break when damaged by the player.
                     */
                    // @ts-ignore
                    public getInstaBreak(): boolean;
                    /**
                     * Sets if the block should instantly break when damaged by the player.
                     */
                    // @ts-ignore
                    public setInstaBreak(bool: boolean): void;
                    /**
                     * Gets the ItemStack for the item currently in the player's hand.
                     */
                    // @ts-ignore
                    public getItemInHand(): org.bukkit.inventory.ItemStack;
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
