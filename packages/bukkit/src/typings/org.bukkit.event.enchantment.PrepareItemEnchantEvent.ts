declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                class PrepareItemEnchantEvent {
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, offers: org.bukkit.enchantments.EnchantmentOffer, bonus: number)
                    /**
                     * Gets the player enchanting the item
                     */
                    public getEnchanter(): org.bukkit.entity.Player;
                    /**
                     * Gets the block being used to enchant the item
                     */
                    public getEnchantBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the item to be enchanted.
                     */
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get a list of offered experience level costs of the enchantment.
                     */
                    public getExpLevelCostsOffered(): number[];
                    /**
                     * Get a list of available {@link EnchantmentOffer} for the player. You can
                     * modify the values to change the available offers for the player. An offer
                     * may be null, if there isn't a enchantment offer at a specific slot. There
                     * are 3 slots in the enchantment table available to modify.
                     */
                    public getOffers(): org.bukkit.enchantments.EnchantmentOffer[];
                    /**
                     * Get enchantment bonus in effect - corresponds to number of bookshelves
                     */
                    public getEnchantmentBonus(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
