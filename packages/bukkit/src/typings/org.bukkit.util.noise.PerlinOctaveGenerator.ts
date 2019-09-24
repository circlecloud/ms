declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                // @ts-ignore
                 class PerlinOctaveGenerator extends org.bukkit.util.noise.OctaveGenerator {
                    /**
                     * Creates a perlin octave generator for the given world
                     */
                    constructor(world: org.bukkit.World, octaves: number)
                    /**
                     * Creates a perlin octave generator for the given world
                     */
                    constructor(seed: number, octaves: number)
                    /**
                     * Creates a perlin octave generator for the given {@link Random}
                     */
                    constructor(rand: any, octaves: number)
                }
            }
        }
    }
}
