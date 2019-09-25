declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    namespace BiomeGenerationSettings {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the min height for the biome.
                             */
                            // @ts-ignore
                             minHeight(height: number): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the max height for the biome.
                             */
                            // @ts-ignore
                             maxHeight(height: number): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the ground cover layers.
                             */
                            // @ts-ignore
                             groundCover(coverLayers: org.spongepowered.api.world.biome.GroundCoverLayer): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the ground cover layers.
                             */
                            // @ts-ignore
                             groundCover(coverLayers: any): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the generation populators.
                             */
                            // @ts-ignore
                             generationPopulators(genpop: org.spongepowered.api.world.gen.GenerationPopulator): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the generation populators.
                             */
                            // @ts-ignore
                             generationPopulators(genpop: any): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the populators.
                             */
                            // @ts-ignore
                             populators(populators: org.spongepowered.api.world.gen.Populator): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Sets the populators.
                             */
                            // @ts-ignore
                             populators(populators: any): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                            /**
                             * Creates a new set of {@link BiomeGenerationSettings}s.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.world.biome.BiomeGenerationSettings;
                        }
                    }
                }
            }
        }
    }
}
