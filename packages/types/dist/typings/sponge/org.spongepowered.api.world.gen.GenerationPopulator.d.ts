// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface GenerationPopulator {
                        /**
                         * Operates on a {@link MutableBlockVolume} either forming the base terrain
                         * or performing modifications during the generation phase.
                         */
                        // @ts-ignore
                         populate(world: org.spongepowered.api.world.World, buffer: org.spongepowered.api.world.extent.MutableBlockVolume, biomes: org.spongepowered.api.world.extent.ImmutableBiomeVolume): void;
                    }
                }
            }
        }
    }
}
