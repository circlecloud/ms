declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class FixedMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the
                             * provided {@link MessageReceiver}s.
                             */
                            // @ts-ignore
                            constructor(recipients: org.spongepowered.api.text.channel.MessageReceiver)
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the provided
                             * {@link Collection} of {@link MessageReceiver}s.
                             */
                            // @ts-ignore
                            constructor(provided: java.util.Collection)
                            // @ts-ignore
                            protected recipients: java.util.Set;
                            // @ts-ignore
                            public getMembers(): java.util.Collection;
                        }
                    }
                }
            }
        }
    }
}
