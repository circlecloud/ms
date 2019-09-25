declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    // @ts-ignore
                    interface ChannelRegistrationEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the name of the channel being registered or unregistered.
                         */
                        // @ts-ignore
                         getChannel(): string;
                    }
                }
            }
        }
    }
}
