declare namespace org {
    namespace bukkit {
        namespace block {
            namespace banner {
                // @ts-ignore
                 class Pattern extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                    /**
                     * Creates a new pattern from the specified color and
                     * pattern type
                     */
                    // @ts-ignore
                    constructor(color: org.bukkit.DyeColor, pattern: org.bukkit.block.banner.PatternType)
                    /**
                     * Constructor for deserialization.
                     */
                    // @ts-ignore
                    constructor(map: java.util.Map)
                    // @ts-ignore
                    public serialize(): java.util.Map;
                    /**
                     * Returns the color of the pattern
                     */
                    // @ts-ignore
                    public getColor(): org.bukkit.DyeColor;
                    /**
                     * Returns the type of pattern
                     */
                    // @ts-ignore
                    public getPattern(): org.bukkit.block.banner.PatternType;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
