declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                 class Normal extends cn.nukkit.level.generator.Generator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(options: java.util.Map)
                    // @ts-ignore
                    public static seaHeight: number;
                    // @ts-ignore
                    public scaleNoise: cn.nukkit.level.generator.noise.vanilla.f.NoiseGeneratorOctavesF;
                    // @ts-ignore
                    public depthNoise: cn.nukkit.level.generator.noise.vanilla.f.NoiseGeneratorOctavesF;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public getChunkManager(): cn.nukkit.level.ChunkManager;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getSettings(): java.util.Map;
                    // @ts-ignore
                    public pickBiome(x: number, z: number): cn.nukkit.level.biome.Biome;
                    // @ts-ignore
                    public init(level: cn.nukkit.level.ChunkManager, random: cn.nukkit.math.NukkitRandom): void;
                    // @ts-ignore
                    public generateChunk(chunkX: number, chunkZ: number): void;
                    // @ts-ignore
                    public populateChunk(chunkX: number, chunkZ: number): void;
                    // @ts-ignore
                    public getSpawn(): cn.nukkit.math.Vector3;
                }
            }
        }
    }
}
