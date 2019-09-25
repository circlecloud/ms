declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface ExtraClassCatalogRegistryModule extends org.spongepowered.api.registry.AdditionalCatalogRegistryModule {
                    /**
                     * Gets whether the provided {@link Class} is already registered.
                     */
                    // @ts-ignore
                     hasRegistrationFor(mappedClass: any): boolean;
                    /**
                     * Gets the {@link CatalogType} based on the provided {@link Class}.
                     */
                    // @ts-ignore
                     getForClass(clazz: any): org.spongepowered.api.CatalogType;
                }
            }
        }
    }
}
