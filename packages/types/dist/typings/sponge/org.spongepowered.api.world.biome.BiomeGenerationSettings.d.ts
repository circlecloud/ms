declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    // @ts-ignore
                    interface BiomeGenerationSettings {
                        /**
                         * Gets a new builder for creating new BiomeGenerationSettings.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder;
                        /**
                         * Gets the minimum terrain height of this biome.
                         */
                        // @ts-ignore
                         getMinHeight(): number;
                        /**
                         * Sets the minimum terrain height of this biome.
                         */
                        // @ts-ignore
                         setMinHeight(height: number): void;
                        /**
                         * Gets the maximum terrain height of this biome.
                         */
                        // @ts-ignore
                         getMaxHeight(): number;
                        /**
                         * Sets the maximum terrain height of this biome.
                         */
                        // @ts-ignore
                         setMaxHeight(height: number): void;
                        /**
                         * Gets a mutable ordered list of {@link GroundCoverLayer}s. These layers
                         * will be applied to the base terrain during the generation phase starting
                         * at the topmost stone block in each column.
                         */
                        // @ts-ignore
                         getGroundCoverLayers(): java.util.List;
                        /**
                         * Gets a mutable list of {@link GenerationPopulator}s. These populators
                         * work strictly on a single chunk. They will be executed directly after the
                         * {@link #getGroundCoverLayers() ground cover layers} are applied. These
                         * generation populators are typically used to generate large terrain
                         * features, like caves and ravines.
                         */
                        // @ts-ignore
                         getGenerationPopulators(): java.util.List;
                        /**
                         * Gets an immutable list of {@link GenerationPopulator}s matching the given
                         * class type.
                         */
                        // @ts-ignore
                         getGenerationPopulators(type: java.lang.Class): java.util.List;
                        /**
                         * Returns a mutable list of {@link Populator}s specific to this biome.
                         * Changing this list will affect population of all new chunks.
                         */
                        // @ts-ignore
                         getPopulators(): java.util.List;
                        /**
                         * Returns an immutable list of {@link Populator}s specific to this biome
                         * which match the given class type.
                         */
                        // @ts-ignore
                         getPopulators(type: java.lang.Class): java.util.List;
                        /**
                         * Returns a new biome generation settings which is a copy of this set of
                         * generation settings at this point in time.
                         */
                        // @ts-ignore
                         copy(): org.spongepowered.api.world.biome.BiomeGenerationSettings;
                    }
                }
            }
        }
    }
}
