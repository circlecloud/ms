// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                interface RenderableImage {
                    // @ts-ignore
                     HINTS_OBSERVED: string;
                    /**
                     * Returns a vector of RenderableImages that are the sources of
                     * image data for this RenderableImage. Note that this method may
                     * return an empty vector, to indicate that the image has no sources,
                     * or null, to indicate that no information is available.
                     */
                    // @ts-ignore
                     getSources(): java.util.Vector;
                    /**
                     * Gets a property from the property set of this image.
                     * If the property name is not recognized, java.awt.Image.UndefinedProperty
                     * will be returned.
                     */
                    // @ts-ignore
                     getProperty(name: string): java.lang.Object;
                    /**
                     * Returns a list of names recognized by getProperty.
                     */
                    // @ts-ignore
                     getPropertyNames(): java.lang.String[];
                    /**
                     * Returns true if successive renderings (that is, calls to
                     * createRendering() or createScaledRendering()) with the same arguments
                     * may produce different results.  This method may be used to
                     * determine whether an existing rendering may be cached and
                     * reused.  It is always safe to return true.
                     */
                    // @ts-ignore
                     isDynamic(): boolean;
                    /**
                     * Gets the width in user coordinate space.  By convention, the
                     * usual width of a RenderableImage is equal to the image's aspect
                     * ratio (width divided by height).
                     */
                    // @ts-ignore
                     getWidth(): number;
                    /**
                     * Gets the height in user coordinate space.  By convention, the
                     * usual height of a RenderedImage is equal to 1.0F.
                     */
                    // @ts-ignore
                     getHeight(): number;
                    /**
                     * Gets the minimum X coordinate of the rendering-independent image data.
                     */
                    // @ts-ignore
                     getMinX(): number;
                    /**
                     * Gets the minimum Y coordinate of the rendering-independent image data.
                     */
                    // @ts-ignore
                     getMinY(): number;
                    /**
                     * Creates a RenderedImage instance of this image with width w, and
                     * height h in pixels.  The RenderContext is built automatically
                     * with an appropriate usr2dev transform and an area of interest
                     * of the full image.  All the rendering hints come from hints
                     * passed in.
                     * <p> If w == 0, it will be taken to equal
                     * Math.round(h*(getWidth()/getHeight())).
                     * Similarly, if h == 0, it will be taken to equal
                     * Math.round(w*(getHeight()/getWidth())).  One of
                     * w or h must be non-zero or else an IllegalArgumentException
                     * will be thrown.
                     * <p> The created RenderedImage may have a property identified
                     * by the String HINTS_OBSERVED to indicate which RenderingHints
                     * were used to create the image.  In addition any RenderedImages
                     * that are obtained via the getSources() method on the created
                     * RenderedImage may have such a property.
                     */
                    // @ts-ignore
                     createScaledRendering(w: number, h: number, hints: java.awt.RenderingHints): java.awt.image.RenderedImage;
                    /**
                     * Returnd a RenderedImage instance of this image with a default
                     * width and height in pixels.  The RenderContext is built
                     * automatically with an appropriate usr2dev transform and an area
                     * of interest of the full image.  The rendering hints are
                     * empty.  createDefaultRendering may make use of a stored
                     * rendering for speed.
                     */
                    // @ts-ignore
                     createDefaultRendering(): java.awt.image.RenderedImage;
                    /**
                     * Creates a RenderedImage that represented a rendering of this image
                     * using a given RenderContext.  This is the most general way to obtain a
                     * rendering of a RenderableImage.
                     * <p> The created RenderedImage may have a property identified
                     * by the String HINTS_OBSERVED to indicate which RenderingHints
                     * (from the RenderContext) were used to create the image.
                     * In addition any RenderedImages
                     * that are obtained via the getSources() method on the created
                     * RenderedImage may have such a property.
                     */
                    // @ts-ignore
                     createRendering(renderContext: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage;
                }
            }
        }
    }
}
