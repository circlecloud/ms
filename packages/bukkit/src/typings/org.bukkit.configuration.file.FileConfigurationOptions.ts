declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                class FileConfigurationOptions {
                    constructor(configuration: org.bukkit.configuration.MemoryConfiguration)
                    public configuration(): org.bukkit.configuration.file.FileConfiguration;
                    public copyDefaults(value: boolean): org.bukkit.configuration.file.FileConfigurationOptions;
                    public pathSeparator(value: string): org.bukkit.configuration.file.FileConfigurationOptions;
                    /**
                     * Gets the header that will be applied to the top of the saved output.
                     * <p>
                     * This header will be commented out and applied directly at the top of
                     * the generated output of the {@link FileConfiguration}. It is not
                     * required to include a newline at the end of the header as it will
                     * automatically be applied, but you may include one if you wish for extra
                     * spacing.
                     * <p>
                     * Null is a valid value which will indicate that no header is to be
                     * applied. The default value is null.
                     */
                    public header(): string;
                    /**
                     * Sets the header that will be applied to the top of the saved output.
                     * <p>
                     * This header will be commented out and applied directly at the top of
                     * the generated output of the {@link FileConfiguration}. It is not
                     * required to include a newline at the end of the header as it will
                     * automatically be applied, but you may include one if you wish for extra
                     * spacing.
                     * <p>
                     * Null is a valid value which will indicate that no header is to be
                     * applied.
                     */
                    public header(value: string): org.bukkit.configuration.file.FileConfigurationOptions;
                    /**
                     * Gets whether or not the header should be copied from a default source.
                     * <p>
                     * If this is true, if a default {@link FileConfiguration} is passed to
                     * {@link
                     * FileConfiguration#setDefaults(org.bukkit.configuration.Configuration)}
                     * then upon saving it will use the header from that config, instead of
                     * the one provided here.
                     * <p>
                     * If no default is set on the configuration, or the default is not of
                     * type FileConfiguration, or that config has no header ({@link #header()}
                     * returns null) then the header specified in this configuration will be
                     * used.
                     * <p>
                     * Defaults to true.
                     */
                    public copyHeader(): boolean;
                    /**
                     * Sets whether or not the header should be copied from a default source.
                     * <p>
                     * If this is true, if a default {@link FileConfiguration} is passed to
                     * {@link
                     * FileConfiguration#setDefaults(org.bukkit.configuration.Configuration)}
                     * then upon saving it will use the header from that config, instead of
                     * the one provided here.
                     * <p>
                     * If no default is set on the configuration, or the default is not of
                     * type FileConfiguration, or that config has no header ({@link #header()}
                     * returns null) then the header specified in this configuration will be
                     * used.
                     * <p>
                     * Defaults to true.
                     */
                    public copyHeader(value: boolean): org.bukkit.configuration.file.FileConfigurationOptions;
                }
            }
        }
    }
}
