declare namespace org {
    namespace bukkit {
        namespace entity {
            class Arrow {
                /**
                 * Sets the underlying potion data
                 */
                public setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                public getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Gets the color of this arrow.
                 */
                public getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this arrow. Will be applied as a tint to its particles.
                 */
                public setColor(color: org.bukkit.Color): void;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                public hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this arrow.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                public getCustomEffects(): any[] /*java.util.List*/;
                /**
                 * Adds a custom potion effect to this arrow.
                 */
                public addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this arrow.
                 */
                public removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this arrow.
                 */
                public hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this arrow.
                 */
                public clearCustomEffects(): void;
            }
        }
    }
}
