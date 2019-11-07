// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    namespace VirtualBiomeType {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the name of the new virtual biome.
                             */
                            // @ts-ignore
                             name(name: string): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                            /**
                             * Sets the temperature of the virtual biome.
                             */
                            // @ts-ignore
                             temperature(temp: number): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                            /**
                             * Sets the humidity of the virtual biome.
                             */
                            // @ts-ignore
                             humidity(humidity: number): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                            /**
                             * Sets the {@link BiomeType} that this virtual biome is persisted as
                             * after generation is complete.
                             */
                            // @ts-ignore
                             persistedType(biome: org.spongepowered.api.world.biome.BiomeType): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                            /**
                             * Sets the function used for creating new
                             * {@link BiomeGenerationSettings}s for this virtual biome.
                             */
                            // @ts-ignore
                             settingsBuilder(settingsBuilder: java.util.function$.Function): org.spongepowered.api.world.biome.VirtualBiomeType.Builder;
                            /**
                             * Builds a new {@link VirtualBiomeType} with the given unique id.
                             */
                            // @ts-ignore
                             build(id: string): org.spongepowered.api.world.biome.VirtualBiomeType;
                        }
                    }
                }
            }
        }
    }
}
