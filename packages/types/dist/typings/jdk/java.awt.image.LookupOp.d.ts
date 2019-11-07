declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class LookupOp extends java.lang.Object {
                /**
                 * Constructs a <code>LookupOp</code> object given the lookup
                 * table and a <code>RenderingHints</code> object, which might
                 * be <code>null</code>.
                 */
                // @ts-ignore
                constructor(lookup: java.awt.image.LookupTable, hints: java.awt.RenderingHints)
                /**
                 * Returns the <code>LookupTable</code>.
                 */
                // @ts-ignore
                public getTable(): java.awt.image.LookupTable;
                /**
                 * Performs a lookup operation on a <code>BufferedImage</code>.
                 * If the color model in the source image is not the same as that
                 * in the destination image, the pixels will be converted
                 * in the destination.  If the destination image is <code>null</code>,
                 * a <code>BufferedImage</code> will be created with an appropriate
                 * <code>ColorModel</code>.  An <code>IllegalArgumentException</code>
                 * might be thrown if the number of arrays in the
                 * <code>LookupTable</code> does not meet the restrictions
                 * stated in the class comment above, or if the source image
                 * has an <code>IndexColorModel</code>.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * Performs a lookup operation on a <code>Raster</code>.
                 * If the destination <code>Raster</code> is <code>null</code>,
                 * a new <code>Raster</code> will be created.
                 * The <code>IllegalArgumentException</code> might be thrown
                 * if the source <code>Raster</code> and the destination
                 * <code>Raster</code> do not have the same
                 * number of bands or if the number of arrays in the
                 * <code>LookupTable</code> does not meet the
                 * restrictions stated in the class comment above.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
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
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.  If destCM is <code>null</code>, an appropriate
                 * <code>ColorModel</code> will be used.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Creates a zeroed-destination <code>Raster</code> with the
                 * correct size and number of bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the location of the destination point given a
                 * point in the source.  If <code>dstPt</code> is not
                 * <code>null</code>, it will be used to hold the return value.
                 * Since this is not a geometric operation, the <code>srcPt</code>
                 * will equal the <code>dstPt</code>.
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
