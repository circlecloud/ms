declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface ChorusFlower extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link ChorusFlower} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.ChorusFlower.Builder;
                            /**
                             * Gets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p> This is used to prevent the islands from generating around the ender
                             * dragon fight area. </p>
                             */
                            // @ts-ignore
                             getExclusionRadius(): number;
                            /**
                             * Sets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p> This must be a positive value or zero. </p>
                             */
                            // @ts-ignore
                             setExclusionRadius(radius: number): void;
                        }
                    }
                }
            }
        }
    }
}
