declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class RectangularShape extends java.lang.Object {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of the upper-left corner of
                 * the framing rectangle in <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getX(): number;
                /**
                 * Returns the Y coordinate of the upper-left corner of
                 * the framing rectangle in <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getY(): number;
                /**
                 * Returns the width of the framing rectangle in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getWidth(): number;
                /**
                 * Returns the height of the framing rectangle
                 * in <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getHeight(): number;
                /**
                 * Returns the smallest X coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getMinX(): number;
                /**
                 * Returns the smallest Y coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getMinY(): number;
                /**
                 * Returns the largest X coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getMaxX(): number;
                /**
                 * Returns the largest Y coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getMaxY(): number;
                /**
                 * Returns the X coordinate of the center of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getCenterX(): number;
                /**
                 * Returns the Y coordinate of the center of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 */
                // @ts-ignore
                public getCenterY(): number;
                /**
                 * Returns the framing {@link Rectangle2D}
                 * that defines the overall shape of this object.
                 */
                // @ts-ignore
                public getFrame(): java.awt.geom.Rectangle2D;
                /**
                 * Determines whether the <code>RectangularShape</code> is empty.
                 * When the <code>RectangularShape</code> is empty, it encloses no
                 * area.
                 */
                // @ts-ignore
                public abstract isEmpty(): boolean;
                /**
                 * Sets the location and size of the framing rectangle of this
                 * <code>Shape</code> to the specified rectangular values.
                 */
                // @ts-ignore
                public abstract setFrame(x: number, y: number, w: number, h: number): void;
                /**
                 * Sets the location and size of the framing rectangle of this
                 * <code>Shape</code> to the specified {@link Point2D} and
                 * {@link Dimension2D}, respectively.  The framing rectangle is used
                 * by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 */
                // @ts-ignore
                public setFrame(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D): void;
                /**
                 * Sets the framing rectangle of this <code>Shape</code> to
                 * be the specified <code>Rectangle2D</code>.  The framing rectangle is
                 * used by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 */
                // @ts-ignore
                public setFrame(r: java.awt.geom.Rectangle2D): void;
                /**
                 * Sets the diagonal of the framing rectangle of this <code>Shape</code>
                 * based on the two specified coordinates.  The framing rectangle is
                 * used by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 */
                // @ts-ignore
                public setFrameFromDiagonal(x1: number, y1: number, x2: number, y2: number): void;
                /**
                 * Sets the diagonal of the framing rectangle of this <code>Shape</code>
                 * based on two specified <code>Point2D</code> objects.  The framing
                 * rectangle is used by the subclasses of <code>RectangularShape</code>
                 * to define their geometry.
                 */
                // @ts-ignore
                public setFrameFromDiagonal(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
                /**
                 * Sets the framing rectangle of this <code>Shape</code>
                 * based on the specified center point coordinates and corner point
                 * coordinates.  The framing rectangle is used by the subclasses of
                 * <code>RectangularShape</code> to define their geometry.
                 */
                // @ts-ignore
                public setFrameFromCenter(centerX: number, centerY: number, cornerX: number, cornerY: number): void;
                /**
                 * Sets the framing rectangle of this <code>Shape</code> based on a
                 * specified center <code>Point2D</code> and corner
                 * <code>Point2D</code>.  The framing rectangle is used by the subclasses
                 * of <code>RectangularShape</code> to define their geometry.
                 */
                // @ts-ignore
                public setFrameFromCenter(center: java.awt.geom.Point2D, corner: java.awt.geom.Point2D): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(p: java.awt.geom.Point2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Returns an iterator object that iterates along the
                 * <code>Shape</code> object's boundary and provides access to a
                 * flattened view of the outline of the <code>Shape</code>
                 * object's geometry.
                 * <p>
                 * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will
                 * be returned by the iterator.
                 * <p>
                 * The amount of subdivision of the curved segments is controlled
                 * by the <code>flatness</code> parameter, which specifies the
                 * maximum distance that any point on the unflattened transformed
                 * curve can deviate from the returned flattened path segments.
                 * An optional {@link AffineTransform} can
                 * be specified so that the coordinates returned in the iteration are
                 * transformed accordingly.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
                /**
                 * Creates a new object of the same class and with the same
                 * contents as this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
