// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface IcePath extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link IcePath} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.IcePath.Builder;
                            /**
                             * Gets the radius of the path to spawn.
                             */
                            // @ts-ignore
                             getRadius(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the radius of the path to spawn, cannot be negative.
                             */
                            // @ts-ignore
                             setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the radius of the path to spawn, cannot be negative.
                             */
                            // @ts-ignore
                             setRadius(radius: number): void;
                            /**
                             * Gets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             getSectionsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setSectionsPerChunk(sections: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             */
                            // @ts-ignore
                             setSectionsPerChunk(sections: number): void;
                        }
                    }
                }
            }
        }
    }
}
