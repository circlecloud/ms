declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                class SimplexOctaveGenerator {
                    /**
                     * Creates a simplex octave generator for the given world
                     */
                    constructor(world: org.bukkit.World, octaves: number)
                    /**
                     * Creates a simplex octave generator for the given world
                     */
                    constructor(seed: number, octaves: number)
                    /**
                     * Creates a simplex octave generator for the given {@link Random}
                     */
                    constructor(rand: any, octaves: number)
                    public setScale(scale: number): void;
                    /**
                     * Gets the scale used for each W-coordinates passed
                     */
                    public getWScale(): number;
                    /**
                     * Sets the scale used for each W-coordinates passed
                     */
                    public setWScale(scale: number): void;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
