declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    // @ts-ignore
                     class MatcherBuilder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the root {@link BlockType} for the {@link StateMatcher}.
                         * <p>Note that the {@link BlockType type} <b>must be set prior</b>
                         * to setting various {@link BlockTrait traits} and their values.</p>
                         */
                        // @ts-ignore
                        public type(type: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.MatcherBuilder;
                        /**
                         * Adds the desired {@link BlockTrait} and {code value} to this
                         * builder, if the desired {@link BlockTrait} does not belong to the
                         * original {@link BlockType} as provided by {@link #type(BlockType)},
                         * an exception is thrown. Likewise, if a {@code value} is not within
                         * the possible values for the desired trait of the desired type, an
                         * exception is thrown.
                         */
                        // @ts-ignore
                        public trait(trait: org.spongepowered.api.block.trait.BlockTrait, value: java.lang.Comparable): org.spongepowered.api.block.BlockState.MatcherBuilder;
                        /**
                         * Creates a new {@link StateMatcher}.
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.block.BlockState.StateMatcher;
                        // @ts-ignore
                        public from(value: org.spongepowered.api.block.BlockState.StateMatcher): org.spongepowered.api.block.BlockState.MatcherBuilder;
                        // @ts-ignore
                        public reset(): org.spongepowered.api.block.BlockState.MatcherBuilder;
                    }
                }
            }
        }
    }
}
