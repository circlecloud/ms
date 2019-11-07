// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    namespace Schematic {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Specifies an archetype volume for the world data of the schematic.
                             * <p>If purely creating a schematic it is recommended to instead use
                             * the {@link #volume(Extent)} method and pass in an extent view (See
                             * {@link Extent#getExtentView}) of the volume to prevent creating
                             * multiple copies of the world data. Likewise, if {@link BiomeType}s
                             * are needed to be copied, only {@link #volume(Extent)} will support
                             * copying the {@link BiomeType}s at the desired positions. This also
                             * has the same limit for capturing {@link EntityArchetype}s, unless
                             * otherwise manually placed in with {@link #entity(EntityArchetype)}.
                             * </p>
                             */
                            // @ts-ignore
                             volume(volume: org.spongepowered.api.world.extent.ArchetypeVolume): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies an extent view for the schematic to load its world data
                             * from.
                             */
                            // @ts-ignore
                             volume(volume: org.spongepowered.api.world.extent.Extent): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies a palette for the schematic to use for serialization. This
                             * overrides the {@link #paletteType} value.
                             */
                            // @ts-ignore
                             palette(palette: org.spongepowered.api.world.schematic.BlockPalette): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies a palette for the schematic to use for serialization. This
                             * overrides the {@link #paletteType} value.
                             */
                            // @ts-ignore
                             blockPalette(palette: org.spongepowered.api.world.schematic.Palette): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies a palette for the schemtic to use for serialization.
                             */
                            // @ts-ignore
                             biomePalette(palette: org.spongepowered.api.world.schematic.Palette): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies the palette type to use if the {@link #palette} is not
                             * specified.
                             */
                            // @ts-ignore
                             paletteType(type: org.spongepowered.api.world.schematic.BlockPaletteType): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies the palette type to use if the {@link #palette} is not
                             * specified.
                             */
                            // @ts-ignore
                             blockPaletteType(type: org.spongepowered.api.world.schematic.PaletteType): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies the palette type to use for biomes if the {@link #biomePalette(Palette)}
                             * is not specified.
                             */
                            // @ts-ignore
                             biomePaletteType(type: org.spongepowered.api.world.schematic.PaletteType): org.spongepowered.api.world.schematic.Schematic.Builder;
                            // @ts-ignore
                             entity(entityArchetype: org.spongepowered.api.entity.EntityArchetype): org.spongepowered.api.world.schematic.Schematic.Builder;
                            // @ts-ignore
                             entity(entityArchetype: org.spongepowered.api.entity.EntityArchetype, position: any /*Vector3d*/): org.spongepowered.api.world.schematic.Schematic.Builder;
                            // @ts-ignore
                             entities(entities: java.util.Collection): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies the metadata container.
                             */
                            // @ts-ignore
                             metadata(metadata: org.spongepowered.api.data.DataView): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Specifies a metadata value which will be included in the metadata of
                             * the schematic.
                             */
                            // @ts-ignore
                             metaValue(key: string, value: java.lang.Object): org.spongepowered.api.world.schematic.Schematic.Builder;
                            /**
                             * Constructs a new {@link Schematic} from this builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.world.schematic.Schematic;
                        }
                    }
                }
            }
        }
    }
}
