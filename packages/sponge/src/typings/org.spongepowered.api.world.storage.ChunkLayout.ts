declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    // @ts-ignore
                    interface ChunkLayout {
                        /**
                         * Returns the size of the chunks in blocks. The axes are matched to the
                         * corresponding vector components.
                         */
                        // @ts-ignore
                         getChunkSize(): any /*Vector3i*/;
                        /**
                         * Returns the maximum coordinates for chunks for each axis. The axes are
                         * matched to the corresponding vector components. Due to the limited
                         * precision of 32bit integers, there always is a practical limit.
                         */
                        // @ts-ignore
                         getSpaceMax(): any /*Vector3i*/;
                        /**
                         * Returns the minimum coordinates for chunks for each axis. The axes are
                         * matched to the corresponding vector components. Due to the limited
                         * precision of 32bit integers, there always is a practical limit.
                         */
                        // @ts-ignore
                         getSpaceMin(): any /*Vector3i*/;
                        /**
                         * Gets the total size of the chunk space, which is equivalent to
                         * {@link #getSpaceMax()} - {@link #getSpaceMin()} + 1.
                         */
                        // @ts-ignore
                         getSpaceSize(): any /*Vector3i*/;
                        /**
                         * Returns the origin of the chunk coordinate space. Normally
                         * {@link Vector3i#ZERO}.
                         */
                        // @ts-ignore
                         getSpaceOrigin(): any /*Vector3i*/;
                        /**
                         * Returns true if the coordinates are valid chunk coordinates. False if
                         * otherwise.
                         */
                        // @ts-ignore
                         isValidChunk(coords: any /*Vector3i*/): boolean;
                        /**
                         * Returns true if the coordinates are valid chunk coordinates. False if
                         * otherwise.
                         */
                        // @ts-ignore
                         isValidChunk(x: number, y: number, z: number): boolean;
                        /**
                         * Returns true if the local coordinates fit in a chunk. That is they are
                         * positive and smaller than the chunk's size.
                         */
                        // @ts-ignore
                         isInChunk(localCoords: any /*Vector3i*/): boolean;
                        /**
                         * Returns true if the local coordinates fit in a chunk. That is they are
                         * positive and smaller than the chunk's size.
                         */
                        // @ts-ignore
                         isInChunk(x: number, y: number, z: number): boolean;
                        /**
                         * Returns true if the world coordinates fit in the chunk at the given
                         * coordinates.
                         */
                        // @ts-ignore
                         isInChunk(worldCoords: any /*Vector3i*/, chunkCoords: any /*Vector3i*/): boolean;
                        /**
                         * Returns true if the world coordinates fit in the chunk at the given
                         * coordinates.
                         */
                        // @ts-ignore
                         isInChunk(wx: number, wy: number, wz: number, cx: number, cy: number, cz: number): boolean;
                        /**
                         * Converts world coordinates to chunk coordinates. Returns nothing if the
                         * conversion failed because the resulting chunk coordinates aren't valid.
                         */
                        // @ts-ignore
                         toChunk(worldCoords: any /*Vector3i*/): any;
                        /**
                         * Converts world coordinates to chunk coordinates. Returns nothing if the
                         * conversion failed because the resulting chunk coordinates aren't valid.
                         */
                        // @ts-ignore
                         toChunk(x: number, y: number, z: number): any;
                        /**
                         * Converts chunk coordinates to world coordinates. Returns nothing if the
                         * conversion failed because the given chunk coordinates aren't valid.
                         */
                        // @ts-ignore
                         toWorld(chunkCoords: any /*Vector3i*/): any;
                        /**
                         * Converts chunk coordinates to world coordinates. Returns nothing if the
                         * conversion failed because the given chunk coordinates aren't valid.
                         */
                        // @ts-ignore
                         toWorld(x: number, y: number, z: number): any;
                        /**
                         * Converts world coordinates to chunk coordinates. This method never fails
                         * and can returns invalid chunk coordinates.
                         */
                        // @ts-ignore
                         forceToChunk(worldCoords: any /*Vector3i*/): any /*Vector3i*/;
                        /**
                         * Converts world coordinates to chunk coordinates. This method never fails
                         * and can returns invalid chunk coordinates.
                         */
                        // @ts-ignore
                         forceToChunk(x: number, y: number, z: number): any /*Vector3i*/;
                        /**
                         * Converts chunk coordinates to world coordinates. This method never fails
                         * and can returns invalid world coordinates.
                         */
                        // @ts-ignore
                         forceToWorld(chunkCoords: any /*Vector3i*/): any /*Vector3i*/;
                        /**
                         * Converts chunk coordinates to world coordinates. This method never fails
                         * and can returns invalid world coordinates.
                         */
                        // @ts-ignore
                         forceToWorld(x: number, y: number, z: number): any /*Vector3i*/;
                        /**
                         * Adds the chunk offset to the chunk coordinates. Returns nothing if the
                         * new coordinates are not valid.
                         */
                        // @ts-ignore
                         addToChunk(chunkCoords: any /*Vector3i*/, chunkOffset: any /*Vector3i*/): any;
                        /**
                         * Adds the chunk offset to the chunk coordinates. Returns nothing if the
                         * new coordinates are not valid.
                         */
                        // @ts-ignore
                         addToChunk(cx: number, cy: number, cz: number, ox: number, oy: number, oz: number): any;
                        /**
                         * Moves chunk coordinates one step in the given direction. Returns nothing
                         * if the new coordinates are not valid. {@link Division#SECONDARY_ORDINAL}
                         * directions are not a valid argument. These will throw an exception.
                         */
                        // @ts-ignore
                         moveToChunk(chunkCoords: any /*Vector3i*/, direction: org.spongepowered.api.util.Direction): any;
                        /**
                         * Moves chunk coordinates one step in the given direction. Returns nothing
                         * if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         */
                        // @ts-ignore
                         moveToChunk(x: number, y: number, z: number, direction: org.spongepowered.api.util.Direction): any;
                        /**
                         * Moves chunk coordinates a number of steps in the given direction. Returns
                         * nothing if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         */
                        // @ts-ignore
                         moveToChunk(chunkCoords: any /*Vector3i*/, direction: org.spongepowered.api.util.Direction, steps: number): any;
                        /**
                         * Moves chunk coordinates a number of steps in the given direction. Returns
                         * nothing if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         */
                        // @ts-ignore
                         moveToChunk(x: number, y: number, z: number, direction: org.spongepowered.api.util.Direction, steps: number): any;
                    }
                }
            }
        }
    }
}
