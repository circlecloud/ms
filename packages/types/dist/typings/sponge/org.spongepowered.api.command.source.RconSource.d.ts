// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    // @ts-ignore
                    interface RconSource extends org.spongepowered.api.command.source.RemoteSource {
                        /**
                         * Gets whether this client is logged in, or authenticated.
                         */
                        // @ts-ignore
                         getLoggedIn(): boolean;
                        /**
                         * Sets whether this client is logged in, or authenticated.
                         */
                        // @ts-ignore
                         setLoggedIn(loggedIn: boolean): void;
                    }
                }
            }
        }
    }
}
