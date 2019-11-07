declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class RoundRectangle2D extends java.awt.geom.RectangularShape {
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
                 * Gets the width of the arc that rounds off the corners.
                 */
                // @ts-ignore
                public abstract getArcWidth(): number;
                /**
                 * Gets the height of the arc that rounds off the corners.
                 */
                // @ts-ignore
                public abstract getArcHeight(): number;
                /**
                 * Sets the location, size, and corner radii of this
                 * <code>RoundRectangle2D</code> to the specified
                 * <code>double</code> values.
                 */
                // @ts-ignore
                public abstract setRoundRect(x: number, y: number, w: number, h: number, arcWidth: number, arcHeight: number): void;
                /**
                 * Sets this <code>RoundRectangle2D</code> to be the same as the
                 * specified <code>RoundRectangle2D</code>.
                 */
                // @ts-ignore
                public setRoundRect(rr: java.awt.geom.RoundRectangle2D): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public setFrame(x: number, y: number, w: number, h: number): void;
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
                 * <code>RoundRectangle2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>RoundRectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>RoundRectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns the hashcode for this <code>RoundRectangle2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>RoundRectangle2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>RoundRectangle2D</code>
                 * if it is an instance of <code>RoundRectangle2D</code> and if its
                 * location, size, and corner arc dimensions are the same as this
                 * <code>RoundRectangle2D</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
