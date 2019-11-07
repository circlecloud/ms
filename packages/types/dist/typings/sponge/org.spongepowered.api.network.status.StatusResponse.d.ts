// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    // @ts-ignore
                    interface StatusResponse {
                        /**
                         * Gets the description (MOTD) of the status response.
                         */
                        // @ts-ignore
                         getDescription(): org.spongepowered.api.text.Text;
                        /**
                         * Gets player count and the list of players currently playing on the
                         * server.
                         */
                        // @ts-ignore
                         getPlayers(): java.util.Optional;
                        /**
                         * Gets the version of the server displayed when the client or the server
                         * are outdated.
                         */
                        // @ts-ignore
                         getVersion(): org.spongepowered.api.MinecraftVersion;
                        /**
                         * Gets the {@link Favicon} of the server.
                         */
                        // @ts-ignore
                         getFavicon(): java.util.Optional;
                    }
                }
            }
        }
    }
}
