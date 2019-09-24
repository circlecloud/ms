declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface TropicalFish extends org.bukkit.entity.Fish {
                /**
                 * Gets the color of the fish's pattern.
                 */
                 getPatternColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of the fish's pattern
                 */
                 setPatternColor(color: org.bukkit.DyeColor): void;
                /**
                 * Gets the color of the fish's body.
                 */
                 getBodyColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of the fish's body
                 */
                 setBodyColor(color: org.bukkit.DyeColor): void;
                /**
                 * Gets the fish's pattern.
                 */
                 getPattern(): org.bukkit.entity.TropicalFish.Pattern;
                /**
                 * Sets the fish's pattern
                 */
                 setPattern(pattern: org.bukkit.entity.TropicalFish.Pattern): void;
            }
        }
    }
}
