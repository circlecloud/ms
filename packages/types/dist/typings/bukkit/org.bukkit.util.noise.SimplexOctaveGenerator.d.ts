declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class SimplexOctaveGenerator extends org.bukkit.util.noise.OctaveGenerator {
                    /**
                     * Creates a simplex octave generator for the given world
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World, octaves: number)
                    /**
                     * Creates a simplex octave generator for the given world
                     */
                    // @ts-ignore
                    constructor(seed: number, octaves: number)
                    /**
                     * Creates a simplex octave generator for the given {@link Random}
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random, octaves: number)
                    // @ts-ignore
                    public setScale(scale: number): void;
                    /**
                     * Gets the scale used for each W-coordinates passed
                     */
                    // @ts-ignore
                    public getWScale(): number;
                    /**
                     * Sets the scale used for each W-coordinates passed
                     */
                    // @ts-ignore
                    public setWScale(scale: number): void;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
