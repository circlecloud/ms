// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class Graphics extends java.lang.Object {
            /**
             * Constructs a new <code>Graphics</code> object.
             * This constructor is the default constructor for a graphics
             * context.
             * <p>
             * Since <code>Graphics</code> is an abstract class, applications
             * cannot call this constructor directly. Graphics contexts are
             * obtained from other graphics contexts or are created by calling
             * <code>getGraphics</code> on a component.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <code>Graphics</code> object that is
             * a copy of this <code>Graphics</code> object.
             */
            // @ts-ignore
            public abstract create(): java.awt.Graphics;
            /**
             * Creates a new <code>Graphics</code> object based on this
             * <code>Graphics</code> object, but with a new translation and clip area.
             * The new <code>Graphics</code> object has its origin
             * translated to the specified point (<i>x</i>,&nbsp;<i>y</i>).
             * Its clip area is determined by the intersection of the original
             * clip area with the specified rectangle.  The arguments are all
             * interpreted in the coordinate system of the original
             * <code>Graphics</code> object. The new graphics context is
             * identical to the original, except in two respects:
             * <ul>
             * <li>
             * The new graphics context is translated by (<i>x</i>,&nbsp;<i>y</i>).
             * That is to say, the point (<code>0</code>,&nbsp;<code>0</code>) in the
             * new graphics context is the same as (<i>x</i>,&nbsp;<i>y</i>) in
             * the original graphics context.
             * <li>
             * The new graphics context has an additional clipping rectangle, in
             * addition to whatever (translated) clipping rectangle it inherited
             * from the original graphics context. The origin of the new clipping
             * rectangle is at (<code>0</code>,&nbsp;<code>0</code>), and its size
             * is specified by the <code>width</code> and <code>height</code>
             * arguments.
             * </ul>
             * <p>
             */
            // @ts-ignore
            public create(x: number, y: number, width: number, height: number): java.awt.Graphics;
            /**
             * Translates the origin of the graphics context to the point
             * (<i>x</i>,&nbsp;<i>y</i>) in the current coordinate system.
             * Modifies this graphics context so that its new origin corresponds
             * to the point (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's
             * original coordinate system.  All coordinates used in subsequent
             * rendering operations on this graphics context will be relative
             * to this new origin.
             */
            // @ts-ignore
            public abstract translate(x: number, y: number): void;
            /**
             * Gets this graphics context's current color.
             */
            // @ts-ignore
            public abstract getColor(): java.awt.Color;
            /**
             * Sets this graphics context's current color to the specified
             * color. All subsequent graphics operations using this graphics
             * context use this specified color.
             */
            // @ts-ignore
            public abstract setColor(c: java.awt.Color): void;
            /**
             * Sets the paint mode of this graphics context to overwrite the
             * destination with this graphics context's current color.
             * This sets the logical pixel operation function to the paint or
             * overwrite mode.  All subsequent rendering operations will
             * overwrite the destination with the current color.
             */
            // @ts-ignore
            public abstract setPaintMode(): void;
            /**
             * Sets the paint mode of this graphics context to alternate between
             * this graphics context's current color and the new specified color.
             * This specifies that logical pixel operations are performed in the
             * XOR mode, which alternates pixels between the current color and
             * a specified XOR color.
             * <p>
             * When drawing operations are performed, pixels which are the
             * current color are changed to the specified color, and vice versa.
             * <p>
             * Pixels that are of colors other than those two colors are changed
             * in an unpredictable but reversible manner; if the same figure is
             * drawn twice, then all pixels are restored to their original values.
             */
            // @ts-ignore
            public abstract setXORMode(c1: java.awt.Color): void;
            /**
             * Gets the current font.
             */
            // @ts-ignore
            public abstract getFont(): java.awt.Font;
            /**
             * Sets this graphics context's font to the specified font.
             * All subsequent text operations using this graphics context
             * use this font. A null argument is silently ignored.
             */
            // @ts-ignore
            public abstract setFont(font: java.awt.Font): void;
            /**
             * Gets the font metrics of the current font.
             */
            // @ts-ignore
            public getFontMetrics(): java.awt.FontMetrics;
            /**
             * Returns the bounding rectangle of the current clipping area.
             * This method refers to the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns
             * <code>null</code>.
             * The coordinates in the rectangle are relative to the coordinate
             * system origin of this graphics context.
             */
            // @ts-ignore
            public abstract getClipBounds(): java.awt.Rectangle;
            /**
             * Intersects the current clip with the specified rectangle.
             * The resulting clipping area is the intersection of the current
             * clipping area and the specified rectangle.  If there is no
             * current clipping area, either because the clip has never been
             * set, or the clip has been cleared using <code>setClip(null)</code>,
             * the specified rectangle becomes the new clip.
             * This method sets the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * This method can only be used to make the current clip smaller.
             * To set the current clip larger, use any of the setClip methods.
             * Rendering operations have no effect outside of the clipping area.
             */
            // @ts-ignore
            public abstract clipRect(x: number, y: number, width: number, height: number): void;
            /**
             * Sets the current clip to the rectangle specified by the given
             * coordinates.  This method sets the user clip, which is
             * independent of the clipping associated with device bounds
             * and window visibility.
             * Rendering operations have no effect outside of the clipping area.
             */
            // @ts-ignore
            public abstract setClip(x: number, y: number, width: number, height: number): void;
            /**
             * Gets the current clipping area.
             * This method returns the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns
             * <code>null</code>.
             */
            // @ts-ignore
            public abstract getClip(): java.awt.Shape;
            /**
             * Copies an area of the component by a distance specified by
             * <code>dx</code> and <code>dy</code>. From the point specified
             * by <code>x</code> and <code>y</code>, this method
             * copies downwards and to the right.  To copy an area of the
             * component to the left or upwards, specify a negative value for
             * <code>dx</code> or <code>dy</code>.
             * If a portion of the source rectangle lies outside the bounds
             * of the component, or is obscured by another window or component,
             * <code>copyArea</code> will be unable to copy the associated
             * pixels. The area that is omitted can be refreshed by calling
             * the component's <code>paint</code> method.
             */
            // @ts-ignore
            public abstract copyArea(x: number, y: number, width: number, height: number, dx: number, dy: number): void;
            /**
             * Draws a line, using the current color, between the points
             * <code>(x1,&nbsp;y1)</code> and <code>(x2,&nbsp;y2)</code>
             * in this graphics context's coordinate system.
             */
            // @ts-ignore
            public abstract drawLine(x1: number, y1: number, x2: number, y2: number): void;
            /**
             * Fills the specified rectangle.
             * The left and right edges of the rectangle are at
             * <code>x</code> and <code>x&nbsp;+&nbsp;width&nbsp;-&nbsp;1</code>.
             * The top and bottom edges are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height&nbsp;-&nbsp;1</code>.
             * The resulting rectangle covers an area
             * <code>width</code> pixels wide by
             * <code>height</code> pixels tall.
             * The rectangle is filled using the graphics context's current color.
             */
            // @ts-ignore
            public abstract fillRect(x: number, y: number, width: number, height: number): void;
            /**
             * Draws the outline of the specified rectangle.
             * The left and right edges of the rectangle are at
             * <code>x</code> and <code>x&nbsp;+&nbsp;width</code>.
             * The top and bottom edges are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height</code>.
             * The rectangle is drawn using the graphics context's current color.
             */
            // @ts-ignore
            public drawRect(x: number, y: number, width: number, height: number): void;
            /**
             * Clears the specified rectangle by filling it with the background
             * color of the current drawing surface. This operation does not
             * use the current paint mode.
             * <p>
             * Beginning with Java&nbsp;1.1, the background color
             * of offscreen images may be system dependent. Applications should
             * use <code>setColor</code> followed by <code>fillRect</code> to
             * ensure that an offscreen image is cleared to a specific color.
             */
            // @ts-ignore
            public abstract clearRect(x: number, y: number, width: number, height: number): void;
            /**
             * Draws an outlined round-cornered rectangle using this graphics
             * context's current color. The left and right edges of the rectangle
             * are at <code>x</code> and <code>x&nbsp;+&nbsp;width</code>,
             * respectively. The top and bottom edges of the rectangle are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height</code>.
             */
            // @ts-ignore
            public abstract drawRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
            /**
             * Fills the specified rounded corner rectangle with the current color.
             * The left and right edges of the rectangle
             * are at <code>x</code> and <code>x&nbsp;+&nbsp;width&nbsp;-&nbsp;1</code>,
             * respectively. The top and bottom edges of the rectangle are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height&nbsp;-&nbsp;1</code>.
             */
            // @ts-ignore
            public abstract fillRoundRect(x: number, y: number, width: number, height: number, arcWidth: number, arcHeight: number): void;
            /**
             * Draws a 3-D highlighted outline of the specified rectangle.
             * The edges of the rectangle are highlighted so that they
             * appear to be beveled and lit from the upper left corner.
             * <p>
             * The colors used for the highlighting effect are determined
             * based on the current color.
             * The resulting rectangle covers an area that is
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             */
            // @ts-ignore
            public draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
            /**
             * Paints a 3-D highlighted rectangle filled with the current color.
             * The edges of the rectangle will be highlighted so that it appears
             * as if the edges were beveled and lit from the upper left corner.
             * The colors used for the highlighting effect will be determined from
             * the current color.
             */
            // @ts-ignore
            public fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
            /**
             * Draws the outline of an oval.
             * The result is a circle or ellipse that fits within the
             * rectangle specified by the <code>x</code>, <code>y</code>,
             * <code>width</code>, and <code>height</code> arguments.
             * <p>
             * The oval covers an area that is
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * and <code>height&nbsp;+&nbsp;1</code> pixels tall.
             */
            // @ts-ignore
            public abstract drawOval(x: number, y: number, width: number, height: number): void;
            /**
             * Fills an oval bounded by the specified rectangle with the
             * current color.
             */
            // @ts-ignore
            public abstract fillOval(x: number, y: number, width: number, height: number): void;
            /**
             * Draws the outline of a circular or elliptical arc
             * covering the specified rectangle.
             * <p>
             * The resulting arc begins at <code>startAngle</code> and extends
             * for <code>arcAngle</code> degrees, using the current color.
             * Angles are interpreted such that 0&nbsp;degrees
             * is at the 3&nbsp;o'clock position.
             * A positive value indicates a counter-clockwise rotation
             * while a negative value indicates a clockwise rotation.
             * <p>
             * The center of the arc is the center of the rectangle whose origin
             * is (<i>x</i>,&nbsp;<i>y</i>) and whose size is specified by the
             * <code>width</code> and <code>height</code> arguments.
             * <p>
             * The resulting arc covers an area
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * <p>
             * The angles are specified relative to the non-square extents of
             * the bounding rectangle such that 45 degrees always falls on the
             * line from the center of the ellipse to the upper right corner of
             * the bounding rectangle. As a result, if the bounding rectangle is
             * noticeably longer in one axis than the other, the angles to the
             * start and end of the arc segment will be skewed farther along the
             * longer axis of the bounds.
             */
            // @ts-ignore
            public abstract drawArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
            /**
             * Fills a circular or elliptical arc covering the specified rectangle.
             * <p>
             * The resulting arc begins at <code>startAngle</code> and extends
             * for <code>arcAngle</code> degrees.
             * Angles are interpreted such that 0&nbsp;degrees
             * is at the 3&nbsp;o'clock position.
             * A positive value indicates a counter-clockwise rotation
             * while a negative value indicates a clockwise rotation.
             * <p>
             * The center of the arc is the center of the rectangle whose origin
             * is (<i>x</i>,&nbsp;<i>y</i>) and whose size is specified by the
             * <code>width</code> and <code>height</code> arguments.
             * <p>
             * The resulting arc covers an area
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * <p>
             * The angles are specified relative to the non-square extents of
             * the bounding rectangle such that 45 degrees always falls on the
             * line from the center of the ellipse to the upper right corner of
             * the bounding rectangle. As a result, if the bounding rectangle is
             * noticeably longer in one axis than the other, the angles to the
             * start and end of the arc segment will be skewed farther along the
             * longer axis of the bounds.
             */
            // @ts-ignore
            public abstract fillArc(x: number, y: number, width: number, height: number, startAngle: number, arcAngle: number): void;
            /**
             * Draws a sequence of connected lines defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * Each pair of (<i>x</i>,&nbsp;<i>y</i>) coordinates defines a point.
             * The figure is not closed if the first point
             * differs from the last point.
             */
            // @ts-ignore
            public abstract drawPolyline(xPoints: number, yPoints: number, nPoints: number): void;
            /**
             * Draws a closed polygon defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * Each pair of (<i>x</i>,&nbsp;<i>y</i>) coordinates defines a point.
             * <p>
             * This method draws the polygon defined by <code>nPoint</code> line
             * segments, where the first <code>nPoint&nbsp;-&nbsp;1</code>
             * line segments are line segments from
             * <code>(xPoints[i&nbsp;-&nbsp;1],&nbsp;yPoints[i&nbsp;-&nbsp;1])</code>
             * to <code>(xPoints[i],&nbsp;yPoints[i])</code>, for
             * 1&nbsp;&le;&nbsp;<i>i</i>&nbsp;&le;&nbsp;<code>nPoints</code>.
             * The figure is automatically closed by drawing a line connecting
             * the final point to the first point, if those points are different.
             */
            // @ts-ignore
            public abstract drawPolygon(xPoints: number, yPoints: number, nPoints: number): void;
            /**
             * Draws the outline of a polygon defined by the specified
             * <code>Polygon</code> object.
             */
            // @ts-ignore
            public drawPolygon(p: java.awt.Polygon): void;
            /**
             * Fills a closed polygon defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * <p>
             * This method draws the polygon defined by <code>nPoint</code> line
             * segments, where the first <code>nPoint&nbsp;-&nbsp;1</code>
             * line segments are line segments from
             * <code>(xPoints[i&nbsp;-&nbsp;1],&nbsp;yPoints[i&nbsp;-&nbsp;1])</code>
             * to <code>(xPoints[i],&nbsp;yPoints[i])</code>, for
             * 1&nbsp;&le;&nbsp;<i>i</i>&nbsp;&le;&nbsp;<code>nPoints</code>.
             * The figure is automatically closed by drawing a line connecting
             * the final point to the first point, if those points are different.
             * <p>
             * The area inside the polygon is defined using an
             * even-odd fill rule, also known as the alternating rule.
             */
            // @ts-ignore
            public abstract fillPolygon(xPoints: number, yPoints: number, nPoints: number): void;
            /**
             * Fills the polygon defined by the specified Polygon object with
             * the graphics context's current color.
             * <p>
             * The area inside the polygon is defined using an
             * even-odd fill rule, also known as the alternating rule.
             */
            // @ts-ignore
            public fillPolygon(p: java.awt.Polygon): void;
            /**
             * Draws the text given by the specified string, using this
             * graphics context's current font and color. The baseline of the
             * leftmost character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             */
            // @ts-ignore
            public abstract drawString(str: string, x: number, y: number): void;
            /**
             * Draws the text given by the specified character array, using this
             * graphics context's current font and color. The baseline of the
             * first character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             */
            // @ts-ignore
            public drawChars(data: string, offset: number, length: number, x: number, y: number): void;
            /**
             * Draws the text given by the specified byte array, using this
             * graphics context's current font and color. The baseline of the
             * first character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             * <p>
             * Use of this method is not recommended as each byte is interpreted
             * as a Unicode code point in the range 0 to 255, and so can only be
             * used to draw Latin characters in that range.
             */
            // @ts-ignore
            public drawBytes(data: number, offset: number, length: number, x: number, y: number): void;
            /**
             * Draws as much of the specified image as is currently available.
             * The image is drawn with its top-left corner at
             * (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's coordinate
             * space. Transparent pixels in the image do not affect whatever
             * pixels are already there.
             * <p>
             * This method returns immediately in all cases, even if the
             * complete image has not yet been loaded, and it has not been dithered
             * and converted for the current output device.
             * <p>
             * If the image has completely loaded and its pixels are
             * no longer being changed, then
             * <code>drawImage</code> returns <code>true</code>.
             * Otherwise, <code>drawImage</code> returns <code>false</code>
             * and as more of
             * the image becomes available
             * or it is time to draw another frame of animation,
             * the process that loads the image notifies
             * the specified image observer.
             */
            // @ts-ignore
            public abstract drawImage(img: java.awt.Image, x: number, y: number, observer: java.awt.image.ImageObserver): boolean;
            /**
             * Disposes of this graphics context and releases
             * any system resources that it is using.
             * A <code>Graphics</code> object cannot be used after
             * <code>dispose</code>has been called.
             * <p>
             * When a Java program runs, a large number of <code>Graphics</code>
             * objects can be created within a short time frame.
             * Although the finalization process of the garbage collector
             * also disposes of the same system resources, it is preferable
             * to manually free the associated resources by calling this
             * method rather than to rely on a finalization process which
             * may not run to completion for a long period of time.
             * <p>
             * Graphics objects which are provided as arguments to the
             * <code>paint</code> and <code>update</code> methods
             * of components are automatically released by the system when
             * those methods return. For efficiency, programmers should
             * call <code>dispose</code> when finished using
             * a <code>Graphics</code> object only if it was created
             * directly from a component or another <code>Graphics</code> object.
             */
            // @ts-ignore
            public abstract dispose(): void;
            /**
             * Disposes of this graphics context once it is no longer referenced.
             */
            // @ts-ignore
            public finalize(): void;
            /**
             * Returns a <code>String</code> object representing this
             * <code>Graphics</code> object's value.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the bounding rectangle of the current clipping area.
             */
            // @ts-ignore
            public getClipRect(): java.awt.Rectangle;
            /**
             * Returns true if the specified rectangular area might intersect
             * the current clipping area.
             * The coordinates of the specified rectangular area are in the
             * user coordinate space and are relative to the coordinate
             * system origin of this graphics context.
             * This method may use an algorithm that calculates a result quickly
             * but which sometimes might return true even if the specified
             * rectangular area does not intersect the clipping area.
             * The specific algorithm employed may thus trade off accuracy for
             * speed, but it will never return false unless it can guarantee
             * that the specified rectangular area does not intersect the
             * current clipping area.
             * The clipping area used by this method can represent the
             * intersection of the user clip as specified through the clip
             * methods of this graphics context as well as the clipping
             * associated with the device or image bounds and window visibility.
             */
            // @ts-ignore
            public hitClip(x: number, y: number, width: number, height: number): boolean;
            /**
             * Returns the bounding rectangle of the current clipping area.
             * The coordinates in the rectangle are relative to the coordinate
             * system origin of this graphics context.  This method differs
             * from {@link #getClipBounds() getClipBounds} in that an existing
             * rectangle is used instead of allocating a new one.
             * This method refers to the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns the
             * specified <code>Rectangle</code>.
             */
            // @ts-ignore
            public getClipBounds(r: java.awt.Rectangle): java.awt.Rectangle;
        }
    }
}
