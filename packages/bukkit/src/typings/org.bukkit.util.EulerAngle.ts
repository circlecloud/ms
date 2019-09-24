declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class EulerAngle {
                /**
                 * Creates a EularAngle with each axis set to the
                 * passed angle in radians
                 */
                constructor(x: number, y: number, z: number)
                public static ZERO: org.bukkit.util.EulerAngle;
                /**
                 * Returns the angle on the x axis in radians
                 */
                public getX(): number;
                /**
                 * Returns the angle on the y axis in radians
                 */
                public getY(): number;
                /**
                 * Returns the angle on the z axis in radians
                 */
                public getZ(): number;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the x axis to the passed angle
                 */
                public setX(x: number): org.bukkit.util.EulerAngle;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the y axis to the passed angle
                 */
                public setY(y: number): org.bukkit.util.EulerAngle;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the z axis to the passed angle
                 */
                public setZ(z: number): org.bukkit.util.EulerAngle;
                /**
                 * Creates a new EulerAngle which is the result of adding
                 * the x, y, z components to this EulerAngle
                 */
                public add(x: number, y: number, z: number): org.bukkit.util.EulerAngle;
                /**
                 * Creates a new EulerAngle which is the result of subtracting
                 * the x, y, z components to this EulerAngle
                 */
                public subtract(x: number, y: number, z: number): org.bukkit.util.EulerAngle;
                public equals(o: any): boolean;
                public hashCode(): number;
            }
        }
    }
}
