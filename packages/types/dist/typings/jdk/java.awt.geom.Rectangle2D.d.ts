// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Rectangle2D extends java.awt.geom.RectangularShape {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static OUT_LEFT: number;
                // @ts-ignore
                public static OUT_TOP: number;
                // @ts-ignore
                public static OUT_RIGHT: number;
                // @ts-ignore
                public static OUT_BOTTOM: number;
                /**
                 * Sets the location and size of this <code>Rectangle2D</code>
                 * to the specified <code>double</code> values.
                 */
                // @ts-ignore
                public abstract setRect(x: number, y: number, w: number, h: number): void;
                /**
                 * Sets this <code>Rectangle2D</code> to be the same as the specified
                 * <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public setRect(r: java.awt.geom.Rectangle2D): void;
                /**
                 * Tests if the specified line segment intersects the interior of this
                 * <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public intersectsLine(x1: number, y1: number, x2: number, y2: number): boolean;
                /**
                 * Tests if the specified line segment intersects the interior of this
                 * <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public intersectsLine(l: java.awt.geom.Line2D): boolean;
                /**
                 * Determines where the specified coordinates lie with respect
                 * to this <code>Rectangle2D</code>.
                 * This method computes a binary OR of the appropriate mask values
                 * indicating, for each side of this <code>Rectangle2D</code>,
                 * whether or not the specified coordinates are on the same side
                 * of the edge as the rest of this <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public abstract outcode(x: number, y: number): number;
                /**
                 * Determines where the specified {@link Point2D} lies with
                 * respect to this <code>Rectangle2D</code>.
                 * This method computes a binary OR of the appropriate mask values
                 * indicating, for each side of this <code>Rectangle2D</code>,
                 * whether or not the specified <code>Point2D</code> is on the same
                 * side of the edge as the rest of this <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public outcode(p: java.awt.geom.Point2D): number;
                /**
                 * Sets the location and size of the outer bounds of this
                 * <code>Rectangle2D</code> to the specified rectangular values.
                 */
                // @ts-ignore
                public setFrame(x: number, y: number, w: number, h: number): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D;
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
                 * Returns a new <code>Rectangle2D</code> object representing the
                 * intersection of this <code>Rectangle2D</code> with the specified
                 * <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public abstract createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
                /**
                 * Intersects the pair of specified source <code>Rectangle2D</code>
                 * objects and puts the result into the specified destination
                 * <code>Rectangle2D</code> object.  One of the source rectangles
                 * can also be the destination to avoid creating a third Rectangle2D
                 * object, but in this case the original points of this source
                 * rectangle will be overwritten by this method.
                 */
                // @ts-ignore
                public static intersect(src1: java.awt.geom.Rectangle2D, src2: java.awt.geom.Rectangle2D, dest: java.awt.geom.Rectangle2D): void;
                /**
                 * Returns a new <code>Rectangle2D</code> object representing the
                 * union of this <code>Rectangle2D</code> with the specified
                 * <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public abstract createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
                /**
                 * Unions the pair of source <code>Rectangle2D</code> objects
                 * and puts the result into the specified destination
                 * <code>Rectangle2D</code> object.  One of the source rectangles
                 * can also be the destination to avoid creating a third Rectangle2D
                 * object, but in this case the original points of this source
                 * rectangle will be overwritten by this method.
                 */
                // @ts-ignore
                public static union(src1: java.awt.geom.Rectangle2D, src2: java.awt.geom.Rectangle2D, dest: java.awt.geom.Rectangle2D): void;
                /**
                 * Adds a point, specified by the double precision arguments
                 * <code>newx</code> and <code>newy</code>, to this
                 * <code>Rectangle2D</code>.  The resulting <code>Rectangle2D</code>
                 * is the smallest <code>Rectangle2D</code> that
                 * contains both the original <code>Rectangle2D</code> and the
                 * specified point.
                 * <p>
                 * After adding a point, a call to <code>contains</code> with the
                 * added point as an argument does not necessarily return
                 * <code>true</code>. The <code>contains</code> method does not
                 * return <code>true</code> for points on the right or bottom
                 * edges of a rectangle. Therefore, if the added point falls on
                 * the left or bottom edge of the enlarged rectangle,
                 * <code>contains</code> returns <code>false</code> for that point.
                 */
                // @ts-ignore
                public add(newx: number, newy: number): void;
                /**
                 * Adds the <code>Point2D</code> object <code>pt</code> to this
                 * <code>Rectangle2D</code>.
                 * The resulting <code>Rectangle2D</code> is the smallest
                 * <code>Rectangle2D</code> that contains both the original
                 * <code>Rectangle2D</code> and the specified <code>Point2D</code>.
                 * <p>
                 * After adding a point, a call to <code>contains</code> with the
                 * added point as an argument does not necessarily return
                 * <code>true</code>. The <code>contains</code>
                 * method does not return <code>true</code> for points on the right
                 * or bottom edges of a rectangle. Therefore, if the added point falls
                 * on the left or bottom edge of the enlarged rectangle,
                 * <code>contains</code> returns <code>false</code> for that point.
                 */
                // @ts-ignore
                public add(pt: java.awt.geom.Point2D): void;
                /**
                 * Adds a <code>Rectangle2D</code> object to this
                 * <code>Rectangle2D</code>.  The resulting <code>Rectangle2D</code>
                 * is the union of the two <code>Rectangle2D</code> objects.
                 */
                // @ts-ignore
                public add(r: java.awt.geom.Rectangle2D): void;
                /**
                 * Returns an iteration object that defines the boundary of this
                 * <code>Rectangle2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Rectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>Rectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns an iteration object that defines the boundary of the
                 * flattened <code>Rectangle2D</code>.  Since rectangles are already
                 * flat, the <code>flatness</code> parameter is ignored.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Rectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>Rectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
                /**
                 * Returns the hashcode for this <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>Rectangle2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>Rectangle2D</code>
                 * if it is an instance of <code>Rectangle2D</code> and if its
                 * location and size are the same as this <code>Rectangle2D</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
