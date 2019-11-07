declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                 class CatalogTypeAlreadyRegisteredException extends org.spongepowered.api.registry.RegistryException {
                    /**
                     * Creates a new {@link CatalogTypeAlreadyRegisteredException} with the
                     * provided {@link CatalogType} {@link String} id.
                     */
                    // @ts-ignore
                    constructor(id: string)
                    /**
                     * Gets the {@link CatalogType} id already registered.
                     */
                    // @ts-ignore
                    public getAlreadyRegisteredId(): string;
                }
            }
        }
    }
}
