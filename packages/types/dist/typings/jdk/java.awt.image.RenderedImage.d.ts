declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface RenderedImage {
                /**
                 * Returns a vector of RenderedImages that are the immediate sources of
                 * image data for this RenderedImage.  This method returns null if
                 * the RenderedImage object has no information about its immediate
                 * sources.  It returns an empty Vector if the RenderedImage object has
                 * no immediate sources.
                 */
                // @ts-ignore
                 getSources(): java.util.Vector;
                /**
                 * Gets a property from the property set of this image.  The set of
                 * properties and whether it is immutable is determined by the
                 * implementing class.  This method returns
                 * java.awt.Image.UndefinedProperty if the specified property is
                 * not defined for this RenderedImage.
                 */
                // @ts-ignore
                 getProperty(name: string): java.lang.Object;
                /**
                 * Returns an array of names recognized by
                 * {@link #getProperty(String) getProperty(String)}
                 * or <code>null</code>, if no property names are recognized.
                 */
                // @ts-ignore
                 getPropertyNames(): java.lang.String[];
                /**
                 * Returns the ColorModel associated with this image.  All Rasters
                 * returned from this image will have this as their ColorModel.  This
                 * can return null.
                 */
                // @ts-ignore
                 getColorModel(): java.awt.image.ColorModel;
                /**
                 * Returns the SampleModel associated with this image.  All Rasters
                 * returned from this image will have this as their SampleModel.
                 */
                // @ts-ignore
                 getSampleModel(): java.awt.image.SampleModel;
                /**
                 * Returns the width of the RenderedImage.
                 */
                // @ts-ignore
                 getWidth(): number;
                /**
                 * Returns the height of the RenderedImage.
                 */
                // @ts-ignore
                 getHeight(): number;
                /**
                 * Returns the minimum X coordinate (inclusive) of the RenderedImage.
                 */
                // @ts-ignore
                 getMinX(): number;
                /**
                 * Returns the minimum Y coordinate (inclusive) of the RenderedImage.
                 */
                // @ts-ignore
                 getMinY(): number;
                /**
                 * Returns the number of tiles in the X direction.
                 */
                // @ts-ignore
                 getNumXTiles(): number;
                /**
                 * Returns the number of tiles in the Y direction.
                 */
                // @ts-ignore
                 getNumYTiles(): number;
                /**
                 * Returns the minimum tile index in the X direction.
                 */
                // @ts-ignore
                 getMinTileX(): number;
                /**
                 * Returns the minimum tile index in the Y direction.
                 */
                // @ts-ignore
                 getMinTileY(): number;
                /**
                 * Returns the tile width in pixels.  All tiles must have the same
                 * width.
                 */
                // @ts-ignore
                 getTileWidth(): number;
                /**
                 * Returns the tile height in pixels.  All tiles must have the same
                 * height.
                 */
                // @ts-ignore
                 getTileHeight(): number;
                /**
                 * Returns the X offset of the tile grid relative to the origin,
                 * i.e., the X coordinate of the upper-left pixel of tile (0, 0).
                 * (Note that tile (0, 0) may not actually exist.)
                 */
                // @ts-ignore
                 getTileGridXOffset(): number;
                /**
                 * Returns the Y offset of the tile grid relative to the origin,
                 * i.e., the Y coordinate of the upper-left pixel of tile (0, 0).
                 * (Note that tile (0, 0) may not actually exist.)
                 */
                // @ts-ignore
                 getTileGridYOffset(): number;
                /**
                 * Returns tile (tileX, tileY).  Note that tileX and tileY are indices
                 * into the tile array, not pixel locations.  The Raster that is returned
                 * is live and will be updated if the image is changed.
                 */
                // @ts-ignore
                 getTile(tileX: number, tileY: number): java.awt.image.Raster;
                /**
                 * Returns the image as one large tile (for tile based
                 * images this will require fetching the whole image
                 * and copying the image data over).  The Raster returned is
                 * a copy of the image data and will not be updated if the image
                 * is changed.
                 */
                // @ts-ignore
                 getData(): java.awt.image.Raster;
                /**
                 * Computes and returns an arbitrary region of the RenderedImage.
                 * The Raster returned is a copy of the image data and will not
                 * be updated if the image is changed.
                 */
                // @ts-ignore
                 getData(rect: java.awt.Rectangle): java.awt.image.Raster;
                /**
                 * Computes an arbitrary rectangular region of the RenderedImage
                 * and copies it into a caller-supplied WritableRaster.  The region
                 * to be computed is determined from the bounds of the supplied
                 * WritableRaster.  The supplied WritableRaster must have a
                 * SampleModel that is compatible with this image.  If raster is null,
                 * an appropriate WritableRaster is created.
                 */
                // @ts-ignore
                 copyData(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
            }
        }
    }
}
