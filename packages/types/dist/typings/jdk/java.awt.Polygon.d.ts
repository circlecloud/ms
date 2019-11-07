declare namespace java {
    namespace awt {
        // @ts-ignore
         class Polygon extends java.lang.Object {
            /**
             * Creates an empty polygon.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs and initializes a <code>Polygon</code> from the specified
             * parameters.
             */
            // @ts-ignore
            constructor(xpoints: number, ypoints: number, npoints: number)
            // @ts-ignore
            public npoints: number;
            // @ts-ignore
            public xpoints: number[];
            // @ts-ignore
            public ypoints: number[];
            // @ts-ignore
            protected bounds: java.awt.Rectangle;
            /**
             * Resets this <code>Polygon</code> object to an empty polygon.
             * The coordinate arrays and the data in them are left untouched
             * but the number of points is reset to zero to mark the old
             * vertex data as invalid and to start accumulating new vertex
             * data at the beginning.
             * All internally-cached data relating to the old vertices
             * are discarded.
             * Note that since the coordinate arrays from before the reset
             * are reused, creating a new empty <code>Polygon</code> might
             * be more memory efficient than resetting the current one if
             * the number of vertices in the new polygon data is significantly
             * smaller than the number of vertices in the data from before the
             * reset.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Invalidates or flushes any internally-cached data that depends
             * on the vertex coordinates of this <code>Polygon</code>.
             * This method should be called after any direct manipulation
             * of the coordinates in the <code>xpoints</code> or
             * <code>ypoints</code> arrays to avoid inconsistent results
             * from methods such as <code>getBounds</code> or <code>contains</code>
             * that might cache data from earlier computations relating to
             * the vertex coordinates.
             */
            // @ts-ignore
            public invalidate(): void;
            /**
             * Translates the vertices of the <code>Polygon</code> by
             * <code>deltaX</code> along the x axis and by
             * <code>deltaY</code> along the y axis.
             */
            // @ts-ignore
            public translate(deltaX: number, deltaY: number): void;
            /**
             * Appends the specified coordinates to this <code>Polygon</code>.
             * <p>
             * If an operation that calculates the bounding box of this
             * <code>Polygon</code> has already been performed, such as
             * <code>getBounds</code> or <code>contains</code>, then this
             * method updates the bounding box.
             */
            // @ts-ignore
            public addPoint(x: number, y: number): void;
            /**
             * Gets the bounding box of this <code>Polygon</code>.
             * The bounding box is the smallest {@link Rectangle} whose
             * sides are parallel to the x and y axes of the
             * coordinate space, and can completely contain the <code>Polygon</code>.
             */
            // @ts-ignore
            public getBounds(): java.awt.Rectangle;
            /**
             * Returns the bounds of this <code>Polygon</code>.
             */
            // @ts-ignore
            public getBoundingBox(): java.awt.Rectangle;
            /**
             * Determines whether the specified {@link Point} is inside this
             * <code>Polygon</code>.
             */
            // @ts-ignore
            public contains(p: java.awt.Point): boolean;
            /**
             * Determines whether the specified coordinates are inside this
             * <code>Polygon</code>.
             * <p>
             */
            // @ts-ignore
            public contains(x: number, y: number): boolean;
            /**
             * Determines whether the specified coordinates are contained in this
             * <code>Polygon</code>.
             */
            // @ts-ignore
            public inside(x: number, y: number): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getBounds2D(): java.awt.geom.Rectangle2D;
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
             * Returns an iterator object that iterates along the boundary of this
             * <code>Polygon</code> and provides access to the geometry
             * of the outline of this <code>Polygon</code>.  An optional
             * {@link AffineTransform} can be specified so that the coordinates
             * returned in the iteration are transformed accordingly.
             */
            // @ts-ignore
            public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
            /**
             * Returns an iterator object that iterates along the boundary of
             * the <code>Shape</code> and provides access to the geometry of the
             * outline of the <code>Shape</code>.  Only SEG_MOVETO, SEG_LINETO, and
             * SEG_CLOSE point types are returned by the iterator.
             * Since polygons are already flat, the <code>flatness</code> parameter
             * is ignored.  An optional <code>AffineTransform</code> can be specified
             * in which case the coordinates returned in the iteration are transformed
             * accordingly.
             */
            // @ts-ignore
            public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number): java.awt.geom.PathIterator;
        }
    }
}
