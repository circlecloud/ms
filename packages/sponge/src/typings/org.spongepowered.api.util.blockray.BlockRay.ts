declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    // @ts-ignore
                     class BlockRay {
                        /**
                         * Resets the iterator; it will iterate from the starting location again.
                         */
                        // @ts-ignore
                        public reset(): void;
                        // @ts-ignore
                        public hasNext(): boolean;
                        // @ts-ignore
                        public next(): org.spongepowered.api.util.blockray.BlockRayHit;
                        /**
                         * Traces the block ray to the end and returns the last block
                         * accepted by the filter, or none if the extent or block limit was reached.
                         * This advances the iterator.
                         */
                        // @ts-ignore
                        public end(): any;
                        /**
                         * Initializes a block ray builder with the given starting location.
                         */
                        // @ts-ignore
                        public static from(start: org.spongepowered.api.world.Location): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                        /**
                         * Initializes a block ray builder with the given starting location.
                         */
                        // @ts-ignore
                        public static from(extent: org.spongepowered.api.world.extent.Extent, start: any /*Vector3d*/): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                        /**
                         * Initializes a block ray builder for the entity's eye.
                         * If the eye location isn't defined for the entity, the
                         * regular location is used. This sets both the starting
                         * point and direction.
                         */
                        // @ts-ignore
                        public static from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                        /**
                         * A filter that accepts all blocks. A {@link BlockRay} combined with no
                         * other filter than this one could run endlessly.
                         */
                        // @ts-ignore
                        public static allFilter(): any;
                        /**
                         * A block type filter that only permits air as a transparent block.
                         * <p>This is provided for convenience, as the default behavior in previous
                         * systems was to pass through air blocks only until a non-air block was
                         * hit.</p>
                         */
                        // @ts-ignore
                        public static onlyAirFilter(): any;
                        /**
                         * A filter that only allows blocks of a certain type.
                         */
                        // @ts-ignore
                        public static blockTypeFilter(type: org.spongepowered.api.block.BlockType): any;
                        /**
                         * Extends a filter by a number of blocks, regardless of what the extended
                         * filter does.
                         */
                        // @ts-ignore
                        public static continueAfterFilter(filter: any, numberOfBlocks: number): any;
                    }
                }
            }
        }
    }
}
