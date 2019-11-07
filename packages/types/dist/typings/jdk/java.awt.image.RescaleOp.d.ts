// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class RescaleOp extends java.lang.Object {
                /**
                 * Constructs a new RescaleOp with the desired scale factors
                 * and offsets.  The length of the scaleFactor and offset arrays
                 * must meet the restrictions stated in the class comments above.
                 * The RenderingHints argument may be null.
                 */
                // @ts-ignore
                constructor(scaleFactors: number, offsets: number, hints: java.awt.RenderingHints)
                /**
                 * Constructs a new RescaleOp with the desired scale factor
                 * and offset.  The scaleFactor and offset will be applied to
                 * all bands in a source Raster and to all color (but not alpha)
                 * components in a BufferedImage.
                 * The RenderingHints argument may be null.
                 */
                // @ts-ignore
                constructor(scaleFactor: number, offset: number, hints: java.awt.RenderingHints)
                /**
                 * Returns the scale factors in the given array. The array is also
                 * returned for convenience.  If scaleFactors is null, a new array
                 * will be allocated.
                 */
                // @ts-ignore
                public getScaleFactors(scaleFactors: number): number[];
                /**
                 * Returns the offsets in the given array. The array is also returned
                 * for convenience.  If offsets is null, a new array
                 * will be allocated.
                 */
                // @ts-ignore
                public getOffsets(offsets: number): number[];
                /**
                 * Returns the number of scaling factors and offsets used in this
                 * RescaleOp.
                 */
                // @ts-ignore
                public getNumFactors(): number;
                /**
                 * Rescales the source BufferedImage.
                 * If the color model in the source image is not the same as that
                 * in the destination image, the pixels will be converted
                 * in the destination.  If the destination image is null,
                 * a BufferedImage will be created with the source ColorModel.
                 * An IllegalArgumentException may be thrown if the number of
                 * scaling factors/offsets in this object does not meet the
                 * restrictions stated in the class comments above, or if the
                 * source image has an IndexColorModel.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * Rescales the pixel data in the source Raster.
                 * If the destination Raster is null, a new Raster will be created.
                 * The source and destination must have the same number of bands.
                 * Otherwise, an IllegalArgumentException is thrown.
                 * Note that the number of scaling factors/offsets in this object must
                 * meet the restrictions stated in the class comments above.
                 * Otherwise, an IllegalArgumentException is thrown.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the rescaled destination image.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D;
                /**
                 * Returns the bounding box of the rescaled destination Raster.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Creates a zeroed-destination <code>Raster</code> with the correct
                 * size and number of bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
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
