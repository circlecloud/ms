// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            namespace Arc2D {
                // @ts-ignore
                 class Double extends java.awt.geom.Arc2D {
                    /**
                     * Constructs a new OPEN arc, initialized to location (0, 0),
                     * size (0, 0), angular extents (start = 0, extent = 0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new arc, initialized to location (0, 0),
                     * size (0, 0), angular extents (start = 0, extent = 0), and
                     * the specified closure type.
                     */
                    // @ts-ignore
                    constructor(type: number)
                    /**
                     * Constructs a new arc, initialized to the specified location,
                     * size, angular extents, and closure type.
                     */
                    // @ts-ignore
                    constructor(x: number, y: number, w: number, h: number, start: number, extent: number, type: number)
                    /**
                     * Constructs a new arc, initialized to the specified location,
                     * size, angular extents, and closure type.
                     */
                    // @ts-ignore
                    constructor(ellipseBounds: java.awt.geom.Rectangle2D, start: number, extent: number, type: number)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public width: number;
                    // @ts-ignore
                    public height: number;
                    // @ts-ignore
                    public start: number;
                    // @ts-ignore
                    public extent: number;
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     */
                    // @ts-ignore
                    public getX(): number;
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     */
                    // @ts-ignore
                    public getY(): number;
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     */
                    // @ts-ignore
                    public getWidth(): number;
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     */
                    // @ts-ignore
                    public getHeight(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getAngleStart(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getAngleExtent(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public isEmpty(): boolean;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setArc(x: number, y: number, w: number, h: number, angSt: number, angExt: number, closure: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setAngleStart(angSt: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setAngleExtent(angExt: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    protected makeBounds(x: number, y: number, w: number, h: number): java.awt.geom.Rectangle2D;
                }
            }
        }
    }
}
