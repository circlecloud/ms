declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface AlternateCatalogRegistryModule extends org.spongepowered.api.registry.CatalogRegistryModule {
                    /**
                     * Gets the catalog {@link Map map} instead of defaulting to utilizing
                     * {@link RegisterCatalog} annotated field for the map of catalog types.
                     */
                    // @ts-ignore
                     provideCatalogMap(): Map<any, any> /*java.util.Map*/;
                }
            }
        }
    }
}
