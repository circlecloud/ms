declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    // @ts-ignore
                    interface BiomeType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the temperature of this biome.
                         */
                        // @ts-ignore
                         getTemperature(): number;
                        /**
                         * Gets the humidity of this biome.
                         */
                        // @ts-ignore
                         getHumidity(): number;
                        /**
                         * Gets the default generation settings of this biome for the given world.
                         */
                        // @ts-ignore
                         createDefaultGenerationSettings(world: org.spongepowered.api.world.World): org.spongepowered.api.world.biome.BiomeGenerationSettings;
                    }
                }
            }
        }
    }
}
