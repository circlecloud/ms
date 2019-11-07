// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                interface RenderedImageFactory {
                    /**
                     * Creates a RenderedImage representing the results of an imaging
                     * operation (or chain of operations) for a given ParameterBlock and
                     * RenderingHints.  The RIF may also query any source images
                     * referenced by the ParameterBlock for their dimensions,
                     * SampleModels, properties, etc., as necessary.
                     * <p> The create() method can return null if the
                     * RenderedImageFactory is not capable of producing output for the
                     * given set of source images and parameters.  For example, if a
                     * RenderedImageFactory is only capable of performing a 3x3
                     * convolution on single-banded image data, and the source image has
                     * multiple bands or the convolution Kernel is 5x5, null should be
                     * returned.
                     * <p> Hints should be taken into account, but can be ignored.
                     * The created RenderedImage may have a property identified
                     * by the String HINTS_OBSERVED to indicate which RenderingHints
                     * were used to create the image.  In addition any RenderedImages
                     * that are obtained via the getSources() method on the created
                     * RenderedImage may have such a property.
                     */
                    // @ts-ignore
                     create(paramBlock: java.awt.image.renderable.ParameterBlock, hints: java.awt.RenderingHints): java.awt.image.RenderedImage;
                }
            }
        }
    }
}
