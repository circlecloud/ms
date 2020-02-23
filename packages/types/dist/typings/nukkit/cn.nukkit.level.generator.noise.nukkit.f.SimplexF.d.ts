declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace noise {
                    namespace nukkit {
                        namespace f {
                            // @ts-ignore
                             class SimplexF extends cn.nukkit.level.generator.noise.nukkit.f.PerlinF {
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number, persistence: number)
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number, persistence: number, expansion: number)
                                // @ts-ignore
                                protected static SQRT_3: number;
                                // @ts-ignore
                                protected static SQRT_5: number;
                                // @ts-ignore
                                protected static F2: number;
                                // @ts-ignore
                                protected static G2: number;
                                // @ts-ignore
                                protected static G22: number;
                                // @ts-ignore
                                protected static F3: number;
                                // @ts-ignore
                                protected static G3: number;
                                // @ts-ignore
                                protected static F4: number;
                                // @ts-ignore
                                protected static G4: number;
                                // @ts-ignore
                                protected static G42: number;
                                // @ts-ignore
                                protected static G43: number;
                                // @ts-ignore
                                protected static G44: number;
                                // @ts-ignore
                                public static grad3: number[][];
                                // @ts-ignore
                                protected offsetW: number;
                                // @ts-ignore
                                protected static dot2D(g: number, x: number, y: number): number;
                                // @ts-ignore
                                protected static dot3D(g: number, x: number, y: number, z: number): number;
                                // @ts-ignore
                                protected static dot4D(g: number, x: number, y: number, z: number, w: number): number;
                                // @ts-ignore
                                public getNoise3D(x: number, y: number, z: number): number;
                                // @ts-ignore
                                public getNoise2D(x: number, y: number): number;
                            }
                        }
                    }
                }
            }
        }
    }
}
