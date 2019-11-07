// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        // @ts-ignore
                        interface ForcedChunkEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the ticket that the chunk was added to.
                             */
                            // @ts-ignore
                             getTicket(): org.spongepowered.api.world.ChunkTicketManager.LoadingTicket;
                            /**
                             * Gets the chunk coordinates.
                             */
                            // @ts-ignore
                             getChunkCoords(): any /*Vector3i*/;
                        }
                    }
                }
            }
        }
    }
}
