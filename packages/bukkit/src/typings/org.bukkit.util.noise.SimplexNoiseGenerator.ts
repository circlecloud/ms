declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class SimplexNoiseGenerator {
                    constructor()
                    /**
                     * Creates a seeded simplex noise generator for the given world
                     */
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded simplex noise generator for the given seed
                     */
                    constructor(seed: number)
                    /**
                     * Creates a seeded simplex noise generator with the given Random
                     */
                    constructor(rand: any)
                    protected static SQRT_3: number;
                    protected static SQRT_5: number;
                    protected static F2: number;
                    protected static G2: number;
                    protected static G22: number;
                    protected static F3: number;
                    protected static G3: number;
                    protected static F4: number;
                    protected static G4: number;
                    protected static G42: number;
                    protected static G43: number;
                    protected static G44: number;
                    protected static grad4: number[][];
                    protected static simplex: number[][];
                    protected offsetW: number;
                    protected static dot(g: number, x: number, y: number): number;
                    protected static dot(g: number, x: number, y: number, z: number): number;
                    protected static dot(g: number, x: number, y: number, z: number, w: number): number;
                    /**
                     * Computes and returns the 1D unseeded simplex noise for the given
                     * coordinates in 1D space
                     */
                    public static getNoise(xin: number): number;
                    /**
                     * Computes and returns the 2D unseeded simplex noise for the given
                     * coordinates in 2D space
                     */
                    public static getNoise(xin: number, yin: number): number;
                    /**
                     * Computes and returns the 3D unseeded simplex noise for the given
                     * coordinates in 3D space
                     */
                    public static getNoise(xin: number, yin: number, zin: number): number;
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     */
                    public static getNoise(x: number, y: number, z: number, w: number): number;
                    public noise(xin: number, yin: number, zin: number): number;
                    public noise(xin: number, yin: number): number;
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     */
                    public noise(x: number, y: number, z: number, w: number): number;
                    /**
                     * Gets the singleton unseeded instance of this generator
                     */
                    public static getInstance(): org.bukkit.util.noise.SimplexNoiseGenerator;
                }
            }
        }
    }
}
