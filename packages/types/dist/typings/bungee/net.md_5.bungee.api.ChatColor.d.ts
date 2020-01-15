declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                 class ChatColor extends java.lang.Enum {
                    // @ts-ignore
                    public static BLACK: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_BLUE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_GREEN: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_AQUA: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_RED: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_PURPLE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static GOLD: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static GRAY: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static DARK_GRAY: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static BLUE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static GREEN: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static AQUA: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static RED: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static LIGHT_PURPLE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static YELLOW: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static WHITE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static MAGIC: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static BOLD: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static STRIKETHROUGH: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static UNDERLINE: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static ITALIC: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static RESET: net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public static COLOR_CHAR: string;
                    // @ts-ignore
                    public static ALL_CODES: string;
                    // @ts-ignore
                    public static STRIP_COLOR_PATTERN: java.util.regex.Pattern;
                    // @ts-ignore
                    public static values(): net.md_5.bungee.api.ChatColor[];
                    // @ts-ignore
                    public static valueOf(name: string): net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * Strips the given message of all color codes
                     */
                    // @ts-ignore
                    public static stripColor(input: string): string;
                    // @ts-ignore
                    public static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
                    /**
                     * Get the colour represented by the specified code.
                     */
                    // @ts-ignore
                    public static getByChar(code: string): net.md_5.bungee.api.ChatColor;
                    // @ts-ignore
                    public getName(): string;
                }
            }
        }
    }
}
