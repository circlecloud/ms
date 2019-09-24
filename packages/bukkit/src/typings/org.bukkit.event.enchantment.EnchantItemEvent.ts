declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                // @ts-ignore
                 class EnchantItemEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, level: number, enchants: Map<any, any> /*java.util.Map*/, i: number)
                    /**
                     * Gets the player enchanting the item
                     */
                    public getEnchanter(): org.bukkit.entity.Player;
                    /**
                     * Gets the block being used to enchant the item
                     */
                    public getEnchantBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the item to be enchanted (can be modified)
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get cost in exp levels of the enchantment
                     */
                    public getExpLevelCost(): number;
                    /**
                     * Set cost in exp levels of the enchantment
                     */
                    public setExpLevelCost(level: number): void;
                    /**
                     * Get map of enchantment (levels, keyed by type) to be added to item
                     * (modify map returned to change values). Note: Any enchantments not
                     * allowed for the item will be ignored
                     */
                    public getEnchantsToAdd(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Which button was pressed to initiate the enchanting.
                     */
                    public whichButton(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
