declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ConvolveOp extends java.lang.Object {
                /**
                 * Constructs a ConvolveOp given a Kernel, an edge condition, and a
                 * RenderingHints object (which may be null).
                 */
                // @ts-ignore
                constructor(kernel: java.awt.image.Kernel, edgeCondition: number, hints: java.awt.RenderingHints)
                /**
                 * Constructs a ConvolveOp given a Kernel.  The edge condition
                 * will be EDGE_ZERO_FILL.
                 */
                // @ts-ignore
                constructor(kernel: java.awt.image.Kernel)
                // @ts-ignore
                public static EDGE_ZERO_FILL: number;
                // @ts-ignore
                public static EDGE_NO_OP: number;
                /**
                 * Returns the edge condition.
                 */
                // @ts-ignore
                public getEdgeCondition(): number;
                /**
                 * Returns the Kernel.
                 */
                // @ts-ignore
                public getKernel(): java.awt.image.Kernel;
                /**
                 * Performs a convolution on BufferedImages.  Each component of the
                 * source image will be convolved (including the alpha component, if
                 * present).
                 * If the color model in the source image is not the same as that
                 * in the destination image, the pixels will be converted
                 * in the destination.  If the destination image is null,
                 * a BufferedImage will be created with the source ColorModel.
                 * The IllegalArgumentException may be thrown if the source is the
                 * same as the destination.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * Performs a convolution on Rasters.  Each band of the source Raster
                 * will be convolved.
                 * The source and destination must have the same number of bands.
                 * If the destination Raster is null, a new Raster will be created.
                 * The IllegalArgumentException may be thrown if the source is
                 * the same as the destination.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Creates a zeroed destination image with the correct size and number
                 * of bands.  If destCM is null, an appropriate ColorModel will be used.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Creates a zeroed destination Raster with the correct size and number
                 * of bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the filtered destination image.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D;
                /**
                 * Returns the bounding box of the filtered destination Raster.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Returns the location of the destination point given a
                 * point in the source.  If dstPt is non-null, it will
                 * be used to hold the return value.  Since this is not a geometric
                 * operation, the srcPt will equal the dstPt.
                 */
                // @ts-ignore
                public getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the rendering hints for this op.
                 */
                // @ts-ignore
                public getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
