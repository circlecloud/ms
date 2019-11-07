// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    // @ts-ignore
                    interface Callback {
                        /**
                         * Callback for loading Tickets during world load.
                         * <p>The list of forced chunks is not saved with Tickets, this callback
                         * is your place to reassociate chunks to Tickets, using the extra
                         * information saved with the ticket or your own external configuration.
                         * Any unneeded tickets must be manually released.</p>
                         * <p>The list of tickets contains both standard plugin and
                         * player-associated tickets that were registered by this plugin.</p>
                         * <p>The list of tickets has been truncated to the maximum allowed for
                         * your plugin, so may not be all saved tickets in the event that the
                         * maximum tickets for your plugin was decreased.</p>
                         */
                        // @ts-ignore
                         onLoaded(tickets: any, world: org.spongepowered.api.world.World): void;
                    }
                }
            }
        }
    }
}
