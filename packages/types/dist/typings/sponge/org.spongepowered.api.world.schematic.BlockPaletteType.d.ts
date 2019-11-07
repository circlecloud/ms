// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    // @ts-ignore
                    interface BlockPaletteType extends org.spongepowered.api.CatalogType, org.spongepowered.api.world.schematic.PaletteType {
                        /**
                         * Gets an instance of this palette type.
                         * <p>If this is the global type then the global palette instance will be
                         * returned, otherwise a new instance will be created.</p>
                         */
                        // @ts-ignore
                         create(): org.spongepowered.api.world.schematic.BlockPalette;
                    }
                }
            }
        }
    }
}
