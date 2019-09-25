declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                // @ts-ignore
                interface PluginContainer {
                    /**
                     * Gets the qualified ID of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getId(): string;
                    /**
                     * Gets the name of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the version of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getVersion(): any;
                    /**
                     * Gets the description of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getDescription(): any;
                    /**
                     * Gets the url or website of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getUrl(): any;
                    /**
                     * Gets the authors of the {@link Plugin} within this container.
                     */
                    // @ts-ignore
                     getAuthors(): any[] /*java.util.List*/;
                    /**
                     * Gets a {@link Set} of all dependencies of the {@link Plugin} within this
                     * container.
                     */
                    // @ts-ignore
                     getDependencies(): any[] /*java.util.Set*/;
                    /**
                     * Gets the {@link PluginDependency} the plugin in this container has on
                     * the plugin with the specified plugin ID.
                     */
                    // @ts-ignore
                     getDependency(id: string): any;
                    /**
                     * Retrieves the {@link Asset} of the specified name from the
                     * {@link AssetManager} for this {@link Plugin}.
                     */
                    // @ts-ignore
                     getAsset(name: string): any;
                    /**
                     * Returns the source the plugin was loaded from.
                     */
                    // @ts-ignore
                     getSource(): any;
                    /**
                     * Returns the created instance of {@link Plugin} if it is available.
                     */
                    // @ts-ignore
                     getInstance(): any;
                    /**
                     * Returns the assigned logger to this {@link Plugin}.
                     */
                    // @ts-ignore
                     getLogger(): any /*Logger*/;
                }
            }
        }
    }
}
