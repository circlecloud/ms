// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        interface Shape {
            /**
             * Returns an integer {@link Rectangle} that completely encloses the
             * <code>Shape</code>.  Note that there is no guarantee that the
             * returned <code>Rectangle</code> is the smallest bounding box that
             * encloses the <code>Shape</code>, only that the <code>Shape</code>
             * lies entirely within the indicated  <code>Rectangle</code>.  The
             * returned <code>Rectangle</code> might also fail to completely
             * enclose the <code>Shape</code> if the <code>Shape</code> overflows
             * the limited range of the integer data type.  The
             * <code>getBounds2D</code> method generally returns a
             * tighter bounding box due to its greater flexibility in
             * representation.
             * <p>
             * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
             * definition of insideness</a> can lead to situations where points
             * on the defining outline of the {@code shape} may not be considered
             * contained in the returned {@code bounds} object, but only in cases
             * where those points are also not considered contained in the original
             * {@code shape}.
             * </p>
             * <p>
             * If a {@code point} is inside the {@code shape} according to the
             * {@link #contains(double x, double y) contains(point)} method, then
             * it must be inside the returned {@code Rectangle} bounds object
             * according to the {@link #contains(double x, double y) contains(point)}
             * method of the {@code bounds}. Specifically:
             * </p>
             * <p>
             * {@code shape.contains(x,y)} requires {@code bounds.contains(x,y)}
             * </p>
             * <p>
             * If a {@code point} is not inside the {@code shape}, then it might
             * still be contained in the {@code bounds} object:
             * </p>
             * <p>
             * {@code bounds.contains(x,y)} does not imply {@code shape.contains(x,y)}
             * </p>
             */
            // @ts-ignore
             getBounds(): java.awt.Rectangle;
            /**
             * Returns a high precision and more accurate bounding box of
             * the <code>Shape</code> than the <code>getBounds</code> method.
             * Note that there is no guarantee that the returned
             * {@link Rectangle2D} is the smallest bounding box that encloses
             * the <code>Shape</code>, only that the <code>Shape</code> lies
             * entirely within the indicated <code>Rectangle2D</code>.  The
             * bounding box returned by this method is usually tighter than that
             * returned by the <code>getBounds</code> method and never fails due
             * to overflow problems since the return value can be an instance of
             * the <code>Rectangle2D</code> that uses double precision values to
             * store the dimensions.
             * <p>
             * Note that the <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
             * definition of insideness</a> can lead to situations where points
             * on the defining outline of the {@code shape} may not be considered
             * contained in the returned {@code bounds} object, but only in cases
             * where those points are also not considered contained in the original
             * {@code shape}.
             * </p>
             * <p>
             * If a {@code point} is inside the {@code shape} according to the
             * {@link #contains(Point2D p) contains(point)} method, then it must
             * be inside the returned {@code Rectangle2D} bounds object according
             * to the {@link #contains(Point2D p) contains(point)} method of the
             * {@code bounds}. Specifically:
             * </p>
             * <p>
             * {@code shape.contains(p)} requires {@code bounds.contains(p)}
             * </p>
             * <p>
             * If a {@code point} is not inside the {@code shape}, then it might
             * still be contained in the {@code bounds} object:
             * </p>
             * <p>
             * {@code bounds.contains(p)} does not imply {@code shape.contains(p)}
             * </p>
             */
            // @ts-ignore
             getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * Tests if the specified coordinates are inside the boundary of the
             * <code>Shape</code>, as described by the
             * <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
             * definition of insideness</a>.
             */
            // @ts-ignore
             contains(x: number, y: number): boolean;
            /**
             * Tests if a specified {@link Point2D} is inside the boundary
             * of the <code>Shape</code>, as described by the
             * <a href="{@docRoot}/java/awt/Shape.html#def_insideness">
             * definition of insideness</a>.
             */
            // @ts-ignore
             contains(p: java.awt.geom.Point2D): boolean;
            /**
             * Tests if the interior of the <code>Shape</code> intersects the
             * interior of a specified rectangular area.
             * The rectangular area is considered to intersect the <code>Shape</code>
             * if any point is contained in both the interior of the
             * <code>Shape</code> and the specified rectangular area.
             * <p>
             * The {@code Shape.intersects()} method allows a {@code Shape}
             * implementation to conservatively return {@code true} when:
             * <ul>
             * <li>
             * there is a high probability that the rectangular area and the
             * <code>Shape</code> intersect, but
             * <li>
             * the calculations to accurately determine this intersection
             * are prohibitively expensive.
             * </ul>
             * This means that for some {@code Shapes} this method might
             * return {@code true} even though the rectangular area does not
             * intersect the {@code Shape}.
             * The {@link java.awt.geom.Area Area} class performs
             * more accurate computations of geometric intersection than most
             * {@code Shape} objects and therefore can be used if a more precise
             * answer is required.
             */
            // @ts-ignore
             intersects(x: number, y: number, w: number, h: number): boolean;
            /**
             * Tests if the interior of the <code>Shape</code> intersects the
             * interior of a specified <code>Rectangle2D</code>.
             * The {@code Shape.intersects()} method allows a {@code Shape}
             * implementation to conservatively return {@code true} when:
             * <ul>
             * <li>
             * there is a high probability that the <code>Rectangle2D</code> and the
             * <code>Shape</code> intersect, but
             * <li>
             * the calculations to accurately determine this intersection
             * are prohibitively expensive.
             * </ul>
             * This means that for some {@code Shapes} this method might
             * return {@code true} even though the {@code Rectangle2D} does not
             * intersect the {@code Shape}.
             * The {@link java.awt.geom.Area Area} class performs
             * more accurate computations of geometric intersection than most
             * {@code Shape} objects and therefore can be used if a more precise
             * answer is required.
             */
            // @ts-ignore
             intersects(r: java.awt.geom.Rectangle2D): boolean;
            /**
             * Tests if the interior of the <code>Shape</code> entirely contains
             * the specified rectangular area.  All coordinates that lie inside
             * the rectangular area must lie within the <code>Shape</code> for the
             * entire rectangular area to be considered contained within the
             * <code>Shape</code>.
             * <p>
             * The {@code Shape.contains()} method allows a {@code Shape}
             * implementation to conservatively return {@code false} when:
             * <ul>
             * <li>
             * the <code>intersect</code> method returns <code>true</code> and
             * <li>
             * the calculations to determine whether or not the
             * <code>Shape</code> entirely contains the rectangular area are
             * prohibitively expensive.
             * </ul>
             * This means that for some {@code Shapes} this method might
             * return {@code false} even though the {@code Shape} contains
             * the rectangular area.
             * The {@link java.awt.geom.Area Area} class performs
             * more accurate geometric computations than most
             * {@code Shape} objects and therefore can be used if a more precise
             * answer is required.
             */
            // @ts-ignore
             contains(x: number, y: number, w: number, h: number): boolean;
            /**
             * Tests if the interior of the <code>Shape</code> entirely contains the
             * specified <code>Rectangle2D</code>.
             * The {@code Shape.contains()} method allows a {@code Shape}
             * implementation to conservatively return {@code false} when:
             * <ul>
             * <li>
             * the <code>intersect</code> method returns <code>true</code> and
             * <li>
             * the calculations to determine whether or not the
             * <code>Shape</code> entirely contains the <code>Rectangle2D</code>
             * are prohibitively expensive.
             * </ul>
             * This means that for some {@code Shapes} this method might
             * return {@code false} even though the {@code Shape} contains
             * the {@code Rectangle2D}.
             * The {@link java.awt.geom.Area Area} class performs
             * more accurate geometric computations than most
             * {@code Shape} objects and therefore can be used if a more precise
             * answer is required.
             */
            // @ts-ignore
             contains(r: java.awt.geom.Rectangle2D): boolean;
            /**
             * Returns an iterator object that iterates along the
             * <code>Shape</code> boundary and provides access to the geometry of the
             * <code>Shape</code> outline.  If an optional {@link AffineTransform}
             * is specified, the coordinates returned in the iteration are
             * transformed accordingly.
             * <p>
             * Each call to this method returns a fresh <code>PathIterator</code>
             * object that traverses the geometry of the <code>Shape</code> object
             * independently from any other <code>PathIterator</code> objects in use
             * at the same time.
             * <p>
             * It is recommended, but not guaranteed, that objects
             * implementing the <code>Shape</code> interface isolate iterations
             * that are in process from any changes that might occur to the original
             * object's geometry during such iterations.
             */
            // @ts-ignore
             getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Returns an iterator object that iterates along the <code>Shape</code>
             * boundary and provides access to a flattened view of the
             * <code>Shape</code> outline geometry.
             * <p>
             * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types are
             * returned by the iterator.
             * <p>
             * If an optional <code>AffineTransform</code> is specified,
             * the coordinates returned in the iteration are transformed
             * accordingly.
             * <p>
             * The amount of subdivision of the curved segments is controlled
             * by the <code>flatness</code> parameter, which specifies the
             * maximum distance that any point on the unflattened transformed
             * curve can deviate from the returned flattened path segments.
             * Note that a limit on the accuracy of the flattened path might be
             * silently imposed, causing very small flattening parameters to be
             * treated as larger values.  This limit, if there is one, is
             * defined by the particular implementation that is used.
             * <p>
             * Each call to this method returns a fresh <code>PathIterator</code>
             * object that traverses the <code>Shape</code> object geometry
             * independently from any other <code>PathIterator</code> objects in use at
             * the same time.
             * <p>
             * It is recommended, but not guaranteed, that objects
             * implementing the <code>Shape</code> interface isolate iterations
             * that are in process from any changes that might occur to the original
             * object's geometry during such iterations.
             */
            // @ts-ignore
             getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        }
    }
}
