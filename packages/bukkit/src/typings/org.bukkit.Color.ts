declare namespace org {
    namespace bukkit {
        class Color {
            public static WHITE: org.bukkit.Color;
            public static SILVER: org.bukkit.Color;
            public static GRAY: org.bukkit.Color;
            public static BLACK: org.bukkit.Color;
            public static RED: org.bukkit.Color;
            public static MAROON: org.bukkit.Color;
            public static YELLOW: org.bukkit.Color;
            public static OLIVE: org.bukkit.Color;
            public static LIME: org.bukkit.Color;
            public static GREEN: org.bukkit.Color;
            public static AQUA: org.bukkit.Color;
            public static TEAL: org.bukkit.Color;
            public static BLUE: org.bukkit.Color;
            public static NAVY: org.bukkit.Color;
            public static FUCHSIA: org.bukkit.Color;
            public static PURPLE: org.bukkit.Color;
            public static ORANGE: org.bukkit.Color;
            /**
             * Creates a new Color object from a red, green, and blue
             */
            public static fromRGB(red: number, green: number, blue: number): org.bukkit.Color;
            /**
             * Creates a new Color object from a blue, green, and red
             */
            public static fromBGR(blue: number, green: number, red: number): org.bukkit.Color;
            /**
             * Creates a new color object from an integer that contains the red,
             * green, and blue bytes in the lowest order 24 bits.
             */
            public static fromRGB(rgb: number): org.bukkit.Color;
            /**
             * Creates a new color object from an integer that contains the blue,
             * green, and red bytes in the lowest order 24 bits.
             */
            public static fromBGR(bgr: number): org.bukkit.Color;
            /**
             * Gets the red component
             */
            public getRed(): number;
            /**
             * Creates a new Color object with specified component
             */
            public setRed(red: number): org.bukkit.Color;
            /**
             * Gets the green component
             */
            public getGreen(): number;
            /**
             * Creates a new Color object with specified component
             */
            public setGreen(green: number): org.bukkit.Color;
            /**
             * Gets the blue component
             */
            public getBlue(): number;
            /**
             * Creates a new Color object with specified component
             */
            public setBlue(blue: number): org.bukkit.Color;
            public asRGB(): number;
            public asBGR(): number;
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             */
            public mixDyes(colors: org.bukkit.DyeColor): org.bukkit.Color;
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             */
            public mixColors(colors: org.bukkit.Color): org.bukkit.Color;
            public equals(o: any): boolean;
            public hashCode(): number;
            public serialize(): Map<any, any> /*java.util.Map*/;
            public static deserialize(map: Map<any, any> /*java.util.Map*/): org.bukkit.Color;
            public toString(): string;
        }
    }
}
