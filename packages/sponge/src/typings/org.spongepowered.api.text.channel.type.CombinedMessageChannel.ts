declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class CombinedMessageChannel implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new combined message channel of the provided
                             * {@link MessageChannel}s.
                             */
                            constructor(channels: org.spongepowered.api.text.channel.MessageChannel)
                            /**
                             * Creates a new combined message channel of the provided {@link Collection}
                             * of {@link MessageChannel}s.
                             */
                            constructor(channels: any[] /*java.util.Collection*/)
                            // @ts-ignore
                            protected channels: any[] /*java.util.Collection*/;
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
