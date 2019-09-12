declare namespace org {
    namespace bukkit {
        namespace block {
            namespace banner {
                class Pattern {
                    /**
                     * Creates a new pattern from the specified color and
                     * pattern type
                     */
                    constructor(color: org.bukkit.DyeColor, pattern: org.bukkit.block.banner.PatternType)
                    /**
                     * Constructor for deserialization.
                     */
                    constructor(map: Map<any, any> /*java.util.Map*/)
                    public serialize(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Returns the color of the pattern
                     */
                    public getColor(): org.bukkit.DyeColor;
                    /**
                     * Returns the type of pattern
                     */
                    public getPattern(): org.bukkit.block.banner.PatternType;
                    public hashCode(): number;
                    public equals(obj: any): boolean;
                }
            }
        }
    }
}
