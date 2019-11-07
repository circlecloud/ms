// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    // @ts-ignore
                     class StateMatcher extends java.lang.Object {
                        /**
                         * Gets a {@code true} return value if the provided {@link BlockState}
                         * sufficiently matches this matcher, such that the {@link BlockType}
                         * matches, and the pre-defined {@link BlockTrait} values match.
                         */
                        // @ts-ignore
                        public matches(state: org.spongepowered.api.block.BlockState): boolean;
                        // @ts-ignore
                        public test(blockState: org.spongepowered.api.block.BlockState): boolean;
                        /**
                         * Gets a {@link List} of compatible {@link BlockState}s.
                         * Since all {@link BlockState}s are known in the initialization
                         * of a {@link BlockType}, the states are already deterministic
                         * and cannot change themselves.
                         */
                        // @ts-ignore
                        public getCompatibleStates(): java.util.List;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
