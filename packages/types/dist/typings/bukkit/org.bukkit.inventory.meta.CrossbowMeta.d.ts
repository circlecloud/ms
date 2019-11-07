declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface CrossbowMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has any charged projectiles.
                     */
                    // @ts-ignore
                     hasChargedProjectiles(): boolean;
                    /**
                     * Returns an immutable list of the projectiles charged on this item.
                     */
                    // @ts-ignore
                     getChargedProjectiles(): java.util.List;
                    /**
                     * Sets the projectiles charged on this item.
                     * Removes all projectiles when given null.
                     */
                    // @ts-ignore
                     setChargedProjectiles(projectiles: java.util.List): void;
                    /**
                     * Adds a charged projectile to this item.
                     */
                    // @ts-ignore
                     addChargedProjectile(item: org.bukkit.inventory.ItemStack): void;
                }
            }
        }
    }
}
