declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace noise {
                    namespace nukkit {
                        namespace f {
                            // @ts-ignore
                            abstract class NoiseF extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                protected perm: number[];
                                // @ts-ignore
                                protected offsetX: number;
                                // @ts-ignore
                                protected offsetY: number;
                                // @ts-ignore
                                protected offsetZ: number;
                                // @ts-ignore
                                protected octaves: number;
                                // @ts-ignore
                                protected persistence: number;
                                // @ts-ignore
                                protected expansion: number;
                                // @ts-ignore
                                public static floor(x: number): number;
                                // @ts-ignore
                                public static fade(x: number): number;
                                // @ts-ignore
                                public static lerp(x: number, y: number, z: number): number;
                                // @ts-ignore
                                public static linearLerp(x: number, x1: number, x2: number, q0: number, q1: number): number;
                                // @ts-ignore
                                public static bilinearLerp(x: number, y: number, q00: number, q01: number, q10: number, q11: number, x1: number, x2: number, y1: number, y2: number): number;
                                // @ts-ignore
                                public static trilinearLerp(x: number, y: number, z: number, q000: number, q001: number, q010: number, q011: number, q100: number, q101: number, q110: number, q111: number, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number;
                                // @ts-ignore
                                public static grad(hash: number, x: number, y: number, z: number): number;
                                // @ts-ignore
                                public abstract getNoise2D(x: number, z: number): number;
                                // @ts-ignore
                                public abstract getNoise3D(x: number, y: number, z: number): number;
                                // @ts-ignore
                                public noise2D(x: number, z: number): number;
                                // @ts-ignore
                                public noise2D(x: number, z: number, normalized: boolean): number;
                                // @ts-ignore
                                public noise3D(x: number, y: number, z: number): number;
                                // @ts-ignore
                                public noise3D(x: number, y: number, z: number, normalized: boolean): number;
                                // @ts-ignore
                                public setOffset(x: number, y: number, z: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
