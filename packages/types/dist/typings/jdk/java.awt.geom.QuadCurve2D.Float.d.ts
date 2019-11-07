// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            namespace QuadCurve2D {
                // @ts-ignore
                 class Float extends java.awt.geom.QuadCurve2D {
                    /**
                     * Constructs and initializes a <code>QuadCurve2D</code> with
                     * coordinates (0, 0, 0, 0, 0, 0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>QuadCurve2D</code> from the
                     * specified {@code float} coordinates.
                     */
                    // @ts-ignore
                    constructor(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number)
                    // @ts-ignore
                    public x1: number;
                    // @ts-ignore
                    public y1: number;
                    // @ts-ignore
                    public ctrlx: number;
                    // @ts-ignore
                    public ctrly: number;
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
                    public getCtrlX(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getCtrlY(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getCtrlPt(): java.awt.geom.Point2D;
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
                    public setCurve(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
                    /**
                     * Sets the location of the end points and control point of this curve
                     * to the specified {@code float} coordinates.
                     */
                    // @ts-ignore
                    public setCurve(x1: number, y1: number, ctrlx: number, ctrly: number, x2: number, y2: number): void;
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
