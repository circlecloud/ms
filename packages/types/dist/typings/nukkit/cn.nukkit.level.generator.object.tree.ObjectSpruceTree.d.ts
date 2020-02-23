declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        // @ts-ignore
                         class ObjectSpruceTree extends cn.nukkit.level.generator.object.tree.ObjectTree {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected treeHeight: number;
                            // @ts-ignore
                            public getTrunkBlock(): number;
                            // @ts-ignore
                            public getLeafBlock(): number;
                            // @ts-ignore
                            public getType(): number;
                            // @ts-ignore
                            public getTreeHeight(): number;
                            // @ts-ignore
                            public placeObject(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom): void;
                            // @ts-ignore
                            public placeLeaves(level: cn.nukkit.level.ChunkManager, topSize: number, lRadius: number, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom): void;
                        }
                    }
                }
            }
        }
    }
}
