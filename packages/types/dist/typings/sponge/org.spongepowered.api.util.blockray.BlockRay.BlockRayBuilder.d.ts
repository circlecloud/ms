declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    namespace BlockRay {
                        // @ts-ignore
                         class BlockRayBuilder extends java.lang.Object {
                            /**
                             * Adds the filter to the block ray.
                             * The block ray will skip over blocks that do not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             */
                            // @ts-ignore
                            public skipFilter(skipFilter: java.util.function$.Predicate): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Adds filters to the block ray.
                             * The block ray will skip over blocks that do not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             */
                            // @ts-ignore
                            public skipFilter(skipFilters: java.util.function$.Predicate): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Adds the filter to the block ray.
                             * The block ray will end if a block does not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             */
                            // @ts-ignore
                            public stopFilter(stopFilter: java.util.function$.Predicate): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Adds filters to the block ray.
                             * The block ray will end if a block does not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             */
                            // @ts-ignore
                            public stopFilter(stopFilters: java.util.function$.Predicate): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Sets the direction and ending location. This or setting the direction
                             * is required and can only be done once.
                             */
                            // @ts-ignore
                            public to(end: any /*Vector3d*/): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Sets the direction. This or setting the ending location is required
                             * and can only be done once.
                             */
                            // @ts-ignore
                            public direction(direction: any /*Vector3d*/): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Sets the maximum distance before stopping.
                             * This is a safeguard to prevent infinite iteration.
                             * Default value is 1000. Use a negative value to disable this.
                             */
                            // @ts-ignore
                            public distanceLimit(distanceLimit: number): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Sets whether or not to perform narrow phase intersections. The
                             * narrow phase performs intersections with the block selection boxes
                             * if they are smaller than a voxel. This is necessary to obtain
                             * correct intersections with small blocks like: signs, buttons,
                             * fences, etc. This is enabled by default.
                             */
                            // @ts-ignore
                            public narrowPhase(enable: boolean): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder;
                            /**
                             * Gets the starting position of the block ray. Given here since some
                             * filters might require it.
                             */
                            // @ts-ignore
                            public position(): any /*Vector3d*/;
                            /**
                             * Returns a block ray build from the settings. An ending location or
                             * direction needs to have been set.
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.util.blockray.BlockRay;
                            // @ts-ignore
                            public iterator(): java.util.Iterator;
                            /**
                             * Iterates the built block ray until the end
                             * and returns the last hit, if any.
                             */
                            // @ts-ignore
                            public end(): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
