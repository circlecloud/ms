// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Dimension extends java.awt.geom.Dimension2D {
            /**
             * Creates an instance of <code>Dimension</code> with a width
             * of zero and a height of zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an instance of <code>Dimension</code> whose width
             * and height are the same as for the specified dimension.
             */
            // @ts-ignore
            constructor(d: java.awt.Dimension)
            /**
             * Constructs a <code>Dimension</code> and initializes
             * it to the specified width and specified height.
             */
            // @ts-ignore
            constructor(width: number, height: number)
            // @ts-ignore
            public width: number;
            // @ts-ignore
            public height: number;
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
             * Sets the size of this <code>Dimension</code> object to
             * the specified width and height in double precision.
             * Note that if <code>width</code> or <code>height</code>
             * are larger than <code>Integer.MAX_VALUE</code>, they will
             * be reset to <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            public setSize(width: number, height: number): void;
            /**
             * Gets the size of this <code>Dimension</code> object.
             * This method is included for completeness, to parallel the
             * <code>getSize</code> method defined by <code>Component</code>.
             */
            // @ts-ignore
            public getSize(): java.awt.Dimension;
            /**
             * Sets the size of this <code>Dimension</code> object to the specified size.
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method defined by <code>Component</code>.
             */
            // @ts-ignore
            public setSize(d: java.awt.Dimension): void;
            /**
             * Sets the size of this <code>Dimension</code> object
             * to the specified width and height.
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method defined by <code>Component</code>.
             */
            // @ts-ignore
            public setSize(width: number, height: number): void;
            /**
             * Checks whether two dimension objects have equal values.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code for this <code>Dimension</code>.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of the values of this
             * <code>Dimension</code> object's <code>height</code> and
             * <code>width</code> fields. This method is intended to be used only
             * for debugging purposes, and the content and format of the returned
             * string may vary between implementations. The returned string may be
             * empty but may not be <code>null</code>.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
