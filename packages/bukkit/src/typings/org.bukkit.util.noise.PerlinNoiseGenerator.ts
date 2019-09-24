declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class PerlinNoiseGenerator {
                    constructor()
                    /**
                     * Creates a seeded perlin noise generator for the given world
                     */
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded perlin noise generator for the given seed
                     */
                    constructor(seed: number)
                    /**
                     * Creates a seeded perlin noise generator with the given Random
                     */
                    constructor(rand: any)
                    protected static grad3: number[][];
                    /**
                     * Computes and returns the 1D unseeded perlin noise for the given
                     * coordinates in 1D space
                     */
                    public static getNoise(x: number): number;
                    /**
                     * Computes and returns the 2D unseeded perlin noise for the given
                     * coordinates in 2D space
                     */
                    public static getNoise(x: number, y: number): number;
                    /**
                     * Computes and returns the 3D unseeded perlin noise for the given
                     * coordinates in 3D space
                     */
                    public static getNoise(x: number, y: number, z: number): number;
                    /**
                     * Gets the singleton unseeded instance of this generator
                     */
                    public static getInstance(): org.bukkit.util.noise.PerlinNoiseGenerator;
                    public noise(x: number, y: number, z: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
                }
            }
        }
    }
}
