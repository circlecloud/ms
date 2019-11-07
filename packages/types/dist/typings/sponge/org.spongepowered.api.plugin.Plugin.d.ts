// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                // @ts-ignore
                interface Plugin {
                    // @ts-ignore
                     ID_PATTERN: java.util.regex.Pattern;
                    /**
                     * An ID for the plugin to be used internally. The ID should be unique as to
                     * not conflict with other plugins.
                     * <p>The plugin ID must match the {@link #ID_PATTERN}.</p>
                     */
                    // @ts-ignore
                     id(): string;
                    /**
                     * The human readable name of the plugin as to be used in descriptions and
                     * similar things.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * The version of the plugin.
                     */
                    // @ts-ignore
                     version(): string;
                    /**
                     * The dependencies required to load <strong>before</strong> this plugin.
                     */
                    // @ts-ignore
                     dependencies(): org.spongepowered.api.plugin.Dependency[];
                    /**
                     * The description of the plugin, explaining what it can be used for.
                     */
                    // @ts-ignore
                     description(): string;
                    /**
                     * The URL or website of the plugin.
                     */
                    // @ts-ignore
                     url(): string;
                    /**
                     * The authors of the plugin.
                     */
                    // @ts-ignore
                     authors(): java.lang.String[];
                }
            }
        }
    }
}
