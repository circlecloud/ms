// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                // @ts-ignore
                 class YamlConfiguration extends org.bukkit.configuration.file.FileConfiguration {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    protected static COMMENT_PREFIX: string;
                    // @ts-ignore
                    protected static BLANK_CONFIG: string;
                    // @ts-ignore
                    public saveToString(): string;
                    // @ts-ignore
                    public loadFromString(contents: string): void;
                    // @ts-ignore
                    protected convertMapsToSections(input: java.util.Map, section: org.bukkit.configuration.ConfigurationSection): void;
                    // @ts-ignore
                    protected parseHeader(input: string): string;
                    // @ts-ignore
                    protected buildHeader(): string;
                    // @ts-ignore
                    public options(): org.bukkit.configuration.file.YamlConfigurationOptions;
                    /**
                     * Creates a new {@link YamlConfiguration}, loading from the given file.
                     * <p>
                     * Any errors loading the Configuration will be logged and then ignored.
                     * If the specified input is not a valid config, a blank config will be
                     * returned.
                     * <p>
                     * The encoding used may follow the system dependent default.
                     */
                    // @ts-ignore
                    public static loadConfiguration(file: java.io.File): org.bukkit.configuration.file.YamlConfiguration;
                    /**
                     * Creates a new {@link YamlConfiguration}, loading from the given reader.
                     * <p>
                     * Any errors loading the Configuration will be logged and then ignored.
                     * If the specified input is not a valid config, a blank config will be
                     * returned.
                     */
                    // @ts-ignore
                    public static loadConfiguration(reader: java.io.Reader): org.bukkit.configuration.file.YamlConfiguration;
                }
            }
        }
    }
}
