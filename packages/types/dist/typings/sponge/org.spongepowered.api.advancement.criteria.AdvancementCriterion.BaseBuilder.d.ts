declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace AdvancementCriterion {
                        // @ts-ignore
                        interface BaseBuilder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the {@link FilteredTrigger}.
                             */
                            // @ts-ignore
                             trigger(trigger: org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger): org.spongepowered.api.advancement.criteria.AdvancementCriterion.BaseBuilder;
                            /**
                             * Sets the name of the {@link AdvancementCriterion}. Names can be
                             * shared between multiple criteria, although it isn't allowed when
                             * using them for the same {@link Advancement}.
                             */
                            // @ts-ignore
                             name(name: string): org.spongepowered.api.advancement.criteria.AdvancementCriterion.BaseBuilder;
                            /**
                             * Builds a new {@link AdvancementCriterion}.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        }
                    }
                }
            }
        }
    }
}
