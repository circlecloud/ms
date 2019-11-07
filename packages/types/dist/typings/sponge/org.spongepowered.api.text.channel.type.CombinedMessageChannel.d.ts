// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class CombinedMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new combined message channel of the provided
                             * {@link MessageChannel}s.
                             */
                            // @ts-ignore
                            constructor(channels: org.spongepowered.api.text.channel.MessageChannel)
                            /**
                             * Creates a new combined message channel of the provided {@link Collection}
                             * of {@link MessageChannel}s.
                             */
                            // @ts-ignore
                            constructor(channels: java.util.Collection)
                            // @ts-ignore
                            protected channels: java.util.Collection;
                            // @ts-ignore
                            public transformMessage(sender: java.lang.Object, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional;
                            // @ts-ignore
                            public getMembers(): java.util.Collection;
                        }
                    }
                }
            }
        }
    }
}
