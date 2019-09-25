declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface Chunk extends org.spongepowered.api.world.extent.Extent {
                    // @ts-ignore
                     getLocation(position: any /*Vector3i*/): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(position: any /*Vector3d*/): org.spongepowered.api.world.Location;
                    // @ts-ignore
                     getLocation(x: number, y: number, z: number): org.spongepowered.api.world.Location;
                    /**
                     * Gets the position of the chunk.
                     * <p>The returned position is 3-dimensional with the Y-coordinate set to be
                     * the base (lowest) Y-position of the chunk. As 3-dimensional chunks do not
                     * yet exist in Minecraft, the returned position will always have a
                     * {@code y} set to 0.</p>
                     */
                    // @ts-ignore
                     getPosition(): any /*Vector3i*/;
                    /**
                     * Gets the world the chunk is in.
                     */
                    // @ts-ignore
                     getWorld(): org.spongepowered.api.world.World;
                    /**
                     * Gets if the chunk has been populated by the generator.
                     */
                    // @ts-ignore
                     isPopulated(): boolean;
                    /**
                     * Loads this chunk, and generates if specified and required.
                     */
                    // @ts-ignore
                     loadChunk(generate: boolean): boolean;
                    /**
                     * Unloads this chunk, if possible.
                     */
                    // @ts-ignore
                     unloadChunk(): boolean;
                    /**
                     * Gets the number of ticks players have been present in this chunk, used
                     * for calculation of the regional difficulty factor. In vanilla, it is
                     * increased by the number of players in the chunk every tick, and is capped
                     * at 3,600,000 ticks (50 hours).
                     */
                    // @ts-ignore
                     getInhabittedTime(): number;
                    /**
                     * Gets the number of ticks players have been present in this chunk, used
                     * for calculation of the regional difficulty factor. In vanilla, it is
                     * increased by the number of players in the chunk every tick, and is capped
                     * at 3,600,000 ticks (50 hours).
                     */
                    // @ts-ignore
                     getInhabitedTime(): number;
                    /**
                     * Gets the regional difficulty factor for this chunk. In vanilla, it is
                     * dependent on the playtime of the world, inhabited time of the chunk, the
                     * phase of the moon, and the current difficulty setting. This number ranges
                     * from 0.75-1.5 on easy, 1.5-4.0 on normal, and 2.25-6.75 on hard.
                     * <p>This value is used for display only in vanilla.</p>
                     */
                    // @ts-ignore
                     getRegionalDifficultyFactor(): number;
                    /**
                     * Gets the regional difficulty percentage for this chunk. It is calculated
                     * by taking the regional difficulty factor and using the following rules:
                     * If the factor is less than 2.0, the percentage is 0%. If the factor is
                     * greater than 4.0, the percentage is 100%. Otherwise, the percentage is
                     * the factor minus 2.0, divided by 2.0.
                     * <p>This is the value that is used in vanilla to find which effects are
                     * caused by the regional difficulty.</p>
                     */
                    // @ts-ignore
                     getRegionalDifficultyPercentage(): number;
                    /**
                     * Gets the chunk in the given direction from this chunk, if it exists.
                     */
                    // @ts-ignore
                     getNeighbor(direction: org.spongepowered.api.util.Direction): any;
                    /**
                     * Gets the chunk in the given direction from this chunk.
                     */
                    // @ts-ignore
                     getNeighbor(direction: org.spongepowered.api.util.Direction, shouldLoad: boolean): any;
                    // @ts-ignore
                     getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker;
                    // @ts-ignore
                     getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                }
            }
        }
    }
}
