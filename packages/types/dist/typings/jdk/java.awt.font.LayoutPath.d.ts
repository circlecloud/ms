// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            abstract class LayoutPath extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Convert a point in user space to a location relative to the
                 * path. The location is chosen so as to minimize the distance
                 * from the point to the path (e.g., the magnitude of the offset
                 * will be smallest).  If there is more than one such location,
                 * the location with the smallest advance is chosen.
                 */
                // @ts-ignore
                public abstract pointToPath(point: java.awt.geom.Point2D, location: java.awt.geom.Point2D): boolean;
                /**
                 * Convert a location relative to the path to a point in user
                 * coordinates.  The path might bend abruptly or be disjoint at
                 * the location's advance.  If this is the case, the value of
                 * 'preceding' is used to disambiguate the portion of the path
                 * whose location and slope is to be used to interpret the offset.
                 */
                // @ts-ignore
                public abstract pathToPoint(location: java.awt.geom.Point2D, preceding: boolean, point: java.awt.geom.Point2D): void;
            }
        }
    }
}
