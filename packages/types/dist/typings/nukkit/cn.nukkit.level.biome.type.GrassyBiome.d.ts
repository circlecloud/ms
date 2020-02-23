declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace type {
                    // @ts-ignore
                    abstract class GrassyBiome extends cn.nukkit.level.biome.type.CoveredBiome {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getSurfaceBlock(y: number): number;
                        // @ts-ignore
                        public getGroundBlock(y: number): number;
                    }
                }
            }
        }
    }
}
