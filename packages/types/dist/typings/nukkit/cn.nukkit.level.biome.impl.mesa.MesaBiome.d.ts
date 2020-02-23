declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace impl {
                    namespace mesa {
                        // @ts-ignore
                         class MesaBiome extends cn.nukkit.level.biome.type.CoveredBiome {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            protected moundHeight: number;
                            // @ts-ignore
                            public setMoundHeight(height: number): void;
                            // @ts-ignore
                            public getSurfaceDepth(y: number): number;
                            // @ts-ignore
                            public getSurfaceBlock(y: number): number;
                            // @ts-ignore
                            public getSurfaceMeta(y: number): number;
                            // @ts-ignore
                            public getGroundDepth(y: number): number;
                            // @ts-ignore
                            public getGroundBlock(y: number): number;
                            // @ts-ignore
                            public getName(): string;
                            // @ts-ignore
                            public preCover(x: number, z: number): void;
                            // @ts-ignore
                            protected getMoundFrequency(): number;
                            // @ts-ignore
                            public getHeightOffset(x: number, z: number): number;
                            // @ts-ignore
                            protected minHill(): number;
                        }
                    }
                }
            }
        }
    }
}
