declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                class YamlConfigurationOptions {
                    constructor(configuration: org.bukkit.configuration.file.YamlConfiguration)
                    public configuration(): org.bukkit.configuration.file.YamlConfiguration;
                    public copyDefaults(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions;
                    public pathSeparator(value: string): org.bukkit.configuration.file.YamlConfigurationOptions;
                    public header(value: string): org.bukkit.configuration.file.YamlConfigurationOptions;
                    public copyHeader(value: boolean): org.bukkit.configuration.file.YamlConfigurationOptions;
                    /**
                     * Gets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     */
                    public indent(): number;
                    /**
                     * Sets how much spaces should be used to indent each line.
                     * <p>
                     * The minimum value this may be is 2, and the maximum is 9.
                     */
                    public indent(value: number): org.bukkit.configuration.file.YamlConfigurationOptions;
                }
            }
        }
    }
}
