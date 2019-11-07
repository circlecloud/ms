// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface PotionMeta extends org.bukkit.inventory.meta.ItemMeta {
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
                     * Checks for the presence of custom potion effects.
                     */
                    // @ts-ignore
                     hasCustomEffects(): boolean;
                    /**
                     * Gets an immutable list containing all custom potion effects applied to
                     * this potion.
                     * <p>
                     * Plugins should check that hasCustomEffects() returns true before calling
                     * this method.
                     */
                    // @ts-ignore
                     getCustomEffects(): java.util.List;
                    /**
                     * Adds a custom potion effect to this potion.
                     */
                    // @ts-ignore
                     addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                    /**
                     * Removes a custom potion effect from this potion.
                     */
                    // @ts-ignore
                     removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Checks for a specific custom potion effect type on this potion.
                     */
                    // @ts-ignore
                     hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Moves a potion effect to the top of the potion effect list.
                     * <p>
                     * This causes the client to display the potion effect in the potion's name.
                     */
                    // @ts-ignore
                     setMainEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Removes all custom potion effects from this potion.
                     */
                    // @ts-ignore
                     clearCustomEffects(): boolean;
                    /**
                     * Checks for existence of a potion color.
                     */
                    // @ts-ignore
                     hasColor(): boolean;
                    /**
                     * Gets the potion color that is set. A custom potion color will alter the
                     * display of the potion in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     */
                    // @ts-ignore
                     getColor(): org.bukkit.Color;
                    /**
                     * Sets the potion color. A custom potion color will alter the display of
                     * the potion in an inventory slot.
                     */
                    // @ts-ignore
                     setColor(color: org.bukkit.Color): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.PotionMeta;
                }
            }
        }
    }
}
