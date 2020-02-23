declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace ore {
                        // @ts-ignore
                         class OreType extends java.lang.Object {
                            // @ts-ignore
                            constructor(material: cn.nukkit.block.Block, clusterCount: number, clusterSize: number, minHeight: number, maxHeight: number)
                            // @ts-ignore
                            constructor(material: cn.nukkit.block.Block, clusterCount: number, clusterSize: number, minHeight: number, maxHeight: number, replaceBlockId: number)
                            // @ts-ignore
                            public fullId: number;
                            // @ts-ignore
                            public clusterCount: number;
                            // @ts-ignore
                            public clusterSize: number;
                            // @ts-ignore
                            public maxHeight: number;
                            // @ts-ignore
                            public minHeight: number;
                            // @ts-ignore
                            public replaceBlockId: number;
                            // @ts-ignore
                            public spawn(level: cn.nukkit.level.ChunkManager, rand: cn.nukkit.math.NukkitRandom, replaceId: number, x: number, y: number, z: number): boolean;
                        }
                    }
                }
            }
        }
    }
}
