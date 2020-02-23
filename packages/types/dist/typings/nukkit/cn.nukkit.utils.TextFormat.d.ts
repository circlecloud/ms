declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class TextFormat extends java.lang.Enum {
                // @ts-ignore
                public static BLACK: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_BLUE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_GREEN: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_AQUA: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_RED: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_PURPLE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static GOLD: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static GRAY: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static DARK_GRAY: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static BLUE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static GREEN: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static AQUA: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static RED: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static LIGHT_PURPLE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static YELLOW: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static WHITE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static OBFUSCATED: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static BOLD: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static STRIKETHROUGH: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static UNDERLINE: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static ITALIC: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static RESET: cn.nukkit.utils.TextFormat;
                // @ts-ignore
                public static ESCAPE: string;
                // @ts-ignore
                public static values(): cn.nukkit.utils.TextFormat[];
                // @ts-ignore
                public static valueOf(name: string): cn.nukkit.utils.TextFormat;
                /**
                 * Gets the TextFormat represented by the specified format code.
                 */
                // @ts-ignore
                public static getByChar(code: string): cn.nukkit.utils.TextFormat;
                /**
                 * Gets the TextFormat represented by the specified format code.
                 */
                // @ts-ignore
                public static getByChar(code: string): cn.nukkit.utils.TextFormat;
                /**
                 * Cleans the given message of all format codes.
                 */
                // @ts-ignore
                public static clean(input: string): string;
                // @ts-ignore
                public static clean(input: string, recursive: boolean): string;
                /**
                 * Translates a string using an alternate format code character into a
                 * string that uses the internal TextFormat.ESCAPE format code
                 * character. The alternate format code character will only be replaced if
                 * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
                 */
                // @ts-ignore
                public static colorize(altFormatChar: string, textToTranslate: string): string;
                /**
                 * Translates a string, using an ampersand (&amp;) as an alternate format code
                 * character, into a string that uses the internal TextFormat.ESCAPE format
                 * code character. The alternate format code character will only be replaced if
                 * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
                 */
                // @ts-ignore
                public static colorize(textToTranslate: string): string;
                /**
                 * Gets the chat color used at the end of the given input string.
                 */
                // @ts-ignore
                public static getLastColors(input: string): string;
                /**
                 * Gets the char value associated with this color
                 */
                // @ts-ignore
                public getChar(): string;
                // @ts-ignore
                public toString(): string;
                /**
                 * Checks if this code is a format code as opposed to a color code.
                 */
                // @ts-ignore
                public isFormat(): boolean;
                /**
                 * Checks if this code is a color code as opposed to a format code.
                 */
                // @ts-ignore
                public isColor(): boolean;
            }
        }
    }
}
