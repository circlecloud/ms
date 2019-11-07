// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface RasterOp {
                /**
                 * Performs a single-input/single-output operation from a source Raster
                 * to a destination Raster.  If the destination Raster is null, a
                 * new Raster will be created.  The IllegalArgumentException may be thrown
                 * if the source and/or destination Raster is incompatible with the types
                 * of Rasters allowed by the class implementing this filter.
                 */
                // @ts-ignore
                 filter(src: java.awt.image.Raster, dest: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the filtered destination Raster.
                 * The IllegalArgumentException may be thrown if the source Raster
                 * is incompatible with the types of Rasters allowed
                 * by the class implementing this filter.
                 */
                // @ts-ignore
                 getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination Raster with the correct size and number of
                 * bands.
                 * The IllegalArgumentException may be thrown if the source Raster
                 * is incompatible with the types of Rasters allowed
                 * by the class implementing this filter.
                 */
                // @ts-ignore
                 createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the location of the destination point given a
                 * point in the source Raster.  If dstPt is non-null, it
                 * will be used to hold the return value.
                 */
                // @ts-ignore
                 getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the rendering hints for this RasterOp.  Returns
                 * null if no hints have been set.
                 */
                // @ts-ignore
                 getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
