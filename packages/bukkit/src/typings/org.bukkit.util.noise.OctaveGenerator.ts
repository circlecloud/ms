declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                abstract class OctaveGenerator {
                    constructor(octaves: org.bukkit.util.noise.NoiseGenerator)
                    protected octaves: org.bukkit.util.noise.NoiseGenerator[];
                    protected xScale: number;
                    protected yScale: number;
                    protected zScale: number;
                    /**
                     * Sets the scale used for all coordinates passed to this generator.
                     * <p>
                     * This is the equivalent to setting each coordinate to the specified
                     * value.
                     */
                    public setScale(scale: number): void;
                    /**
                     * Gets the scale used for each X-coordinates passed
                     */
                    public getXScale(): number;
                    /**
                     * Sets the scale used for each X-coordinates passed
                     */
                    public setXScale(scale: number): void;
                    /**
                     * Gets the scale used for each Y-coordinates passed
                     */
                    public getYScale(): number;
                    /**
                     * Sets the scale used for each Y-coordinates passed
                     */
                    public setYScale(scale: number): void;
                    /**
                     * Gets the scale used for each Z-coordinates passed
                     */
                    public getZScale(): number;
                    /**
                     * Sets the scale used for each Z-coordinates passed
                     */
                    public setZScale(scale: number): void;
                    /**
                     * Gets a clone of the individual octaves used within this generator
                     */
                    public getOctaves(): org.bukkit.util.noise.NoiseGenerator[];
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
