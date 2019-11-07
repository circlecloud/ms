declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace rcon {
                        // @ts-ignore
                        interface RconConnectionEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the {@link RconSource} responsible for the event.
                             */
                            // @ts-ignore
                             getSource(): org.spongepowered.api.command.source.RconSource;
                        }
                    }
                }
            }
        }
    }
}
