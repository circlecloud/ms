// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    namespace StatusResponse {
                        // @ts-ignore
                        interface Players {
                            /**
                             * Gets the amount of online players on the server.
                             */
                            // @ts-ignore
                             getOnline(): number;
                            /**
                             * Gets the maximum amount of allowed players on the server.
                             */
                            // @ts-ignore
                             getMax(): number;
                            /**
                             * Gets an immutable list of online players on the server to display on
                             * the client.
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
