// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    // @ts-ignore
                    interface ClientPingServerEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the client pinging the server.
                         */
                        // @ts-ignore
                         getClient(): org.spongepowered.api.network.status.StatusClient;
                        /**
                         * Gets the response that is about to be sent to the client.
                         */
                        // @ts-ignore
                         getResponse(): org.spongepowered.api.event.server.ClientPingServerEvent.Response;
                    }
                }
            }
        }
    }
}
