declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface ArchetypeVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Applies this archetype at the given location. The archetype will be
                         * mapped onto the given world such that the origin on the archetype lines
                         * up with the given position.
                         */
                        // @ts-ignore
                         apply(location: org.spongepowered.api.world.Location, changeFlag: org.spongepowered.api.world.BlockChangeFlag): void;
                        /**
                         * Gets the {@link TileEntityArchetype} for the tile entity carrying block
                         * at the given coordinates.
                         */
                        // @ts-ignore
                         getTileEntityArchetype(x: number, y: number, z: number): any;
                        /**
                         * Gets the {@link TileEntityArchetype} for the tile entity carrying block
                         * at the given coordinates.
                         */
                        // @ts-ignore
                         getTileEntityArchetype(position: any /*Vector3i*/): any;
                        /**
                         * Gets a map containing all tile entity archetypes within this volume,
                         * keyed by their positions within the volume.
                         */
                        // @ts-ignore
                         getTileEntityArchetypes(): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                         getEntityArchetype(x: number, y: number, z: number): any;
                        // @ts-ignore
                         getEntitiesByPosition(): any;
                        // @ts-ignore
                         getEntityArchetypes(): any[] /*java.util.Collection*/;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                    }
                }
            }
        }
    }
}