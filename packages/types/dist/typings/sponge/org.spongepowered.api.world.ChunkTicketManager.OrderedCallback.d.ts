declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    // @ts-ignore
                    interface OrderedCallback extends org.spongepowered.api.world.ChunkTicketManager.Callback {
                        /**
                         * Callback for loading Tickets during world load.
                         * <p>During this callback you cannot associate chunks to tickets. This
                         * callback gets all loaded non-player tickets. The returned list will
                         * be truncated to maxTickets after this callback is called, and and
                         * tickets absent from the list will be released.</p>
                         */
                        // @ts-ignore
                         onLoaded(tickets: any, world: org.spongepowered.api.world.World, maxTickets: number): java.util.List;
                    }
                }
            }
        }
    }
}
