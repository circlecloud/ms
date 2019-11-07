declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    // @ts-ignore
                    interface ContextualService {
                        /**
                         * Registers a {@link ContextCalculator} for use by this service.
                         * <p>It is not guaranteed that the calculator will be used by the service,
                         * as some implementations may not support contexts.</p>
                         */
                        // @ts-ignore
                         registerContextCalculator(calculator: org.spongepowered.api.service.context.ContextCalculator): void;
                    }
                }
            }
        }
    }
}
