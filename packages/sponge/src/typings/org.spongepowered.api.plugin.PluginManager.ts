declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                // @ts-ignore
                interface PluginManager {
                    // @ts-ignore
                     MINECRAFT_PLUGIN_ID: string;
                    // @ts-ignore
                     SPONGE_PLUGIN_ID: string;
                    /**
                     * Gets the plugin container from an instance.
                     */
                    // @ts-ignore
                     fromInstance(instance: any): any;
                    /**
                     * Retrieves a {@link PluginContainer} based on its ID.
                     */
                    // @ts-ignore
                     getPlugin(id: string): any;
                    /**
                     * Gets a {@link Collection} of all {@link PluginContainer}s.
                     */
                    // @ts-ignore
                     getPlugins(): any[] /*java.util.Collection*/;
                    /**
                     * Checks if a plugin is loaded based on its ID.
                     * This may contain plugins/mods from other systems in some implementations.
                     */
                    // @ts-ignore
                     isLoaded(id: string): boolean;
                }
            }
        }
    }
}
