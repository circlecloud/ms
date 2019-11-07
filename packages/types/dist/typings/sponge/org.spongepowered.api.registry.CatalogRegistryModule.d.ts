// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface CatalogRegistryModule extends org.spongepowered.api.registry.RegistryModule {
                    /**
                     * Gets the desired {@link CatalogType} from the provided {@link String} id.
                     * If a {@link CatalogType catalog type} is not registered for the given {@code id},
                     * {@link Optional#empty()} is returned.
                     */
                    // @ts-ignore
                     getById(id: string): java.util.Optional;
                    /**
                     * Gets all registered {@link CatalogType}s registered in this
                     * {@link RegistryModule}.
                     */
                    // @ts-ignore
                     getAll(): java.util.Collection;
                }
            }
        }
    }
}
