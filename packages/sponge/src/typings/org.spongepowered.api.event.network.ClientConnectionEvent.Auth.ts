declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        // @ts-ignore
                        interface Auth extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.message.MessageEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link RemoteConnection} representing the client connection.
                             */
                            // @ts-ignore
                             getConnection(): org.spongepowered.api.network.RemoteConnection;
                            /**
                             * Gets the profile of the client attempting to connect.
                             */
                            // @ts-ignore
                             getProfile(): org.spongepowered.api.profile.GameProfile;
                        }
                    }
                }
            }
        }
    }
}
