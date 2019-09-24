declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface CreatureSpawner extends org.bukkit.block.TileState {
                /**
                 * Get the spawner's creature type.
                 */
                 getSpawnedType(): org.bukkit.entity.EntityType;
                /**
                 * Set the spawner's creature type.
                 */
                 setSpawnedType(creatureType: org.bukkit.entity.EntityType): void;
                /**
                 * Set the spawner mob type.
                 */
                 setCreatureTypeByName(creatureType: string): void;
                /**
                 * Get the spawner's creature type.
                 */
                 getCreatureTypeName(): string;
                /**
                 * Get the spawner's delay.
                 * <br>
                 * This is the delay, in ticks, until the spawner will spawn its next mob.
                 */
                 getDelay(): number;
                /**
                 * Set the spawner's delay.
                 * <br>
                 * If set to -1, the spawn delay will be reset to a random value between
                 * {@link #getMinSpawnDelay} and {@link #getMaxSpawnDelay()}.
                 */
                 setDelay(delay: number): void;
                /**
                 * The minimum spawn delay amount (in ticks).
                 * <br>
                 * This value is used when the spawner resets its delay (for any reason).
                 * It will choose a random number between {@link #getMinSpawnDelay()}
                 * and {@link #getMaxSpawnDelay()} for its next {@link #getDelay()}.
                 * Default value is 200 ticks.
                 */
                 getMinSpawnDelay(): number;
                /**
                 * Set the minimum spawn delay amount (in ticks).
                 */
                 setMinSpawnDelay(delay: number): void;
                /**
                 * The maximum spawn delay amount (in ticks).
                 * <br>
                 * This value is used when the spawner resets its delay (for any reason).
                 * It will choose a random number between {@link #getMinSpawnDelay()}
                 * and {@link #getMaxSpawnDelay()} for its next {@link #getDelay()}.
                 * <br>
                 * This value <b>must</b> be greater than 0 and less than or equal to
                 * {@link #getMaxSpawnDelay()}.
                 * Default value is 800 ticks.
                 */
                 getMaxSpawnDelay(): number;
                /**
                 * Set the maximum spawn delay amount (in ticks).
                 * <br>
                 * This value <b>must</b> be greater than 0, as well as greater than or
                 * equal to {@link #getMinSpawnDelay()}
                 */
                 setMaxSpawnDelay(delay: number): void;
                /**
                 * Get how many mobs attempt to spawn.
                 * <br>
                 * Default value is 4.
                 */
                 getSpawnCount(): number;
                /**
                 * Set how many mobs attempt to spawn.
                 */
                 setSpawnCount(spawnCount: number): void;
                /**
                 * Set the new maximum amount of similar entities that are allowed to be
                 * within spawning range of this spawner.
                 * <br>
                 * If more than the maximum number of entities are within range, the spawner
                 * will not spawn and try again with a new {@link #getDelay()}.
                 * <br>
                 * Default value is 16.
                 */
                 getMaxNearbyEntities(): number;
                /**
                 * Set the maximum number of similar entities that are allowed to be within
                 * spawning range of this spawner.
                 * <br>
                 * Similar entities are entities that are of the same {@link EntityType}
                 */
                 setMaxNearbyEntities(maxNearbyEntities: number): void;
                /**
                 * Get the maximum distance(squared) a player can be in order for this
                 * spawner to be active.
                 * <br>
                 * If this value is less than or equal to 0, this spawner is always active
                 * (given that there are players online).
                 * <br>
                 * Default value is 16.
                 */
                 getRequiredPlayerRange(): number;
                /**
                 * Set the maximum distance (squared) a player can be in order for this
                 * spawner to be active.
                 * <br>
                 * Setting this value to less than or equal to 0 will make this spawner
                 * always active (given that there are players online).
                 */
                 setRequiredPlayerRange(requiredPlayerRange: number): void;
                /**
                 * Get the radius around which the spawner will attempt to spawn mobs in.
                 * <br>
                 * This area is square, includes the block the spawner is in, and is
                 * centered on the spawner's x,z coordinates - not the spawner itself.
                 * <br>
                 * It is 2 blocks high, centered on the spawner's y-coordinate (its bottom);
                 * thus allowing mobs to spawn as high as its top surface and as low
                 * as 1 block below its bottom surface.
                 * <br>
                 * Default value is 4.
                 */
                 getSpawnRange(): number;
                /**
                 * Set the new spawn range.
                 * <br>
                 */
                 setSpawnRange(spawnRange: number): void;
            }
        }
    }
}
