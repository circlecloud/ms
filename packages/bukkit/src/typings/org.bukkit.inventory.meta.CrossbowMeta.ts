declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface CrossbowMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has any charged projectiles.
                     */
                     hasChargedProjectiles(): boolean;
                    /**
                     * Returns an immutable list of the projectiles charged on this item.
                     */
                     getChargedProjectiles(): any[] /*java.util.List*/;
                    /**
                     * Sets the projectiles charged on this item.
                     * Removes all projectiles when given null.
                     */
                     setChargedProjectiles(projectiles: any[] /*java.util.List*/): void;
                    /**
                     * Adds a charged projectile to this item.
                     */
                     addChargedProjectile(item: org.bukkit.inventory.ItemStack): void;
                }
            }
        }
    }
}
