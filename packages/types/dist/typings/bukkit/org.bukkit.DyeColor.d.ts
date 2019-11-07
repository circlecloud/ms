// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class DyeColor extends java.lang.Enum {
            // @ts-ignore
            public static WHITE: org.bukkit.DyeColor;
            // @ts-ignore
            public static ORANGE: org.bukkit.DyeColor;
            // @ts-ignore
            public static MAGENTA: org.bukkit.DyeColor;
            // @ts-ignore
            public static LIGHT_BLUE: org.bukkit.DyeColor;
            // @ts-ignore
            public static YELLOW: org.bukkit.DyeColor;
            // @ts-ignore
            public static LIME: org.bukkit.DyeColor;
            // @ts-ignore
            public static PINK: org.bukkit.DyeColor;
            // @ts-ignore
            public static GRAY: org.bukkit.DyeColor;
            // @ts-ignore
            public static LIGHT_GRAY: org.bukkit.DyeColor;
            // @ts-ignore
            public static CYAN: org.bukkit.DyeColor;
            // @ts-ignore
            public static PURPLE: org.bukkit.DyeColor;
            // @ts-ignore
            public static BLUE: org.bukkit.DyeColor;
            // @ts-ignore
            public static BROWN: org.bukkit.DyeColor;
            // @ts-ignore
            public static GREEN: org.bukkit.DyeColor;
            // @ts-ignore
            public static RED: org.bukkit.DyeColor;
            // @ts-ignore
            public static BLACK: org.bukkit.DyeColor;
            // @ts-ignore
            public static values(): org.bukkit.DyeColor[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.DyeColor;
            /**
             * Gets the associated wool data value representing this color.
             */
            // @ts-ignore
            public getWoolData(): number;
            /**
             * Gets the associated dye data value representing this color.
             */
            // @ts-ignore
            public getDyeData(): number;
            /**
             * Gets the color that this dye represents.
             */
            // @ts-ignore
            public getColor(): org.bukkit.Color;
            /**
             * Gets the firework color that this dye represents.
             */
            // @ts-ignore
            public getFireworkColor(): org.bukkit.Color;
            /**
             * Gets the DyeColor with the given wool data value.
             */
            // @ts-ignore
            public static getByWoolData(data: number): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given dye data value.
             */
            // @ts-ignore
            public static getByDyeData(data: number): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given color value.
             */
            // @ts-ignore
            public static getByColor(color: org.bukkit.Color): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor with the given firework color value.
             */
            // @ts-ignore
            public static getByFireworkColor(color: org.bukkit.Color): org.bukkit.DyeColor;
            /**
             * Gets the DyeColor for the given name, possibly doing legacy transformations.
             */
            // @ts-ignore
            public static legacyValueOf(name: string): org.bukkit.DyeColor;
        }
    }
}
