declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    // @ts-ignore
                    interface Palette {
                        /**
                         * Gets the type of this palette.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.world.schematic.PaletteType;
                        /**
                         * Gets the highest identifier in this palette.
                         */
                        // @ts-ignore
                         getHighestId(): number;
                        /**
                         * Gets the {@code type} represented by the given identifier from the mapping.
                         */
                        // @ts-ignore
                         get(id: number): any;
                        /**
                         * Gets the identifier for the given {@code type T} if it exists within the
                         * mapping.
                         */
                        // @ts-ignore
                         get(type: org.spongepowered.api.CatalogType): any;
                        /**
                         * Gets the identifier for the given {@code type T} from the mapping. If the
                         * {@code type T} is not yet registered in the mapping then it is registered and
                         * given the next available identifier.
                         */
                        // @ts-ignore
                         getOrAssign(type: org.spongepowered.api.CatalogType): number;
                        /**
                         * Removes the given {@code type T} from the mapping.
                         * <p>Note that if this palette is considered a global palette, removal is not supported.</p>
                         */
                        // @ts-ignore
                         remove(type: org.spongepowered.api.CatalogType): boolean;
                        /**
                         * Gets all {@code type T}s contained in this palette.
                         */
                        // @ts-ignore
                         getEntries(): any[] /*java.util.Collection*/;
                    }
                }
            }
        }
    }
}
