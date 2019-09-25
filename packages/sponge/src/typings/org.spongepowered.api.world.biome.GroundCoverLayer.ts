declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    // @ts-ignore
                     class GroundCoverLayer {
                        /**
                         * Creates a new {@link GroundCoverLayer}.
                         */
                        constructor(block: org.spongepowered.api.block.BlockState, depth: org.spongepowered.api.util.weighted.SeededVariableAmount)
                        /**
                         * Creates a new {@link GroundCoverLayer}.
                         */
                        constructor(block: any, depth: org.spongepowered.api.util.weighted.SeededVariableAmount)
                        /**
                         * Gets the {@link BlockState} for this layer.
                         */
                        // @ts-ignore
                        public getBlockState(): any;
                        /**
                         * Sets the function which is used to determine the blockstate to place at
                         * this layer. The input to the function is a noise value.
                         */
                        // @ts-ignore
                        public setBlockState(block: any): void;
                        /**
                         * Sets the {@link BlockState} for this layer.
                         */
                        // @ts-ignore
                        public setBlockState(block: org.spongepowered.api.block.BlockState): void;
                        /**
                         * Gets a representation of the depth of this layer. The variable amount
                         * will be seeded with the stone noise at generation time.
                         */
                        // @ts-ignore
                        public getDepth(): org.spongepowered.api.util.weighted.SeededVariableAmount;
                        /**
                         * Gets a representation of the depth of this layer. The variable amount
                         * will be seeded with the stone noise at generation time. This depth may
                         * vary based on the Y position.
                         */
                        // @ts-ignore
                        public getDepth(topYCoordinate: number): org.spongepowered.api.util.weighted.SeededVariableAmount;
                        /**
                         * Sets the {@link SeededVariableAmount} representing the depth of this
                         * layer. The variable amount will be seeded with the stone noise at
                         * generation time.
                         */
                        // @ts-ignore
                        public setDepth(depth: org.spongepowered.api.util.weighted.SeededVariableAmount): void;
                        /**
                         * Sets the {@link VariableAmount} representing the depth of this layer.
                         */
                        // @ts-ignore
                        public setDepth(depth: org.spongepowered.api.util.weighted.VariableAmount): void;
                        /**
                         * Sets the depth of this layer to the given constant value.
                         */
                        // @ts-ignore
                        public setDepth(depth: number): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(obj: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
