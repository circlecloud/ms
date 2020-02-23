declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        // @ts-ignore
                        abstract class ObjectTree extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected overridable(id: number): boolean;
                            // @ts-ignore
                            public getType(): number;
                            // @ts-ignore
                            public getTrunkBlock(): number;
                            // @ts-ignore
                            public getLeafBlock(): number;
                            // @ts-ignore
                            public getTreeHeight(): number;
                            // @ts-ignore
                            public static growTree(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom): void;
                            // @ts-ignore
                            public static growTree(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom, type: number): void;
                            // @ts-ignore
                            public canPlaceObject(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom): boolean;
                            // @ts-ignore
                            public placeObject(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom): void;
                            // @ts-ignore
                            protected placeTrunk(level: cn.nukkit.level.ChunkManager, x: number, y: number, z: number, random: cn.nukkit.math.NukkitRandom, trunkHeight: number): void;
                        }
                    }
                }
            }
        }
    }
}
