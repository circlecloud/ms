// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    // @ts-ignore
                    interface EntityLoadingTicket extends org.spongepowered.api.world.ChunkTicketManager.LoadingTicket {
                        /**
                         * Binds an Entity to this Ticket, causing the chunk the Entity is in to
                         * be initially loaded with the World. This makes the Entity available
                         * during callbacks.
                         */
                        // @ts-ignore
                         bindToEntity(entity: org.spongepowered.api.entity.Entity): void;
                        /**
                         * Gets the Entity bound to this ticket.
                         */
                        // @ts-ignore
                         getBoundEntity(): org.spongepowered.api.entity.Entity;
                    }
                }
            }
        }
    }
}
