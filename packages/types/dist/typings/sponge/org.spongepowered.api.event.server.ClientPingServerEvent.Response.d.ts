declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace ClientPingServerEvent {
                        // @ts-ignore
                        interface Response extends org.spongepowered.api.network.status.StatusResponse {
                            /**
                             * Sets the description (MOTD) of the status response.
                             */
                            // @ts-ignore
                             setDescription(description: org.spongepowered.api.text.Text): void;
                            // @ts-ignore
                             getPlayers(): java.util.Optional;
                            /**
                             * Sets whether the player count and the list of players on this server
                             * is hidden and doesn't get sent to the client. This will restore
                             * {@link #getPlayers()} if the players were previously hidden.
                             * <p>Use {@link #getPlayers()}.{@link Optional#isPresent() isPresent()} to
                             * check if the players are already hidden.</p>
                             * <p>In Vanilla, this will display {@code ???} instead of the player
                             * count in the server list.</p>
                             */
                            // @ts-ignore
                             setHidePlayers(hide: boolean): void;
                            /**
                             * Sets the {@link Favicon} to display on the client.
                             */
                            // @ts-ignore
                             setFavicon(favicon: org.spongepowered.api.network.status.Favicon): void;
                        }
                    }
                }
            }
        }
    }
}
