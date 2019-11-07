declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
             class FlatteningPathIterator extends java.lang.Object {
                /**
                 * Constructs a new <code>FlatteningPathIterator</code> object that
                 * flattens a path as it iterates over it.  The iterator does not
                 * subdivide any curve read from the source iterator to more than
                 * 10 levels of subdivision which yields a maximum of 1024 line
                 * segments per curve.
                 */
                // @ts-ignore
                constructor(src: java.awt.geom.PathIterator, flatness: number)
                /**
                 * Constructs a new <code>FlatteningPathIterator</code> object
                 * that flattens a path as it iterates over it.
                 * The <code>limit</code> parameter allows you to control the
                 * maximum number of recursive subdivisions that the iterator
                 * can make before it assumes that the curve is flat enough
                 * without measuring against the <code>flatness</code> parameter.
                 * The flattened iteration therefore never generates more than
                 * a maximum of <code>(2^limit)</code> line segments per curve.
                 */
                // @ts-ignore
                constructor(src: java.awt.geom.PathIterator, flatness: number, limit: number)
                /**
                 * Returns the flatness of this iterator.
                 */
                // @ts-ignore
                public getFlatness(): number;
                /**
                 * Returns the recursion limit of this iterator.
                 */
                // @ts-ignore
                public getRecursionLimit(): number;
                /**
                 * Returns the winding rule for determining the interior of the
                 * path.
                 */
                // @ts-ignore
                public getWindingRule(): number;
                /**
                 * Tests if the iteration is complete.
                 */
                // @ts-ignore
                public isDone(): boolean;
                /**
                 * Moves the iterator to the next segment of the path forwards
                 * along the primary direction of traversal as long as there are
                 * more points in that direction.
                 */
                // @ts-ignore
                public next(): void;
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path segment type:
                 * SEG_MOVETO, SEG_LINETO, or SEG_CLOSE.
                 * A float array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of float x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types return one point,
                 * and SEG_CLOSE does not return any points.
                 */
                // @ts-ignore
                public currentSegment(coords: number): number;
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path segment type:
                 * SEG_MOVETO, SEG_LINETO, or SEG_CLOSE.
                 * A double array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of double x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types return one point,
                 * and SEG_CLOSE does not return any points.
                 */
                // @ts-ignore
                public currentSegment(coords: number): number;
            }
        }
    }
}
