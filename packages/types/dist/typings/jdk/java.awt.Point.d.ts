declare namespace java {
    namespace awt {
        // @ts-ignore
         class Point extends java.awt.geom.Point2D {
            /**
             * Constructs and initializes a point at the origin
             * (0,&nbsp;0) of the coordinate space.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs and initializes a point with the same location as
             * the specified <code>Point</code> object.
             */
            // @ts-ignore
            constructor(p: java.awt.Point)
            /**
             * Constructs and initializes a point at the specified
             * {@code (x,y)} location in the coordinate space.
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
             * Returns the location of this point.
             * This method is included for completeness, to parallel the
             * <code>getLocation</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public getLocation(): java.awt.Point;
            /**
             * Sets the location of the point to the specified location.
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setLocation(p: java.awt.Point): void;
            /**
             * Changes the point to have the specified location.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             * Its behavior is identical with <code>move(int,&nbsp;int)</code>.
             */
            // @ts-ignore
            public setLocation(x: number, y: number): void;
            /**
             * Sets the location of this point to the specified double coordinates.
             * The double values will be rounded to integer values.
             * Any number smaller than <code>Integer.MIN_VALUE</code>
             * will be reset to <code>MIN_VALUE</code>, and any number
             * larger than <code>Integer.MAX_VALUE</code> will be
             * reset to <code>MAX_VALUE</code>.
             */
            // @ts-ignore
            public setLocation(x: number, y: number): void;
            /**
             * Moves this point to the specified location in the
             * {@code (x,y)} coordinate plane. This method
             * is identical with <code>setLocation(int,&nbsp;int)</code>.
             */
            // @ts-ignore
            public move(x: number, y: number): void;
            /**
             * Translates this point, at location {@code (x,y)},
             * by {@code dx} along the {@code x} axis and {@code dy}
             * along the {@code y} axis so that it now represents the point
             * {@code (x+dx,y+dy)}.
             */
            // @ts-ignore
            public translate(dx: number, dy: number): void;
            /**
             * Determines whether or not two points are equal. Two instances of
             * <code>Point2D</code> are equal if the values of their
             * <code>x</code> and <code>y</code> member fields, representing
             * their position in the coordinate space, are the same.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a string representation of this point and its location
             * in the {@code (x,y)} coordinate space. This method is
             * intended to be used only for debugging purposes, and the content
             * and format of the returned string may vary between implementations.
             * The returned string may be empty but may not be <code>null</code>.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
