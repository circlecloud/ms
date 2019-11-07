// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class BandCombineOp extends java.lang.Object {
                /**
                 * Constructs a <CODE>BandCombineOp</CODE> with the specified matrix.
                 * The width of the matrix must be equal to the number of bands in
                 * the source <CODE>Raster</CODE>, optionally plus one.  If there is one
                 * more column in the matrix than the number of bands, there is an implied
                 * 1 at the end of the vector of band samples representing a pixel.  The
                 * height of the matrix must be equal to the number of bands in the
                 * destination.
                 * <p>
                 * The first subscript is the row index and the second
                 * is the column index.  This operation uses none of the currently
                 * defined rendering hints; the <CODE>RenderingHints</CODE> argument can be
                 * null.
                 */
                // @ts-ignore
                constructor(matrix: number, hints: java.awt.RenderingHints)
                /**
                 * Returns a copy of the linear combination matrix.
                 */
                // @ts-ignore
                public getMatrix(): float[][];
                /**
                 * Transforms the <CODE>Raster</CODE> using the matrix specified in the
                 * constructor. An <CODE>IllegalArgumentException</CODE> may be thrown if
                 * the number of bands in the source or destination is incompatible with
                 * the matrix.  See the class comments for more details.
                 * <p>
                 * If the destination is null, it will be created with a number of bands
                 * equalling the number of rows in the matrix. No exception is thrown
                 * if the operation causes a data overflow.
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the bounding box of the transformed destination.  Since
                 * this is not a geometric operation, the bounding box is the same for
                 * the source and destination.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the number of
                 * bands in the source is incompatible with the matrix.  See
                 * the class comments for more details.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D;
                /**
                 * Creates a zeroed destination <CODE>Raster</CODE> with the correct size
                 * and number of bands.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the number of
                 * bands in the source is incompatible with the matrix.  See
                 * the class comments for more details.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster;
                /**
                 * Returns the location of the corresponding destination point given a
                 * point in the source <CODE>Raster</CODE>.  If <CODE>dstPt</CODE> is
                 * specified, it is used to hold the return value.
                 * Since this is not a geometric operation, the point returned
                 * is the same as the specified <CODE>srcPt</CODE>.
                 */
                // @ts-ignore
                public getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D;
                /**
                 * Returns the rendering hints for this operation.
                 */
                // @ts-ignore
                public getRenderingHints(): java.awt.RenderingHints;
            }
        }
    }
}
