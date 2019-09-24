declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                // @ts-ignore
                 class YamlConfigurationOptions extends org.bukkit.configuration.file.FileConfigurationOptions {
                    constructor(configuration: org.bukkit.configuration.file.YamlConfiguration)
                    public configuration(): org.bukkit.configuration.file.YamlConfiguration;
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
