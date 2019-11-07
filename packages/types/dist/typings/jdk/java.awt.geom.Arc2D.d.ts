declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Arc2D extends java.awt.geom.RectangularShape {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * <p>
                 * This constructor creates an object with a default closure
                 * type of {@link #OPEN}.  It is provided only to enable
                 * serialization of subclasses.
                 */
                // @ts-ignore
                constructor()
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 */
                // @ts-ignore
                constructor(type: number)
                // @ts-ignore
                public static OPEN: number;
                // @ts-ignore
                public static CHORD: number;
                // @ts-ignore
                public static PIE: number;
                /**
                 * Returns the starting angle of the arc.
                 */
                // @ts-ignore
                public abstract getAngleStart(): number;
                /**
                 * Returns the angular extent of the arc.
                 */
                // @ts-ignore
                public abstract getAngleExtent(): number;
                /**
                 * Returns the arc closure type of the arc: {@link #OPEN},
                 * {@link #CHORD}, or {@link #PIE}.
                 */
                // @ts-ignore
                public getArcType(): number;
                /**
                 * Returns the starting point of the arc.  This point is the
                 * intersection of the ray from the center defined by the
                 * starting angle and the elliptical boundary of the arc.
                 */
                // @ts-ignore
                public getStartPoint(): java.awt.geom.Point2D;
                /**
                 * Returns the ending point of the arc.  This point is the
                 * intersection of the ray from the center defined by the
                 * starting angle plus the angular extent of the arc and the
                 * elliptical boundary of the arc.
                 */
                // @ts-ignore
                public getEndPoint(): java.awt.geom.Point2D;
                /**
                 * Sets the location, size, angular extents, and closure type of
                 * this arc to the specified double values.
                 */
                // @ts-ignore
                public abstract setArc(x: number, y: number, w: number, h: number, angSt: number, angExt: number, closure: number): void;
                /**
                 * Sets the location, size, angular extents, and closure type of
                 * this arc to the specified values.
                 */
                // @ts-ignore
                public setArc(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D, angSt: number, angExt: number, closure: number): void;
                /**
                 * Sets the location, size, angular extents, and closure type of
                 * this arc to the specified values.
                 */
                // @ts-ignore
                public setArc(rect: java.awt.geom.Rectangle2D, angSt: number, angExt: number, closure: number): void;
                /**
                 * Sets this arc to be the same as the specified arc.
                 */
                // @ts-ignore
                public setArc(a: java.awt.geom.Arc2D): void;
                /**
                 * Sets the position, bounds, angular extents, and closure type of
                 * this arc to the specified values. The arc is defined by a center
                 * point and a radius rather than a framing rectangle for the full ellipse.
                 */
                // @ts-ignore
                public setArcByCenter(x: number, y: number, radius: number, angSt: number, angExt: number, closure: number): void;
                /**
                 * Sets the position, bounds, and angular extents of this arc to the
                 * specified value. The starting angle of the arc is tangent to the
                 * line specified by points (p1, p2), the ending angle is tangent to
                 * the line specified by points (p2, p3), and the arc has the
                 * specified radius.
                 */
                // @ts-ignore
                public setArcByTangent(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D, p3: java.awt.geom.Point2D, radius: number): void;
                /**
                 * Sets the starting angle of this arc to the specified double
                 * value.
                 */
                // @ts-ignore
                public abstract setAngleStart(angSt: number): void;
                /**
                 * Sets the angular extent of this arc to the specified double
                 * value.
                 */
                // @ts-ignore
                public abstract setAngleExtent(angExt: number): void;
                /**
                 * Sets the starting angle of this arc to the angle that the
                 * specified point defines relative to the center of this arc.
                 * The angular extent of the arc will remain the same.
                 */
                // @ts-ignore
                public setAngleStart(p: java.awt.geom.Point2D): void;
                /**
                 * Sets the starting angle and angular extent of this arc using two
                 * sets of coordinates. The first set of coordinates is used to
                 * determine the angle of the starting point relative to the arc's
                 * center. The second set of coordinates is used to determine the
                 * angle of the end point relative to the arc's center.
                 * The arc will always be non-empty and extend counterclockwise
                 * from the first point around to the second point.
                 */
                // @ts-ignore
                public setAngles(x1: number, y1: number, x2: number, y2: number): void;
                /**
                 * Sets the starting angle and angular extent of this arc using
                 * two points. The first point is used to determine the angle of
                 * the starting point relative to the arc's center.
                 * The second point is used to determine the angle of the end point
                 * relative to the arc's center.
                 * The arc will always be non-empty and extend counterclockwise
                 * from the first point around to the second point.
                 */
                // @ts-ignore
                public setAngles(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
                /**
                 * Sets the closure type of this arc to the specified value:
                 * <CODE>OPEN</CODE>, <CODE>CHORD</CODE>, or <CODE>PIE</CODE>.
                 */
                // @ts-ignore
                public setArcType(type: number): void;
                /**
                 * {@inheritDoc}
                 * Note that the arc
                 * <a href="Arc2D.html#inscribes">partially inscribes</a>
                 * the framing rectangle of this {@code RectangularShape}.
                 */
                // @ts-ignore
                public setFrame(x: number, y: number, w: number, h: number): void;
                /**
                 * Returns the high-precision framing rectangle of the arc.  The framing
                 * rectangle contains only the part of this <code>Arc2D</code> that is
                 * in between the starting and ending angles and contains the pie
                 * wedge, if this <code>Arc2D</code> has a <code>PIE</code> closure type.
                 * <p>
                 * This method differs from the
                 * {@link RectangularShape#getBounds() getBounds} in that the
                 * <code>getBounds</code> method only returns the bounds of the
                 * enclosing ellipse of this <code>Arc2D</code> without considering
                 * the starting and ending angles of this <code>Arc2D</code>.
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D;
                /**
                 * Constructs a <code>Rectangle2D</code> of the appropriate precision
                 * to hold the parameters calculated to be the framing rectangle
                 * of this arc.
                 */
                // @ts-ignore
                protected abstract makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
                /**
                 * Determines whether or not the specified angle is within the
                 * angular extents of the arc.
                 */
                // @ts-ignore
                public containsAngle(angle: number): boolean;
                /**
                 * Determines whether or not the specified point is inside the boundary
                 * of the arc.
                 */
                // @ts-ignore
                public contains(x: number, y: number): boolean;
                /**
                 * Determines whether or not the interior of the arc intersects
                 * the interior of the specified rectangle.
                 */
                // @ts-ignore
                public intersects(x: number, y: number, w: number, h: number): boolean;
                /**
                 * Determines whether or not the interior of the arc entirely contains
                 * the specified rectangle.
                 */
                // @ts-ignore
                public contains(x: number, y: number, w: number, h: number): boolean;
                /**
                 * Determines whether or not the interior of the arc entirely contains
                 * the specified rectangle.
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * Returns an iteration object that defines the boundary of the
                 * arc.
                 * This iterator is multithread safe.
                 * <code>Arc2D</code> guarantees that
                 * modifications to the geometry of the arc
                 * do not affect any iterations of that geometry that
                 * are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns the hashcode for this <code>Arc2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>Arc2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>Arc2D</code>
                 * if it is an instance of <code>Arc2D</code> and if its
                 * location, size, arc extents and type are the same as this
                 * <code>Arc2D</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
