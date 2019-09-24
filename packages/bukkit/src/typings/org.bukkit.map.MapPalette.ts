declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapPalette {
                public static TRANSPARENT: number;
                public static LIGHT_GREEN: number;
                public static LIGHT_BROWN: number;
                public static GRAY_1: number;
                public static RED: number;
                public static PALE_BLUE: number;
                public static GRAY_2: number;
                public static DARK_GREEN: number;
                public static WHITE: number;
                public static LIGHT_GRAY: number;
                public static BROWN: number;
                public static DARK_GRAY: number;
                public static BLUE: number;
                public static DARK_BROWN: number;
                /**
                 * Resize an image to 128x128.
                 */
                public static resizeImage(image: any): any;
                /**
                 * Convert an Image to a byte[] using the palette.
                 */
                public static imageToBytes(image: any): number[];
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 */
                public static matchColor(r: number, g: number, b: number): number;
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 */
                public static matchColor(color: any): number;
                /**
                 * Get the value of the given color in the palette.
                 */
                public static getColor(index: number): any;
            }
        }
    }
}
