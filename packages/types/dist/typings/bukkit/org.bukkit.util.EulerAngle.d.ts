declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class EulerAngle extends java.lang.Object {
                /**
                 * Creates a EularAngle with each axis set to the
                 * passed angle in radians
                 */
                // @ts-ignore
                constructor(x: number, y: number, z: number)
                // @ts-ignore
                public static ZERO: org.bukkit.util.EulerAngle;
                /**
                 * Returns the angle on the x axis in radians
                 */
                // @ts-ignore
                public getX(): number;
                /**
                 * Returns the angle on the y axis in radians
                 */
                // @ts-ignore
                public getY(): number;
                /**
                 * Returns the angle on the z axis in radians
                 */
                // @ts-ignore
                public getZ(): number;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the x axis to the passed angle
                 */
                // @ts-ignore
                public setX(x: number): org.bukkit.util.EulerAngle;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the y axis to the passed angle
                 */
                // @ts-ignore
                public setY(y: number): org.bukkit.util.EulerAngle;
                /**
                 * Return a EulerAngle which is the result of changing
                 * the z axis to the passed angle
                 */
                // @ts-ignore
                public setZ(z: number): org.bukkit.util.EulerAngle;
                /**
                 * Creates a new EulerAngle which is the result of adding
                 * the x, y, z components to this EulerAngle
                 */
                // @ts-ignore
                public add(x: number, y: number, z: number): org.bukkit.util.EulerAngle;
                /**
                 * Creates a new EulerAngle which is the result of subtracting
                 * the x, y, z components to this EulerAngle
                 */
                // @ts-ignore
                public subtract(x: number, y: number, z: number): org.bukkit.util.EulerAngle;
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
