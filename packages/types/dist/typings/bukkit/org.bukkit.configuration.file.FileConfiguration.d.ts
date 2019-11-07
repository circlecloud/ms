// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace file {
                // @ts-ignore
                abstract class FileConfiguration extends org.bukkit.configuration.MemoryConfiguration {
                    /**
                     * Creates an empty {@link FileConfiguration} with no default values.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates an empty {@link FileConfiguration} using the specified {@link
                     * Configuration} as a source for all default values.
                     */
                    // @ts-ignore
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
                    // @ts-ignore
                    public save(file: java.io.File): void;
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
                    // @ts-ignore
                    public save(file: string): void;
                    /**
                     * Saves this {@link FileConfiguration} to a string, and returns it.
                     */
                    // @ts-ignore
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
                    // @ts-ignore
                    public load(file: java.io.File): void;
                    /**
                     * Loads this {@link FileConfiguration} from the specified reader.
                     * <p>
                     * All the values contained within this configuration will be removed,
                     * leaving only settings and defaults, and the new values will be loaded
                     * from the given stream.
                     */
                    // @ts-ignore
                    public load(reader: java.io.Reader): void;
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
                    // @ts-ignore
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
                    // @ts-ignore
                    public abstract loadFromString(contents: string): void;
                    /**
                     * Compiles the header for this {@link FileConfiguration} and returns the
                     * result.
                     * <p>
                     * This will use the header from {@link #options()} -&gt; {@link
                     * FileConfigurationOptions#header()}, respecting the rules of {@link
                     * FileConfigurationOptions#copyHeader()} if set.
                     */
                    // @ts-ignore
                    protected abstract buildHeader(): string;
                    // @ts-ignore
                    public options(): org.bukkit.configuration.file.FileConfigurationOptions;
                }
            }
        }
    }
}
