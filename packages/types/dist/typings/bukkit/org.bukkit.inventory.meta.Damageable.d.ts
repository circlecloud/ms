declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface Damageable {
                    /**
                     * Checks to see if this item has damage
                     */
                    // @ts-ignore
                     hasDamage(): boolean;
                    /**
                     * Gets the damage
                     */
                    // @ts-ignore
                     getDamage(): number;
                    /**
                     * Sets the damage
                     */
                    // @ts-ignore
                     setDamage(damage: number): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.Damageable;
                }
            }
        }
    }
}
