declare namespace org {
    namespace bukkit {
        namespace entity {
            class Damageable {
                /**
                 * Deals the given amount of damage to this entity.
                 */
                public damage(amount: number): void;
                /**
                 * Deals the given amount of damage to this entity, from a specified
                 * entity.
                 */
                public damage(amount: number, source: org.bukkit.entity.Entity): void;
                /**
                 * Gets the entity's health from 0 to {@link #getMaxHealth()}, where 0 is dead.
                 */
                public getHealth(): number;
                /**
                 * Sets the entity's health from 0 to {@link #getMaxHealth()}, where 0 is
                 * dead.
                 */
                public setHealth(health: number): void;
                /**
                 * Gets the maximum health this entity has.
                 */
                public getMaxHealth(): number;
                /**
                 * Sets the maximum health this entity can have.
                 * <p>
                 * If the health of the entity is above the value provided it will be set
                 * to that value.
                 * <p>
                 * Note: An entity with a health bar ({@link Player}, {@link EnderDragon},
                 * {@link Wither}, etc...} will have their bar scaled accordingly.
                 */
                public setMaxHealth(health: number): void;
                /**
                 * Resets the max health to the original amount.
                 */
                public resetMaxHealth(): void;
            }
        }
    }
}
