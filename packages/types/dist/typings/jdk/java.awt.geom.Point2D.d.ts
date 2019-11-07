// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Point2D extends java.lang.Object {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of this <code>Point2D</code> in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getX(): number;
                /**
                 * Returns the Y coordinate of this <code>Point2D</code> in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getY(): number;
                /**
                 * Sets the location of this <code>Point2D</code> to the
                 * specified <code>double</code> coordinates.
                 */
                // @ts-ignore
                public abstract setLocation(x: number, y: number): void;
                /**
                 * Sets the location of this <code>Point2D</code> to the same
                 * coordinates as the specified <code>Point2D</code> object.
                 */
                // @ts-ignore
                public setLocation(p: java.awt.geom.Point2D): void;
                /**
                 * Returns the square of the distance between two points.
                 */
                // @ts-ignore
                public static distanceSq(x1: number, y1: number, x2: number, y2: number): number;
                /**
                 * Returns the distance between two points.
                 */
                // @ts-ignore
                public static distance(x1: number, y1: number, x2: number, y2: number): number;
                /**
                 * Returns the square of the distance from this
                 * <code>Point2D</code> to a specified point.
                 */
                // @ts-ignore
                public distanceSq(px: number, py: number): number;
                /**
                 * Returns the square of the distance from this
                 * <code>Point2D</code> to a specified <code>Point2D</code>.
                 */
                // @ts-ignore
                public distanceSq(pt: java.awt.geom.Point2D): number;
                /**
                 * Returns the distance from this <code>Point2D</code> to
                 * a specified point.
                 */
                // @ts-ignore
                public distance(px: number, py: number): number;
                /**
                 * Returns the distance from this <code>Point2D</code> to a
                 * specified <code>Point2D</code>.
                 */
                // @ts-ignore
                public distance(pt: java.awt.geom.Point2D): number;
                /**
                 * Creates a new object of the same class and with the
                 * same contents as this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns the hashcode for this <code>Point2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Determines whether or not two points are equal. Two instances of
                 * <code>Point2D</code> are equal if the values of their
                 * <code>x</code> and <code>y</code> member fields, representing
                 * their position in the coordinate space, are the same.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
