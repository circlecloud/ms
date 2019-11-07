declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Arrow extends org.bukkit.entity.AbstractArrow {
                /**
                 * Sets the underlying potion data
                 */
                // @ts-ignore
                 setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                // @ts-ignore
                 getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Gets the color of this arrow.
                 */
                // @ts-ignore
                 getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this arrow. Will be applied as a tint to its particles.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.Color): void;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                // @ts-ignore
                 hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this arrow.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                // @ts-ignore
                 getCustomEffects(): java.util.List;
                /**
                 * Adds a custom potion effect to this arrow.
                 */
                // @ts-ignore
                 addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this arrow.
                 */
                // @ts-ignore
                 removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this arrow.
                 */
                // @ts-ignore
                 hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this arrow.
                 */
                // @ts-ignore
                 clearCustomEffects(): void;
            }
        }
    }
}
