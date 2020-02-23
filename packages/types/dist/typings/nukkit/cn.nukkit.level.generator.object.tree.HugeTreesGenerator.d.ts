declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        // @ts-ignore
                        abstract class HugeTreesGenerator extends cn.nukkit.level.generator.object.tree.TreeGenerator {
                            // @ts-ignore
                            constructor(baseHeightIn: number, extraRandomHeightIn: number, woodMetadataIn: cn.nukkit.block.Block, leavesMetadataIn: cn.nukkit.block.Block)
                            // @ts-ignore
                            protected baseHeight: number;
                            // @ts-ignore
                            protected woodMetadata: cn.nukkit.block.Block;
                            // @ts-ignore
                            protected leavesMetadata: cn.nukkit.block.Block;
                            // @ts-ignore
                            protected extraRandomHeight: number;
                            // @ts-ignore
                            protected getHeight(rand: cn.nukkit.math.NukkitRandom): number;
                            // @ts-ignore
                            protected ensureGrowable(worldIn: cn.nukkit.level.ChunkManager, rand: cn.nukkit.math.NukkitRandom, treePos: cn.nukkit.math.Vector3, p_175929_4_: number): boolean;
                            // @ts-ignore
                            protected growLeavesLayerStrict(worldIn: cn.nukkit.level.ChunkManager, layerCenter: cn.nukkit.math.Vector3, width: number): void;
                            // @ts-ignore
                            protected growLeavesLayer(worldIn: cn.nukkit.level.ChunkManager, layerCenter: cn.nukkit.math.Vector3, width: number): void;
                        }
                    }
                }
            }
        }
    }
}
