declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Arrow extends org.bukkit.entity.AbstractArrow {
                /**
                 * Sets the underlying potion data
                 */
                 setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                 getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Gets the color of this arrow.
                 */
                 getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this arrow. Will be applied as a tint to its particles.
                 */
                 setColor(color: org.bukkit.Color): void;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                 hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this arrow.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                 getCustomEffects(): any[] /*java.util.List*/;
                /**
                 * Adds a custom potion effect to this arrow.
                 */
                 addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this arrow.
                 */
                 removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this arrow.
                 */
                 hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this arrow.
                 */
                 clearCustomEffects(): void;
            }
        }
    }
}
