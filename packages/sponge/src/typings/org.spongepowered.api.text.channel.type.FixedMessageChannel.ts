declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class FixedMessageChannel implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the
                             * provided {@link MessageReceiver}s.
                             */
                            constructor(recipients: org.spongepowered.api.text.channel.MessageReceiver)
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the provided
                             * {@link Collection} of {@link MessageReceiver}s.
                             */
                            constructor(provided: any[] /*java.util.Collection*/)
                            // @ts-ignore
                            protected recipients: any[] /*java.util.Set*/;
                            // @ts-ignore
                            public getMembers(): any[] /*java.util.Collection*/;
                        }
                    }
                }
            }
        }
    }
}
