declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class ChatColor {
            public static BLACK: org.bukkit.ChatColor;
            public static DARK_BLUE: org.bukkit.ChatColor;
            public static DARK_GREEN: org.bukkit.ChatColor;
            public static DARK_AQUA: org.bukkit.ChatColor;
            public static DARK_RED: org.bukkit.ChatColor;
            public static DARK_PURPLE: org.bukkit.ChatColor;
            public static GOLD: org.bukkit.ChatColor;
            public static GRAY: org.bukkit.ChatColor;
            public static DARK_GRAY: org.bukkit.ChatColor;
            public static BLUE: org.bukkit.ChatColor;
            public static GREEN: org.bukkit.ChatColor;
            public static AQUA: org.bukkit.ChatColor;
            public static RED: org.bukkit.ChatColor;
            public static LIGHT_PURPLE: org.bukkit.ChatColor;
            public static YELLOW: org.bukkit.ChatColor;
            public static WHITE: org.bukkit.ChatColor;
            public static MAGIC: org.bukkit.ChatColor;
            public static BOLD: org.bukkit.ChatColor;
            public static STRIKETHROUGH: org.bukkit.ChatColor;
            public static UNDERLINE: org.bukkit.ChatColor;
            public static ITALIC: org.bukkit.ChatColor;
            public static RESET: org.bukkit.ChatColor;
            public static COLOR_CHAR: string;
            public static values(): org.bukkit.ChatColor[];
            public static valueOf(name: string): org.bukkit.ChatColor;
            /**
             * Gets the char value associated with this color
             */
            public getChar(): string;
            public toString(): string;
            /**
             * Checks if this code is a format code as opposed to a color code.
             */
            public isFormat(): boolean;
            /**
             * Checks if this code is a color code as opposed to a format code.
             */
            public isColor(): boolean;
            /**
             * Gets the color represented by the specified color code
             */
            public static getByChar(code: string): org.bukkit.ChatColor;
            /**
             * Gets the color represented by the specified color code
             */
            public static getByChar(code: string): org.bukkit.ChatColor;
            /**
             * Strips the given message of all color codes
             */
            public static stripColor(input: string): string;
            /**
             * Translates a string using an alternate color code character into a
             * string that uses the internal ChatColor.COLOR_CODE color code
             * character. The alternate color code character will only be replaced if
             * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
             */
            public static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
            /**
             * Gets the ChatColors used at the end of the given input string.
             */
            public static getLastColors(input: string): string;
        }
    }
}
