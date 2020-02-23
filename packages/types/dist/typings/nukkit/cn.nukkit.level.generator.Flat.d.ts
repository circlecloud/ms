declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                 class Flat extends cn.nukkit.level.generator.Generator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(options: java.util.Map)
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public getChunkManager(): cn.nukkit.level.ChunkManager;
                    // @ts-ignore
                    public getSettings(): java.util.Map;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    protected parsePreset(preset: string, chunkX: number, chunkZ: number): void;
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
