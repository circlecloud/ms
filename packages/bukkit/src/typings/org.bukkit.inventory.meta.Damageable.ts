declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class Damageable {
                    /**
                     * Checks to see if this item has damage
                     */
                    public hasDamage(): boolean;
                    /**
                     * Gets the damage
                     */
                    public getDamage(): number;
                    /**
                     * Sets the damage
                     */
                    public setDamage(damage: number): void;
                    public clone(): org.bukkit.inventory.meta.Damageable;
                }
            }
        }
    }
}
