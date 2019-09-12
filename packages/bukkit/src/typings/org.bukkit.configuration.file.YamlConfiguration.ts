declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                class YamlConfiguration {
                    constructor()
                    protected static COMMENT_PREFIX: string;
                    protected static BLANK_CONFIG: string;
                    public saveToString(): string;
                    public loadFromString(contents: string): void;
                    protected convertMapsToSections(input: Map<any, any> /*java.util.Map*/, section: org.bukkit.configuration.ConfigurationSection): void;
                    protected parseHeader(input: string): string;
                    protected buildHeader(): string;
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
                    public static loadConfiguration(file: any): org.bukkit.configuration.file.YamlConfiguration;
                    /**
                     * Creates a new {@link YamlConfiguration}, loading from the given reader.
                     * <p>
                     * Any errors loading the Configuration will be logged and then ignored.
                     * If the specified input is not a valid config, a blank config will be
                     * returned.
                     */
                    public static loadConfiguration(reader: any): org.bukkit.configuration.file.YamlConfiguration;
                }
            }
        }
    }
}
