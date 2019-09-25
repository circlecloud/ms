declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    // @ts-ignore
                    interface MessageChannelEvent extends org.spongepowered.api.event.message.MessageEvent {
                        /**
                         * Gets the original channel that this message will be sent to.
                         */
                        // @ts-ignore
                         getOriginalChannel(): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Gets the current channel that this message will be sent to.
                         * <p>Note that an {@link Optional#empty()} channel is different from a
                         * {@link MessageChannel#TO_NONE} channel.</p>
                         */
                        // @ts-ignore
                         getChannel(): any;
                        /**
                         * Sets the channel for this message to go to.
                         * <p>Note that an {@link Optional#empty()} channel is different from a
                         * {@link MessageChannel#TO_NONE} channel.</p>
                         */
                        // @ts-ignore
                         setChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void;
                    }
                }
            }
        }
    }
}
