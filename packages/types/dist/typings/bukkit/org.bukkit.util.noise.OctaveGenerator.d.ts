// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                abstract class OctaveGenerator extends java.lang.Object {
                    // @ts-ignore
                    constructor(octaves: org.bukkit.util.noise.NoiseGenerator)
                    // @ts-ignore
                    protected octaves: org.bukkit.util.noise.NoiseGenerator[];
                    // @ts-ignore
                    protected xScale: number;
                    // @ts-ignore
                    protected yScale: number;
                    // @ts-ignore
                    protected zScale: number;
                    /**
                     * Sets the scale used for all coordinates passed to this generator.
                     * <p>
                     * This is the equivalent to setting each coordinate to the specified
                     * value.
                     */
                    // @ts-ignore
                    public setScale(scale: number): void;
                    /**
                     * Gets the scale used for each X-coordinates passed
                     */
                    // @ts-ignore
                    public getXScale(): number;
                    /**
                     * Sets the scale used for each X-coordinates passed
                     */
                    // @ts-ignore
                    public setXScale(scale: number): void;
                    /**
                     * Gets the scale used for each Y-coordinates passed
                     */
                    // @ts-ignore
                    public getYScale(): number;
                    /**
                     * Sets the scale used for each Y-coordinates passed
                     */
                    // @ts-ignore
                    public setYScale(scale: number): void;
                    /**
                     * Gets the scale used for each Z-coordinates passed
                     */
                    // @ts-ignore
                    public getZScale(): number;
                    /**
                     * Sets the scale used for each Z-coordinates passed
                     */
                    // @ts-ignore
                    public setZScale(scale: number): void;
                    /**
                     * Gets a clone of the individual octaves used within this generator
                     */
                    // @ts-ignore
                    public getOctaves(): org.bukkit.util.noise.NoiseGenerator[];
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
