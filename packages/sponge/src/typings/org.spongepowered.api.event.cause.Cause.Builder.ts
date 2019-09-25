declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace Cause {
                        // @ts-ignore
                         class Builder implements org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Appends the specified object to the cause.
                             */
                            // @ts-ignore
                            public append(cause: any): org.spongepowered.api.event.cause.Cause.Builder;
                            /**
                             * Inserts the specified object into the cause.
                             */
                            // @ts-ignore
                            public insert(position: number, cause: any): org.spongepowered.api.event.cause.Cause.Builder;
                            /**
                             * Appends all specified objects onto the cause.
                             */
                            // @ts-ignore
                            public appendAll(causes: any[] /*java.util.Collection*/): org.spongepowered.api.event.cause.Cause.Builder;
                            /**
                             * Constructs a new {@link Cause} with information added to the builder.
                             */
                            // @ts-ignore
                            public build(ctx: org.spongepowered.api.event.cause.EventContext): org.spongepowered.api.event.cause.Cause;
                            // @ts-ignore
                            public from(value: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.Cause.Builder;
                            // @ts-ignore
                            public reset(): org.spongepowered.api.event.cause.Cause.Builder;
                        }
                    }
                }
            }
        }
    }
}
