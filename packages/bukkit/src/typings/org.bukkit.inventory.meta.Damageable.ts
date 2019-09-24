declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface Damageable {
                    /**
                     * Checks to see if this item has damage
                     */
                     hasDamage(): boolean;
                    /**
                     * Gets the damage
                     */
                     getDamage(): number;
                    /**
                     * Sets the damage
                     */
                     setDamage(damage: number): void;
                     clone(): org.bukkit.inventory.meta.Damageable;
                }
            }
        }
    }
}
