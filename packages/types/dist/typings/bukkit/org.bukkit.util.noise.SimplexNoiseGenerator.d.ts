// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class SimplexNoiseGenerator extends org.bukkit.util.noise.PerlinNoiseGenerator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a seeded simplex noise generator for the given world
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded simplex noise generator for the given seed
                     */
                    // @ts-ignore
                    constructor(seed: number)
                    /**
                     * Creates a seeded simplex noise generator with the given Random
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random)
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
                    protected static grad4: number[][];
                    // @ts-ignore
                    protected static simplex: number[][];
                    // @ts-ignore
                    protected offsetW: number;
                    // @ts-ignore
                    protected static dot(g: number, x: number, y: number): number;
                    // @ts-ignore
                    protected static dot(g: number, x: number, y: number, z: number): number;
                    // @ts-ignore
                    protected static dot(g: number, x: number, y: number, z: number, w: number): number;
                    /**
                     * Computes and returns the 1D unseeded simplex noise for the given
                     * coordinates in 1D space
                     */
                    // @ts-ignore
                    public static getNoise(xin: number): number;
                    /**
                     * Computes and returns the 2D unseeded simplex noise for the given
                     * coordinates in 2D space
                     */
                    // @ts-ignore
                    public static getNoise(xin: number, yin: number): number;
                    /**
                     * Computes and returns the 3D unseeded simplex noise for the given
                     * coordinates in 3D space
                     */
                    // @ts-ignore
                    public static getNoise(xin: number, yin: number, zin: number): number;
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     */
                    // @ts-ignore
                    public static getNoise(x: number, y: number, z: number, w: number): number;
                    // @ts-ignore
                    public noise(xin: number, yin: number, zin: number): number;
                    // @ts-ignore
                    public noise(xin: number, yin: number): number;
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, w: number): number;
                    /**
                     * Gets the singleton unseeded instance of this generator
                     */
                    // @ts-ignore
                    public static getInstance(): org.bukkit.util.noise.SimplexNoiseGenerator;
                }
            }
        }
    }
}
