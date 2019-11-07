// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace generator {
            // @ts-ignore
            abstract class ChunkGenerator extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Shapes the chunk for the given coordinates.
                 * This method must return a ChunkData.
                 * <p>
                 * Notes:
                 * <p>
                 * This method should <b>never</b> attempt to get the Chunk at
                 * the passed coordinates, as doing so may cause an infinite loop
                 * <p>
                 * This method should <b>never</b> modify a ChunkData after it has
                 * been returned.
                 * <p>
                 * This method <b>must</b> return a ChunkData returned by {@link ChunkGenerator#createChunkData(org.bukkit.World)}
                 */
                // @ts-ignore
                public generateChunkData(world: org.bukkit.World, random: java.util.Random, x: number, z: number, biome: org.bukkit.generator.ChunkGenerator.BiomeGrid): org.bukkit.generator.ChunkGenerator.ChunkData;
                /**
                 * Create a ChunkData for a world.
                 */
                // @ts-ignore
                protected createChunkData(world: org.bukkit.World): org.bukkit.generator.ChunkGenerator.ChunkData;
                /**
                 * Tests if the specified location is valid for a natural spawn position
                 */
                // @ts-ignore
                public canSpawn(world: org.bukkit.World, x: number, z: number): boolean;
                /**
                 * Gets a list of default {@link BlockPopulator}s to apply to a given
                 * world
                 */
                // @ts-ignore
                public getDefaultPopulators(world: org.bukkit.World): java.util.List;
                /**
                 * Gets a fixed spawn location to use for a given world.
                 * <p>
                 * A null value is returned if a world should not use a fixed spawn point,
                 * and will instead attempt to find one randomly.
                 */
                // @ts-ignore
                public getFixedSpawnLocation(world: org.bukkit.World, random: java.util.Random): org.bukkit.Location;
                /**
                 * Gets if this ChunkGenerator is parallel capable.
                 * See {@link ChunkGenerator} for more information.
                 */
                // @ts-ignore
                public isParallelCapable(): boolean;
            }
        }
    }
}
