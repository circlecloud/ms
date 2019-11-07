// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface FactoryRegistry extends org.spongepowered.api.registry.RegistryModule {
                    /**
                     * Gets the owning {@link Class} of the factory in question.
                     */
                    // @ts-ignore
                     getFactoryOwner(): java.lang.Class;
                    /**
                     * Provides the new factory instance.
                     */
                    // @ts-ignore
                     provideFactory(): java.lang.Object;
                    /**
                     * Initialize this registry module to perform any required operations
                     * prior to initializing the factory, and or constructing the factory.
                     */
                    // @ts-ignore
                     initialize(): void;
                }
            }
        }
    }
}
