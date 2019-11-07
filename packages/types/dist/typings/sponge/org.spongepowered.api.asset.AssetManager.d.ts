// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace asset {
                // @ts-ignore
                interface AssetManager {
                    /**
                     * Returns the {@link Asset} of the specified name for the specified
                     * {@link Plugin} instance.
                     */
                    // @ts-ignore
                     getAsset(plugin: java.lang.Object, name: string): java.util.Optional;
                    /**
                     * Returns the {@link Asset} of the specified name within the domain of the
                     * implementation. This method will typically call
                     * {@link #getAsset(Object, String)} using a dummy
                     * {@link PluginContainer} for the SpongeAPI implementation.
                     */
                    // @ts-ignore
                     getAsset(name: string): java.util.Optional;
                }
            }
        }
    }
}
