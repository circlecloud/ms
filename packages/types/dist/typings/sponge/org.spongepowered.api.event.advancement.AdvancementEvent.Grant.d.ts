// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace AdvancementEvent {
                        // @ts-ignore
                        interface Grant extends org.spongepowered.api.event.advancement.AdvancementEvent, org.spongepowered.api.event.message.MessageChannelEvent {
                            /**
                             * Gets the {@link Instant} at which the {@link Advancement}
                             * was unlocked.
                             */
                            // @ts-ignore
                             getTime(): java.time.Instant;
                        }
                    }
                }
            }
        }
    }
}
