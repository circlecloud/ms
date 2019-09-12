declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                abstract class NoiseGenerator {
                    constructor()
                    protected perm: number[];
                    protected offsetX: number;
                    protected offsetY: number;
                    protected offsetZ: number;
                    /**
                     * Speedy floor, faster than (int)Math.floor(x)
                     */
                    public static floor(x: number): number;
                    protected static fade(x: number): number;
                    protected static lerp(x: number, y: number, z: number): number;
                    protected static grad(hash: number, x: number, y: number, z: number): number;
                    /**
                     * Computes and returns the 1D noise for the given coordinate in 1D space
                     */
                    public noise(x: number): number;
                    /**
                     * Computes and returns the 2D noise for the given coordinates in 2D space
                     */
                    public noise(x: number, y: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     */
                    public noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
                }
            }
        }
    }
}
