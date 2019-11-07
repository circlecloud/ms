// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        // @ts-ignore
                        interface Login extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.message.MessageEvent, org.spongepowered.api.event.user.TargetUserEvent, org.spongepowered.api.event.Cancellable {
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
                            /**
                             * Gets the transform that the {@link Player} came from.
                             */
                            // @ts-ignore
                             getFromTransform(): org.spongepowered.api.entity.Transform;
                            /**
                             * Gets the new transform that the {@link Player} will change to.
                             */
                            // @ts-ignore
                             getToTransform(): org.spongepowered.api.entity.Transform;
                            /**
                             * Sets the new transform that the {@link Player} will change to.
                             */
                            // @ts-ignore
                             setToTransform(transform: org.spongepowered.api.entity.Transform): void;
                        }
                    }
                }
            }
        }
    }
}
