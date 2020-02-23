declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace impl {
                        // @ts-ignore
                         class PopulatorGroundFire extends cn.nukkit.level.generator.populator.type.PopulatorSurfaceBlock {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected canStay(x: number, y: number, z: number, chunk: cn.nukkit.level.format.FullChunk): boolean;
                            // @ts-ignore
                            protected getBlockId(x: number, z: number, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): number;
                            // @ts-ignore
                            protected placeBlock(x: number, y: number, z: number, id: number, chunk: cn.nukkit.level.format.FullChunk, random: cn.nukkit.math.NukkitRandom): void;
                            // @ts-ignore
                            protected getHighestWorkableBlock(level: cn.nukkit.level.ChunkManager, x: number, z: number, chunk: cn.nukkit.level.format.FullChunk): number;
                        }
                    }
                }
            }
        }
    }
}
