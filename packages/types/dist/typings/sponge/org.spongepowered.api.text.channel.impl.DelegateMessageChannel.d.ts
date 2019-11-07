// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace impl {
                        // @ts-ignore
                         class DelegateMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a delegate {@link MessageChannel} that delegates all functions
                             * to the delegated message channel.
                             */
                            // @ts-ignore
                            constructor(delegate: org.spongepowered.api.text.channel.MessageChannel)
                            // @ts-ignore
                            protected delegate: org.spongepowered.api.text.channel.MessageChannel;
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
