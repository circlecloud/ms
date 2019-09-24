declare namespace org {
    namespace bukkit {
        namespace generator {
            namespace ChunkGenerator {
                // @ts-ignore
                interface BiomeGrid {
                    /**
                     * Get biome at x, z within chunk being generated
                     */
                     getBiome(x: number, z: number): org.bukkit.block.Biome;
                    /**
                     * Set biome at x, z within chunk being generated
                     */
                     setBiome(x: number, z: number, bio: org.bukkit.block.Biome): void;
                }
            }
        }
    }
}
