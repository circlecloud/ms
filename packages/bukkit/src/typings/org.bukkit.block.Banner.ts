declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Banner extends org.bukkit.block.TileState {
                /**
                 * Returns the base color for this banner
                 */
                 getBaseColor(): org.bukkit.DyeColor;
                /**
                 * Sets the base color for this banner.
                 * <b>Only valid for shield pseudo banners, otherwise base depends on block
                 * type</b>
                 */
                 setBaseColor(color: org.bukkit.DyeColor): void;
                /**
                 * Returns a list of patterns on this banner
                 */
                 getPatterns(): any[] /*java.util.List*/;
                /**
                 * Sets the patterns used on this banner
                 */
                 setPatterns(patterns: any[] /*java.util.List*/): void;
                /**
                 * Adds a new pattern on top of the existing
                 * patterns
                 */
                 addPattern(pattern: org.bukkit.block.banner.Pattern): void;
                /**
                 * Returns the pattern at the specified index
                 */
                 getPattern(i: number): org.bukkit.block.banner.Pattern;
                /**
                 * Removes the pattern at the specified index
                 */
                 removePattern(i: number): org.bukkit.block.banner.Pattern;
                /**
                 * Sets the pattern at the specified index
                 */
                 setPattern(i: number, pattern: org.bukkit.block.banner.Pattern): void;
                /**
                 * Returns the number of patterns on this
                 * banner
                 */
                 numberOfPatterns(): number;
            }
        }
    }
}
