// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
             class Area extends java.lang.Object {
                /**
                 * Default constructor which creates an empty area.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The <code>Area</code> class creates an area geometry from the
                 * specified {@link Shape} object.  The geometry is explicitly
                 * closed, if the <code>Shape</code> is not already closed.  The
                 * fill rule (even-odd or winding) specified by the geometry of the
                 * <code>Shape</code> is used to determine the resulting enclosed area.
                 */
                // @ts-ignore
                constructor(s: java.awt.Shape)
                /**
                 * Adds the shape of the specified <code>Area</code> to the
                 * shape of this <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * the union of both shapes, or all areas that were contained
                 * in either this or the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.add(a2);
                 * a1(before)     +         a2         =     a1(after)
                 * ################     ################     ################
                 * ##############         ##############     ################
                 * ############             ############     ################
                 * ##########                 ##########     ################
                 * ########                     ########     ################
                 * ######                         ######     ######    ######
                 * ####                             ####     ####        ####
                 * ##                                 ##     ##            ##
                 * </pre>
                 */
                // @ts-ignore
                public add(rhs: java.awt.geom.Area): void;
                /**
                 * Subtracts the shape of the specified <code>Area</code> from the
                 * shape of this <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * areas that were contained only in this <code>Area</code>
                 * and not in the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.subtract(a2);
                 * a1(before)     -         a2         =     a1(after)
                 * ################     ################
                 * ##############         ##############     ##
                 * ############             ############     ####
                 * ##########                 ##########     ######
                 * ########                     ########     ########
                 * ######                         ######     ######
                 * ####                             ####     ####
                 * ##                                 ##     ##
                 * </pre>
                 */
                // @ts-ignore
                public subtract(rhs: java.awt.geom.Area): void;
                /**
                 * Sets the shape of this <code>Area</code> to the intersection of
                 * its current shape and the shape of the specified <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * only areas that were contained in both this <code>Area</code>
                 * and also in the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.intersect(a2);
                 * a1(before)   intersect     a2         =     a1(after)
                 * ################     ################     ################
                 * ##############         ##############       ############
                 * ############             ############         ########
                 * ##########                 ##########           ####
                 * ########                     ########
                 * ######                         ######
                 * ####                             ####
                 * ##                                 ##
                 * </pre>
                 */
                // @ts-ignore
                public intersect(rhs: java.awt.geom.Area): void;
                /**
                 * Sets the shape of this <code>Area</code> to be the combined area
                 * of its current shape and the shape of the specified <code>Area</code>,
                 * minus their intersection.
                 * The resulting shape of this <code>Area</code> will include
                 * only areas that were contained in either this <code>Area</code>
                 * or in the specified <code>Area</code>, but not in both.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.exclusiveOr(a2);
                 * a1(before)    xor        a2         =     a1(after)
                 * ################     ################
                 * ##############         ##############     ##            ##
                 * ############             ############     ####        ####
                 * ##########                 ##########     ######    ######
                 * ########                     ########     ################
                 * ######                         ######     ######    ######
                 * ####                             ####     ####        ####
                 * ##                                 ##     ##            ##
                 * </pre>
                 */
                // @ts-ignore
                public exclusiveOr(rhs: java.awt.geom.Area): void;
                /**
                 * Removes all of the geometry from this <code>Area</code> and
                 * restores it to an empty area.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Tests whether this <code>Area</code> object encloses any area.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Tests whether this <code>Area</code> consists entirely of
                 * straight edged polygonal geometry.
                 */
                // @ts-ignore
                public isPolygonal(): boolean;
                /**
                 * Tests whether this <code>Area</code> is rectangular in shape.
                 */
                // @ts-ignore
                public isRectangular(): boolean;
                /**
                 * Tests whether this <code>Area</code> is comprised of a single
                 * closed subpath.  This method returns <code>true</code> if the
                 * path contains 0 or 1 subpaths, or <code>false</code> if the path
                 * contains more than 1 subpath.  The subpaths are counted by the
                 * number of {@link PathIterator#SEG_MOVETO SEG_MOVETO}  segments
                 * that appear in the path.
                 */
                // @ts-ignore
                public isSingular(): boolean;
                /**
                 * Returns a high precision bounding {@link Rectangle2D} that
                 * completely encloses this <code>Area</code>.
                 * <p>
                 * The Area class will attempt to return the tightest bounding
                 * box possible for the Shape.  The bounding box will not be
                 * padded to include the control points of curves in the outline
                 * of the Shape, but should tightly fit the actual geometry of
                 * the outline itself.
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D;
                /**
                 * Returns a bounding {@link Rectangle} that completely encloses
                 * this <code>Area</code>.
                 * <p>
                 * The Area class will attempt to return the tightest bounding
                 * box possible for the Shape.  The bounding box will not be
                 * padded to include the control points of curves in the outline
                 * of the Shape, but should tightly fit the actual geometry of
                 * the outline itself.  Since the returned object represents
                 * the bounding box with integers, the bounding box can only be
                 * as tight as the nearest integer coordinates that encompass
                 * the geometry of the Shape.
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Returns an exact copy of this <code>Area</code> object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Tests whether the geometries of the two <code>Area</code> objects
                 * are equal.
                 * This method will return false if the argument is null.
                 */
                // @ts-ignore
                public equals(other: java.awt.geom.Area): boolean;
                /**
                 * Transforms the geometry of this <code>Area</code> using the specified
                 * {@link AffineTransform}.  The geometry is transformed in place, which
                 * permanently changes the enclosed area defined by this object.
                 */
                // @ts-ignore
                public transform(t: java.awt.geom.AffineTransform): void;
                /**
                 * Creates a new <code>Area</code> object that contains the same
                 * geometry as this <code>Area</code> transformed by the specified
                 * <code>AffineTransform</code>.  This <code>Area</code> object
                 * is unchanged.
                 */
                // @ts-ignore
                public createTransformedArea(t: java.awt.geom.AffineTransform): java.awt.geom.Area;
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
                public intersects(x: number, y: number, w: number, h: number): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean;
                /**
                 * Creates a {@link PathIterator} for the outline of this
                 * <code>Area</code> object.  This <code>Area</code> object is unchanged.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                /**
                 * Creates a <code>PathIterator</code> for the flattened outline of
                 * this <code>Area</code> object.  Only uncurved path segments
                 * represented by the SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point
                 * types are returned by the iterator.  This <code>Area</code>
                 * object is unchanged.
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
            }
        }
    }
}
