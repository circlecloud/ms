// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class BlockVector extends org.bukkit.util.Vector {
                /**
                 * Construct the vector with all components as 0.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct the vector with another vector.
                 */
                // @ts-ignore
                constructor(vec: org.bukkit.util.Vector)
                /**
                 * Construct the vector with provided integer components.
                 */
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                /**
                 * Construct the vector with provided double components.
                 */
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                /**
                 * Construct the vector with provided float components.
                 */
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                /**
                 * Checks if another object is equivalent.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code for this vector.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Get a new block vector.
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.BlockVector;
                // @ts-ignore
                public static deserialize(args: java.util.Map): org.bukkit.util.BlockVector;
            }
        }
    }
}
