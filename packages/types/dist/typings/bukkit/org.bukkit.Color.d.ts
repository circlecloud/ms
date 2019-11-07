// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Color extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            // @ts-ignore
            public static WHITE: org.bukkit.Color;
            // @ts-ignore
            public static SILVER: org.bukkit.Color;
            // @ts-ignore
            public static GRAY: org.bukkit.Color;
            // @ts-ignore
            public static BLACK: org.bukkit.Color;
            // @ts-ignore
            public static RED: org.bukkit.Color;
            // @ts-ignore
            public static MAROON: org.bukkit.Color;
            // @ts-ignore
            public static YELLOW: org.bukkit.Color;
            // @ts-ignore
            public static OLIVE: org.bukkit.Color;
            // @ts-ignore
            public static LIME: org.bukkit.Color;
            // @ts-ignore
            public static GREEN: org.bukkit.Color;
            // @ts-ignore
            public static AQUA: org.bukkit.Color;
            // @ts-ignore
            public static TEAL: org.bukkit.Color;
            // @ts-ignore
            public static BLUE: org.bukkit.Color;
            // @ts-ignore
            public static NAVY: org.bukkit.Color;
            // @ts-ignore
            public static FUCHSIA: org.bukkit.Color;
            // @ts-ignore
            public static PURPLE: org.bukkit.Color;
            // @ts-ignore
            public static ORANGE: org.bukkit.Color;
            /**
             * Creates a new Color object from a red, green, and blue
             */
            // @ts-ignore
            public static fromRGB(red: number, green: number, blue: number): org.bukkit.Color;
            /**
             * Creates a new Color object from a blue, green, and red
             */
            // @ts-ignore
            public static fromBGR(blue: number, green: number, red: number): org.bukkit.Color;
            /**
             * Creates a new color object from an integer that contains the red,
             * green, and blue bytes in the lowest order 24 bits.
             */
            // @ts-ignore
            public static fromRGB(rgb: number): org.bukkit.Color;
            /**
             * Creates a new color object from an integer that contains the blue,
             * green, and red bytes in the lowest order 24 bits.
             */
            // @ts-ignore
            public static fromBGR(bgr: number): org.bukkit.Color;
            /**
             * Gets the red component
             */
            // @ts-ignore
            public getRed(): number;
            /**
             * Creates a new Color object with specified component
             */
            // @ts-ignore
            public setRed(red: number): org.bukkit.Color;
            /**
             * Gets the green component
             */
            // @ts-ignore
            public getGreen(): number;
            /**
             * Creates a new Color object with specified component
             */
            // @ts-ignore
            public setGreen(green: number): org.bukkit.Color;
            /**
             * Gets the blue component
             */
            // @ts-ignore
            public getBlue(): number;
            /**
             * Creates a new Color object with specified component
             */
            // @ts-ignore
            public setBlue(blue: number): org.bukkit.Color;
            // @ts-ignore
            public asRGB(): number;
            // @ts-ignore
            public asBGR(): number;
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             */
            // @ts-ignore
            public mixDyes(colors: org.bukkit.DyeColor): org.bukkit.Color;
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             */
            // @ts-ignore
            public mixColors(colors: org.bukkit.Color): org.bukkit.Color;
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public serialize(): java.util.Map;
            // @ts-ignore
            public static deserialize(map: java.util.Map): org.bukkit.Color;
            // @ts-ignore
            public toString(): string;
        }
    }
}
