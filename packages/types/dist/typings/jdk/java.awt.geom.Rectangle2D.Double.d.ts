declare namespace java {
    namespace awt {
        namespace geom {
            namespace Rectangle2D {
                // @ts-ignore
                 class Double extends java.awt.geom.Rectangle2D {
                    /**
                     * Constructs a new <code>Rectangle2D</code>, initialized to
                     * location (0,&nbsp;0) and size (0,&nbsp;0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Rectangle2D</code>
                     * from the specified <code>double</code> coordinates.
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
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setRect(x: number, y: number, w: number, h: number): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setRect(r: java.awt.geom.Rectangle2D): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public outcode(x: number, y: number): number;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getBounds2D(): java.awt.geom.Rectangle2D;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D;
                    /**
                     * Returns the <code>String</code> representation of this
                     * <code>Rectangle2D</code>.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
