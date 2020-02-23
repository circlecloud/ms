declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace type {
                        // @ts-ignore
                        abstract class PopulatorSurfaceBlock extends cn.nukkit.level.generator.populator.type.PopulatorCount {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected populateCount(level: cn.nukkit.level.ChunkManager, chunkX: number, chunkZ: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            protected abstract canStay(x: number, y: number, z: number, chunk: cn.nukkit.level.format.FullChunk): boolean;
                            // @ts-ignore
                            protected abstract getBlockId(x: number, z: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): number;
                            // @ts-ignore
                            protected getHighestWorkableBlock(level: cn.nukkit.level.ChunkManager, x: number, z: number, chunk: cn.nukkit.level.format.FullChunk): number;
                            // @ts-ignore
                            protected placeBlock(x: number, y: number, z: number, id: number, chunk: cn.nukkit.level.format.FullChunk, random: cn.nukkit.math.NukkitRandom): void;
                        }
                    }
                }
            }
        }
    }
}
