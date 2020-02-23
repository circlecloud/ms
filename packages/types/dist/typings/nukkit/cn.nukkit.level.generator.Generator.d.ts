declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                abstract class Generator extends java.lang.Object implements cn.nukkit.block.BlockID {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static TYPE_OLD: number;
                    // @ts-ignore
                    public static TYPE_INFINITE: number;
                    // @ts-ignore
                    public static TYPE_FLAT: number;
                    // @ts-ignore
                    public static TYPE_NETHER: number;
                    // @ts-ignore
                    public abstract getId(): number;
                    // @ts-ignore
                    public getDimension(): number;
                    // @ts-ignore
                    public static addGenerator(clazz: java.lang.Class, name: string, type: number): boolean;
                    // @ts-ignore
                    public static getGeneratorList(): java.lang.String[];
                    // @ts-ignore
                    public static getGenerator(name: string): java.lang.Class;
                    // @ts-ignore
                    public static getGenerator(type: number): java.lang.Class;
                    // @ts-ignore
                    public static getGeneratorName(c: java.lang.Class): string;
                    // @ts-ignore
                    public static getGeneratorType(c: java.lang.Class): number;
                    // @ts-ignore
                    public abstract init(level: cn.nukkit.level.ChunkManager, random: cn.nukkit.math.NukkitRandom): void;
                    // @ts-ignore
                    public abstract generateChunk(chunkX: number, chunkZ: number): void;
                    // @ts-ignore
                    public abstract populateChunk(chunkX: number, chunkZ: number): void;
                    // @ts-ignore
                    public abstract getSettings(): java.util.Map;
                    // @ts-ignore
                    public abstract getName(): string;
                    // @ts-ignore
                    public abstract getSpawn(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public abstract getChunkManager(): cn.nukkit.level.ChunkManager;
                }
            }
        }
    }
}
