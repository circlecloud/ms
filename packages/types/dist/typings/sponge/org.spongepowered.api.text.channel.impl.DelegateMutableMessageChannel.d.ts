// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace impl {
                        // @ts-ignore
                         class DelegateMutableMessageChannel extends org.spongepowered.api.text.channel.AbstractMutableMessageChannel {
                            /**
                             * Constructs a delegate mutable message channel.
                             * <p>The members from the provided channel are copied into our
                             * own local collection.</p>
                             */
                            // @ts-ignore
                            constructor(delegate: org.spongepowered.api.text.channel.MessageChannel)
                            // @ts-ignore
                            protected delegate: org.spongepowered.api.text.channel.MessageChannel;
                            // @ts-ignore
                            public transformMessage(sender: java.lang.Object, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
