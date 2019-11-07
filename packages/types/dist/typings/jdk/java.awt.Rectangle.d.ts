// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Rectangle extends java.awt.geom.Rectangle2D {
            /**
             * Constructs a new <code>Rectangle</code> whose upper-left corner
             * is at (0,&nbsp;0) in the coordinate space, and whose width and
             * height are both zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>Rectangle</code>, initialized to match
             * the values of the specified <code>Rectangle</code>.
             */
            // @ts-ignore
            constructor(r: java.awt.Rectangle)
            /**
             * Constructs a new <code>Rectangle</code> whose upper-left corner is
             * specified as
             * {@code (x,y)} and whose width and height
             * are specified by the arguments of the same name.
             */
            // @ts-ignore
            constructor(x: number, y: number, width: number, height: number)
            /**
             * Constructs a new <code>Rectangle</code> whose upper-left corner
             * is at (0,&nbsp;0) in the coordinate space, and whose width and
             * height are specified by the arguments of the same name.
             */
            // @ts-ignore
            constructor(width: number, height: number)
            /**
             * Constructs a new <code>Rectangle</code> whose upper-left corner is
             * specified by the {@link Point} argument, and
             * whose width and height are specified by the
             * {@link Dimension} argument.
             */
            // @ts-ignore
            constructor(p: java.awt.Point, d: java.awt.Dimension)
            /**
             * Constructs a new <code>Rectangle</code> whose upper-left corner is the
             * specified <code>Point</code>, and whose width and height are both zero.
             */
            // @ts-ignore
            constructor(p: java.awt.Point)
            /**
             * Constructs a new <code>Rectangle</code> whose top left corner is
             * (0,&nbsp;0) and whose width and height are specified
             * by the <code>Dimension</code> argument.
             */
            // @ts-ignore
            constructor(d: java.awt.Dimension)
            // @ts-ignore
            public x: number;
            // @ts-ignore
            public y: number;
            // @ts-ignore
            public width: number;
            // @ts-ignore
            public height: number;
            /**
             * Returns the X coordinate of the bounding <code>Rectangle</code> in
             * <code>double</code> precision.
             */
            // @ts-ignore
            public getX(): number;
            /**
             * Returns the Y coordinate of the bounding <code>Rectangle</code> in
             * <code>double</code> precision.
             */
            // @ts-ignore
            public getY(): number;
            /**
             * Returns the width of the bounding <code>Rectangle</code> in
             * <code>double</code> precision.
             */
            // @ts-ignore
            public getWidth(): number;
            /**
             * Returns the height of the bounding <code>Rectangle</code> in
             * <code>double</code> precision.
             */
            // @ts-ignore
            public getHeight(): number;
            /**
             * Gets the bounding <code>Rectangle</code> of this <code>Rectangle</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>getBounds</code> method of
             * {@link Component}.
             */
            // @ts-ignore
            public getBounds(): java.awt.Rectangle;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getBounds2D(): java.awt.geom.Rectangle2D;
            /**
             * Sets the bounding <code>Rectangle</code> of this <code>Rectangle</code>
             * to match the specified <code>Rectangle</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setBounds</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setBounds(r: java.awt.Rectangle): void;
            /**
             * Sets the bounding <code>Rectangle</code> of this
             * <code>Rectangle</code> to the specified
             * <code>x</code>, <code>y</code>, <code>width</code>,
             * and <code>height</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setBounds</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setBounds(x: number, y: number, width: number, height: number): void;
            /**
             * Sets the bounds of this {@code Rectangle} to the integer bounds
             * which encompass the specified {@code x}, {@code y}, {@code width},
             * and {@code height}.
             * If the parameters specify a {@code Rectangle} that exceeds the
             * maximum range of integers, the result will be the best
             * representation of the specified {@code Rectangle} intersected
             * with the maximum integer bounds.
             */
            // @ts-ignore
            public setRect(x: number, y: number, width: number, height: number): void;
            /**
             * Sets the bounding <code>Rectangle</code> of this
             * <code>Rectangle</code> to the specified
             * <code>x</code>, <code>y</code>, <code>width</code>,
             * and <code>height</code>.
             * <p>
             */
            // @ts-ignore
            public reshape(x: number, y: number, width: number, height: number): void;
            /**
             * Returns the location of this <code>Rectangle</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>getLocation</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public getLocation(): java.awt.Point;
            /**
             * Moves this <code>Rectangle</code> to the specified location.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setLocation(p: java.awt.Point): void;
            /**
             * Moves this <code>Rectangle</code> to the specified location.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setLocation(x: number, y: number): void;
            /**
             * Moves this <code>Rectangle</code> to the specified location.
             * <p>
             */
            // @ts-ignore
            public move(x: number, y: number): void;
            /**
             * Translates this <code>Rectangle</code> the indicated distance,
             * to the right along the X coordinate axis, and
             * downward along the Y coordinate axis.
             */
            // @ts-ignore
            public translate(dx: number, dy: number): void;
            /**
             * Gets the size of this <code>Rectangle</code>, represented by
             * the returned <code>Dimension</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>getSize</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public getSize(): java.awt.Dimension;
            /**
             * Sets the size of this <code>Rectangle</code> to match the
             * specified <code>Dimension</code>.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setSize(d: java.awt.Dimension): void;
            /**
             * Sets the size of this <code>Rectangle</code> to the specified
             * width and height.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method of <code>Component</code>.
             */
            // @ts-ignore
            public setSize(width: number, height: number): void;
            /**
             * Sets the size of this <code>Rectangle</code> to the specified
             * width and height.
             * <p>
             */
            // @ts-ignore
            public resize(width: number, height: number): void;
            /**
             * Checks whether or not this <code>Rectangle</code> contains the
             * specified <code>Point</code>.
             */
            // @ts-ignore
            public contains(p: java.awt.Point): boolean;
            /**
             * Checks whether or not this <code>Rectangle</code> contains the
             * point at the specified location {@code (x,y)}.
             */
            // @ts-ignore
            public contains(x: number, y: number): boolean;
            /**
             * Checks whether or not this <code>Rectangle</code> entirely contains
             * the specified <code>Rectangle</code>.
             */
            // @ts-ignore
            public contains(r: java.awt.Rectangle): boolean;
            /**
             * Checks whether this <code>Rectangle</code> entirely contains
             * the <code>Rectangle</code>
             * at the specified location {@code (X,Y)} with the
             * specified dimensions {@code (W,H)}.
             */
            // @ts-ignore
            public contains(X: number, Y: number, W: number, H: number): boolean;
            /**
             * Checks whether or not this <code>Rectangle</code> contains the
             * point at the specified location {@code (X,Y)}.
             */
            // @ts-ignore
            public inside(X: number, Y: number): boolean;
            /**
             * Determines whether or not this <code>Rectangle</code> and the specified
             * <code>Rectangle</code> intersect. Two rectangles intersect if
             * their intersection is nonempty.
             */
            // @ts-ignore
            public intersects(r: java.awt.Rectangle): boolean;
            /**
             * Computes the intersection of this <code>Rectangle</code> with the
             * specified <code>Rectangle</code>. Returns a new <code>Rectangle</code>
             * that represents the intersection of the two rectangles.
             * If the two rectangles do not intersect, the result will be
             * an empty rectangle.
             */
            // @ts-ignore
            public intersection(r: java.awt.Rectangle): java.awt.Rectangle;
            /**
             * Computes the union of this <code>Rectangle</code> with the
             * specified <code>Rectangle</code>. Returns a new
             * <code>Rectangle</code> that
             * represents the union of the two rectangles.
             * <p>
             * If either {@code Rectangle} has any dimension less than zero
             * the rules for <a href=#NonExistant>non-existant</a> rectangles
             * apply.
             * If only one has a dimension less than zero, then the result
             * will be a copy of the other {@code Rectangle}.
             * If both have dimension less than zero, then the result will
             * have at least one dimension less than zero.
             * <p>
             * If the resulting {@code Rectangle} would have a dimension
             * too large to be expressed as an {@code int}, the result
             * will have a dimension of {@code Integer.MAX_VALUE} along
             * that dimension.
             */
            // @ts-ignore
            public union(r: java.awt.Rectangle): java.awt.Rectangle;
            /**
             * Adds a point, specified by the integer arguments {@code newx,newy}
             * to the bounds of this {@code Rectangle}.
             * <p>
             * If this {@code Rectangle} has any dimension less than zero,
             * the rules for <a href=#NonExistant>non-existant</a>
             * rectangles apply.
             * In that case, the new bounds of this {@code Rectangle} will
             * have a location equal to the specified coordinates and
             * width and height equal to zero.
             * <p>
             * After adding a point, a call to <code>contains</code> with the
             * added point as an argument does not necessarily return
             * <code>true</code>. The <code>contains</code> method does not
             * return <code>true</code> for points on the right or bottom
             * edges of a <code>Rectangle</code>. Therefore, if the added point
             * falls on the right or bottom edge of the enlarged
             * <code>Rectangle</code>, <code>contains</code> returns
             * <code>false</code> for that point.
             * If the specified point must be contained within the new
             * {@code Rectangle}, a 1x1 rectangle should be added instead:
             * <pre>
             * r.add(newx, newy, 1, 1);
             * </pre>
             */
            // @ts-ignore
            public add(newx: number, newy: number): void;
            /**
             * Adds the specified {@code Point} to the bounds of this
             * {@code Rectangle}.
             * <p>
             * If this {@code Rectangle} has any dimension less than zero,
             * the rules for <a href=#NonExistant>non-existant</a>
             * rectangles apply.
             * In that case, the new bounds of this {@code Rectangle} will
             * have a location equal to the coordinates of the specified
             * {@code Point} and width and height equal to zero.
             * <p>
             * After adding a <code>Point</code>, a call to <code>contains</code>
             * with the added <code>Point</code> as an argument does not
             * necessarily return <code>true</code>. The <code>contains</code>
             * method does not return <code>true</code> for points on the right
             * or bottom edges of a <code>Rectangle</code>. Therefore if the added
             * <code>Point</code> falls on the right or bottom edge of the
             * enlarged <code>Rectangle</code>, <code>contains</code> returns
             * <code>false</code> for that <code>Point</code>.
             * If the specified point must be contained within the new
             * {@code Rectangle}, a 1x1 rectangle should be added instead:
             * <pre>
             * r.add(pt.x, pt.y, 1, 1);
             * </pre>
             */
            // @ts-ignore
            public add(pt: java.awt.Point): void;
            /**
             * Adds a <code>Rectangle</code> to this <code>Rectangle</code>.
             * The resulting <code>Rectangle</code> is the union of the two
             * rectangles.
             * <p>
             * If either {@code Rectangle} has any dimension less than 0, the
             * result will have the dimensions of the other {@code Rectangle}.
             * If both {@code Rectangle}s have at least one dimension less
             * than 0, the result will have at least one dimension less than 0.
             * <p>
             * If either {@code Rectangle} has one or both dimensions equal
             * to 0, the result along those axes with 0 dimensions will be
             * equivalent to the results obtained by adding the corresponding
             * origin coordinate to the result rectangle along that axis,
             * similar to the operation of the {@link #add(Point)} method,
             * but contribute no further dimension beyond that.
             * <p>
             * If the resulting {@code Rectangle} would have a dimension
             * too large to be expressed as an {@code int}, the result
             * will have a dimension of {@code Integer.MAX_VALUE} along
             * that dimension.
             */
            // @ts-ignore
            public add(r: java.awt.Rectangle): void;
            /**
             * Resizes the <code>Rectangle</code> both horizontally and vertically.
             * <p>
             * This method modifies the <code>Rectangle</code> so that it is
             * <code>h</code> units larger on both the left and right side,
             * and <code>v</code> units larger at both the top and bottom.
             * <p>
             * The new <code>Rectangle</code> has {@code (x - h, y - v)}
             * as its upper-left corner,
             * width of {@code (width + 2h)},
             * and a height of {@code (height + 2v)}.
             * <p>
             * If negative values are supplied for <code>h</code> and
             * <code>v</code>, the size of the <code>Rectangle</code>
             * decreases accordingly.
             * The {@code grow} method will check for integer overflow
             * and underflow, but does not check whether the resulting
             * values of {@code width} and {@code height} grow
             * from negative to non-negative or shrink from non-negative
             * to negative.
             */
            // @ts-ignore
            public grow(h: number, v: number): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public outcode(x: number, y: number): number;
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
             * Checks whether two rectangles are equal.
             * <p>
             * The result is <code>true</code> if and only if the argument is not
             * <code>null</code> and is a <code>Rectangle</code> object that has the
             * same upper-left corner, width, and height as
             * this <code>Rectangle</code>.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a <code>String</code> representing this
             * <code>Rectangle</code> and its values.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
