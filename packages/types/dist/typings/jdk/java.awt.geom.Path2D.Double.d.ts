// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            namespace Path2D {
                // @ts-ignore
                 class Double extends java.awt.geom.Path2D {
                    /**
                     * Constructs a new empty double precision {@code Path2D} object
                     * with a default winding rule of {@link #WIND_NON_ZERO}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new empty double precision {@code Path2D} object
                     * with the specified winding rule to control operations that
                     * require the interior of the path to be defined.
                     */
                    // @ts-ignore
                    constructor(rule: number)
                    /**
                     * Constructs a new empty double precision {@code Path2D} object
                     * with the specified winding rule and the specified initial
                     * capacity to store path segments.
                     * This number is an initial guess as to how many path segments
                     * are in the path, but the storage is expanded as needed to store
                     * whatever path segments are added to this path.
                     */
                    // @ts-ignore
                    constructor(rule: number, initialCapacity: number)
                    /**
                     * Constructs a new double precision {@code Path2D} object
                     * from an arbitrary {@link Shape} object.
                     * All of the initial geometry and the winding rule for this path are
                     * taken from the specified {@code Shape} object.
                     */
                    // @ts-ignore
                    constructor(s: java.awt.Shape)
                    /**
                     * Constructs a new double precision {@code Path2D} object
                     * from an arbitrary {@link Shape} object, transformed by an
                     * {@link AffineTransform} object.
                     * All of the initial geometry and the winding rule for this path are
                     * taken from the specified {@code Shape} object and transformed
                     * by the specified {@code AffineTransform} object.
                     */
                    // @ts-ignore
                    constructor(s: java.awt.Shape, at: java.awt.geom.AffineTransform)
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public moveTo(x: number, y: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public lineTo(x: number, y: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public quadTo(x1: number, y1: number, x2: number, y2: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public append(pi: java.awt.geom.PathIterator, connect: boolean): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public transform(at: java.awt.geom.AffineTransform): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getBounds2D(): java.awt.geom.Rectangle2D;
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The iterator for this class is not multi-threaded safe,
                     * which means that the {@code Path2D} class does not
                     * guarantee that modifications to the geometry of this
                     * {@code Path2D} object do not affect any iterations of
                     * that geometry that are already in process.
                     */
                    // @ts-ignore
                    public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator;
                    /**
                     * Creates a new object of the same class as this object.
                     */
                    // @ts-ignore
                    public clone(): java.lang.Object;
                }
            }
        }
    }
}
