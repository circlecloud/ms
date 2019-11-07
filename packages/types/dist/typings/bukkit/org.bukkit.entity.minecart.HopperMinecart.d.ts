// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                // @ts-ignore
                interface HopperMinecart extends org.bukkit.entity.Minecart, org.bukkit.inventory.InventoryHolder, org.bukkit.loot.Lootable {
                    /**
                     * Checks whether or not this Minecart will pick up
                     * items into its inventory.
                     */
                    // @ts-ignore
                     isEnabled(): boolean;
                    /**
                     * Sets whether this Minecart will pick up items.
                     */
                    // @ts-ignore
                     setEnabled(enabled: boolean): void;
                }
            }
        }
    }
}
