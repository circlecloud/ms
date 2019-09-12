declare namespace org {
    namespace bukkit {
        namespace util {
            class BlockVector {
                /**
                 * Construct the vector with all components as 0.
                 */
                constructor()
                /**
                 * Construct the vector with another vector.
                 */
                constructor(vec: org.bukkit.util.Vector)
                /**
                 * Construct the vector with provided integer components.
                 */
                constructor(x: number, y: number, z: number)
                /**
                 * Construct the vector with provided double components.
                 */
                constructor(x: number, y: number, z: number)
                /**
                 * Construct the vector with provided float components.
                 */
                constructor(x: number, y: number, z: number)
                /**
                 * Checks if another object is equivalent.
                 */
                public equals(obj: any): boolean;
                /**
                 * Returns a hash code for this vector.
                 */
                public hashCode(): number;
                /**
                 * Get a new block vector.
                 */
                public clone(): org.bukkit.util.BlockVector;
                public static deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.util.BlockVector;
            }
        }
    }
}
