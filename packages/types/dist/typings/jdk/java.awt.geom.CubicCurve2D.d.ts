// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class CubicCurve2D extends java.lang.Object {
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
                 * Returns the start point.
                 */
                // @ts-ignore
                public abstract getP1(): java.awt.geom.Point2D;
                /**
                 * Returns the X coordinate of the first control point in double precision.
                 */
                // @ts-ignore
                public abstract getCtrlX1(): number;
                /**
                 * Returns the Y coordinate of the first control point in double precision.
                 */
                // @ts-ignore
                public abstract getCtrlY1(): number;
                /**
                 * Returns the first control point.
                 */
                // @ts-ignore
                public abstract getCtrlP1(): java.awt.geom.Point2D;
                /**
                 * Returns the X coordinate of the second control point
                 * in double precision.
                 */
                // @ts-ignore
                public abstract getCtrlX2(): number;
                /**
                 * Returns the Y coordinate of the second control point
                 * in double precision.
                 */
                // @ts-ignore
                public abstract getCtrlY2(): number;
                /**
                 * Returns the second control point.
                 */
                // @ts-ignore
                public abstract getCtrlP2(): java.awt.geom.Point2D;
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
                 * Returns the end point.
                 */
                // @ts-ignore
                public abstract getP2(): java.awt.geom.Point2D;
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the specified double coordinates.
                 */
                // @ts-ignore
                public abstract setCurve(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): void;
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the double coordinates at the specified offset in the specified
                 * array.
                 */
                // @ts-ignore
                public setCurve(coords: number, offset: number): void;
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the specified <code>Point2D</code> coordinates.
                 */
                // @ts-ignore
                public setCurve(p1: java.awt.geom.Point2D, cp1: java.awt.geom.Point2D, cp2: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the coordinates of the <code>Point2D</code> objects at the specified
                 * offset in the specified array.
                 */
                // @ts-ignore
                public setCurve(pts: java.awt.geom.Point2D, offset: number): void;
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the same as those in the specified <code>CubicCurve2D</code>.
                 */
                // @ts-ignore
                public setCurve(c: java.awt.geom.CubicCurve2D): void;
                /**
                 * Returns the square of the flatness of the cubic curve specified
                 * by the indicated control points. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 */
                // @ts-ignore
                public static getFlatnessSq(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): number;
                /**
                 * Returns the flatness of the cubic curve specified
                 * by the indicated control points. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 */
                // @ts-ignore
                public static getFlatness(x1: number, y1: number, ctrlx1: number, ctrly1: number, ctrlx2: number, ctrly2: number, x2: number, y2: number): number;
                /**
                 * Returns the square of the flatness of the cubic curve specified
                 * by the control points stored in the indicated array at the
                 * indicated index. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 */
                // @ts-ignore
                public static getFlatnessSq(coords: number, offset: number): number;
                /**
                 * Returns the flatness of the cubic curve specified
                 * by the control points stored in the indicated array at the
                 * indicated index.  The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 */
                // @ts-ignore
                public static getFlatness(coords: number, offset: number): number;
                /**
                 * Returns the square of the flatness of this curve.  The flatness is the
                 * maximum distance of a control point from the line connecting the
                 * end points.
                 */
                // @ts-ignore
                public getFlatnessSq(): number;
                /**
                 * Returns the flatness of this curve.  The flatness is the
                 * maximum distance of a control point from the line connecting the
                 * end points.
                 */
                // @ts-ignore
                public getFlatness(): number;
                /**
                 * Subdivides this cubic curve and stores the resulting two
                 * subdivided curves into the left and right curve parameters.
                 * Either or both of the left and right objects may be the same
                 * as this object or null.
                 */
                // @ts-ignore
                public subdivide(left: java.awt.geom.CubicCurve2D, right: java.awt.geom.CubicCurve2D): void;
                /**
                 * Subdivides the cubic curve specified by the <code>src</code> parameter
                 * and stores the resulting two subdivided curves into the
                 * <code>left</code> and <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code> objects
                 * may be the same as the <code>src</code> object or <code>null</code>.
                 */
                // @ts-ignore
                public static subdivide(src: java.awt.geom.CubicCurve2D, left: java.awt.geom.CubicCurve2D, right: java.awt.geom.CubicCurve2D): void;
                /**
                 * Subdivides the cubic curve specified by the coordinates
                 * stored in the <code>src</code> array at indices <code>srcoff</code>
                 * through (<code>srcoff</code>&nbsp;+&nbsp;7) and stores the
                 * resulting two subdivided curves into the two result arrays at the
                 * corresponding indices.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * arrays may be <code>null</code> or a reference to the same array
                 * as the <code>src</code> array.
                 * Note that the last point in the first subdivided curve is the
                 * same as the first point in the second subdivided curve. Thus,
                 * it is possible to pass the same array for <code>left</code>
                 * and <code>right</code> and to use offsets, such as <code>rightoff</code>
                 * equals (<code>leftoff</code> + 6), in order
                 * to avoid allocating extra storage for this common point.
                 */
                // @ts-ignore
                public static subdivide(src: number, srcoff: number, left: number, leftoff: number, right: number, rightoff: number): void;
                /**
                 * Solves the cubic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots back into the same array,
                 * returning the number of roots.  The solved cubic is represented
                 * by the equation:
                 * <pre>
                 * eqn = {c, b, a, d}
                 * dx^3 + ax^2 + bx + c = 0
                 * </pre>
                 * A return value of -1 is used to distinguish a constant equation
                 * that might be always 0 or never 0 from an equation that has no
                 * zeroes.
                 */
                // @ts-ignore
                public static solveCubic(eqn: number): number;
                /**
                 * Solve the cubic whose coefficients are in the <code>eqn</code>
                 * array and place the non-complex roots into the <code>res</code>
                 * array, returning the number of roots.
                 * The cubic solved is represented by the equation:
                 * eqn = {c, b, a, d}
                 * dx^3 + ax^2 + bx + c = 0
                 * A return value of -1 is used to distinguish a constant equation,
                 * which may be always 0 or never 0, from an equation which has no
                 * zeroes.
                 */
                // @ts-ignore
                public static solveCubic(eqn: number, res: number): number;
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
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public contains(x: number, y: number, w: number, h: number): boolean;
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
                 * Returns an iteration object that defines the boundary of the
                 * shape.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>CubicCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>CubicCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Return an iteration object that defines the boundary of the
                 * flattened shape.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>CubicCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>CubicCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
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
