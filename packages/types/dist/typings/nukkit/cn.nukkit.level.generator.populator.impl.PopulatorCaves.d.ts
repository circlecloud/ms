declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace impl {
                        // @ts-ignore
                         class PopulatorCaves extends cn.nukkit.level.generator.populator.type.Populator {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected checkAreaSize: number;
                            // @ts-ignore
                            public static caveRarity: number;
                            // @ts-ignore
                            public static caveFrequency: number;
                            // @ts-ignore
                            public static caveMinAltitude: number;
                            // @ts-ignore
                            public static caveMaxAltitude: number;
                            // @ts-ignore
                            public static individualCaveRarity: number;
                            // @ts-ignore
                            public static caveSystemFrequency: number;
                            // @ts-ignore
                            public static caveSystemPocketChance: number;
                            // @ts-ignore
                            public static caveSystemPocketMinSize: number;
                            // @ts-ignore
                            public static caveSystemPocketMaxSize: number;
                            // @ts-ignore
                            public static evenCaveDistribution: boolean;
                            // @ts-ignore
                            public worldHeightCap: number;
                            // @ts-ignore
                            public populate(level: cn.nukkit.level.ChunkManager, chunkX: number, chunkZ: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            protected generateLargeCaveNode(seed: number, chunk: cn.nukkit.level.format.FullChunk, x: number, y: number, z: number): void;
                            // @ts-ignore
                            protected generateCaveNode(seed: number, chunk: cn.nukkit.level.format.FullChunk, x: number, y: number, z: number, radius: number, angelOffset: number, angel: number, angle: number, maxAngle: number, scale: number): void;
                            // @ts-ignore
                            protected generateChunk(chunkX: number, chunkZ: number, generatingChunkBuffer: cn.nukkit.level.format.FullChunk): void;
                            // @ts-ignore
                            public static numberInRange(random: java.util.Random, min: number, max: number): number;
                        }
                    }
                }
            }
        }
    }
}
