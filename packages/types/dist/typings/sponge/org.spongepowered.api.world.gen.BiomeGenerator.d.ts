declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface BiomeGenerator {
                        /**
                         * Generates the biomes for the whole buffer using only biomes from the
                         * given array of available biomes. The resultant biomes are placed into the
                         * given buffer.
                         * <p> The biome generator can be called multiple times for the same
                         * position. The biome generator should, for any position/world seed
                         * combination, always return the same biome. </p>
                         */
                        // @ts-ignore
                         generateBiomes(buffer: org.spongepowered.api.world.extent.MutableBiomeVolume): void;
                    }
                }
            }
        }
    }
}
