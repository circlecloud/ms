declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class TropicalFishBucketMeta {
                    /**
                     * Gets the color of the fish's pattern.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                    public getPatternColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the color of the fish's pattern.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                    public setPatternColor(color: org.bukkit.DyeColor): void;
                    /**
                     * Gets the color of the fish's body.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                    public getBodyColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the color of the fish's body.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                    public setBodyColor(color: org.bukkit.DyeColor): void;
                    /**
                     * Gets the fish's pattern.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                    public getPattern(): org.bukkit.entity.TropicalFish.Pattern;
                    /**
                     * Sets the fish's pattern.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                    public setPattern(pattern: org.bukkit.entity.TropicalFish.Pattern): void;
                    /**
                     * Checks for existence of a variant tag indicating a specific fish will be
                     * spawned.
                     */
                    public hasVariant(): boolean;
                    public clone(): org.bukkit.inventory.meta.TropicalFishBucketMeta;
                }
            }
        }
    }
}
