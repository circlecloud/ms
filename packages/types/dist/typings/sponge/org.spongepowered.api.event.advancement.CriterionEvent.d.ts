declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    // @ts-ignore
                    interface CriterionEvent extends org.spongepowered.api.event.advancement.AdvancementEvent {
                        /**
                         * Gets the {@link AdvancementCriterion} that was met.
                         */
                        // @ts-ignore
                         getCriterion(): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                    }
                }
            }
        }
    }
}
