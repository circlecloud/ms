declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapPalette extends java.lang.Object {
                // @ts-ignore
                public static TRANSPARENT: number;
                // @ts-ignore
                public static LIGHT_GREEN: number;
                // @ts-ignore
                public static LIGHT_BROWN: number;
                // @ts-ignore
                public static GRAY_1: number;
                // @ts-ignore
                public static RED: number;
                // @ts-ignore
                public static PALE_BLUE: number;
                // @ts-ignore
                public static GRAY_2: number;
                // @ts-ignore
                public static DARK_GREEN: number;
                // @ts-ignore
                public static WHITE: number;
                // @ts-ignore
                public static LIGHT_GRAY: number;
                // @ts-ignore
                public static BROWN: number;
                // @ts-ignore
                public static DARK_GRAY: number;
                // @ts-ignore
                public static BLUE: number;
                // @ts-ignore
                public static DARK_BROWN: number;
                /**
                 * Resize an image to 128x128.
                 */
                // @ts-ignore
                public static resizeImage(image: java.awt.Image): java.awt.image.BufferedImage;
                /**
                 * Convert an Image to a byte[] using the palette.
                 */
                // @ts-ignore
                public static imageToBytes(image: java.awt.Image): number[];
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 */
                // @ts-ignore
                public static matchColor(r: number, g: number, b: number): number;
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 */
                // @ts-ignore
                public static matchColor(color: java.awt.Color): number;
                /**
                 * Get the value of the given color in the palette.
                 */
                // @ts-ignore
                public static getColor(index: number): java.awt.Color;
            }
        }
    }
}
