declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    // @ts-ignore
                    abstract class BasicGenerator extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public abstract generate(level: cn.nukkit.level.ChunkManager, rand: cn.nukkit.math.NukkitRandom, position: cn.nukkit.math.Vector3): boolean;
                        // @ts-ignore
                        public setDecorationDefaults(): void;
                        // @ts-ignore
                        protected setBlockAndNotifyAdequately(level: cn.nukkit.level.ChunkManager, pos: cn.nukkit.math.BlockVector3, state: cn.nukkit.block.Block): void;
                        // @ts-ignore
                        protected setBlockAndNotifyAdequately(level: cn.nukkit.level.ChunkManager, pos: cn.nukkit.math.Vector3, state: cn.nukkit.block.Block): void;
                        // @ts-ignore
                        protected setBlock(level: cn.nukkit.level.ChunkManager, v: cn.nukkit.math.Vector3, b: cn.nukkit.block.Block): void;
                    }
                }
            }
        }
    }
}
