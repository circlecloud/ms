declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AbstractArrow extends org.bukkit.entity.Projectile {
                /**
                 * Gets the knockback strength for an arrow, which is the
                 * {@link org.bukkit.enchantments.Enchantment#KNOCKBACK KnockBack} level
                 * of the bow that shot it.
                 */
                 getKnockbackStrength(): number;
                /**
                 * Sets the knockback strength for an arrow.
                 */
                 setKnockbackStrength(knockbackStrength: number): void;
                /**
                 * Gets the base amount of damage this arrow will do.
                 * Defaults to 2.0 for a normal arrow with
                 * <code>0.5 * (1 + power level)</code> added for arrows fired from
                 * enchanted bows.
                 */
                 getDamage(): number;
                /**
                 * Sets the base amount of damage this arrow will do.
                 */
                 setDamage(damage: number): void;
                /**
                 * Gets the number of times this arrow can pierce through an entity.
                 */
                 getPierceLevel(): number;
                /**
                 * Sets the number of times this arrow can pierce through an entity.
                 * Must be between 0 and 127 times.
                 */
                 setPierceLevel(pierceLevel: number): void;
                /**
                 * Gets whether this arrow is critical.
                 * <p>
                 * Critical arrows have increased damage and cause particle effects.
                 * <p>
                 * Critical arrows generally occur when a player fully draws a bow before
                 * firing.
                 */
                 isCritical(): boolean;
                /**
                 * Sets whether or not this arrow should be critical.
                 */
                 setCritical(critical: boolean): void;
                /**
                 * Gets whether this arrow is in a block or not.
                 * <p>
                 * Arrows in a block are motionless and may be picked up by players.
                 */
                 isInBlock(): boolean;
                /**
                 * Gets the block to which this arrow is attached.
                 */
                 getAttachedBlock(): org.bukkit.block.Block;
                /**
                 * Gets the current pickup status of this arrow.
                 */
                 getPickupStatus(): org.bukkit.entity.AbstractArrow.PickupStatus;
                /**
                 * Sets the current pickup status of this arrow.
                 */
                 setPickupStatus(status: org.bukkit.entity.AbstractArrow.PickupStatus): void;
            }
        }
    }
}
