declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            interface PathIterator {
                // @ts-ignore
                 WIND_EVEN_ODD: number;
                // @ts-ignore
                 WIND_NON_ZERO: number;
                // @ts-ignore
                 SEG_MOVETO: number;
                // @ts-ignore
                 SEG_LINETO: number;
                // @ts-ignore
                 SEG_QUADTO: number;
                // @ts-ignore
                 SEG_CUBICTO: number;
                // @ts-ignore
                 SEG_CLOSE: number;
                /**
                 * Returns the winding rule for determining the interior of the
                 * path.
                 */
                // @ts-ignore
                 getWindingRule(): number;
                /**
                 * Tests if the iteration is complete.
                 */
                // @ts-ignore
                 isDone(): boolean;
                /**
                 * Moves the iterator to the next segment of the path forwards
                 * along the primary direction of traversal as long as there are
                 * more points in that direction.
                 */
                // @ts-ignore
                 next(): void;
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path-segment type:
                 * SEG_MOVETO, SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE.
                 * A float array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of float x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types returns one point,
                 * SEG_QUADTO returns two points,
                 * SEG_CUBICTO returns 3 points
                 * and SEG_CLOSE does not return any points.
                 */
                // @ts-ignore
                 currentSegment(coords: number): number;
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path-segment type:
                 * SEG_MOVETO, SEG_LINETO, SEG_QUADTO, SEG_CUBICTO, or SEG_CLOSE.
                 * A double array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of double x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types returns one point,
                 * SEG_QUADTO returns two points,
                 * SEG_CUBICTO returns 3 points
                 * and SEG_CLOSE does not return any points.
                 */
                // @ts-ignore
                 currentSegment(coords: number): number;
            }
        }
    }
}
