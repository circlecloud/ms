declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface Extent extends org.spongepowered.api.world.extent.EntityUniverse, org.spongepowered.api.world.extent.TileEntityVolume, org.spongepowered.api.world.extent.InteractableVolume, org.spongepowered.api.world.extent.MutableBiomeVolume, org.spongepowered.api.world.extent.LocationCompositeValueStore, org.spongepowered.api.util.Identifiable, org.spongepowered.api.data.property.LocationBasePropertyHolder {
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent.
                         */
                        // @ts-ignore
                         getLocation(position: any /*Vector3i*/): org.spongepowered.api.world.Location;
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent.
                         */
                        // @ts-ignore
                         getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent. This method supports sub-block positions.
                         * Block-related methods use flooring to get integer coordinates.
                         */
                        // @ts-ignore
                         getLocation(position: any /*Vector3d*/): org.spongepowered.api.world.Location;
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent. This method supports sub-block positions.
                         * Block-related methods use flooring to get integer coordinates.
                         */
                        // @ts-ignore
                         getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                        /**
                         * Get the y value of the highest block that sunlight can reach in the given
                         * column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         */
                        // @ts-ignore
                         getHighestYAt(x: number, z: number): number;
                        /**
                         * Get the y value of the highest block that sunlight can reach in the given
                         * column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         */
                        // @ts-ignore
                         getHighestYAt(column: any /*Vector2i*/): number;
                        /**
                         * Get the {@link Location} of the highest block that sunlight can reach in
                         * the given column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         */
                        // @ts-ignore
                         getHighestPositionAt(position: any /*Vector3i*/): any /*Vector3i*/;
                        /**
                         * Returns the y level that precipitation ends falling in the given column.
                         * <p>A value is still returned for columns in biomes which do not
                         * receive precipitation.</p>
                         */
                        // @ts-ignore
                         getPrecipitationLevelAt(x: number, z: number): number;
                        /**
                         * Returns the y level that precipitation ends falling in the given column.
                         * <p>A value is still returned for columns in biomes which do not
                         * receive precipitation.</p>
                         */
                        // @ts-ignore
                         getPrecipitationLevelAt(column: any /*Vector2i*/): number;
                        /**
                         * Returns the position that precipitation ends falling in the column
                         * of the given position.
                         * <p>A position is still returned for positions in biomes which do not
                         * receive precipitation.</p>
                         */
                        // @ts-ignore
                         getPrecipitationLevelAt(position: any /*Vector3i*/): any /*Vector3i*/;
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlock(position: any /*Vector3i*/, blockState: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlock(x: number, y: number, z: number, blockState: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlockType(position: any /*Vector3i*/, type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Sets the block at the given position in the world.
                         */
                        // @ts-ignore
                         setBlockType(x: number, y: number, z: number, type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Gets a snapshot of this block at the current point in time.
                         * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                         * from so changes to the original block do not affect the snapshot.</p>
                         */
                        // @ts-ignore
                         createSnapshot(position: any /*Vector3i*/): org.spongepowered.api.block.BlockSnapshot;
                        /**
                         * Gets a snapshot of this block at the current point in time.
                         * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                         * from so changes to the original block do not affect the snapshot.</p>
                         */
                        // @ts-ignore
                         createSnapshot(x: number, y: number, z: number): org.spongepowered.api.block.BlockSnapshot;
                        /**
                         * Restores the given {@link BlockSnapshot} using the saved block position
                         * stored within the snapshot.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         */
                        // @ts-ignore
                         restoreSnapshot(snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Restores the {@link BlockSnapshot} at the given position.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         */
                        // @ts-ignore
                         restoreSnapshot(position: any /*Vector3i*/, snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Restores the {@link BlockSnapshot} at the given position.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         */
                        // @ts-ignore
                         restoreSnapshot(x: number, y: number, z: number, snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean;
                        /**
                         * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                         */
                        // @ts-ignore
                         getScheduledUpdates(position: any /*Vector3i*/): any[] /*java.util.Collection*/;
                        /**
                         * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                         */
                        // @ts-ignore
                         getScheduledUpdates(x: number, y: number, z: number): any[] /*java.util.Collection*/;
                        /**
                         * Adds a new {@link ScheduledBlockUpdate} to this block.
                         */
                        // @ts-ignore
                         addScheduledUpdate(position: any /*Vector3i*/, priority: number, ticks: number): org.spongepowered.api.block.ScheduledBlockUpdate;
                        /**
                         * Adds a new {@link ScheduledBlockUpdate} to this block.
                         */
                        // @ts-ignore
                         addScheduledUpdate(x: number, y: number, z: number, priority: number, ticks: number): org.spongepowered.api.block.ScheduledBlockUpdate;
                        /**
                         * Removes a {@link ScheduledBlockUpdate} from this block.
                         */
                        // @ts-ignore
                         removeScheduledUpdate(position: any /*Vector3i*/, update: org.spongepowered.api.block.ScheduledBlockUpdate): void;
                        /**
                         * Removes a {@link ScheduledBlockUpdate} from this block.
                         */
                        // @ts-ignore
                         removeScheduledUpdate(x: number, y: number, z: number, update: org.spongepowered.api.block.ScheduledBlockUpdate): void;
                        /**
                         * Gets whether or not this extent is currently loaded.
                         */
                        // @ts-ignore
                         isLoaded(): boolean;
                        /**
                         * Returns a new extent that is the same or smaller than the current extent.
                         * This does not copy the data, it only provides a new view of the extent.
                         */
                        // @ts-ignore
                         getExtentView(newMin: any /*Vector3i*/, newMax: any /*Vector3i*/): org.spongepowered.api.world.extent.Extent;
                        // @ts-ignore
                         getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                        /**
                         * Gets the {@link UUID}, if available, of the user who created the
                         * {@link BlockSnapshot} at passed block position.
                         */
                        // @ts-ignore
                         getCreator(pos: any /*Vector3i*/): any;
                        /**
                         * Gets the {@link UUID}, if available, of the user who created the
                         * {@link BlockSnapshot} at passed block position.
                         */
                        // @ts-ignore
                         getCreator(x: number, y: number, z: number): any;
                        /**
                         * Gets the {@link UUID}, if available, of the user who last notified the
                         * {@link BlockSnapshot} located at passed block position.
                         */
                        // @ts-ignore
                         getNotifier(pos: any /*Vector3i*/): any;
                        /**
                         * Gets the {@link UUID}, if available, of the user who last notified the
                         * {@link BlockSnapshot} located at passed block coordinates.
                         */
                        // @ts-ignore
                         getNotifier(x: number, y: number, z: number): any;
                        /**
                         * Sets the {@link UUID} of the user who created the {@link BlockSnapshot}
                         * located at passed block position.
                         */
                        // @ts-ignore
                         setCreator(pos: any /*Vector3i*/, uuid: any): void;
                        /**
                         * Sets the {@link UUID} of the user who created the {@link BlockSnapshot}
                         * located at passed block coordinates.
                         */
                        // @ts-ignore
                         setCreator(x: number, y: number, z: number, uuid: any): void;
                        /**
                         * Sets the {@link UUID} of the user who last notified the
                         * {@link BlockSnapshot} located at passed block position.
                         */
                        // @ts-ignore
                         setNotifier(pos: any /*Vector3i*/, uuid: any): void;
                        /**
                         * Sets the {@link UUID} of the user who last notified the
                         * {@link BlockSnapshot} located at passed block coordinates.
                         */
                        // @ts-ignore
                         setNotifier(x: number, y: number, z: number, uuid: any): void;
                        /**
                         * Gets the bounding box used to select blocks, which appears
                         * as a black outline on a vanilla client.
                         */
                        // @ts-ignore
                         getBlockSelectionBox(pos: any /*Vector3i*/): any;
                        /**
                         * Gets the bounding box used to select blocks, which appears
                         * as a black outline on a vanilla client.
                         */
                        // @ts-ignore
                         getBlockSelectionBox(x: number, y: number, z: number): any;
                        /**
                         * Gets all the block collision boxes that intersect the bounding box, in
                         * no particular order. There may be more than one box per block.
                         */
                        // @ts-ignore
                         getIntersectingBlockCollisionBoxes(box: org.spongepowered.api.util.AABB): any[] /*java.util.Set*/;
                        /**
                         * Gets all the collision boxes that intersect the bounding box owned by
                         * the entity, in no particular order. There may be more than one box per
                         * block. This also includes entities. Will return an empty set if the
                         * owner does not have a bounding box.
                         */
                        // @ts-ignore
                         getIntersectingCollisionBoxes(owner: org.spongepowered.api.entity.Entity): any[] /*java.util.Set*/;
                        /**
                         * Gets all the collision boxes that intersect the bounding box owned by
                         * the entity, in no particular order. There may be more than one box per
                         * block. This also includes entities.
                         */
                        // @ts-ignore
                         getIntersectingCollisionBoxes(owner: org.spongepowered.api.entity.Entity, box: org.spongepowered.api.util.AABB): any[] /*java.util.Set*/;
                        /**
                         * Creates a new archetype volume from the specified section of this extent.
                         * The archetype's volume will be shifted such that the position given in
                         * the origin will be the origin of the volume.
                         */
                        // @ts-ignore
                         createArchetypeVolume(min: any /*Vector3i*/, max: any /*Vector3i*/, origin: any /*Vector3i*/): org.spongepowered.api.world.extent.ArchetypeVolume;
                    }
                }
            }
        }
    }
}
