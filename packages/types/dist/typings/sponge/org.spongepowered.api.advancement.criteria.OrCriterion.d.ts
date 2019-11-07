declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface OrCriterion extends org.spongepowered.api.advancement.criteria.OperatorCriterion {
                        /**
                         * Attempts to build a new OR operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p> There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         */
                        // @ts-ignore
                         of(criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.AdvancementCriterion;
                        /**
                         * Attempts to build a new OR operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
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
