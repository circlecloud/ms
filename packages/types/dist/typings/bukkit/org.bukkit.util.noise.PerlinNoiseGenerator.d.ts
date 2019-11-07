declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class PerlinNoiseGenerator extends org.bukkit.util.noise.NoiseGenerator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a seeded perlin noise generator for the given world
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded perlin noise generator for the given seed
                     */
                    // @ts-ignore
                    constructor(seed: number)
                    /**
                     * Creates a seeded perlin noise generator with the given Random
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random)
                    // @ts-ignore
                    protected static grad3: number[][];
                    /**
                     * Computes and returns the 1D unseeded perlin noise for the given
                     * coordinates in 1D space
                     */
                    // @ts-ignore
                    public static getNoise(x: number): number;
                    /**
                     * Computes and returns the 2D unseeded perlin noise for the given
                     * coordinates in 2D space
                     */
                    // @ts-ignore
                    public static getNoise(x: number, y: number): number;
                    /**
                     * Computes and returns the 3D unseeded perlin noise for the given
                     * coordinates in 3D space
                     */
                    // @ts-ignore
                    public static getNoise(x: number, y: number, z: number): number;
                    /**
                     * Gets the singleton unseeded instance of this generator
                     */
                    // @ts-ignore
                    public static getInstance(): org.bukkit.util.noise.PerlinNoiseGenerator;
                    // @ts-ignore
                    public noise(x: number, y: number, z: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
                }
            }
        }
    }
}
