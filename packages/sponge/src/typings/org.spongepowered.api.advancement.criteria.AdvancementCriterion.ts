declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface AdvancementCriterion {
                        // @ts-ignore
                         EMPTY: org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        // @ts-ignore
                         DUMMY: org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Creates a new {@link Builder} to create {@link AdvancementCriterion}s.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.advancement.criteria.AdvancementCriterion.Builder;
                        /**
                         * Gets the name of this criterion.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an AND operation.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         and(criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an AND operation.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         and(criteria: any): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an OR operation.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         or(criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an OR operation.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         or(criteria: any): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Gets the {@link FilteredTrigger} of this
                         * {@link AdvancementCriterion}, if present.
                         */
                        // @ts-ignore
                         getTrigger(): any;
                    }
                }
            }
        }
    }
}
