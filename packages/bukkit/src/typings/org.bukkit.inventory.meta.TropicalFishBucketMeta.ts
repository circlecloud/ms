declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface TropicalFishBucketMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the color of the fish's pattern.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                     getPatternColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the color of the fish's pattern.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                     setPatternColor(color: org.bukkit.DyeColor): void;
                    /**
                     * Gets the color of the fish's body.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                     getBodyColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the color of the fish's body.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                     setBodyColor(color: org.bukkit.DyeColor): void;
                    /**
                     * Gets the fish's pattern.
                     * <p>
                     * Plugins should check that hasVariant() returns <code>true</code> before
                     * calling this method.
                     */
                     getPattern(): org.bukkit.entity.TropicalFish.Pattern;
                    /**
                     * Sets the fish's pattern.
                     * <p>
                     * Setting this when hasVariant() returns <code>false</code> will initialize
                     * all other values to unspecified defaults.
                     */
                     setPattern(pattern: org.bukkit.entity.TropicalFish.Pattern): void;
                    /**
                     * Checks for existence of a variant tag indicating a specific fish will be
                     * spawned.
                     */
                     hasVariant(): boolean;
                     clone(): org.bukkit.inventory.meta.TropicalFishBucketMeta;
                }
            }
        }
    }
}
