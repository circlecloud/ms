declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    // @ts-ignore
                    interface Contextual {
                        /**
                         * Returns the identifier associated with this Contextual.
                         * <p>The identifier of each distinct Contextual within a collection of
                         * contextuals should be unique.</p>
                         * <p>Not guaranteed to be human-readable. Use
                         * {@link #getFriendlyIdentifier()} for a more readable alternative.</p>
                         */
                        // @ts-ignore
                         getIdentifier(): string;
                        /**
                         * Returns the friendly identifier associated with this Contextual.
                         * <p>Unlike {@link #getIdentifier()}, this value is not guaranteed to be
                         * unique.</p>
                         * <p>If the friendly identifier is equal to the normal identifier,
                         * this method should return {@link Optional#empty()}.</p>
                         * <p>Contextuals which represent a Player or a User should return the
                         * username here, if available.</p>
                         */
                        // @ts-ignore
                         getFriendlyIdentifier(): java.util.Optional;
                        /**
                         * Calculates the objects active contexts at the given moment, using the
                         * {@link ContextCalculator}s held by the {@link ContextualService}.
                         * <p>"Active" contexts refers to the contexts currently applicable to the
                         * contextual.</p>
                         * <p>The result of these calculations may be cached.</p>
                         */
                        // @ts-ignore
                         getActiveContexts(): java.util.Set;
                    }
                }
            }
        }
    }
}
