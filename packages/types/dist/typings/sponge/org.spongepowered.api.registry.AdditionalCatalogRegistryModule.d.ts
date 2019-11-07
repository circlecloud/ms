// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface AdditionalCatalogRegistryModule extends org.spongepowered.api.registry.CatalogRegistryModule {
                    /**
                     * Performs additional registration after initial registration of
                     * the pertaining {@link CatalogType}.
                     */
                    // @ts-ignore
                     registerAdditionalCatalog(extraCatalog: org.spongepowered.api.CatalogType): void;
                }
            }
        }
    }
}
