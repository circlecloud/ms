declare namespace org {
    namespace bukkit {
        namespace entity {
            class AbstractArrow {
                /**
                 * Gets the knockback strength for an arrow, which is the
                 * {@link org.bukkit.enchantments.Enchantment#KNOCKBACK KnockBack} level
                 * of the bow that shot it.
                 */
                public getKnockbackStrength(): number;
                /**
                 * Sets the knockback strength for an arrow.
                 */
                public setKnockbackStrength(knockbackStrength: number): void;
                /**
                 * Gets the base amount of damage this arrow will do.
                 * Defaults to 2.0 for a normal arrow with
                 * <code>0.5 * (1 + power level)</code> added for arrows fired from
                 * enchanted bows.
                 */
                public getDamage(): number;
                /**
                 * Sets the base amount of damage this arrow will do.
                 */
                public setDamage(damage: number): void;
                /**
                 * Gets the number of times this arrow can pierce through an entity.
                 */
                public getPierceLevel(): number;
                /**
                 * Sets the number of times this arrow can pierce through an entity.
                 * Must be between 0 and 127 times.
                 */
                public setPierceLevel(pierceLevel: number): void;
                /**
                 * Gets whether this arrow is critical.
                 * <p>
                 * Critical arrows have increased damage and cause particle effects.
                 * <p>
                 * Critical arrows generally occur when a player fully draws a bow before
                 * firing.
                 */
                public isCritical(): boolean;
                /**
                 * Sets whether or not this arrow should be critical.
                 */
                public setCritical(critical: boolean): void;
                /**
                 * Gets whether this arrow is in a block or not.
                 * <p>
                 * Arrows in a block are motionless and may be picked up by players.
                 */
                public isInBlock(): boolean;
                /**
                 * Gets the block to which this arrow is attached.
                 */
                public getAttachedBlock(): org.bukkit.block.Block;
                /**
                 * Gets the current pickup status of this arrow.
                 */
                public getPickupStatus(): org.bukkit.entity.AbstractArrow.PickupStatus;
                /**
                 * Sets the current pickup status of this arrow.
                 */
                public setPickupStatus(status: org.bukkit.entity.AbstractArrow.PickupStatus): void;
            }
        }
    }
}
