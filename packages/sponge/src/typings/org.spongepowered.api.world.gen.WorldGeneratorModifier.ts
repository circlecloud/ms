declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    // @ts-ignore
                    interface WorldGeneratorModifier extends org.spongepowered.api.CatalogType {
                        /**
                         * Modifies the given world generator. This method is called by the
                         * implementation when the server is set to use this plugin for world
                         * generation.
                         * <p>To replace the base chunk generator, replace the main generator
                         * populator using
                         * {@link WorldGenerator#setBaseGenerationPopulator(GenerationPopulator)}.
                         * To replace the biome generator, use
                         * {@link WorldGenerator#setBiomeGenerator(BiomeGenerator)}. To change
                         * terrain population, modify the populator list returned by
                         * {@link WorldGenerator#getPopulators()} or
                         * {@link WorldGenerator#getGenerationPopulators()}.</p>
                         */
                        // @ts-ignore
                         modifyWorldGenerator(world: org.spongepowered.api.world.storage.WorldProperties, settings: org.spongepowered.api.data.DataContainer, worldGenerator: org.spongepowered.api.world.gen.WorldGenerator): void;
                    }
                }
            }
        }
    }
}
