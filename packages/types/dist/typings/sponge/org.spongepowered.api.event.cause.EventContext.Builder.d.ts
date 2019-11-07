// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace EventContext {
                        // @ts-ignore
                         class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Adds the given context key value pair to the context.
                             */
                            // @ts-ignore
                            public add(key: org.spongepowered.api.event.cause.EventContextKey, value: java.lang.Object): org.spongepowered.api.event.cause.EventContext.Builder;
                            // @ts-ignore
                            public from(value: org.spongepowered.api.event.cause.EventContext): org.spongepowered.api.event.cause.EventContext.Builder;
                            // @ts-ignore
                            public reset(): org.spongepowered.api.event.cause.EventContext.Builder;
                            /**
                             * Creates a new {@link EventContext}.
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.event.cause.EventContext;
                        }
                    }
                }
            }
        }
    }
}
