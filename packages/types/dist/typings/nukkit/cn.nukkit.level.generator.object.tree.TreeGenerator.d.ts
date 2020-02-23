declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        // @ts-ignore
                        abstract class TreeGenerator extends cn.nukkit.level.generator.object.BasicGenerator {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected canGrowInto(id: number): boolean;
                            // @ts-ignore
                            public generateSaplings(level: cn.nukkit.level.Level, random: java.util.Random, pos: cn.nukkit.math.Vector3): void;
                            // @ts-ignore
                            protected setDirtAt(level: cn.nukkit.level.ChunkManager, pos: cn.nukkit.math.BlockVector3): void;
                            // @ts-ignore
                            protected setDirtAt(level: cn.nukkit.level.ChunkManager, pos: cn.nukkit.math.Vector3): void;
                        }
                    }
                }
            }
        }
    }
}
