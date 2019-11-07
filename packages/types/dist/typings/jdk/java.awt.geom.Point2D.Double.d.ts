declare namespace java {
    namespace awt {
        namespace geom {
            namespace Point2D {
                // @ts-ignore
                 class Double extends java.awt.geom.Point2D {
                    /**
                     * Constructs and initializes a <code>Point2D</code> with
                     * coordinates (0,&nbsp;0).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Point2D</code> with the
                     * specified coordinates.
                     */
                    // @ts-ignore
                    constructor(x: number, y: number)
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
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
                    public setLocation(x: number, y: number): void;
                    /**
                     * Returns a <code>String</code> that represents the value
                     * of this <code>Point2D</code>.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
