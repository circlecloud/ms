declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace impl {
                        // @ts-ignore
                         class PopulatorRavines extends cn.nukkit.level.generator.populator.type.Populator {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected checkAreaSize: number;
                            // @ts-ignore
                            public populate(level: cn.nukkit.level.ChunkManager, chunkX: number, chunkZ: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            protected generateChunk(chunkX: number, chunkZ: number, generatingChunkBuffer: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            protected createRavine(paramLong: number, generatingChunkBuffer: cn.nukkit.level.format.FullChunk, paramDouble1: number, paramDouble2: number, paramDouble3: number, paramFloat1: number, paramFloat2: number, paramFloat3: number, size: number, paramDouble4: number): void;
                            // @ts-ignore
                            public static numberInRange(random: java.util.Random, min: number, max: number): number;
                        }
                    }
                }
            }
        }
    }
}
