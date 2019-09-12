declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                abstract class FileConfiguration {
                    /**
                     * Creates an empty {@link FileConfiguration} with no default values.
                     */
                    constructor()
                    /**
                     * Creates an empty {@link FileConfiguration} using the specified {@link
                     * Configuration} as a source for all default values.
                     */
                    constructor(defaults: org.bukkit.configuration.Configuration)
                    /**
                     * Saves this {@link FileConfiguration} to the specified location.
                     * <p>
                     * If the file does not exist, it will be created. If already exists, it
                     * will be overwritten. If it cannot be overwritten or created, an
                     * exception will be thrown.
                     * <p>
                     * This method will save using the system default encoding, or possibly
                     * using UTF8.
                     */
                    public save(file: any): void;
                    /**
                     * Saves this {@link FileConfiguration} to the specified location.
                     * <p>
                     * If the file does not exist, it will be created. If already exists, it
                     * will be overwritten. If it cannot be overwritten or created, an
                     * exception will be thrown.
                     * <p>
                     * This method will save using the system default encoding, or possibly
                     * using UTF8.
                     */
                    public save(file: string): void;
                    /**
                     * Saves this {@link FileConfiguration} to a string, and returns it.
                     */
                    public abstract saveToString(): string;
                    /**
                     * Loads this {@link FileConfiguration} from the specified location.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given file.
                     * <p>
                     * If the file cannot be loaded for any reason, an exception will be
                     * thrown.
                     */
                    public load(file: any): void;
                    /**
                     * Loads this {@link FileConfiguration} from the specified reader.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given stream.
                     */
                    public load(reader: any): void;
                    /**
                     * Loads this {@link FileConfiguration} from the specified location.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given file.
                     * <p>
                     * If the file cannot be loaded for any reason, an exception will be
                     * thrown.
                     */
                    public load(file: string): void;
                    /**
                     * Loads this {@link FileConfiguration} from the specified string, as
                     * opposed to from file.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given string.
                     * <p>
                     * If the string is invalid in any way, an exception will be thrown.
                     */
                    public abstract loadFromString(contents: string): void;
                    /**
                     * Compiles the header for this {@link FileConfiguration} and returns the
                     * result.
                     * <p>
                     * This will use the header from {@link #options()} -&gt; {@link
                     * FileConfigurationOptions#header()}, respecting the rules of {@link
                     * FileConfigurationOptions#copyHeader()} if set.
                     */
                    protected abstract buildHeader(): string;
                    public options(): org.bukkit.configuration.file.FileConfigurationOptions;
                }
            }
        }
    }
}
