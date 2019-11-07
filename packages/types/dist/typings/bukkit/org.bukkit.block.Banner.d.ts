declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Banner extends org.bukkit.block.TileState {
                /**
                 * Returns the base color for this banner
                 */
                // @ts-ignore
                 getBaseColor(): org.bukkit.DyeColor;
                /**
                 * Sets the base color for this banner.
                 * <b>Only valid for shield pseudo banners, otherwise base depends on block
                 * type</b>
                 */
                // @ts-ignore
                 setBaseColor(color: org.bukkit.DyeColor): void;
                /**
                 * Returns a list of patterns on this banner
                 */
                // @ts-ignore
                 getPatterns(): java.util.List;
                /**
                 * Sets the patterns used on this banner
                 */
                // @ts-ignore
                 setPatterns(patterns: java.util.List): void;
                /**
                 * Adds a new pattern on top of the existing
                 * patterns
                 */
                // @ts-ignore
                 addPattern(pattern: org.bukkit.block.banner.Pattern): void;
                /**
                 * Returns the pattern at the specified index
                 */
                // @ts-ignore
                 getPattern(i: number): org.bukkit.block.banner.Pattern;
                /**
                 * Removes the pattern at the specified index
                 */
                // @ts-ignore
                 removePattern(i: number): org.bukkit.block.banner.Pattern;
                /**
                 * Sets the pattern at the specified index
                 */
                // @ts-ignore
                 setPattern(i: number, pattern: org.bukkit.block.banner.Pattern): void;
                /**
                 * Returns the number of patterns on this
                 * banner
                 */
                // @ts-ignore
                 numberOfPatterns(): number;
            }
        }
    }
}
