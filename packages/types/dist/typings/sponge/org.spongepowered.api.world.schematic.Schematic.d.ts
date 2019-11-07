// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    // @ts-ignore
                    interface Schematic extends org.spongepowered.api.world.extent.ArchetypeVolume {
                        // @ts-ignore
                         METADATA_NAME: string;
                        // @ts-ignore
                         METADATA_AUTHOR: string;
                        // @ts-ignore
                         METADATA_DATE: string;
                        // @ts-ignore
                         METADATA_REQUIRED_MODS: string;
                        /**
                         * Gets a new builder for schematics.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.world.schematic.Schematic.Builder;
                        /**
                         * Gets the {@link BlockPalette} used by this schematic for serialization.
                         */
                        // @ts-ignore
                         getPalette(): org.spongepowered.api.world.schematic.BlockPalette;
                        /**
                         * Gets the {@link BlockPalette} used by this schematic for serialization.
                         */
                        // @ts-ignore
                         getBlockPalette(): org.spongepowered.api.world.schematic.Palette;
                        /**
                         * Gets the {@link Palette Palette<BiomeType>} used by this schematic for serialization.
                         */
                        // @ts-ignore
                         getBiomePalette(): org.spongepowered.api.world.schematic.Palette;
                        /**
                         * Gets any additional metadata attached to this schematic.
                         */
                        // @ts-ignore
                         getMetadata(): org.spongepowered.api.data.DataView;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                        /**
                         * Gets the {@link MutableBiomeVolume} of this schematic. As biomes are
                         * {@link Optional optionally} included and not required, they may be
                         * optionally excluded. If the schematic would contain them, they will be
                         * present during deserialization via {@link DataTranslator}.
                         */
                        // @ts-ignore
                         getBiomes(): java.util.Optional;
                        // @ts-ignore
                         getEntitiesByPosition(): any;
                        // @ts-ignore
                         getEntityArchetypes(): java.util.Collection;
                    }
                }
            }
        }
    }
}
