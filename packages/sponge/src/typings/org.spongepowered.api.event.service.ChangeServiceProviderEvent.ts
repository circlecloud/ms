declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace service {
                    // @ts-ignore
                    interface ChangeServiceProviderEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the previous provider registration for the service, if available.
                         * <p>If a provider is being registered for the first time for the service,
                         * this will return {@link Optional#empty()}.</p>
                         * <p>If this is present, then it will always have the same
                         * provider as {@link #getNewProviderRegistration()}.</p>
                         */
                        // @ts-ignore
                         getPreviousProviderRegistration(): any;
                        /**
                         * Gets the new provider registration for the service.
                         */
                        // @ts-ignore
                         getNewProviderRegistration(): org.spongepowered.api.service.ProviderRegistration;
                        /**
                         * Gets whether a previous provider existed, which was replaced by the new
                         * provider.
                         */
                        // @ts-ignore
                         isReplacement(): boolean;
                        /**
                         * Gets the service that a provider is being registered for.
                         */
                        // @ts-ignore
                         getService(): any;
                        /**
                         * Gets the new provider being registered.
                         */
                        // @ts-ignore
                         getNewProvider(): any;
                    }
                }
            }
        }
    }
}
