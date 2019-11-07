declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class Vector extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Construct the vector with all components as 0.
                 */
                // @ts-ignore
                constructor()
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
                // @ts-ignore
                protected x: number;
                // @ts-ignore
                protected y: number;
                // @ts-ignore
                protected z: number;
                /**
                 * Adds a vector to this one
                 */
                // @ts-ignore
                public add(vec: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Subtracts a vector from this one.
                 */
                // @ts-ignore
                public subtract(vec: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Multiplies the vector by another.
                 */
                // @ts-ignore
                public multiply(vec: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Divides the vector by another.
                 */
                // @ts-ignore
                public divide(vec: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Copies another vector
                 */
                // @ts-ignore
                public copy(vec: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Gets the magnitude of the vector, defined as sqrt(x^2+y^2+z^2). The
                 * value of this method is not cached and uses a costly square-root
                 * function, so do not repeatedly call this method to get the vector's
                 * magnitude. NaN will be returned if the inner result of the sqrt()
                 * function overflows, which will be caused if the length is too long.
                 */
                // @ts-ignore
                public length(): number;
                /**
                 * Gets the magnitude of the vector squared.
                 */
                // @ts-ignore
                public lengthSquared(): number;
                /**
                 * Get the distance between this vector and another. The value of this
                 * method is not cached and uses a costly square-root function, so do not
                 * repeatedly call this method to get the vector's magnitude. NaN will be
                 * returned if the inner result of the sqrt() function overflows, which
                 * will be caused if the distance is too long.
                 */
                // @ts-ignore
                public distance(o: org.bukkit.util.Vector): number;
                /**
                 * Get the squared distance between this vector and another.
                 */
                // @ts-ignore
                public distanceSquared(o: org.bukkit.util.Vector): number;
                /**
                 * Gets the angle between this vector and another in radians.
                 */
                // @ts-ignore
                public angle(other: org.bukkit.util.Vector): number;
                /**
                 * Sets this vector to the midpoint between this vector and another.
                 */
                // @ts-ignore
                public midpoint(other: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Gets a new midpoint vector between this vector and another.
                 */
                // @ts-ignore
                public getMidpoint(other: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 */
                // @ts-ignore
                public multiply(m: number): org.bukkit.util.Vector;
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 */
                // @ts-ignore
                public multiply(m: number): org.bukkit.util.Vector;
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 */
                // @ts-ignore
                public multiply(m: number): org.bukkit.util.Vector;
                /**
                 * Calculates the dot product of this vector with another. The dot product
                 * is defined as x1*x2+y1*y2+z1*z2. The returned value is a scalar.
                 */
                // @ts-ignore
                public dot(other: org.bukkit.util.Vector): number;
                /**
                 * Calculates the cross product of this vector with another. The cross
                 * product is defined as:
                 * <ul>
                 * <li>x = y1 * z2 - y2 * z1
                 * <li>y = z1 * x2 - z2 * x1
                 * <li>z = x1 * y2 - x2 * y1
                 * </ul>
                 */
                // @ts-ignore
                public crossProduct(o: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Calculates the cross product of this vector with another without mutating
                 * the original. The cross product is defined as:
                 * <ul>
                 * <li>x = y1 * z2 - y2 * z1
                 * <li>y = z1 * x2 - z2 * x1
                 * <li>z = x1 * y2 - x2 * y1
                 * </ul>
                 */
                // @ts-ignore
                public getCrossProduct(o: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Converts this vector to a unit vector (a vector with length of 1).
                 */
                // @ts-ignore
                public normalize(): org.bukkit.util.Vector;
                /**
                 * Zero this vector's components.
                 */
                // @ts-ignore
                public zero(): org.bukkit.util.Vector;
                /**
                 * Returns whether this vector is in an axis-aligned bounding box.
                 * <p>
                 * The minimum and maximum vectors given must be truly the minimum and
                 * maximum X, Y and Z components.
                 */
                // @ts-ignore
                public isInAABB(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean;
                /**
                 * Returns whether this vector is within a sphere.
                 */
                // @ts-ignore
                public isInSphere(origin: org.bukkit.util.Vector, radius: number): boolean;
                /**
                 * Returns if a vector is normalized
                 */
                // @ts-ignore
                public isNormalized(): boolean;
                /**
                 * Rotates the vector around the x axis.
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 */
                // @ts-ignore
                public rotateAroundX(angle: number): org.bukkit.util.Vector;
                /**
                 * Rotates the vector around the y axis.
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 */
                // @ts-ignore
                public rotateAroundY(angle: number): org.bukkit.util.Vector;
                /**
                 * Rotates the vector around the z axis
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 */
                // @ts-ignore
                public rotateAroundZ(angle: number): org.bukkit.util.Vector;
                /**
                 * Rotates the vector around a given arbitrary axis in 3 dimensional space.
                 * <p>
                 * Rotation will follow the general Right-Hand-Rule, which means rotation
                 * will be counterclockwise when the axis is pointing towards the observer.
                 * <p>
                 * This method will always make sure the provided axis is a unit vector, to
                 * not modify the length of the vector when rotating. If you are experienced
                 * with the scaling of a non-unit axis vector, you can use
                 * {@link Vector#rotateAroundNonUnitAxis(Vector, double)}.
                 */
                // @ts-ignore
                public rotateAroundAxis(axis: org.bukkit.util.Vector, angle: number): org.bukkit.util.Vector;
                /**
                 * Rotates the vector around a given arbitrary axis in 3 dimensional space.
                 * <p>
                 * Rotation will follow the general Right-Hand-Rule, which means rotation
                 * will be counterclockwise when the axis is pointing towards the observer.
                 * <p>
                 * Note that the vector length will change accordingly to the axis vector
                 * length. If the provided axis is not a unit vector, the rotated vector
                 * will not have its previous length. The scaled length of the resulting
                 * vector will be related to the axis vector. If you are not perfectly sure
                 * about the scaling of the vector, use
                 * {@link Vector#rotateAroundAxis(Vector, double)}
                 */
                // @ts-ignore
                public rotateAroundNonUnitAxis(axis: org.bukkit.util.Vector, angle: number): org.bukkit.util.Vector;
                /**
                 * Gets the X component.
                 */
                // @ts-ignore
                public getX(): number;
                /**
                 * Gets the floored value of the X component, indicating the block that
                 * this vector is contained with.
                 */
                // @ts-ignore
                public getBlockX(): number;
                /**
                 * Gets the Y component.
                 */
                // @ts-ignore
                public getY(): number;
                /**
                 * Gets the floored value of the Y component, indicating the block that
                 * this vector is contained with.
                 */
                // @ts-ignore
                public getBlockY(): number;
                /**
                 * Gets the Z component.
                 */
                // @ts-ignore
                public getZ(): number;
                /**
                 * Gets the floored value of the Z component, indicating the block that
                 * this vector is contained with.
                 */
                // @ts-ignore
                public getBlockZ(): number;
                /**
                 * Set the X component.
                 */
                // @ts-ignore
                public setX(x: number): org.bukkit.util.Vector;
                /**
                 * Set the X component.
                 */
                // @ts-ignore
                public setX(x: number): org.bukkit.util.Vector;
                /**
                 * Set the X component.
                 */
                // @ts-ignore
                public setX(x: number): org.bukkit.util.Vector;
                /**
                 * Set the Y component.
                 */
                // @ts-ignore
                public setY(y: number): org.bukkit.util.Vector;
                /**
                 * Set the Y component.
                 */
                // @ts-ignore
                public setY(y: number): org.bukkit.util.Vector;
                /**
                 * Set the Y component.
                 */
                // @ts-ignore
                public setY(y: number): org.bukkit.util.Vector;
                /**
                 * Set the Z component.
                 */
                // @ts-ignore
                public setZ(z: number): org.bukkit.util.Vector;
                /**
                 * Set the Z component.
                 */
                // @ts-ignore
                public setZ(z: number): org.bukkit.util.Vector;
                /**
                 * Set the Z component.
                 */
                // @ts-ignore
                public setZ(z: number): org.bukkit.util.Vector;
                /**
                 * Checks to see if two objects are equal.
                 * <p>
                 * Only two Vectors can ever return true. This method uses a fuzzy match
                 * to account for floating point errors. The epsilon can be retrieved
                 * with epsilon.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code for this vector
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Get a new vector.
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.Vector;
                /**
                 * Returns this vector's components as x,y,z.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Gets a Location version of this vector with yaw and pitch being 0.
                 */
                // @ts-ignore
                public toLocation(world: org.bukkit.World): org.bukkit.Location;
                /**
                 * Gets a Location version of this vector.
                 */
                // @ts-ignore
                public toLocation(world: org.bukkit.World, yaw: number, pitch: number): org.bukkit.Location;
                /**
                 * Get the block vector of this vector.
                 */
                // @ts-ignore
                public toBlockVector(): org.bukkit.util.BlockVector;
                /**
                 * Check if each component of this Vector is finite.
                 */
                // @ts-ignore
                public checkFinite(): void;
                /**
                 * Get the threshold used for equals().
                 */
                // @ts-ignore
                public static getEpsilon(): number;
                /**
                 * Gets the minimum components of two vectors.
                 */
                // @ts-ignore
                public static getMinimum(v1: org.bukkit.util.Vector, v2: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Gets the maximum components of two vectors.
                 */
                // @ts-ignore
                public static getMaximum(v1: org.bukkit.util.Vector, v2: org.bukkit.util.Vector): org.bukkit.util.Vector;
                /**
                 * Gets a random vector with components having a random value between 0
                 * and 1.
                 */
                // @ts-ignore
                public static getRandom(): org.bukkit.util.Vector;
                // @ts-ignore
                public serialize(): java.util.Map;
                // @ts-ignore
                public static deserialize(args: java.util.Map): org.bukkit.util.Vector;
            }
        }
    }
}
