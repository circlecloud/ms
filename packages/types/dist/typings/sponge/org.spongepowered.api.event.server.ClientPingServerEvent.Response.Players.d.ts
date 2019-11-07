declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace ClientPingServerEvent {
                        namespace Response {
                            // @ts-ignore
                            interface Players extends org.spongepowered.api.network.status.StatusResponse.Players {
                                /**
                                 * Sets the amount of online players to display on the client.
                                 */
                                // @ts-ignore
                                 setOnline(online: number): void;
                                /**
                                 * Sets the maximum amount of allowed players to display on the
                                 * client.
                                 */
                                // @ts-ignore
                                 setMax(max: number): void;
                                /**
                                 * Gets an mutable list of online players on the server to display
                                 * on the client.
                                 */
                                // @ts-ignore
                                 getProfiles(): java.util.List;
                            }
                        }
                    }
                }
            }
        }
    }
}
