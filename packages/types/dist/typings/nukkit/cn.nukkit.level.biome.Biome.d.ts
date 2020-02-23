declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                // @ts-ignore
                abstract class Biome extends java.lang.Object implements cn.nukkit.block.BlockID {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static MAX_BIOMES: number;
                    // @ts-ignore
                    public static biomes: cn.nukkit.level.biome.Biome[];
                    // @ts-ignore
                    public static unorderedBiomes: java.util.List;
                    // @ts-ignore
                    protected static register(id: number, biome: cn.nukkit.level.biome.Biome): void;
                    // @ts-ignore
                    public static getBiome(id: number): cn.nukkit.level.biome.Biome;
                    /**
                     * Get Biome by name.
                     */
                    // @ts-ignore
                    public static getBiome(name: string): cn.nukkit.level.biome.Biome;
                    // @ts-ignore
                    public clearPopulators(): void;
                    // @ts-ignore
                    public addPopulator(populator: cn.nukkit.level.generator.populator.type.Populator): void;
                    // @ts-ignore
                    public populateChunk(level: cn.nukkit.level.ChunkManager, chunkX: number, chunkZ: number, random: cn.nukkit.math.NukkitRandom): void;
                    // @ts-ignore
                    public getPopulators(): java.util.ArrayList;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public setId(id: number): void;
                    // @ts-ignore
                    public abstract getName(): string;
                    // @ts-ignore
                    public setBaseHeight(baseHeight: number): void;
                    // @ts-ignore
                    public setHeightVariation(heightVariation: number): void;
                    // @ts-ignore
                    public getBaseHeight(): number;
                    // @ts-ignore
                    public getHeightVariation(): number;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public isFreezing(): boolean;
                    /**
                     * Whether or not overhangs should generate in this biome (places where solid blocks generate over air)
                     * This should probably be used with a custom max elevation or things can look stupid
                     */
                    // @ts-ignore
                    public doesOverhang(): boolean;
                    /**
                     * How much offset should be added to the min/max heights at this position
                     */
                    // @ts-ignore
                    public getHeightOffset(x: number, z: number): number;
                }
            }
        }
    }
}
