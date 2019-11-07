// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
            abstract class Dimension2D extends java.lang.Object {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the width of this <code>Dimension</code> in double
                 * precision.
                 */
                // @ts-ignore
                public abstract getWidth(): number;
                /**
                 * Returns the height of this <code>Dimension</code> in double
                 * precision.
                 */
                // @ts-ignore
                public abstract getHeight(): number;
                /**
                 * Sets the size of this <code>Dimension</code> object to the
                 * specified width and height.
                 * This method is included for completeness, to parallel the
                 * {@link java.awt.Component#getSize getSize} method of
                 * {@link java.awt.Component}.
                 */
                // @ts-ignore
                public abstract setSize(width: number, height: number): void;
                /**
                 * Sets the size of this <code>Dimension2D</code> object to
                 * match the specified size.
                 * This method is included for completeness, to parallel the
                 * <code>getSize</code> method of <code>Component</code>.
                 */
                // @ts-ignore
                public setSize(d: java.awt.geom.Dimension2D): void;
                /**
                 * Creates a new object of the same class as this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
