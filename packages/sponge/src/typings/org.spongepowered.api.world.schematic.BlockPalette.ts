declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    // @ts-ignore
                    interface BlockPalette extends org.spongepowered.api.world.schematic.Palette {
                        /**
                         * Gets the type of this palette.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.world.schematic.BlockPaletteType;
                        /**
                         * Gets the highest identifier in this palette.
                         */
                        // @ts-ignore
                         getHighestId(): number;
                        /**
                         * Gets the blockstate represented by the given identifier from the mapping.
                         */
                        // @ts-ignore
                         get(id: number): any;
                        /**
                         * Gets the identifier for the given blockstate if it exists within the
                         * mapping.
                         */
                        // @ts-ignore
                         get(state: org.spongepowered.api.block.BlockState): any;
                        /**
                         * Gets the identifier for the given blockstate from the mapping. If the
                         * blockstate is not yet registered in the mapping then it is registered and
                         * given the next available identifier.
                         */
                        // @ts-ignore
                         getOrAssign(state: org.spongepowered.api.block.BlockState): number;
                        /**
                         * Removes the given blockstate from the mapping.
                         * <p>If this palette is the {@link BlockPaletteTypes#GLOBAL} palette then
                         * removal is not supported.</p>
                         */
                        // @ts-ignore
                         remove(state: org.spongepowered.api.block.BlockState): boolean;
                        /**
                         * Gets all {@link BlockState}s contained in this palette.
                         */
                        // @ts-ignore
                         getEntries(): any[] /*java.util.Collection*/;
                    }
                }
            }
        }
    }
}
