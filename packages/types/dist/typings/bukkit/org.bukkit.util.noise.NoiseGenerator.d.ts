declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                abstract class NoiseGenerator extends java.lang.Object {
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
                    /**
                     * Speedy floor, faster than (int)Math.floor(x)
                     */
                    // @ts-ignore
                    public static floor(x: number): number;
                    // @ts-ignore
                    protected static fade(x: number): number;
                    // @ts-ignore
                    protected static lerp(x: number, y: number, z: number): number;
                    // @ts-ignore
                    protected static grad(hash: number, x: number, y: number, z: number): number;
                    /**
                     * Computes and returns the 1D noise for the given coordinate in 1D space
                     */
                    // @ts-ignore
                    public noise(x: number): number;
                    /**
                     * Computes and returns the 2D noise for the given coordinates in 2D space
                     */
                    // @ts-ignore
                    public noise(x: number, y: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    // @ts-ignore
                    public noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
