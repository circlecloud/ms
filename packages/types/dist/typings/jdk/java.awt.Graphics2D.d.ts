// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class Graphics2D extends java.awt.Graphics {
            /**
             * Constructs a new <code>Graphics2D</code> object.  Since
             * <code>Graphics2D</code> is an abstract class, and since it must be
             * customized by subclasses for different output devices,
             * <code>Graphics2D</code> objects cannot be created directly.
             * Instead, <code>Graphics2D</code> objects must be obtained from another
             * <code>Graphics2D</code> object, created by a
             * <code>Component</code>, or obtained from images such as
             * {@link BufferedImage} objects.
             */
            // @ts-ignore
            constructor()
            /**
             * Draws a 3-D highlighted outline of the specified rectangle.
             * The edges of the rectangle are highlighted so that they
             * appear to be beveled and lit from the upper left corner.
             * <p>
             * The colors used for the highlighting effect are determined
             * based on the current color.
             * The resulting rectangle covers an area that is
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.  This method
             * uses the current <code>Color</code> exclusively and ignores
             * the current <code>Paint</code>.
             */
            // @ts-ignore
            public draw3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
            /**
             * Paints a 3-D highlighted rectangle filled with the current color.
             * The edges of the rectangle are highlighted so that it appears
             * as if the edges were beveled and lit from the upper left corner.
             * The colors used for the highlighting effect and for filling are
             * determined from the current <code>Color</code>.  This method uses
             * the current <code>Color</code> exclusively and ignores the current
             * <code>Paint</code>.
             */
            // @ts-ignore
            public fill3DRect(x: number, y: number, width: number, height: number, raised: boolean): void;
            /**
             * Strokes the outline of a <code>Shape</code> using the settings of the
             * current <code>Graphics2D</code> context.  The rendering attributes
             * applied include the <code>Clip</code>, <code>Transform</code>,
             * <code>Paint</code>, <code>Composite</code> and
             * <code>Stroke</code> attributes.
             */
            // @ts-ignore
            public abstract draw(s: java.awt.Shape): void;
            /**
             * Renders an image, applying a transform from image space into user space
             * before drawing.
             * The transformation from user space into device space is done with
             * the current <code>Transform</code> in the <code>Graphics2D</code>.
             * The specified transformation is applied to the image before the
             * transform attribute in the <code>Graphics2D</code> context is applied.
             * The rendering attributes applied include the <code>Clip</code>,
             * <code>Transform</code>, and <code>Composite</code> attributes.
             * Note that no rendering is done if the specified transform is
             * noninvertible.
             */
            // @ts-ignore
            public abstract drawImage(img: java.awt.Image, xform: java.awt.geom.AffineTransform, obs: java.awt.image.ImageObserver): boolean;
            /**
             * Renders a {@link RenderedImage},
             * applying a transform from image
             * space into user space before drawing.
             * The transformation from user space into device space is done with
             * the current <code>Transform</code> in the <code>Graphics2D</code>.
             * The specified transformation is applied to the image before the
             * transform attribute in the <code>Graphics2D</code> context is applied.
             * The rendering attributes applied include the <code>Clip</code>,
             * <code>Transform</code>, and <code>Composite</code> attributes. Note
             * that no rendering is done if the specified transform is
             * noninvertible.
             */
            // @ts-ignore
            public abstract drawRenderedImage(img: java.awt.image.RenderedImage, xform: java.awt.geom.AffineTransform): void;
            /**
             * Renders a
             * {@link RenderableImage},
             * applying a transform from image space into user space before drawing.
             * The transformation from user space into device space is done with
             * the current <code>Transform</code> in the <code>Graphics2D</code>.
             * The specified transformation is applied to the image before the
             * transform attribute in the <code>Graphics2D</code> context is applied.
             * The rendering attributes applied include the <code>Clip</code>,
             * <code>Transform</code>, and <code>Composite</code> attributes. Note
             * that no rendering is done if the specified transform is
             * noninvertible.
             * <p>
             * Rendering hints set on the <code>Graphics2D</code> object might
             * be used in rendering the <code>RenderableImage</code>.
             * If explicit control is required over specific hints recognized by a
             * specific <code>RenderableImage</code>, or if knowledge of which hints
             * are used is required, then a <code>RenderedImage</code> should be
             * obtained directly from the <code>RenderableImage</code>
             * and rendered using
             * {@link #drawRenderedImage(RenderedImage, AffineTransform) drawRenderedImage}.
             */
            // @ts-ignore
            public abstract drawRenderableImage(img: java.awt.image.renderable.RenderableImage, xform: java.awt.geom.AffineTransform): void;
            /**
             * Renders the text of the specified <code>String</code>, using the
             * current text attribute state in the <code>Graphics2D</code> context.
             * The baseline of the
             * first character is at position (<i>x</i>,&nbsp;<i>y</i>) in
             * the User Space.
             * The rendering attributes applied include the <code>Clip</code>,
             * <code>Transform</code>, <code>Paint</code>, <code>Font</code> and
             * <code>Composite</code> attributes.  For characters in script
             * systems such as Hebrew and Arabic, the glyphs can be rendered from
             * right to left, in which case the coordinate supplied is the
             * location of the leftmost character on the baseline.
             */
            // @ts-ignore
            public abstract drawString(str: string, x: number, y: number): void;
            /**
             * Renders the text of the specified
             * {@link GlyphVector} using
             * the <code>Graphics2D</code> context's rendering attributes.
             * The rendering attributes applied include the <code>Clip</code>,
             * <code>Transform</code>, <code>Paint</code>, and
             * <code>Composite</code> attributes.  The <code>GlyphVector</code>
             * specifies individual glyphs from a {@link Font}.
             * The <code>GlyphVector</code> can also contain the glyph positions.
             * This is the fastest way to render a set of characters to the
             * screen.
             */
            // @ts-ignore
            public abstract drawGlyphVector(g: java.awt.font.GlyphVector, x: number, y: number): void;
            /**
             * Fills the interior of a <code>Shape</code> using the settings of the
             * <code>Graphics2D</code> context. The rendering attributes applied
             * include the <code>Clip</code>, <code>Transform</code>,
             * <code>Paint</code>, and <code>Composite</code>.
             */
            // @ts-ignore
            public abstract fill(s: java.awt.Shape): void;
            /**
             * Checks whether or not the specified <code>Shape</code> intersects
             * the specified {@link Rectangle}, which is in device
             * space. If <code>onStroke</code> is false, this method checks
             * whether or not the interior of the specified <code>Shape</code>
             * intersects the specified <code>Rectangle</code>.  If
             * <code>onStroke</code> is <code>true</code>, this method checks
             * whether or not the <code>Stroke</code> of the specified
             * <code>Shape</code> outline intersects the specified
             * <code>Rectangle</code>.
             * The rendering attributes taken into account include the
             * <code>Clip</code>, <code>Transform</code>, and <code>Stroke</code>
             * attributes.
             */
            // @ts-ignore
            public abstract hit(rect: java.awt.Rectangle, s: java.awt.Shape, onStroke: boolean): boolean;
            /**
             * Returns the device configuration associated with this
             * <code>Graphics2D</code>.
             */
            // @ts-ignore
            public abstract getDeviceConfiguration(): java.awt.GraphicsConfiguration;
            /**
             * Sets the <code>Composite</code> for the <code>Graphics2D</code> context.
             * The <code>Composite</code> is used in all drawing methods such as
             * <code>drawImage</code>, <code>drawString</code>, <code>draw</code>,
             * and <code>fill</code>.  It specifies how new pixels are to be combined
             * with the existing pixels on the graphics device during the rendering
             * process.
             * <p>If this <code>Graphics2D</code> context is drawing to a
             * <code>Component</code> on the display screen and the
             * <code>Composite</code> is a custom object rather than an
             * instance of the <code>AlphaComposite</code> class, and if
             * there is a security manager, its <code>checkPermission</code>
             * method is called with an <code>AWTPermission("readDisplayPixels")</code>
             * permission.
             */
            // @ts-ignore
            public abstract setComposite(comp: java.awt.Composite): void;
            /**
             * Sets the <code>Paint</code> attribute for the
             * <code>Graphics2D</code> context.  Calling this method
             * with a <code>null</code> <code>Paint</code> object does
             * not have any effect on the current <code>Paint</code> attribute
             * of this <code>Graphics2D</code>.
             */
            // @ts-ignore
            public abstract setPaint(paint: java.awt.Paint): void;
            /**
             * Sets the <code>Stroke</code> for the <code>Graphics2D</code> context.
             */
            // @ts-ignore
            public abstract setStroke(s: java.awt.Stroke): void;
            /**
             * Sets the value of a single preference for the rendering algorithms.
             * Hint categories include controls for rendering quality and overall
             * time/quality trade-off in the rendering process.  Refer to the
             * <code>RenderingHints</code> class for definitions of some common
             * keys and values.
             */
            // @ts-ignore
            public abstract setRenderingHint(hintKey: java.awt.RenderingHints.Key, hintValue: java.lang.Object): void;
            /**
             * Returns the value of a single preference for the rendering algorithms.
             * Hint categories include controls for rendering quality and overall
             * time/quality trade-off in the rendering process.  Refer to the
             * <code>RenderingHints</code> class for definitions of some common
             * keys and values.
             */
            // @ts-ignore
            public abstract getRenderingHint(hintKey: java.awt.RenderingHints.Key): java.lang.Object;
            /**
             * Replaces the values of all preferences for the rendering
             * algorithms with the specified <code>hints</code>.
             * The existing values for all rendering hints are discarded and
             * the new set of known hints and values are initialized from the
             * specified {@link Map} object.
             * Hint categories include controls for rendering quality and
             * overall time/quality trade-off in the rendering process.
             * Refer to the <code>RenderingHints</code> class for definitions of
             * some common keys and values.
             */
            // @ts-ignore
            public abstract setRenderingHints(hints: java.util.Map): void;
            /**
             * Sets the values of an arbitrary number of preferences for the
             * rendering algorithms.
             * Only values for the rendering hints that are present in the
             * specified <code>Map</code> object are modified.
             * All other preferences not present in the specified
             * object are left unmodified.
             * Hint categories include controls for rendering quality and
             * overall time/quality trade-off in the rendering process.
             * Refer to the <code>RenderingHints</code> class for definitions of
             * some common keys and values.
             */
            // @ts-ignore
            public abstract addRenderingHints(hints: java.util.Map): void;
            /**
             * Gets the preferences for the rendering algorithms.  Hint categories
             * include controls for rendering quality and overall time/quality
             * trade-off in the rendering process.
             * Returns all of the hint key/value pairs that were ever specified in
             * one operation.  Refer to the
             * <code>RenderingHints</code> class for definitions of some common
             * keys and values.
             */
            // @ts-ignore
            public abstract getRenderingHints(): java.awt.RenderingHints;
            /**
             * Translates the origin of the <code>Graphics2D</code> context to the
             * point (<i>x</i>,&nbsp;<i>y</i>) in the current coordinate system.
             * Modifies the <code>Graphics2D</code> context so that its new origin
             * corresponds to the point (<i>x</i>,&nbsp;<i>y</i>) in the
             * <code>Graphics2D</code> context's former coordinate system.  All
             * coordinates used in subsequent rendering operations on this graphics
             * context are relative to this new origin.
             */
            // @ts-ignore
            public abstract translate(x: number, y: number): void;
            /**
             * Concatenates the current <code>Graphics2D</code>
             * <code>Transform</code> with a rotation transform.
             * Subsequent rendering is rotated by the specified radians relative
             * to the previous origin.
             * This is equivalent to calling <code>transform(R)</code>, where R is an
             * <code>AffineTransform</code> represented by the following matrix:
             * <pre>
             * [   cos(theta)    -sin(theta)    0   ]
             * [   sin(theta)     cos(theta)    0   ]
             * [       0              0         1   ]
             * </pre>
             * Rotating with a positive angle theta rotates points on the positive
             * x axis toward the positive y axis.
             */
            // @ts-ignore
            public abstract rotate(theta: number): void;
            /**
             * Concatenates the current <code>Graphics2D</code>
             * <code>Transform</code> with a scaling transformation
             * Subsequent rendering is resized according to the specified scaling
             * factors relative to the previous scaling.
             * This is equivalent to calling <code>transform(S)</code>, where S is an
             * <code>AffineTransform</code> represented by the following matrix:
             * <pre>
             * [   sx   0    0   ]
             * [   0    sy   0   ]
             * [   0    0    1   ]
             * </pre>
             */
            // @ts-ignore
            public abstract scale(sx: number, sy: number): void;
            /**
             * Concatenates the current <code>Graphics2D</code>
             * <code>Transform</code> with a shearing transform.
             * Subsequent renderings are sheared by the specified
             * multiplier relative to the previous position.
             * This is equivalent to calling <code>transform(SH)</code>, where SH
             * is an <code>AffineTransform</code> represented by the following
             * matrix:
             * <pre>
             * [   1   shx   0   ]
             * [  shy   1    0   ]
             * [   0    0    1   ]
             * </pre>
             */
            // @ts-ignore
            public abstract shear(shx: number, shy: number): void;
            /**
             * Composes an <code>AffineTransform</code> object with the
             * <code>Transform</code> in this <code>Graphics2D</code> according
             * to the rule last-specified-first-applied.  If the current
             * <code>Transform</code> is Cx, the result of composition
             * with Tx is a new <code>Transform</code> Cx'.  Cx' becomes the
             * current <code>Transform</code> for this <code>Graphics2D</code>.
             * Transforming a point p by the updated <code>Transform</code> Cx' is
             * equivalent to first transforming p by Tx and then transforming
             * the result by the original <code>Transform</code> Cx.  In other
             * words, Cx'(p) = Cx(Tx(p)).  A copy of the Tx is made, if necessary,
             * so further modifications to Tx do not affect rendering.
             */
            // @ts-ignore
            public abstract transform(Tx: java.awt.geom.AffineTransform): void;
            /**
             * Overwrites the Transform in the <code>Graphics2D</code> context.
             * WARNING: This method should <b>never</b> be used to apply a new
             * coordinate transform on top of an existing transform because the
             * <code>Graphics2D</code> might already have a transform that is
             * needed for other purposes, such as rendering Swing
             * components or applying a scaling transformation to adjust for the
             * resolution of a printer.
             * <p>To add a coordinate transform, use the
             * <code>transform</code>, <code>rotate</code>, <code>scale</code>,
             * or <code>shear</code> methods.  The <code>setTransform</code>
             * method is intended only for restoring the original
             * <code>Graphics2D</code> transform after rendering, as shown in this
             * example:
             * <pre>
             * // Get the current transform
             * AffineTransform saveAT = g2.getTransform();
             * // Perform transformation
             * g2d.transform(...);
             * // Render
             * g2d.draw(...);
             * // Restore original transform
             * g2d.setTransform(saveAT);
             * </pre>
             */
            // @ts-ignore
            public abstract setTransform(Tx: java.awt.geom.AffineTransform): void;
            /**
             * Returns a copy of the current <code>Transform</code> in the
             * <code>Graphics2D</code> context.
             */
            // @ts-ignore
            public abstract getTransform(): java.awt.geom.AffineTransform;
            /**
             * Returns the current <code>Paint</code> of the
             * <code>Graphics2D</code> context.
             */
            // @ts-ignore
            public abstract getPaint(): java.awt.Paint;
            /**
             * Returns the current <code>Composite</code> in the
             * <code>Graphics2D</code> context.
             */
            // @ts-ignore
            public abstract getComposite(): java.awt.Composite;
            /**
             * Sets the background color for the <code>Graphics2D</code> context.
             * The background color is used for clearing a region.
             * When a <code>Graphics2D</code> is constructed for a
             * <code>Component</code>, the background color is
             * inherited from the <code>Component</code>. Setting the background color
             * in the <code>Graphics2D</code> context only affects the subsequent
             * <code>clearRect</code> calls and not the background color of the
             * <code>Component</code>.  To change the background
             * of the <code>Component</code>, use appropriate methods of
             * the <code>Component</code>.
             */
            // @ts-ignore
            public abstract setBackground(color: java.awt.Color): void;
            /**
             * Returns the background color used for clearing a region.
             */
            // @ts-ignore
            public abstract getBackground(): java.awt.Color;
            /**
             * Returns the current <code>Stroke</code> in the
             * <code>Graphics2D</code> context.
             */
            // @ts-ignore
            public abstract getStroke(): java.awt.Stroke;
            /**
             * Intersects the current <code>Clip</code> with the interior of the
             * specified <code>Shape</code> and sets the <code>Clip</code> to the
             * resulting intersection.  The specified <code>Shape</code> is
             * transformed with the current <code>Graphics2D</code>
             * <code>Transform</code> before being intersected with the current
             * <code>Clip</code>.  This method is used to make the current
             * <code>Clip</code> smaller.
             * To make the <code>Clip</code> larger, use <code>setClip</code>.
             * The <i>user clip</i> modified by this method is independent of the
             * clipping associated with device bounds and visibility.  If no clip has
             * previously been set, or if the clip has been cleared using
             * {@link Graphics#setClip(Shape) setClip} with a <code>null</code>
             * argument, the specified <code>Shape</code> becomes the new
             * user clip.
             */
            // @ts-ignore
            public abstract clip(s: java.awt.Shape): void;
            /**
             * Get the rendering context of the <code>Font</code> within this
             * <code>Graphics2D</code> context.
             * The {@link FontRenderContext}
             * encapsulates application hints such as anti-aliasing and
             * fractional metrics, as well as target device specific information
             * such as dots-per-inch.  This information should be provided by the
             * application when using objects that perform typographical
             * formatting, such as <code>Font</code> and
             * <code>TextLayout</code>.  This information should also be provided
             * by applications that perform their own layout and need accurate
             * measurements of various characteristics of glyphs such as advance
             * and line height when various rendering hints have been applied to
             * the text rendering.
             */
            // @ts-ignore
            public abstract getFontRenderContext(): java.awt.font.FontRenderContext;
        }
    }
}
