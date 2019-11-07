declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface BufferedImageOp {
                /**
                 * Performs a single-input/single-output operation on a
                 * <CODE>BufferedImage</CODE>.
                 * If the color models for the two images do not match, a color
                 * conversion into the destination color model is performed.
                 * If the destination image is null,
                 * a <CODE>BufferedImage</CODE> with an appropriate <CODE>ColorModel</CODE>
                 * is created.
                 * <p>
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * and/or destination image is incompatible with the types of images       $
                 * allowed by the class implementing this filter.
                 */
                // @ts-ignore
                 filter(src: java.awt.image.BufferedImage, dest: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * Returns the bounding box of the filtered destination image.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * image is incompatible with the types of images allowed
                 * by the class implementing this filter.
                 */
                // @ts-ignore
                 getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * image is incompatible with the types of images allowed
                 * by the class implementing this filter.
                 */
                // @ts-ignore
                 createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Returns the location of the corresponding destination point given a
                 * point in the source image.  If <CODE>dstPt</CODE> is specified, it
                 * is used to hold the return value.
                 */
                // @ts-ignore
                 getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the rendering hints for this operation.
                 */
                // @ts-ignore
                 getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
