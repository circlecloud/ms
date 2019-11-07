declare namespace java {
    namespace awt {
        namespace geom {
            namespace Line2D {
                // @ts-ignore
                 class Double extends java.awt.geom.Line2D {
                    /**
                     * Constructs and initializes a Line with coordinates (0, 0) &rarr; (0, 0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Line2D</code> from the
                     * specified coordinates.
                     */
                    // @ts-ignore
                    constructor(x1: number, y1: number, x2: number, y2: number)
                    /**
                     * Constructs and initializes a <code>Line2D</code> from the
                     * specified <code>Point2D</code> objects.
                     */
                    // @ts-ignore
                    constructor(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D)
                    // @ts-ignore
                    public x1: number;
                    // @ts-ignore
                    public y1: number;
                    // @ts-ignore
                    public x2: number;
                    // @ts-ignore
                    public y2: number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getX1(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getY1(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getP1(): java.awt.geom.Point2D;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getX2(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getY2(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getP2(): java.awt.geom.Point2D;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setLine(x1: number, y1: number, x2: number, y2: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getBounds2D(): java.awt.geom.Rectangle2D;
                }
            }
        }
    }
}
