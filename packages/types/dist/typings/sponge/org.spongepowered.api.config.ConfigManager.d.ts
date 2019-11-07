// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                // @ts-ignore
                interface ConfigManager {
                    /**
                     * Gets the configuration root for a plugin that utilizes the shared
                     * configuration folder.
                     * <p>The shared configuration folder <em>may</em> refer to
                     * "config/" but this may vary between implementations and
                     * configurations.</p>
                     * <p>The plugin parameter is used to determine the filename for
                     * {@link ConfigRoot#getConfigPath()}.</p>
                     */
                    // @ts-ignore
                     getSharedConfig(instance: java.lang.Object): org.spongepowered.api.config.ConfigRoot;
                    /**
                     * Gets the configuration root for a plugin that utilizes a configuration
                     * folder specific to the plugin, which <em>may</em> also be a
                     * su-directory of the shared configuration folder.
                     * <p>The provided plugin is used to determine the folder name.</p>
                     */
                    // @ts-ignore
                     getPluginConfig(instance: java.lang.Object): org.spongepowered.api.config.ConfigRoot;
                }
            }
        }
    }
}
