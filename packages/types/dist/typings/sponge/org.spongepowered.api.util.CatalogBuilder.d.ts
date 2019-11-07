declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                interface CatalogBuilder extends org.spongepowered.api.util.ResettableBuilder {
                    /**
                     * Sets the id of the {@link CatalogType} (without the namespace/plugin id).
                     */
                    // @ts-ignore
                     id(id: string): org.spongepowered.api.util.ResettableBuilder;
                    /**
                     * Sets the name of the {@link CatalogType}. Defaults to {@link #id(String)}.
                     */
                    // @ts-ignore
                     name(name: string): org.spongepowered.api.util.ResettableBuilder;
                    /**
                     * Sets the name of the {@link CatalogType} as a {@link Translation}. Defaults to {@link #id}.
                     */
                    // @ts-ignore
                     name(translation: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.util.ResettableBuilder;
                    /**
                     * Builds the {@link CatalogType} of type {@code C}.
                     * <p>The last {@link PluginContainer} in the cause stack will be used to
                     * determine which plugin was used to construct the {@link CatalogType}.</p>
                     */
                    // @ts-ignore
                     build(): org.spongepowered.api.CatalogType;
                    // @ts-ignore
                     from(value: org.spongepowered.api.CatalogType): org.spongepowered.api.util.ResettableBuilder;
                }
            }
        }
    }
}
