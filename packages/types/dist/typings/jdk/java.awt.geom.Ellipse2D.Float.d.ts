// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            namespace Ellipse2D {
                // @ts-ignore
                 class Float extends java.awt.geom.Ellipse2D {
                    /**
                     * Constructs a new <code>Ellipse2D</code>, initialized to
                     * location (0,&nbsp;0) and size (0,&nbsp;0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes an <code>Ellipse2D</code> from the
                     * specified coordinates.
                     */
                    // @ts-ignore
                    constructor(x: number, y: number, w: number, h: number)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public width: number;
                    // @ts-ignore
                    public height: number;
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
                    public isEmpty(): boolean;
                    /**
                     * Sets the location and size of the framing rectangle of this
                     * <code>Shape</code> to the specified rectangular values.
                     */
                    // @ts-ignore
                    public setFrame(x: number, y: number, w: number, h: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setFrame(x: number, y: number, w: number, h: number): void;
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
