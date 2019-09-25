declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace trait {
                    // @ts-ignore
                    interface BlockTrait extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the name of this {@link BlockTrait}.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Gets all possible values for a specific {@link BlockTrait}. The
                         * included values may not be in any particular order. The returned
                         * {@link Collection} should be considered immutable.
                         */
                        // @ts-ignore
                         getPossibleValues(): any[] /*java.util.Collection*/;
                        /**
                         * Gets the class type of the {@link BlockTrait}'s values.
                         */
                        // @ts-ignore
                         getValueClass(): any;
                        /**
                         * Gets the {@link Predicate} used to determine valid values for this.
                         * {@link BlockTrait}. Any "value" that returns <code>true</code> when
                         * {@link Predicate#test(Object)} is called is valid. The
                         * {@link Predicate} is specific to this trait.
                         */
                        // @ts-ignore
                         getPredicate(): any;
                        /**
                         * Attempts to parse the provided value as a value dictated possible by this trait or {@link Optional#empty()} otherwise.
                         */
                        // @ts-ignore
                         parseValue(value: string): any;
                    }
                }
            }
        }
    }
}
