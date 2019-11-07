declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    // @ts-ignore
                    interface VirtualBiomeType extends org.spongepowered.api.world.biome.BiomeType {
                        /**
                         * Gets a new builder for creating new VirtualBiomeTypes.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                        /**
                         * Gets the biome type which this virtual biome is persisted as.
                         */
                        // @ts-ignore
                         getPersistedType(): org.spongepowered.api.world.biome.BiomeType;
                    }
                }
            }
        }
    }
}
