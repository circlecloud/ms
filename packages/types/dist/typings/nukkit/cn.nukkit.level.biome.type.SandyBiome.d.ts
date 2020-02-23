declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace type {
                    // @ts-ignore
                    abstract class SandyBiome extends cn.nukkit.level.biome.type.CoveredBiome {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getSurfaceDepth(y: number): number;
                        // @ts-ignore
                        public getSurfaceBlock(y: number): number;
                        // @ts-ignore
                        public getGroundDepth(y: number): number;
                        // @ts-ignore
                        public getGroundBlock(y: number): number;
                    }
                }
            }
        }
    }
}
