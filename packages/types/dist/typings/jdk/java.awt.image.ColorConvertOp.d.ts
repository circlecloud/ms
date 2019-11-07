// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ColorConvertOp extends java.lang.Object {
                /**
                 * Constructs a new ColorConvertOp which will convert
                 * from a source color space to a destination color space.
                 * The RenderingHints argument may be null.
                 * This Op can be used only with BufferedImages, and will convert
                 * directly from the ColorSpace of the source image to that of the
                 * destination.  The destination argument of the filter method
                 * cannot be specified as null.
                 */
                // @ts-ignore
                constructor(hints: java.awt.RenderingHints)
                /**
                 * Constructs a new ColorConvertOp from a ColorSpace object.
                 * The RenderingHints argument may be null.  This
                 * Op can be used only with BufferedImages, and is primarily useful
                 * when the {@link #filter(BufferedImage, BufferedImage) filter}
                 * method is invoked with a destination argument of null.
                 * In that case, the ColorSpace defines the destination color space
                 * for the destination created by the filter method.  Otherwise, the
                 * ColorSpace defines an intermediate space to which the source is
                 * converted before being converted to the destination space.
                 */
                // @ts-ignore
                constructor(cspace: java.awt.color.ColorSpace, hints: java.awt.RenderingHints)
                /**
                 * Constructs a new ColorConvertOp from two ColorSpace objects.
                 * The RenderingHints argument may be null.
                 * This Op is primarily useful for calling the filter method on
                 * Rasters, in which case the two ColorSpaces define the operation
                 * to be performed on the Rasters.  In that case, the number of bands
                 * in the source Raster must match the number of components in
                 * srcCspace, and the number of bands in the destination Raster
                 * must match the number of components in dstCspace.  For BufferedImages,
                 * the two ColorSpaces define intermediate spaces through which the
                 * source is converted before being converted to the destination space.
                 */
                // @ts-ignore
                constructor(srcCspace: java.awt.color.ColorSpace, dstCspace: java.awt.color.ColorSpace, hints: java.awt.RenderingHints)
                /**
                 * Constructs a new ColorConvertOp from an array of ICC_Profiles.
                 * The RenderingHints argument may be null.
                 * The sequence of profiles may include profiles that represent color
                 * spaces, profiles that represent effects, etc.  If the whole sequence
                 * does not represent a well-defined color conversion, an exception is
                 * thrown.
                 * <p>For BufferedImages, if the ColorSpace
                 * of the source BufferedImage does not match the requirements of the
                 * first profile in the array,
                 * the first conversion is to an appropriate ColorSpace.
                 * If the requirements of the last profile in the array are not met
                 * by the ColorSpace of the destination BufferedImage,
                 * the last conversion is to the destination's ColorSpace.
                 * <p>For Rasters, the number of bands in the source Raster must match
                 * the requirements of the first profile in the array, and the
                 * number of bands in the destination Raster must match the requirements
                 * of the last profile in the array.  The array must have at least two
                 * elements or calling the filter method for Rasters will throw an
                 * IllegalArgumentException.
                 */
                // @ts-ignore
                constructor(profiles: java.awt.color.ICC_Profile, hints: java.awt.RenderingHints)
                /**
                 * Returns the array of ICC_Profiles used to construct this ColorConvertOp.
                 * Returns null if the ColorConvertOp was not constructed from such an
                 * array.
                 */
                // @ts-ignore
                public getICC_Profiles(): java.awt.color.ICC_Profile[];
                /**
                 * ColorConverts the source BufferedImage.
                 * If the destination image is null,
                 * a BufferedImage will be created with an appropriate ColorModel.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dest: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * ColorConverts the image data in the source Raster.
                 * If the destination Raster is null, a new Raster will be created.
                 * The number of bands in the source and destination Rasters must
                 * meet the requirements explained above.  The constructor used to
                 * create this ColorConvertOp must have provided enough information
                 * to define both source and destination color spaces.  See above.
                 * Otherwise, an exception is thrown.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dest: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the destination, given this source.
                 * Note that this will be the same as the the bounding box of the
                 * source.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D;
                /**
                 * Returns the bounding box of the destination, given this source.
                 * Note that this will be the same as the the bounding box of the
                 * source.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Creates a zeroed destination Raster with the correct size and number of
                 * bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the location of the destination point given a
                 * point in the source.  If <code>dstPt</code> is non-null,
                 * it will be used to hold the return value.  Note that
                 * for this class, the destination point will be the same
                 * as the source point.
                 */
                // @ts-ignore
                public getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the rendering hints used by this op.
                 */
                // @ts-ignore
                public getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
