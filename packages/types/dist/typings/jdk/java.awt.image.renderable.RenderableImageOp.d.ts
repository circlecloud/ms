// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                 class RenderableImageOp extends java.lang.Object {
                    /**
                     * Constructs a RenderedImageOp given a
                     * ContextualRenderedImageFactory object, and
                     * a ParameterBlock containing RenderableImage sources and other
                     * parameters.  Any RenderedImage sources referenced by the
                     * ParameterBlock will be ignored.
                     */
                    // @ts-ignore
                    constructor(CRIF: java.awt.image.renderable.ContextualRenderedImageFactory, paramBlock: java.awt.image.renderable.ParameterBlock)
                    /**
                     * Returns a vector of RenderableImages that are the sources of
                     * image data for this RenderableImage. Note that this method may
                     * return an empty vector, to indicate that the image has no sources,
                     * or null, to indicate that no information is available.
                     */
                    // @ts-ignore
                    public getSources(): java.util.Vector;
                    /**
                     * Gets a property from the property set of this image.
                     * If the property name is not recognized, java.awt.Image.UndefinedProperty
                     * will be returned.
                     */
                    // @ts-ignore
                    public getProperty(name: string): java.lang.Object;
                    /**
                     * Return a list of names recognized by getProperty.
                     */
                    // @ts-ignore
                    public getPropertyNames(): java.lang.String[];
                    /**
                     * Returns true if successive renderings (that is, calls to
                     * createRendering() or createScaledRendering()) with the same arguments
                     * may produce different results.  This method may be used to
                     * determine whether an existing rendering may be cached and
                     * reused.  The CRIF's isDynamic method will be called.
                     */
                    // @ts-ignore
                    public isDynamic(): boolean;
                    /**
                     * Gets the width in user coordinate space.  By convention, the
                     * usual width of a RenderableImage is equal to the image's aspect
                     * ratio (width divided by height).
                     */
                    // @ts-ignore
                    public getWidth(): number;
                    /**
                     * Gets the height in user coordinate space.  By convention, the
                     * usual height of a RenderedImage is equal to 1.0F.
                     */
                    // @ts-ignore
                    public getHeight(): number;
                    /**
                     * Gets the minimum X coordinate of the rendering-independent image data.
                     */
                    // @ts-ignore
                    public getMinX(): number;
                    /**
                     * Gets the minimum Y coordinate of the rendering-independent image data.
                     */
                    // @ts-ignore
                    public getMinY(): number;
                    /**
                     * Change the current ParameterBlock of the operation, allowing
                     * editing of image rendering chains.  The effects of such a
                     * change will be visible when a new rendering is created from
                     * this RenderableImageOp or any dependent RenderableImageOp.
                     */
                    // @ts-ignore
                    public setParameterBlock(paramBlock: java.awt.image.renderable.ParameterBlock): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Returns a reference to the current parameter block.
                     */
                    // @ts-ignore
                    public getParameterBlock(): java.awt.image.renderable.ParameterBlock;
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
                    public createScaledRendering(w: number, h: number, hints: java.awt.RenderingHints): java.awt.image.RenderedImage;
                    /**
                     * Gets a RenderedImage instance of this image with a default
                     * width and height in pixels.  The RenderContext is built
                     * automatically with an appropriate usr2dev transform and an area
                     * of interest of the full image.  All the rendering hints come
                     * from hints passed in.  Implementors of this interface must be
                     * sure that there is a defined default width and height.
                     */
                    // @ts-ignore
                    public createDefaultRendering(): java.awt.image.RenderedImage;
                    /**
                     * Creates a RenderedImage which represents this
                     * RenderableImageOp (including its Renderable sources) rendered
                     * according to the given RenderContext.
                     * <p> This method supports chaining of either Renderable or
                     * RenderedImage operations.  If sources in
                     * the ParameterBlock used to construct the RenderableImageOp are
                     * RenderableImages, then a three step process is followed:
                     * <ol>
                     * <li> mapRenderContext() is called on the associated CRIF for
                     * each RenderableImage source;
                     * <li> createRendering() is called on each of the RenderableImage sources
                     * using the backwards-mapped RenderContexts obtained in step 1,
                     * resulting in a rendering of each source;
                     * <li> ContextualRenderedImageFactory.create() is called
                     * with a new ParameterBlock containing the parameters of
                     * the RenderableImageOp and the RenderedImages that were created by the
                     * createRendering() calls.
                     * </ol>
                     * <p> If the elements of the source Vector of
                     * the ParameterBlock used to construct the RenderableImageOp are
                     * instances of RenderedImage, then the CRIF.create() method is
                     * called immediately using the original ParameterBlock.
                     * This provides a basis case for the recursion.
                     * <p> The created RenderedImage may have a property identified
                     * by the String HINTS_OBSERVED to indicate which RenderingHints
                     * (from the RenderContext) were used to create the image.
                     * In addition any RenderedImages
                     * that are obtained via the getSources() method on the created
                     * RenderedImage may have such a property.
                     */
                    // @ts-ignore
                    public createRendering(renderContext: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage;
                }
            }
        }
    }
}
