declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class AffineTransformOp extends java.lang.Object {
                /**
                 * Constructs an <CODE>AffineTransformOp</CODE> given an affine transform.
                 * The interpolation type is determined from the
                 * <CODE>RenderingHints</CODE> object.  If the interpolation hint is
                 * defined, it will be used. Otherwise, if the rendering quality hint is
                 * defined, the interpolation type is determined from its value.  If no
                 * hints are specified (<CODE>hints</CODE> is null),
                 * the interpolation type is {@link #TYPE_NEAREST_NEIGHBOR
                 * TYPE_NEAREST_NEIGHBOR}.
                 */
                // @ts-ignore
                constructor(xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints)
                /**
                 * Constructs an <CODE>AffineTransformOp</CODE> given an affine transform
                 * and the interpolation type.
                 */
                // @ts-ignore
                constructor(xform: java.awt.geom.AffineTransform, interpolationType: number)
                // @ts-ignore
                public static TYPE_NEAREST_NEIGHBOR: number;
                // @ts-ignore
                public static TYPE_BILINEAR: number;
                // @ts-ignore
                public static TYPE_BICUBIC: number;
                /**
                 * Returns the interpolation type used by this op.
                 */
                // @ts-ignore
                public getInterpolationType(): number;
                /**
                 * Transforms the source <CODE>BufferedImage</CODE> and stores the results
                 * in the destination <CODE>BufferedImage</CODE>.
                 * If the color models for the two images do not match, a color
                 * conversion into the destination color model is performed.
                 * If the destination image is null,
                 * a <CODE>BufferedImage</CODE> is created with the source
                 * <CODE>ColorModel</CODE>.
                 * <p>
                 * The coordinates of the rectangle returned by
                 * <code>getBounds2D(BufferedImage)</code>
                 * are not necessarily the same as the coordinates of the
                 * <code>BufferedImage</code> returned by this method.  If the
                 * upper-left corner coordinates of the rectangle are
                 * negative then this part of the rectangle is not drawn.  If the
                 * upper-left corner coordinates of the  rectangle are positive
                 * then the filtered image is drawn at that position in the
                 * destination <code>BufferedImage</code>.
                 * <p>
                 * An <CODE>IllegalArgumentException</CODE> is thrown if the source is
                 * the same as the destination.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
                /**
                 * Transforms the source <CODE>Raster</CODE> and stores the results in
                 * the destination <CODE>Raster</CODE>.  This operation performs the
                 * transform band by band.
                 * <p>
                 * If the destination <CODE>Raster</CODE> is null, a new
                 * <CODE>Raster</CODE> is created.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source is
                 * the same as the destination or if the number of bands in
                 * the source is not equal to the number of bands in the
                 * destination.
                 * <p>
                 * The coordinates of the rectangle returned by
                 * <code>getBounds2D(Raster)</code>
                 * are not necessarily the same as the coordinates of the
                 * <code>WritableRaster</code> returned by this method.  If the
                 * upper-left corner coordinates of rectangle are negative then
                 * this part of the rectangle is not drawn.  If the coordinates
                 * of the rectangle are positive then the filtered image is drawn at
                 * that position in the destination <code>Raster</code>.
                 * <p>
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the transformed destination.  The
                 * rectangle returned is the actual bounding box of the
                 * transformed points.  The coordinates of the upper-left corner
                 * of the returned rectangle might not be (0,&nbsp;0).
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D;
                /**
                 * Returns the bounding box of the transformed destination.  The
                 * rectangle returned will be the actual bounding box of the
                 * transformed points.  The coordinates of the upper-left corner
                 * of the returned rectangle might not be (0,&nbsp;0).
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.  A <CODE>RasterFormatException</CODE> may be thrown if the
                 * transformed width or height is equal to 0.
                 * <p>
                 * If <CODE>destCM</CODE> is null,
                 * an appropriate <CODE>ColorModel</CODE> is used; this
                 * <CODE>ColorModel</CODE> may have
                 * an alpha channel even if the source <CODE>ColorModel</CODE> is opaque.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage;
                /**
                 * Creates a zeroed destination <CODE>Raster</CODE> with the correct size
                 * and number of bands.  A <CODE>RasterFormatException</CODE> may be thrown
                 * if the transformed width or height is equal to 0.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the location of the corresponding destination point given a
                 * point in the source.  If <CODE>dstPt</CODE> is specified, it
                 * is used to hold the return value.
                 */
                // @ts-ignore
                public getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the affine transform used by this transform operation.
                 */
                // @ts-ignore
                public getTransform(): java.awt.geom.AffineTransform;
                /**
                 * Returns the rendering hints used by this transform operation.
                 */
                // @ts-ignore
                public getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
