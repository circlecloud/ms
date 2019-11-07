declare namespace java {
    namespace awt {
        namespace geom {
            namespace RoundRectangle2D {
                // @ts-ignore
                 class Double extends java.awt.geom.RoundRectangle2D {
                    /**
                     * Constructs a new <code>RoundRectangle2D</code>, initialized to
                     * location (0.0,&nbsp;0.0), size (0.0,&nbsp;0.0), and corner arcs
                     * of radius 0.0.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>RoundRectangle2D</code>
                     * from the specified <code>double</code> coordinates.
                     */
                    // @ts-ignore
                    constructor(x: number, y: number, w: number, h: number, arcw: number, arch: number)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public width: number;
                    // @ts-ignore
                    public height: number;
                    // @ts-ignore
                    public arcwidth: number;
                    // @ts-ignore
                    public archeight: number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getX(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getY(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getWidth(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getHeight(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getArcWidth(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getArcHeight(): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public isEmpty(): boolean;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setRoundRect(x: number, y: number, w: number, h: number, arcw: number, arch: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setRoundRect(rr: java.awt.geom.RoundRectangle2D): void;
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
