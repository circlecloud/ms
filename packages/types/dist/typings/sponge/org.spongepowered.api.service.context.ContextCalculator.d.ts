declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    // @ts-ignore
                    interface ContextCalculator {
                        /**
                         * Creates a new {@link ContextCalculator} that provides a single context.
                         */
                        // @ts-ignore
                         forSingleContext(key: string, valueFunction: java.util.function$.Function): org.spongepowered.api.service.context.ContextCalculator;
                        /**
                         * Adds any {@link Context}s this calculator determines to be applicable to
                         * the {@code target} contextual.
                         * <p>Care should be taken to ensure implementations of this method meet the
                         * general requirements for {@link ContextCalculator}, defined in the class
                         * doc.</p>
                         * <p>Calculators should not rely on the state of {@code accumulator} during
                         * this call, and also shouldn't make calls to remove contexts added by
                         * other calculators.</p>
                         */
                        // @ts-ignore
                         accumulateContexts(target: org.spongepowered.api.service.context.Contextual, accumulator: java.util.Set): void;
                        /**
                         * Checks if a {@link Context} is currently applicable to a
                         * {@link Contextual}.
                         * <p>If this calculator does not handle the given type of context, this
                         * method should return false.</p>
                         * <p>For the given set of contexts which would be accumulated using
                         * {@link #accumulateContexts(Contextual, Set)}, this method should return
                         * true if the given context would be included in the accumulated set.</p>
                         */
                        // @ts-ignore
                         matches(context: org.spongepowered.api.service.context.Context, target: org.spongepowered.api.service.context.Contextual): boolean;
                    }
                }
            }
        }
    }
}
