// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                // @ts-ignore
                 class PrepareItemEnchantEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, offers: org.bukkit.enchantments.EnchantmentOffer, bonus: number)
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
                     * Gets the item to be enchanted.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Get a list of offered experience level costs of the enchantment.
                     */
                    // @ts-ignore
                    public getExpLevelCostsOffered(): number[];
                    /**
                     * Get a list of available {@link EnchantmentOffer} for the player. You can
                     * modify the values to change the available offers for the player. An offer
                     * may be null, if there isn't a enchantment offer at a specific slot. There
                     * are 3 slots in the enchantment table available to modify.
                     */
                    // @ts-ignore
                    public getOffers(): org.bukkit.enchantments.EnchantmentOffer[];
                    /**
                     * Get enchantment bonus in effect - corresponds to number of bookshelves
                     */
                    // @ts-ignore
                    public getEnchantmentBonus(): number;
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
