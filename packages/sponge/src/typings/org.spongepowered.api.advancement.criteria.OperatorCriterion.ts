declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface OperatorCriterion extends org.spongepowered.api.advancement.criteria.AdvancementCriterion {
                        /**
                         * Attempts to find all the children {@link AdvancementCriterion}s
                         * with the specified name. The children will be checked recursively.
                         */
                        // @ts-ignore
                         find(name: string): any[] /*java.util.Collection*/;
                        /**
                         * Attempts to find the first child {@link AdvancementCriterion} with
                         * the specified name. The children will be checked recursively, but
                         * direct children are prioritized.
                         */
                        // @ts-ignore
                         findFirst(name: string): any;
                        /**
                         * Gets the children {@link AdvancementCriterion}s of this
                         * {@link OperatorCriterion}. May contain {@link OperatorCriterion}s.
                         */
                        // @ts-ignore
                         getCriteria(): any[] /*java.util.Collection*/;
                        /**
                         * Gets the leaf {@link AdvancementCriterion}s. This means that there will
                         * never be any {@link OperatorCriterion}s in this list.
                         */
                        // @ts-ignore
                         getLeafCriteria(): any[] /*java.util.Collection*/;
                    }
                }
            }
        }
    }
}
