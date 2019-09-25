declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    // @ts-ignore
                    interface PlayerOrderedCallback extends org.spongepowered.api.world.ChunkTicketManager.Callback {
                        /**
                         * Callback for loading player Tickets during world load.
                         * <p>During this callback you cannot associate chunks to tickets. This
                         * callback gets all player-associated tickets registered by the plugin.
                         * Tickets absent from the returned Multimap will be released.</p>
                         */
                        // @ts-ignore
                         onPlayerLoaded(tickets: any, world: org.spongepowered.api.world.World): any;
                    }
                }
            }
        }
    }
}
