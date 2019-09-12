declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockDamageEvent {
                    constructor(player: org.bukkit.entity.Player, block: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, instaBreak: boolean)
                    /**
                     * Gets the player damaging the block involved in this event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets if the block is set to instantly break when damaged by the player.
                     */
                    public getInstaBreak(): boolean;
                    /**
                     * Sets if the block should instantly break when damaged by the player.
                     */
                    public setInstaBreak(bool: boolean): void;
                    /**
                     * Gets the ItemStack for the item currently in the player's hand.
                     */
                    public getItemInHand(): org.bukkit.inventory.ItemStack;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
