declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface TileEntityVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Return a collection of tile entities contained within this volume,
                         * possibly only returning tile entities only in loaded areas.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return tile entities within those loaded
                         * parts.</p>
                         */
                        // @ts-ignore
                         getTileEntities(): java.util.Collection;
                        /**
                         * Return a collection of tile entities contained within this volume,
                         * possibly only returning tile entities only in loaded areas. The returned
                         * tile entities are filtered by the given {@link Predicate} before being
                         * returned.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return tile entities within those loaded
                         * parts.</p>
                         */
                        // @ts-ignore
                         getTileEntities(filter: java.util.function$.Predicate): java.util.Collection;
                        /**
                         * Gets the tile entity at the given position, if it exists.
                         */
                        // @ts-ignore
                         getTileEntity(position: any /*Vector3i*/): java.util.Optional;
                        /**
                         * Gets the tile entity at the given position, if it exists.
                         */
                        // @ts-ignore
                         getTileEntity(x: number, y: number, z: number): java.util.Optional;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                    }
                }
            }
        }
    }
}
