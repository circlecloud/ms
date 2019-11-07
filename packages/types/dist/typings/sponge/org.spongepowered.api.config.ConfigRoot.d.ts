// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                // @ts-ignore
                interface ConfigRoot {
                    /**
                     * Gets the pathname to the default configuration file for the plugin.
                     * <p>If the configuration root is shared, then the returned pathname will
                     * refer to the path {@code $config/$plugin_id.conf} (where "$config" is the
                     * shared configuration directory). Otherwise, the returned pathname will
                     * refer to a file named "config.conf" stored in a directory specific to
                     * the plugin.</p>
                     * <p>The returned pathname may refer to a file that does not yet exist.
                     * It is up to the caller of this method to create the file if desired.</p>
                     */
                    // @ts-ignore
                     getConfigPath(): java.nio.file.Path;
                    /**
                     * Gets the configuration file that utilizes the default configuration
                     * pathname.
                     */
                    // @ts-ignore
                     getConfig(): any;
                    /**
                     * Gets the directory that this configuration root refers to.
                     * <p>The returned pathname may not refer to a directory that exists
                     * yet.</p>
                     */
                    // @ts-ignore
                     getDirectory(): java.nio.file.Path;
                }
            }
        }
    }
}
