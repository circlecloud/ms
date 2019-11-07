declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Path2D extends java.lang.Object {
                // @ts-ignore
                public static WIND_EVEN_ODD: number;
                // @ts-ignore
                public static WIND_NON_ZERO: number;
                /**
                 * Adds a point to the path by moving to the specified
                 * coordinates specified in double precision.
                 */
                // @ts-ignore
                public abstract moveTo(x: number, y: number): void;
                /**
                 * Adds a point to the path by drawing a straight line from the
                 * current coordinates to the new specified coordinates
                 * specified in double precision.
                 */
                // @ts-ignore
                public abstract lineTo(x: number, y: number): void;
                /**
                 * Adds a curved segment, defined by two new points, to the path by
                 * drawing a Quadratic curve that intersects both the current
                 * coordinates and the specified coordinates {@code (x2,y2)},
                 * using the specified point {@code (x1,y1)} as a quadratic
                 * parametric control point.
                 * All coordinates are specified in double precision.
                 */
                // @ts-ignore
                public abstract quadTo(x1: number, y1: number, x2: number, y2: number): void;
                /**
                 * Adds a curved segment, defined by three new points, to the path by
                 * drawing a B&eacute;zier curve that intersects both the current
                 * coordinates and the specified coordinates {@code (x3,y3)},
                 * using the specified points {@code (x1,y1)} and {@code (x2,y2)} as
                 * B&eacute;zier control points.
                 * All coordinates are specified in double precision.
                 */
                // @ts-ignore
                public abstract curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
                /**
                 * Closes the current subpath by drawing a straight line back to
                 * the coordinates of the last {@code moveTo}.  If the path is already
                 * closed then this method has no effect.
                 */
                // @ts-ignore
                public closePath(): void;
                /**
                 * Appends the geometry of the specified {@code Shape} object to the
                 * path, possibly connecting the new geometry to the existing path
                 * segments with a line segment.
                 * If the {@code connect} parameter is {@code true} and the
                 * path is not empty then any initial {@code moveTo} in the
                 * geometry of the appended {@code Shape}
                 * is turned into a {@code lineTo} segment.
                 * If the destination coordinates of such a connecting {@code lineTo}
                 * segment match the ending coordinates of a currently open
                 * subpath then the segment is omitted as superfluous.
                 * The winding rule of the specified {@code Shape} is ignored
                 * and the appended geometry is governed by the winding
                 * rule specified for this path.
                 */
                // @ts-ignore
                public append(s: java.awt.Shape, connect: boolean): void;
                /**
                 * Returns the fill style winding rule.
                 */
                // @ts-ignore
                public getWindingRule(): number;
                /**
                 * Sets the winding rule for this path to the specified value.
                 */
                // @ts-ignore
                public setWindingRule(rule: number): void;
                /**
                 * Returns the coordinates most recently added to the end of the path
                 * as a {@link Point2D} object.
                 */
                // @ts-ignore
                public getCurrentPoint(): java.awt.geom.Point2D;
                /**
                 * Resets the path to empty.  The append position is set back to the
                 * beginning of the path and all coordinates and point types are
                 * forgotten.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Transforms the geometry of this path using the specified
                 * {@link AffineTransform}.
                 * The geometry is transformed in place, which permanently changes the
                 * boundary defined by this object.
                 */
                // @ts-ignore
                public abstract transform(at: java.awt.geom.AffineTransform): void;
                /**
                 * Returns a new {@code Shape} representing a transformed version
                 * of this {@code Path2D}.
                 * Note that the exact type and coordinate precision of the return
                 * value is not specified for this method.
                 * The method will return a Shape that contains no less precision
                 * for the transformed geometry than this {@code Path2D} currently
                 * maintains, but it may contain no more precision either.
                 * If the tradeoff of precision vs. storage size in the result is
                 * important then the convenience constructors in the
                 * {@link Path2D.Float#Path2D.Float(Shape, AffineTransform) Path2D.Float}
                 * and
                 * {@link Path2D.Double#Path2D.Double(Shape, AffineTransform) Path2D.Double}
                 * subclasses should be used to make the choice explicit.
                 */
                // @ts-ignore
                public createTransformedShape(at: java.awt.geom.AffineTransform): java.awt.Shape;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Tests if the specified coordinates are inside the closed
                 * boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(double, double)} method.
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, x: number, y: number): boolean;
                /**
                 * Tests if the specified {@link Point2D} is inside the closed
                 * boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(Point2D)} method.
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, p: java.awt.geom.Point2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(x: number, y: number): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(p: java.awt.geom.Point2D): boolean;
                /**
                 * Tests if the specified rectangular area is entirely inside the
                 * closed boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(double, double, double, double)} method.
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, x: number, y: number, w: number, h: number): boolean;
                /**
                 * Tests if the specified {@link Rectangle2D} is entirely inside the
                 * closed boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(Rectangle2D)} method.
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public contains(x: number, y: number, w: number, h: number): boolean;
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * Tests if the interior of the specified {@link PathIterator}
                 * intersects the interior of a specified set of rectangular
                 * coordinates.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#intersects(double, double, double, double)} method.
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public static intersects(pi: java.awt.geom.PathIterator, x: number, y: number, w: number, h: number): boolean;
                /**
                 * Tests if the interior of the specified {@link PathIterator}
                 * intersects the interior of a specified {@link Rectangle2D}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#intersects(Rectangle2D)} method.
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public static intersects(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public intersects(x: number, y: number, w: number, h: number): boolean;
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 * <p>
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this {@code Path2D} class does not
                 * guarantee that modifications to the geometry of this
                 * {@code Path2D} object do not affect any iterations of
                 * that geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
                /**
                 * Creates a new object of the same class as this object.
                 */
                // @ts-ignore
                public abstract clone(): java.lang.Object;
            }
        }
    }
}
