declare namespace org {
    namespace bukkit {
        namespace generator {
            namespace ChunkGenerator {
                class BiomeGrid {
                    /**
                     * Get biome at x, z within chunk being generated
                     */
                    public getBiome(x: number, z: number): org.bukkit.block.Biome;
                    /**
                     * Set biome at x, z within chunk being generated
                     */
                    public setBiome(x: number, z: number, bio: org.bukkit.block.Biome): void;
                }
            }
        }
    }
}
