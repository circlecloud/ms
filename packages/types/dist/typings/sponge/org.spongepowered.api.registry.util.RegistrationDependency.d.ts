declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                namespace util {
                    // @ts-ignore
                    interface RegistrationDependency {
                        /**
                         * Gets the array of {@link RegistryModule}s that the owning
                         * {@link RegistryModule} relies on having completed their own
                         * registrations prior to this module performing registrations.
                         * <p>Note that this is different from having a module performing
                         * a {@link DelayedRegistration}, as the module in question can still
                         * perform it's registrations in the same {@link RegistrationPhase}
                         * as the depending modules. It is guaranteed that the depending
                         * modules will perform their registrations prior to the owning module.
                         * </p>
                         */
                        // @ts-ignore
                         value(): java.lang.Class[];
                    }
                }
            }
        }
    }
}
