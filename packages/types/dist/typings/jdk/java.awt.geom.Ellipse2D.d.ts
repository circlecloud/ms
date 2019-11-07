// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Ellipse2D extends java.awt.geom.RectangularShape {
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
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(x: number, y: number): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public intersects(x: number, y: number, w: number, h: number): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(x: number, y: number, w: number, h: number): boolean;
                /**
                 * Returns an iteration object that defines the boundary of this
                 * <code>Ellipse2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Ellipse2D</code> class guarantees that
                 * modifications to the geometry of this <code>Ellipse2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns the hashcode for this <code>Ellipse2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>Ellipse2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>Ellipse2D</code>
                 * if it is an instance of <code>Ellipse2D</code> and if its
                 * location and size are the same as this <code>Ellipse2D</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
