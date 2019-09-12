declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class PotionMeta {
                    /**
                     * Sets the underlying potion data
                     */
                    public setBasePotionData(data: org.bukkit.potion.PotionData): void;
                    /**
                     * Returns the potion data about the base potion
                     */
                    public getBasePotionData(): org.bukkit.potion.PotionData;
                    /**
                     * Checks for the presence of custom potion effects.
                     */
                    public hasCustomEffects(): boolean;
                    /**
                     * Gets an immutable list containing all custom potion effects applied to
                     * this potion.
                     * <p>
                     * Plugins should check that hasCustomEffects() returns true before calling
                     * this method.
                     */
                    public getCustomEffects(): any[] /*java.util.List*/;
                    /**
                     * Adds a custom potion effect to this potion.
                     */
                    public addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                    /**
                     * Removes a custom potion effect from this potion.
                     */
                    public removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Checks for a specific custom potion effect type on this potion.
                     */
                    public hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Moves a potion effect to the top of the potion effect list.
                     * <p>
                     * This causes the client to display the potion effect in the potion's name.
                     */
                    public setMainEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                    /**
                     * Removes all custom potion effects from this potion.
                     */
                    public clearCustomEffects(): boolean;
                    /**
                     * Checks for existence of a potion color.
                     */
                    public hasColor(): boolean;
                    /**
                     * Gets the potion color that is set. A custom potion color will alter the
                     * display of the potion in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     */
                    public getColor(): org.bukkit.Color;
                    /**
                     * Sets the potion color. A custom potion color will alter the display of
                     * the potion in an inventory slot.
                     */
                    public setColor(color: org.bukkit.Color): void;
                    public clone(): org.bukkit.inventory.meta.PotionMeta;
                }
            }
        }
    }
}
