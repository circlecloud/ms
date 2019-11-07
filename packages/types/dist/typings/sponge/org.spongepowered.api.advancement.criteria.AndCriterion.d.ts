declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface AndCriterion extends org.spongepowered.api.advancement.criteria.OperatorCriterion {
                        /**
                         * Attempts to build a new AND operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         of(criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Attempts to build a new AND operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         of(criteria: java.lang.Iterable): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                    }
                }
            }
        }
    }
}
