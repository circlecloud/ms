// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface RegistryModule {
                    /**
                     * Performs default registrations of objects for use with either
                     * companion objects, or the {@link GameRegistry}. This is only
                     * called once, either at the pre-initialization phase of the
                     * {@link GameRegistry}, or if annotated with
                     * {@link DelayedRegistration}, at a later {@link RegistrationPhase}.
                     */
                    // @ts-ignore
                     registerDefaults(): void;
                }
            }
        }
    }
}
