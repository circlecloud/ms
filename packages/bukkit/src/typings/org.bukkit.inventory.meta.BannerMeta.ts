declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class BannerMeta {
                    /**
                     * Returns the base color for this banner
                     */
                    public getBaseColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the base color for this banner
                     */
                    public setBaseColor(color: org.bukkit.DyeColor): void;
                    /**
                     * Returns a list of patterns on this banner
                     */
                    public getPatterns(): any[] /*java.util.List*/;
                    /**
                     * Sets the patterns used on this banner
                     */
                    public setPatterns(patterns: any[] /*java.util.List*/): void;
                    /**
                     * Adds a new pattern on top of the existing
                     * patterns
                     */
                    public addPattern(pattern: org.bukkit.block.banner.Pattern): void;
                    /**
                     * Returns the pattern at the specified index
                     */
                    public getPattern(i: number): org.bukkit.block.banner.Pattern;
                    /**
                     * Removes the pattern at the specified index
                     */
                    public removePattern(i: number): org.bukkit.block.banner.Pattern;
                    /**
                     * Sets the pattern at the specified index
                     */
                    public setPattern(i: number, pattern: org.bukkit.block.banner.Pattern): void;
                    /**
                     * Returns the number of patterns on this
                     * banner
                     */
                    public numberOfPatterns(): number;
                }
            }
        }
    }
}
