declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Line2D extends java.lang.Object {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessory
                 * methods below.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of the start point in double precision.
                 */
                // @ts-ignore
                public abstract getX1(): number;
                /**
                 * Returns the Y coordinate of the start point in double precision.
                 */
                // @ts-ignore
                public abstract getY1(): number;
                /**
                 * Returns the start <code>Point2D</code> of this <code>Line2D</code>.
                 */
                // @ts-ignore
                public abstract getP1(): java.awt.geom.Point2D;
                /**
                 * Returns the X coordinate of the end point in double precision.
                 */
                // @ts-ignore
                public abstract getX2(): number;
                /**
                 * Returns the Y coordinate of the end point in double precision.
                 */
                // @ts-ignore
                public abstract getY2(): number;
                /**
                 * Returns the end <code>Point2D</code> of this <code>Line2D</code>.
                 */
                // @ts-ignore
                public abstract getP2(): java.awt.geom.Point2D;
                /**
                 * Sets the location of the end points of this <code>Line2D</code> to
                 * the specified double coordinates.
                 */
                // @ts-ignore
                public abstract setLine(x1: number, y1: number, x2: number, y2: number): void;
                /**
                 * Sets the location of the end points of this <code>Line2D</code> to
                 * the specified <code>Point2D</code> coordinates.
                 */
                // @ts-ignore
                public setLine(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
                /**
                 * Sets the location of the end points of this <code>Line2D</code> to
                 * the same as those end points of the specified <code>Line2D</code>.
                 */
                // @ts-ignore
                public setLine(l: java.awt.geom.Line2D): void;
                /**
                 * Returns an indicator of where the specified point
                 * {@code (px,py)} lies with respect to the line segment from
                 * {@code (x1,y1)} to {@code (x2,y2)}.
                 * The return value can be either 1, -1, or 0 and indicates
                 * in which direction the specified line must pivot around its
                 * first end point, {@code (x1,y1)}, in order to point at the
                 * specified point {@code (px,py)}.
                 * <p>A return value of 1 indicates that the line segment must
                 * turn in the direction that takes the positive X axis towards
                 * the negative Y axis.  In the default coordinate system used by
                 * Java 2D, this direction is counterclockwise.
                 * <p>A return value of -1 indicates that the line segment must
                 * turn in the direction that takes the positive X axis towards
                 * the positive Y axis.  In the default coordinate system, this
                 * direction is clockwise.
                 * <p>A return value of 0 indicates that the point lies
                 * exactly on the line segment.  Note that an indicator value
                 * of 0 is rare and not useful for determining collinearity
                 * because of floating point rounding issues.
                 * <p>If the point is colinear with the line segment, but
                 * not between the end points, then the value will be -1 if the point
                 * lies "beyond {@code (x1,y1)}" or 1 if the point lies
                 * "beyond {@code (x2,y2)}".
                 */
                // @ts-ignore
                public static relativeCCW(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
                /**
                 * Returns an indicator of where the specified point
                 * {@code (px,py)} lies with respect to this line segment.
                 * See the method comments of
                 * {@link #relativeCCW(double, double, double, double, double, double)}
                 * to interpret the return value.
                 */
                // @ts-ignore
                public relativeCCW(px: number, py: number): number;
                /**
                 * Returns an indicator of where the specified <code>Point2D</code>
                 * lies with respect to this line segment.
                 * See the method comments of
                 * {@link #relativeCCW(double, double, double, double, double, double)}
                 * to interpret the return value.
                 */
                // @ts-ignore
                public relativeCCW(p: java.awt.geom.Point2D): number;
                /**
                 * Tests if the line segment from {@code (x1,y1)} to
                 * {@code (x2,y2)} intersects the line segment from {@code (x3,y3)}
                 * to {@code (x4,y4)}.
                 */
                // @ts-ignore
                public static linesIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
                /**
                 * Tests if the line segment from {@code (x1,y1)} to
                 * {@code (x2,y2)} intersects this line segment.
                 */
                // @ts-ignore
                public intersectsLine(x1: number, y1: number, x2: number, y2: number): boolean;
                /**
                 * Tests if the specified line segment intersects this line segment.
                 */
                // @ts-ignore
                public intersectsLine(l: java.awt.geom.Line2D): boolean;
                /**
                 * Returns the square of the distance from a point to a line segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the specified end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public static ptSegDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
                /**
                 * Returns the distance from a point to a line segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the specified end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public static ptSegDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
                /**
                 * Returns the square of the distance from a point to this line segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the current line's end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public ptSegDistSq(px: number, py: number): number;
                /**
                 * Returns the square of the distance from a <code>Point2D</code> to
                 * this line segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the current line's end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public ptSegDistSq(pt: java.awt.geom.Point2D): number;
                /**
                 * Returns the distance from a point to this line segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the current line's end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public ptSegDist(px: number, py: number): number;
                /**
                 * Returns the distance from a <code>Point2D</code> to this line
                 * segment.
                 * The distance measured is the distance between the specified
                 * point and the closest point between the current line's end points.
                 * If the specified point intersects the line segment in between the
                 * end points, this method returns 0.0.
                 */
                // @ts-ignore
                public ptSegDist(pt: java.awt.geom.Point2D): number;
                /**
                 * Returns the square of the distance from a point to a line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by the specified coordinates.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public static ptLineDistSq(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
                /**
                 * Returns the distance from a point to a line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by the specified coordinates.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public static ptLineDist(x1: number, y1: number, x2: number, y2: number, px: number, py: number): number;
                /**
                 * Returns the square of the distance from a point to this line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by this <code>Line2D</code>.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public ptLineDistSq(px: number, py: number): number;
                /**
                 * Returns the square of the distance from a specified
                 * <code>Point2D</code> to this line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by this <code>Line2D</code>.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public ptLineDistSq(pt: java.awt.geom.Point2D): number;
                /**
                 * Returns the distance from a point to this line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by this <code>Line2D</code>.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public ptLineDist(px: number, py: number): number;
                /**
                 * Returns the distance from a <code>Point2D</code> to this line.
                 * The distance measured is the distance between the specified
                 * point and the closest point on the infinitely-extended line
                 * defined by this <code>Line2D</code>.  If the specified point
                 * intersects the line, this method returns 0.0.
                 */
                // @ts-ignore
                public ptLineDist(pt: java.awt.geom.Point2D): number;
                /**
                 * Tests if a specified coordinate is inside the boundary of this
                 * <code>Line2D</code>.  This method is required to implement the
                 * {@link Shape} interface, but in the case of <code>Line2D</code>
                 * objects it always returns <code>false</code> since a line contains
                 * no area.
                 */
                // @ts-ignore
                public contains(x: number, y: number): boolean;
                /**
                 * Tests if a given <code>Point2D</code> is inside the boundary of
                 * this <code>Line2D</code>.
                 * This method is required to implement the {@link Shape} interface,
                 * but in the case of <code>Line2D</code> objects it always returns
                 * <code>false</code> since a line contains no area.
                 */
                // @ts-ignore
                public contains(p: java.awt.geom.Point2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public intersects(x: number, y: number, w: number, h: number): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * Tests if the interior of this <code>Line2D</code> entirely contains
                 * the specified set of rectangular coordinates.
                 * This method is required to implement the <code>Shape</code> interface,
                 * but in the case of <code>Line2D</code> objects it always returns
                 * false since a line contains no area.
                 */
                // @ts-ignore
                public contains(x: number, y: number, w: number, h: number): boolean;
                /**
                 * Tests if the interior of this <code>Line2D</code> entirely contains
                 * the specified <code>Rectangle2D</code>.
                 * This method is required to implement the <code>Shape</code> interface,
                 * but in the case of <code>Line2D</code> objects it always returns
                 * <code>false</code> since a line contains no area.
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Returns an iteration object that defines the boundary of this
                 * <code>Line2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>Line2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>Line2D</code> object do not affect any iterations of that
                 * geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns an iteration object that defines the boundary of this
                 * flattened <code>Line2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>Line2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>Line2D</code> object do not affect any iterations of that
                 * geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
                /**
                 * Creates a new object of the same class as this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
