declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class CrossbowMeta {
                    /**
                     * Returns whether the item has any charged projectiles.
                     */
                    public hasChargedProjectiles(): boolean;
                    /**
                     * Returns an immutable list of the projectiles charged on this item.
                     */
                    public getChargedProjectiles(): any[] /*java.util.List*/;
                    /**
                     * Sets the projectiles charged on this item.
                     * Removes all projectiles when given null.
                     */
                    public setChargedProjectiles(projectiles: any[] /*java.util.List*/): void;
                    /**
                     * Adds a charged projectile to this item.
                     */
                    public addChargedProjectile(item: org.bukkit.inventory.ItemStack): void;
                }
            }
        }
    }
}
