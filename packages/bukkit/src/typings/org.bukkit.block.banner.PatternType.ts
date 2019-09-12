declare namespace org {
    namespace bukkit {
        namespace block {
            namespace banner {
                class PatternType {
                    public static BASE: org.bukkit.block.banner.PatternType;
                    public static SQUARE_BOTTOM_LEFT: org.bukkit.block.banner.PatternType;
                    public static SQUARE_BOTTOM_RIGHT: org.bukkit.block.banner.PatternType;
                    public static SQUARE_TOP_LEFT: org.bukkit.block.banner.PatternType;
                    public static SQUARE_TOP_RIGHT: org.bukkit.block.banner.PatternType;
                    public static STRIPE_BOTTOM: org.bukkit.block.banner.PatternType;
                    public static STRIPE_TOP: org.bukkit.block.banner.PatternType;
                    public static STRIPE_LEFT: org.bukkit.block.banner.PatternType;
                    public static STRIPE_RIGHT: org.bukkit.block.banner.PatternType;
                    public static STRIPE_CENTER: org.bukkit.block.banner.PatternType;
                    public static STRIPE_MIDDLE: org.bukkit.block.banner.PatternType;
                    public static STRIPE_DOWNRIGHT: org.bukkit.block.banner.PatternType;
                    public static STRIPE_DOWNLEFT: org.bukkit.block.banner.PatternType;
                    public static STRIPE_SMALL: org.bukkit.block.banner.PatternType;
                    public static CROSS: org.bukkit.block.banner.PatternType;
                    public static STRAIGHT_CROSS: org.bukkit.block.banner.PatternType;
                    public static TRIANGLE_BOTTOM: org.bukkit.block.banner.PatternType;
                    public static TRIANGLE_TOP: org.bukkit.block.banner.PatternType;
                    public static TRIANGLES_BOTTOM: org.bukkit.block.banner.PatternType;
                    public static TRIANGLES_TOP: org.bukkit.block.banner.PatternType;
                    public static DIAGONAL_LEFT: org.bukkit.block.banner.PatternType;
                    public static DIAGONAL_RIGHT: org.bukkit.block.banner.PatternType;
                    public static DIAGONAL_LEFT_MIRROR: org.bukkit.block.banner.PatternType;
                    public static DIAGONAL_RIGHT_MIRROR: org.bukkit.block.banner.PatternType;
                    public static CIRCLE_MIDDLE: org.bukkit.block.banner.PatternType;
                    public static RHOMBUS_MIDDLE: org.bukkit.block.banner.PatternType;
                    public static HALF_VERTICAL: org.bukkit.block.banner.PatternType;
                    public static HALF_HORIZONTAL: org.bukkit.block.banner.PatternType;
                    public static HALF_VERTICAL_MIRROR: org.bukkit.block.banner.PatternType;
                    public static HALF_HORIZONTAL_MIRROR: org.bukkit.block.banner.PatternType;
                    public static BORDER: org.bukkit.block.banner.PatternType;
                    public static CURLY_BORDER: org.bukkit.block.banner.PatternType;
                    public static CREEPER: org.bukkit.block.banner.PatternType;
                    public static GRADIENT: org.bukkit.block.banner.PatternType;
                    public static GRADIENT_UP: org.bukkit.block.banner.PatternType;
                    public static BRICKS: org.bukkit.block.banner.PatternType;
                    public static SKULL: org.bukkit.block.banner.PatternType;
                    public static FLOWER: org.bukkit.block.banner.PatternType;
                    public static MOJANG: org.bukkit.block.banner.PatternType;
                    public static GLOBE: org.bukkit.block.banner.PatternType;
                    public static values(): org.bukkit.block.banner.PatternType[];
                    public static valueOf(name: string): org.bukkit.block.banner.PatternType;
                    /**
                     * Returns the identifier used to represent
                     * this pattern type
                     */
                    public getIdentifier(): string;
                    /**
                     * Returns the pattern type which matches the passed
                     * identifier or null if no matches are found
                     */
                    public static getByIdentifier(identifier: string): org.bukkit.block.banner.PatternType;
                }
            }
        }
    }
}
