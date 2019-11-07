// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class BufferedImage extends java.awt.Image {
                /**
                 * Constructs a <code>BufferedImage</code> of one of the predefined
                 * image types.  The <code>ColorSpace</code> for the image is the
                 * default sRGB space.
                 */
                // @ts-ignore
                constructor(width: number, height: number, imageType: number)
                /**
                 * Constructs a <code>BufferedImage</code> of one of the predefined
                 * image types:
                 * TYPE_BYTE_BINARY or TYPE_BYTE_INDEXED.
                 * <p> If the image type is TYPE_BYTE_BINARY, the number of
                 * entries in the color model is used to determine whether the
                 * image should have 1, 2, or 4 bits per pixel.  If the color model
                 * has 1 or 2 entries, the image will have 1 bit per pixel.  If it
                 * has 3 or 4 entries, the image with have 2 bits per pixel.  If
                 * it has between 5 and 16 entries, the image will have 4 bits per
                 * pixel.  Otherwise, an IllegalArgumentException will be thrown.
                 */
                // @ts-ignore
                constructor(width: number, height: number, imageType: number, cm: java.awt.image.IndexColorModel)
                /**
                 * Constructs a new <code>BufferedImage</code> with a specified
                 * <code>ColorModel</code> and <code>Raster</code>.  If the number and
                 * types of bands in the <code>SampleModel</code> of the
                 * <code>Raster</code> do not match the number and types required by
                 * the <code>ColorModel</code> to represent its color and alpha
                 * components, a {@link RasterFormatException} is thrown.  This
                 * method can multiply or divide the color <code>Raster</code> data by
                 * alpha to match the <code>alphaPremultiplied</code> state
                 * in the <code>ColorModel</code>.  Properties for this
                 * <code>BufferedImage</code> can be established by passing
                 * in a {@link Hashtable} of <code>String</code>/<code>Object</code>
                 * pairs.
                 */
                // @ts-ignore
                constructor(cm: java.awt.image.ColorModel, raster: java.awt.image.WritableRaster, isRasterPremultiplied: boolean, properties: java.util.Hashtable)
                // @ts-ignore
                public static TYPE_CUSTOM: number;
                // @ts-ignore
                public static TYPE_INT_RGB: number;
                // @ts-ignore
                public static TYPE_INT_ARGB: number;
                // @ts-ignore
                public static TYPE_INT_ARGB_PRE: number;
                // @ts-ignore
                public static TYPE_INT_BGR: number;
                // @ts-ignore
                public static TYPE_3BYTE_BGR: number;
                // @ts-ignore
                public static TYPE_4BYTE_ABGR: number;
                // @ts-ignore
                public static TYPE_4BYTE_ABGR_PRE: number;
                // @ts-ignore
                public static TYPE_USHORT_565_RGB: number;
                // @ts-ignore
                public static TYPE_USHORT_555_RGB: number;
                // @ts-ignore
                public static TYPE_BYTE_GRAY: number;
                // @ts-ignore
                public static TYPE_USHORT_GRAY: number;
                // @ts-ignore
                public static TYPE_BYTE_BINARY: number;
                // @ts-ignore
                public static TYPE_BYTE_INDEXED: number;
                /**
                 * Returns the image type.  If it is not one of the known types,
                 * TYPE_CUSTOM is returned.
                 */
                // @ts-ignore
                public getType(): number;
                /**
                 * Returns the <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getColorModel(): java.awt.image.ColorModel;
                /**
                 * Returns the {@link WritableRaster}.
                 */
                // @ts-ignore
                public getRaster(): java.awt.image.WritableRaster;
                /**
                 * Returns a <code>WritableRaster</code> representing the alpha
                 * channel for <code>BufferedImage</code> objects
                 * with <code>ColorModel</code> objects that support a separate
                 * spatial alpha channel, such as <code>ComponentColorModel</code> and
                 * <code>DirectColorModel</code>.  Returns <code>null</code> if there
                 * is no alpha channel associated with the <code>ColorModel</code> in
                 * this image.  This method assumes that for all
                 * <code>ColorModel</code> objects other than
                 * <code>IndexColorModel</code>, if the <code>ColorModel</code>
                 * supports alpha, there is a separate alpha channel
                 * which is stored as the last band of image data.
                 * If the image uses an <code>IndexColorModel</code> that
                 * has alpha in the lookup table, this method returns
                 * <code>null</code> since there is no spatially discrete alpha
                 * channel.  This method creates a new
                 * <code>WritableRaster</code>, but shares the data array.
                 */
                // @ts-ignore
                public getAlphaRaster(): java.awt.image.WritableRaster;
                /**
                 * Returns an integer pixel in the default RGB color model
                 * (TYPE_INT_ARGB) and default sRGB colorspace.  Color
                 * conversion takes place if this default model does not match
                 * the image <code>ColorModel</code>.  There are only 8-bits of
                 * precision for each color component in the returned data when using
                 * this method.
                 * <p>
                 * An <code>ArrayOutOfBoundsException</code> may be thrown
                 * if the coordinates are not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public getRGB(x: number, y: number): number;
                /**
                 * Returns an array of integer pixels in the default RGB color model
                 * (TYPE_INT_ARGB) and default sRGB color space,
                 * from a portion of the image data.  Color conversion takes
                 * place if the default model does not match the image
                 * <code>ColorModel</code>.  There are only 8-bits of precision for
                 * each color component in the returned data when
                 * using this method.  With a specified coordinate (x,&nbsp;y) in the
                 * image, the ARGB pixel can be accessed in this way:
                 * <pre>
                 * pixel   = rgbArray[offset + (y-startY)*scansize + (x-startX)]; </pre>
                 * <p>
                 * An <code>ArrayOutOfBoundsException</code> may be thrown
                 * if the region is not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public getRGB(startX: number, startY: number, w: number, h: number, rgbArray: number, offset: number, scansize: number): number[];
                /**
                 * Sets a pixel in this <code>BufferedImage</code> to the specified
                 * RGB value. The pixel is assumed to be in the default RGB color
                 * model, TYPE_INT_ARGB, and default sRGB color space.  For images
                 * with an <code>IndexColorModel</code>, the index with the nearest
                 * color is chosen.
                 * <p>
                 * An <code>ArrayOutOfBoundsException</code> may be thrown
                 * if the coordinates are not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setRGB(x: number, y: number, rgb: number): void;
                /**
                 * Sets an array of integer pixels in the default RGB color model
                 * (TYPE_INT_ARGB) and default sRGB color space,
                 * into a portion of the image data.  Color conversion takes place
                 * if the default model does not match the image
                 * <code>ColorModel</code>.  There are only 8-bits of precision for
                 * each color component in the returned data when
                 * using this method.  With a specified coordinate (x,&nbsp;y) in the
                 * this image, the ARGB pixel can be accessed in this way:
                 * <pre>
                 * pixel   = rgbArray[offset + (y-startY)*scansize + (x-startX)];
                 * </pre>
                 * WARNING: No dithering takes place.
                 * <p>
                 * An <code>ArrayOutOfBoundsException</code> may be thrown
                 * if the region is not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setRGB(startX: number, startY: number, w: number, h: number, rgbArray: number, offset: number, scansize: number): void;
                /**
                 * Returns the width of the <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Returns the height of the <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Returns the width of the <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public getWidth(observer: java.awt.image.ImageObserver): number;
                /**
                 * Returns the height of the <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public getHeight(observer: java.awt.image.ImageObserver): number;
                /**
                 * Returns the object that produces the pixels for the image.
                 */
                // @ts-ignore
                public getSource(): java.awt.image.ImageProducer;
                /**
                 * Returns a property of the image by name.  Individual property names
                 * are defined by the various image formats.  If a property is not
                 * defined for a particular image, this method returns the
                 * <code>UndefinedProperty</code> field.  If the properties
                 * for this image are not yet known, then this method returns
                 * <code>null</code> and the <code>ImageObserver</code> object is
                 * notified later.  The property name "comment" should be used to
                 * store an optional comment that can be presented to the user as a
                 * description of the image, its source, or its author.
                 */
                // @ts-ignore
                public getProperty(name: string, observer: java.awt.image.ImageObserver): java.lang.Object;
                /**
                 * Returns a property of the image by name.
                 */
                // @ts-ignore
                public getProperty(name: string): java.lang.Object;
                /**
                 * This method returns a {@link Graphics2D}, but is here
                 * for backwards compatibility.  {@link #createGraphics() createGraphics} is more
                 * convenient, since it is declared to return a
                 * <code>Graphics2D</code>.
                 */
                // @ts-ignore
                public getGraphics(): java.awt.Graphics;
                /**
                 * Creates a <code>Graphics2D</code>, which can be used to draw into
                 * this <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public createGraphics(): java.awt.Graphics2D;
                /**
                 * Returns a subimage defined by a specified rectangular region.
                 * The returned <code>BufferedImage</code> shares the same
                 * data array as the original image.
                 */
                // @ts-ignore
                public getSubimage(x: number, y: number, w: number, h: number): java.awt.image.BufferedImage;
                /**
                 * Returns whether or not the alpha has been premultiplied.  It
                 * returns <code>false</code> if there is no alpha.
                 */
                // @ts-ignore
                public isAlphaPremultiplied(): boolean;
                /**
                 * Forces the data to match the state specified in the
                 * <code>isAlphaPremultiplied</code> variable.  It may multiply or
                 * divide the color raster data by alpha, or do nothing if the data is
                 * in the correct state.
                 */
                // @ts-ignore
                public coerceData(isAlphaPremultiplied: boolean): void;
                /**
                 * Returns a <code>String</code> representation of this
                 * <code>BufferedImage</code> object and its values.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns a {@link Vector} of {@link RenderedImage} objects that are
                 * the immediate sources, not the sources of these immediate sources,
                 * of image data for this <code>BufferedImage</code>.  This
                 * method returns <code>null</code> if the <code>BufferedImage</code>
                 * has no information about its immediate sources.  It returns an
                 * empty <code>Vector</code> if the <code>BufferedImage</code> has no
                 * immediate sources.
                 */
                // @ts-ignore
                public getSources(): java.util.Vector;
                /**
                 * Returns an array of names recognized by
                 * {@link #getProperty(String) getProperty(String)}
                 * or <code>null</code>, if no property names are recognized.
                 */
                // @ts-ignore
                public getPropertyNames(): java.lang.String[];
                /**
                 * Returns the minimum x coordinate of this
                 * <code>BufferedImage</code>.  This is always zero.
                 */
                // @ts-ignore
                public getMinX(): number;
                /**
                 * Returns the minimum y coordinate of this
                 * <code>BufferedImage</code>.  This is always zero.
                 */
                // @ts-ignore
                public getMinY(): number;
                /**
                 * Returns the <code>SampleModel</code> associated with this
                 * <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public getSampleModel(): java.awt.image.SampleModel;
                /**
                 * Returns the number of tiles in the x direction.
                 * This is always one.
                 */
                // @ts-ignore
                public getNumXTiles(): number;
                /**
                 * Returns the number of tiles in the y direction.
                 * This is always one.
                 */
                // @ts-ignore
                public getNumYTiles(): number;
                /**
                 * Returns the minimum tile index in the x direction.
                 * This is always zero.
                 */
                // @ts-ignore
                public getMinTileX(): number;
                /**
                 * Returns the minimum tile index in the y direction.
                 * This is always zero.
                 */
                // @ts-ignore
                public getMinTileY(): number;
                /**
                 * Returns the tile width in pixels.
                 */
                // @ts-ignore
                public getTileWidth(): number;
                /**
                 * Returns the tile height in pixels.
                 */
                // @ts-ignore
                public getTileHeight(): number;
                /**
                 * Returns the x offset of the tile grid relative to the origin,
                 * For example, the x coordinate of the location of tile
                 * (0,&nbsp;0).  This is always zero.
                 */
                // @ts-ignore
                public getTileGridXOffset(): number;
                /**
                 * Returns the y offset of the tile grid relative to the origin,
                 * For example, the y coordinate of the location of tile
                 * (0,&nbsp;0).  This is always zero.
                 */
                // @ts-ignore
                public getTileGridYOffset(): number;
                /**
                 * Returns tile (<code>tileX</code>,&nbsp;<code>tileY</code>).  Note
                 * that <code>tileX</code> and <code>tileY</code> are indices
                 * into the tile array, not pixel locations.  The <code>Raster</code>
                 * that is returned is live, which means that it is updated if the
                 * image is changed.
                 */
                // @ts-ignore
                public getTile(tileX: number, tileY: number): java.awt.image.Raster;
                /**
                 * Returns the image as one large tile.  The <code>Raster</code>
                 * returned is a copy of the image data is not updated if the
                 * image is changed.
                 */
                // @ts-ignore
                public getData(): java.awt.image.Raster;
                /**
                 * Computes and returns an arbitrary region of the
                 * <code>BufferedImage</code>.  The <code>Raster</code> returned is a
                 * copy of the image data and is not updated if the image is
                 * changed.
                 */
                // @ts-ignore
                public getData(rect: java.awt.Rectangle): java.awt.image.Raster;
                /**
                 * Computes an arbitrary rectangular region of the
                 * <code>BufferedImage</code> and copies it into a specified
                 * <code>WritableRaster</code>.  The region to be computed is
                 * determined from the bounds of the specified
                 * <code>WritableRaster</code>.  The specified
                 * <code>WritableRaster</code> must have a
                 * <code>SampleModel</code> that is compatible with this image.  If
                 * <code>outRaster</code> is <code>null</code>,
                 * an appropriate <code>WritableRaster</code> is created.
                 */
                // @ts-ignore
                public copyData(outRaster: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Sets a rectangular region of the image to the contents of the
                 * specified <code>Raster</code> <code>r</code>, which is
                 * assumed to be in the same coordinate space as the
                 * <code>BufferedImage</code>. The operation is clipped to the bounds
                 * of the <code>BufferedImage</code>.
                 */
                // @ts-ignore
                public setData(r: java.awt.image.Raster): void;
                /**
                 * Adds a tile observer.  If the observer is already present,
                 * it receives multiple notifications.
                 */
                // @ts-ignore
                public addTileObserver(to: java.awt.image.TileObserver): void;
                /**
                 * Removes a tile observer.  If the observer was not registered,
                 * nothing happens.  If the observer was registered for multiple
                 * notifications, it is now registered for one fewer notification.
                 */
                // @ts-ignore
                public removeTileObserver(to: java.awt.image.TileObserver): void;
                /**
                 * Returns whether or not a tile is currently checked out for writing.
                 */
                // @ts-ignore
                public isTileWritable(tileX: number, tileY: number): boolean;
                /**
                 * Returns an array of {@link Point} objects indicating which tiles
                 * are checked out for writing.  Returns <code>null</code> if none are
                 * checked out.
                 */
                // @ts-ignore
                public getWritableTileIndices(): java.awt.Point[];
                /**
                 * Returns whether or not any tile is checked out for writing.
                 * Semantically equivalent to
                 * <pre>
                 * (getWritableTileIndices() != null).
                 * </pre>
                 */
                // @ts-ignore
                public hasTileWriters(): boolean;
                /**
                 * Checks out a tile for writing.  All registered
                 * <code>TileObservers</code> are notified when a tile goes from having
                 * no writers to having one writer.
                 */
                // @ts-ignore
                public getWritableTile(tileX: number, tileY: number): java.awt.image.WritableRaster;
                /**
                 * Relinquishes permission to write to a tile.  If the caller
                 * continues to write to the tile, the results are undefined.
                 * Calls to this method should only appear in matching pairs
                 * with calls to {@link #getWritableTile(int, int) getWritableTile(int, int)}.  Any other leads
                 * to undefined results.  All registered <code>TileObservers</code>
                 * are notified when a tile goes from having one writer to having no
                 * writers.
                 */
                // @ts-ignore
                public releaseWritableTile(tileX: number, tileY: number): void;
                /**
                 * Returns the transparency.  Returns either OPAQUE, BITMASK,
                 * or TRANSLUCENT.
                 */
                // @ts-ignore
                public getTransparency(): number;
            }
        }
    }
}
