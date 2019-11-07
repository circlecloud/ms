declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                interface ContextualRenderedImageFactory {
                    /**
                     * Maps the operation's output RenderContext into a RenderContext
                     * for each of the operation's sources.  This is useful for
                     * operations that can be expressed in whole or in part simply as
                     * alterations in the RenderContext, such as an affine mapping, or
                     * operations that wish to obtain lower quality renderings of
                     * their sources in order to save processing effort or
                     * transmission bandwith.  Some operations, such as blur, can also
                     * use this mechanism to avoid obtaining sources of higher quality
                     * than necessary.
                     */
                    // @ts-ignore
                     mapRenderContext(i: number, renderContext: java.awt.image.renderable.RenderContext, paramBlock: java.awt.image.renderable.ParameterBlock, image: java.awt.image.renderable.RenderableImage): java.awt.image.renderable.RenderContext;
                    /**
                     * Creates a rendering, given a RenderContext and a ParameterBlock
                     * containing the operation's sources and parameters.  The output
                     * is a RenderedImage that takes the RenderContext into account to
                     * determine its dimensions and placement on the image plane.
                     * This method houses the "intelligence" that allows a
                     * rendering-independent operation to adapt to a specific
                     * RenderContext.
                     */
                    // @ts-ignore
                     create(renderContext: java.awt.image.renderable.RenderContext, paramBlock: java.awt.image.renderable.ParameterBlock): java.awt.image.RenderedImage;
                    /**
                     * Returns the bounding box for the output of the operation,
                     * performed on a given set of sources, in rendering-independent
                     * space.  The bounds are returned as a Rectangle2D, that is, an
                     * axis-aligned rectangle with floating-point corner coordinates.
                     */
                    // @ts-ignore
                     getBounds2D(paramBlock: java.awt.image.renderable.ParameterBlock): java.awt.geom.Rectangle2D;
                    /**
                     * Gets the appropriate instance of the property specified by the name
                     * parameter.  This method must determine which instance of a property to
                     * return when there are multiple sources that each specify the property.
                     */
                    // @ts-ignore
                     getProperty(paramBlock: java.awt.image.renderable.ParameterBlock, name: string): java.lang.Object;
                    /**
                     * Returns a list of names recognized by getProperty.
                     */
                    // @ts-ignore
                     getPropertyNames(): java.lang.String[];
                    /**
                     * Returns true if successive renderings (that is, calls to
                     * create(RenderContext, ParameterBlock)) with the same arguments
                     * may produce different results.  This method may be used to
                     * determine whether an existing rendering may be cached and
                     * reused.  It is always safe to return true.
                     */
                    // @ts-ignore
                     isDynamic(): boolean;
                }
            }
        }
    }
}
