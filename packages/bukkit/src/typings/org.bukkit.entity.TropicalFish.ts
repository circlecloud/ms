declare namespace org {
    namespace bukkit {
        namespace entity {
            class TropicalFish {
                /**
                 * Gets the color of the fish's pattern.
                 */
                public getPatternColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of the fish's pattern
                 */
                public setPatternColor(color: org.bukkit.DyeColor): void;
                /**
                 * Gets the color of the fish's body.
                 */
                public getBodyColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of the fish's body
                 */
                public setBodyColor(color: org.bukkit.DyeColor): void;
                /**
                 * Gets the fish's pattern.
                 */
                public getPattern(): org.bukkit.entity.TropicalFish.Pattern;
                /**
                 * Sets the fish's pattern
                 */
                public setPattern(pattern: org.bukkit.entity.TropicalFish.Pattern): void;
            }
        }
    }
}
