declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    namespace FishingEvent {
                        // @ts-ignore
                        interface Stop extends org.spongepowered.api.event.action.FishingEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets a list of {@link Transaction}s for each {@link ItemStackSnapshot}
                             * that will be spawned if this event is not cancelled.
                             */
                            // @ts-ignore
                             getTransactions(): java.util.List;
                            /**
                             * Gets a list of {@link Transaction}s for each {@link ItemStackSnapshot}
                             * that will be spawned if this event is not cancelled.
                             */
                            // @ts-ignore
                             getItemStackTransaction(): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
