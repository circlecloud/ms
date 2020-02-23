declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace type {
                        // @ts-ignore
                        abstract class Populator extends java.lang.Object implements cn.nukkit.block.BlockID {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public abstract populate(level: cn.nukkit.level.ChunkManager, chunkX: number, chunkZ: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            protected getHighestWorkableBlock(level: cn.nukkit.level.ChunkManager, x: number, z: number, chunk: cn.nukkit.level.format.FullChunk): number;
                        }
                    }
                }
            }
        }
    }
}
