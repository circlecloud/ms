declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class ChatColor extends java.lang.Enum {
            // @ts-ignore
            public static BLACK: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_BLUE: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_GREEN: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_AQUA: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_RED: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_PURPLE: org.bukkit.ChatColor;
            // @ts-ignore
            public static GOLD: org.bukkit.ChatColor;
            // @ts-ignore
            public static GRAY: org.bukkit.ChatColor;
            // @ts-ignore
            public static DARK_GRAY: org.bukkit.ChatColor;
            // @ts-ignore
            public static BLUE: org.bukkit.ChatColor;
            // @ts-ignore
            public static GREEN: org.bukkit.ChatColor;
            // @ts-ignore
            public static AQUA: org.bukkit.ChatColor;
            // @ts-ignore
            public static RED: org.bukkit.ChatColor;
            // @ts-ignore
            public static LIGHT_PURPLE: org.bukkit.ChatColor;
            // @ts-ignore
            public static YELLOW: org.bukkit.ChatColor;
            // @ts-ignore
            public static WHITE: org.bukkit.ChatColor;
            // @ts-ignore
            public static MAGIC: org.bukkit.ChatColor;
            // @ts-ignore
            public static BOLD: org.bukkit.ChatColor;
            // @ts-ignore
            public static STRIKETHROUGH: org.bukkit.ChatColor;
            // @ts-ignore
            public static UNDERLINE: org.bukkit.ChatColor;
            // @ts-ignore
            public static ITALIC: org.bukkit.ChatColor;
            // @ts-ignore
            public static RESET: org.bukkit.ChatColor;
            // @ts-ignore
            public static COLOR_CHAR: string;
            // @ts-ignore
            public static values(): org.bukkit.ChatColor[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.ChatColor;
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
            /**
             * Gets the color represented by the specified color code
             */
            // @ts-ignore
            public static getByChar(code: string): org.bukkit.ChatColor;
            /**
             * Gets the color represented by the specified color code
             */
            // @ts-ignore
            public static getByChar(code: string): org.bukkit.ChatColor;
            /**
             * Strips the given message of all color codes
             */
            // @ts-ignore
            public static stripColor(input: string): string;
            /**
             * Translates a string using an alternate color code character into a
             * string that uses the internal ChatColor.COLOR_CODE color code
             * character. The alternate color code character will only be replaced if
             * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
             */
            // @ts-ignore
            public static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
            /**
             * Gets the ChatColors used at the end of the given input string.
             */
            // @ts-ignore
            public static getLastColors(input: string): string;
        }
    }
}
