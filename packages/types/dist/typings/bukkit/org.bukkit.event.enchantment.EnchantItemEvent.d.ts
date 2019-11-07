declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                // @ts-ignore
                 class EnchantItemEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, level: number, enchants: java.util.Map, i: number)
                    /**
                     * Gets the player enchanting the item
                     */
                    // @ts-ignore
                    public getEnchanter(): org.bukkit.entity.Player;
                    /**
                     * Gets the block being used to enchant the item
                     */
                    // @ts-ignore
                    public getEnchantBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the item to be enchanted (can be modified)
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get cost in exp levels of the enchantment
                     */
                    // @ts-ignore
                    public getExpLevelCost(): number;
                    /**
                     * Set cost in exp levels of the enchantment
                     */
                    // @ts-ignore
                    public setExpLevelCost(level: number): void;
                    /**
                     * Get map of enchantment (levels, keyed by type) to be added to item
                     * (modify map returned to change values). Note: Any enchantments not
                     * allowed for the item will be ignored
                     */
                    // @ts-ignore
                    public getEnchantsToAdd(): java.util.Map;
                    /**
                     * Which button was pressed to initiate the enchanting.
                     */
                    // @ts-ignore
                    public whichButton(): number;
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
