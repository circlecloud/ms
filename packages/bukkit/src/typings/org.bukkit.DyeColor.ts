declare namespace org {
    namespace bukkit {
        class DyeColor {
            public static WHITE: org.bukkit.DyeColor;
            public static ORANGE: org.bukkit.DyeColor;
            public static MAGENTA: org.bukkit.DyeColor;
            public static LIGHT_BLUE: org.bukkit.DyeColor;
            public static YELLOW: org.bukkit.DyeColor;
            public static LIME: org.bukkit.DyeColor;
            public static PINK: org.bukkit.DyeColor;
            public static GRAY: org.bukkit.DyeColor;
            public static LIGHT_GRAY: org.bukkit.DyeColor;
            public static CYAN: org.bukkit.DyeColor;
            public static PURPLE: org.bukkit.DyeColor;
            public static BLUE: org.bukkit.DyeColor;
            public static BROWN: org.bukkit.DyeColor;
            public static GREEN: org.bukkit.DyeColor;
            public static RED: org.bukkit.DyeColor;
            public static BLACK: org.bukkit.DyeColor;
            public static values(): org.bukkit.DyeColor[];
            public static valueOf(name: string): org.bukkit.DyeColor;
            /**
             * Gets the associated wool data value representing this color.
             */
            public getWoolData(): number;
            /**
             * Gets the associated dye data value representing this color.
             */
            public getDyeData(): number;
            /**
             * Gets the color that this dye represents.
             */
            public getColor(): org.bukkit.Color;
            /**
             * Gets the firework color that this dye represents.
             */
            public getFireworkColor(): org.bukkit.Color;
            /**
             * Gets the DyeColor with the given wool data value.
             */
            public static getByWoolData(data: number): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given dye data value.
             */
            public static getByDyeData(data: number): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given color value.
             */
            public static getByColor(color: org.bukkit.Color): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given firework color value.
             */
            public static getByFireworkColor(color: org.bukkit.Color): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor for the given name, possibly doing legacy transformations.
             */
            public static legacyValueOf(name: string): org.bukkit.DyeColor;
        }
    }
}
