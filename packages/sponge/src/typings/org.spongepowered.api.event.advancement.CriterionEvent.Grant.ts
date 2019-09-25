declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        // @ts-ignore
                        interface Grant extends org.spongepowered.api.event.advancement.CriterionEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Instant} at which the {@link AdvancementCriterion}
                             * was unlocked.
                             */
                            // @ts-ignore
                             getTime(): any;
                        }
                    }
                }
            }
        }
    }
}
