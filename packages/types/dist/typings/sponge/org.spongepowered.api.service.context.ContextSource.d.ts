// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    // @ts-ignore
                    interface ContextSource {
                        /**
                         * Returns the context most relevant to this object.
                         * <p>This context may or may not be the same across multiple invocations.</p>
                         */
                        // @ts-ignore
                         getContext(): org.spongepowered.api.service.context.Context;
                    }
                }
            }
        }
    }
}
