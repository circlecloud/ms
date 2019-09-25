declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface WorldGenerator {
                        /**
                         * Gets the main {@link GenerationPopulator}. This generator populator is
                         * responsible for generating the base terrain of the chunk.
                         */
                        // @ts-ignore
                         getBaseGenerationPopulator(): org.spongepowered.api.world.gen.GenerationPopulator;
                        /**
                         * Sets the {@link GenerationPopulator}. This generator populator is
                         * responsible for generating the base terrain of the chunk.
                         */
                        // @ts-ignore
                         setBaseGenerationPopulator(generator: org.spongepowered.api.world.gen.GenerationPopulator): void;
                        /**
                         * Gets a mutable list of {@link GenerationPopulator}s. These populators
                         * work strictly on a single chunk. They will be executed directly after the
                         * {@link BiomeGenerationSettings#getGroundCoverLayers() biome ground cover
                         * layers} and the {@link BiomeGenerationSettings#getGenerationPopulators()
                         * biome generator populators} have been called. These generator populators
                         * are typically used to generate large terrain features, like caves and
                         * ravines.
                         * <p>This list does not include {@link #getBaseGenerationPopulator() the
                         * base generator}.</p>
                         */
                        // @ts-ignore
                         getGenerationPopulators(): any[] /*java.util.List*/;
                        /**
                         * Gets an immutable list of {@link GenerationPopulator}s which match the
                         * given class type.
                         */
                        // @ts-ignore
                         getGenerationPopulators(type: any): any[] /*java.util.List*/;
                        /**
                         * Gets a mutable list of {@link Populator}s which are applied globally (in
                         * the whole world).
                         */
                        // @ts-ignore
                         getPopulators(): any[] /*java.util.List*/;
                        /**
                         * Gets an immutable list of {@link Populator}s which match the given class
                         * type.
                         */
                        // @ts-ignore
                         getPopulators(type: any): any[] /*java.util.List*/;
                        /**
                         * Gets the {@link BiomeGenerator} for this world generator.
                         */
                        // @ts-ignore
                         getBiomeGenerator(): org.spongepowered.api.world.gen.BiomeGenerator;
                        /**
                         * Sets the {@link BiomeGenerator} for this world generator.
                         */
                        // @ts-ignore
                         setBiomeGenerator(biomeGenerator: org.spongepowered.api.world.gen.BiomeGenerator): void;
                        /**
                         * Gets this world generator settings for the given {@link BiomeType}..
                         */
                        // @ts-ignore
                         getBiomeSettings(type: org.spongepowered.api.world.biome.BiomeType): org.spongepowered.api.world.biome.BiomeGenerationSettings;
                    }
                }
            }
        }
    }
}
