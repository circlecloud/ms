declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace impl {
                        // @ts-ignore
                         class DelegateMessageChannel implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a delegate {@link MessageChannel} that delegates all functions
                             * to the delegated message channel.
                             */
                            constructor(delegate: org.spongepowered.api.text.channel.MessageChannel)
                            // @ts-ignore
                            protected delegate: org.spongepowered.api.text.channel.MessageChannel;
                            // @ts-ignore
                            public transformMessage(sender: any, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): any;
                            // @ts-ignore
                            public getMembers(): any[] /*java.util.Collection*/;
                        }
                    }
                }
            }
        }
    }
}
