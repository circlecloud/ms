// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class QuadCurve2D extends java.lang.Object {
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
                 * Returns the X coordinate of the start point in
                 * <code>double</code> in precision.
                 */
                // @ts-ignore
                public abstract getX1(): number;
                /**
                 * Returns the Y coordinate of the start point in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getY1(): number;
                /**
                 * Returns the start point.
                 */
                // @ts-ignore
                public abstract getP1(): java.awt.geom.Point2D;
                /**
                 * Returns the X coordinate of the control point in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getCtrlX(): number;
                /**
                 * Returns the Y coordinate of the control point in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getCtrlY(): number;
                /**
                 * Returns the control point.
                 */
                // @ts-ignore
                public abstract getCtrlPt(): java.awt.geom.Point2D;
                /**
                 * Returns the X coordinate of the end point in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getX2(): number;
                /**
                 * Returns the Y coordinate of the end point in
                 * <code>double</code> precision.
                 */
                // @ts-ignore
                public abstract getY2(): number;
                /**
                 * Returns the end point.
                 */
                // @ts-ignore
                public abstract getP2(): java.awt.geom.Point2D;
                /**
                 * Sets the location of the end points and control point of this curve
                 * to the specified <code>double</code> coordinates.
                 */
                // @ts-ignore
                public abstract setCurve(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
                /**
                 * Sets the location of the end points and control points of this
                 * <code>QuadCurve2D</code> to the <code>double</code> coordinates at
                 * the specified offset in the specified array.
                 */
                // @ts-ignore
                public setCurve(coords: number, offset: number): void;
                /**
                 * Sets the location of the end points and control point of this
                 * <code>QuadCurve2D</code> to the specified <code>Point2D</code>
                 * coordinates.
                 */
                // @ts-ignore
                public setCurve(p1: java.awt.geom.Point2D, cp: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void;
                /**
                 * Sets the location of the end points and control points of this
                 * <code>QuadCurve2D</code> to the coordinates of the
                 * <code>Point2D</code> objects at the specified offset in
                 * the specified array.
                 */
                // @ts-ignore
                public setCurve(pts: java.awt.geom.Point2D, offset: number): void;
                /**
                 * Sets the location of the end points and control point of this
                 * <code>QuadCurve2D</code> to the same as those in the specified
                 * <code>QuadCurve2D</code>.
                 */
                // @ts-ignore
                public setCurve(c: java.awt.geom.QuadCurve2D): void;
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the indicated control points.
                 */
                // @ts-ignore
                public static getFlatnessSq(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): number;
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the indicated control points.
                 */
                // @ts-ignore
                public static getFlatness(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): number;
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the control points stored in the
                 * indicated array at the indicated index.
                 */
                // @ts-ignore
                public static getFlatnessSq(coords: number, offset: number): number;
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the control points stored in the
                 * indicated array at the indicated index.
                 */
                // @ts-ignore
                public static getFlatness(coords: number, offset: number): number;
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of this
                 * <code>QuadCurve2D</code>.
                 */
                // @ts-ignore
                public getFlatnessSq(): number;
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of this
                 * <code>QuadCurve2D</code>.
                 */
                // @ts-ignore
                public getFlatness(): number;
                /**
                 * Subdivides this <code>QuadCurve2D</code> and stores the resulting
                 * two subdivided curves into the <code>left</code> and
                 * <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * objects can be the same as this <code>QuadCurve2D</code> or
                 * <code>null</code>.
                 */
                // @ts-ignore
                public subdivide(left: java.awt.geom.QuadCurve2D, right: java.awt.geom.QuadCurve2D): void;
                /**
                 * Subdivides the quadratic curve specified by the <code>src</code>
                 * parameter and stores the resulting two subdivided curves into the
                 * <code>left</code> and <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * objects can be the same as the <code>src</code> object or
                 * <code>null</code>.
                 */
                // @ts-ignore
                public static subdivide(src: java.awt.geom.QuadCurve2D, left: java.awt.geom.QuadCurve2D, right: java.awt.geom.QuadCurve2D): void;
                /**
                 * Subdivides the quadratic curve specified by the coordinates
                 * stored in the <code>src</code> array at indices
                 * <code>srcoff</code> through <code>srcoff</code>&nbsp;+&nbsp;5
                 * and stores the resulting two subdivided curves into the two
                 * result arrays at the corresponding indices.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * arrays can be <code>null</code> or a reference to the same array
                 * and offset as the <code>src</code> array.
                 * Note that the last point in the first subdivided curve is the
                 * same as the first point in the second subdivided curve.  Thus,
                 * it is possible to pass the same array for <code>left</code> and
                 * <code>right</code> and to use offsets such that
                 * <code>rightoff</code> equals <code>leftoff</code> + 4 in order
                 * to avoid allocating extra storage for this common point.
                 */
                // @ts-ignore
                public static subdivide(src: number, srcoff: number, left: number, leftoff: number, right: number, rightoff: number): void;
                /**
                 * Solves the quadratic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots back into the same array,
                 * returning the number of roots.  The quadratic solved is represented
                 * by the equation:
                 * <pre>
                 * eqn = {C, B, A};
                 * ax^2 + bx + c = 0
                 * </pre>
                 * A return value of <code>-1</code> is used to distinguish a constant
                 * equation, which might be always 0 or never 0, from an equation that
                 * has no zeroes.
                 */
                // @ts-ignore
                public static solveQuadratic(eqn: number): number;
                /**
                 * Solves the quadratic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots into the <code>res</code>
                 * array, returning the number of roots.
                 * The quadratic solved is represented by the equation:
                 * <pre>
                 * eqn = {C, B, A};
                 * ax^2 + bx + c = 0
                 * </pre>
                 * A return value of <code>-1</code> is used to distinguish a constant
                 * equation, which might be always 0 or never 0, from an equation that
                 * has no zeroes.
                 */
                // @ts-ignore
                public static solveQuadratic(eqn: number, res: number): number;
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
                 * shape of this <code>QuadCurve2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>QuadCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>QuadCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Returns an iteration object that defines the boundary of the
                 * flattened shape of this <code>QuadCurve2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>QuadCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>QuadCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
                /**
                 * Creates a new object of the same class and with the same contents
                 * as this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
