// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class PixelGrabber extends java.lang.Object {
                /**
                 * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
                 * section of pixels from the specified image into the given array.
                 * The pixels are stored into the array in the default RGB ColorModel.
                 * The RGB data for pixel (i, j) where (i, j) is inside the rectangle
                 * (x, y, w, h) is stored in the array at
                 * <tt>pix[(j - y) * scansize + (i - x) + off]</tt>.
                 */
                // @ts-ignore
                constructor(img: java.awt.Image, x: number, y: number, w: number, h: number, pix: number, off: number, scansize: number)
                /**
                 * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
                 * section of pixels from the image produced by the specified
                 * ImageProducer into the given array.
                 * The pixels are stored into the array in the default RGB ColorModel.
                 * The RGB data for pixel (i, j) where (i, j) is inside the rectangle
                 * (x, y, w, h) is stored in the array at
                 * <tt>pix[(j - y) * scansize + (i - x) + off]</tt>.
                 */
                // @ts-ignore
                constructor(ip: java.awt.image.ImageProducer, x: number, y: number, w: number, h: number, pix: number, off: number, scansize: number)
                /**
                 * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
                 * section of pixels from the specified image.  The pixels are
                 * accumulated in the original ColorModel if the same ColorModel
                 * is used for every call to setPixels, otherwise the pixels are
                 * accumulated in the default RGB ColorModel.  If the forceRGB
                 * parameter is true, then the pixels will be accumulated in the
                 * default RGB ColorModel anyway.  A buffer is allocated by the
                 * PixelGrabber to hold the pixels in either case.  If {@code (w < 0)} or
                 * {@code (h < 0)}, then they will default to the remaining width and
                 * height of the source data when that information is delivered.
                 */
                // @ts-ignore
                constructor(img: java.awt.Image, x: number, y: number, w: number, h: number, forceRGB: boolean)
                /**
                 * Request the PixelGrabber to start fetching the pixels.
                 */
                // @ts-ignore
                public startGrabbing(): void;
                /**
                 * Request the PixelGrabber to abort the image fetch.
                 */
                // @ts-ignore
                public abortGrabbing(): void;
                /**
                 * Request the Image or ImageProducer to start delivering pixels and
                 * wait for all of the pixels in the rectangle of interest to be
                 * delivered.
                 */
                // @ts-ignore
                public grabPixels(): boolean;
                /**
                 * Request the Image or ImageProducer to start delivering pixels and
                 * wait for all of the pixels in the rectangle of interest to be
                 * delivered or until the specified timeout has elapsed.  This method
                 * behaves in the following ways, depending on the value of
                 * <code>ms</code>:
                 * <ul>
                 * <li> If {@code ms == 0}, waits until all pixels are delivered
                 * <li> If {@code ms > 0}, waits until all pixels are delivered
                 * as timeout expires.
                 * <li> If {@code ms < 0}, returns <code>true</code> if all pixels
                 * are grabbed, <code>false</code> otherwise and does not wait.
                 * </ul>
                 */
                // @ts-ignore
                public grabPixels(ms: number): boolean;
                /**
                 * Return the status of the pixels.  The ImageObserver flags
                 * representing the available pixel information are returned.
                 */
                // @ts-ignore
                public getStatus(): number;
                /**
                 * Get the width of the pixel buffer (after adjusting for image width).
                 * If no width was specified for the rectangle of pixels to grab then
                 * then this information will only be available after the image has
                 * delivered the dimensions.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Get the height of the pixel buffer (after adjusting for image height).
                 * If no width was specified for the rectangle of pixels to grab then
                 * then this information will only be available after the image has
                 * delivered the dimensions.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Get the pixel buffer.  If the PixelGrabber was not constructed
                 * with an explicit pixel buffer to hold the pixels then this method
                 * will return null until the size and format of the image data is
                 * known.
                 * Since the PixelGrabber may fall back on accumulating the data
                 * in the default RGB ColorModel at any time if the source image
                 * uses more than one ColorModel to deliver the data, the array
                 * object returned by this method may change over time until the
                 * image grab is complete.
                 */
                // @ts-ignore
                public getPixels(): java.lang.Object;
                /**
                 * Get the ColorModel for the pixels stored in the array.  If the
                 * PixelGrabber was constructed with an explicit pixel buffer then
                 * this method will always return the default RGB ColorModel,
                 * otherwise it may return null until the ColorModel used by the
                 * ImageProducer is known.
                 * Since the PixelGrabber may fall back on accumulating the data
                 * in the default RGB ColorModel at any time if the source image
                 * uses more than one ColorModel to deliver the data, the ColorModel
                 * object returned by this method may change over time until the
                 * image grab is complete and may not reflect any of the ColorModel
                 * objects that was used by the ImageProducer to deliver the pixels.
                 */
                // @ts-ignore
                public getColorModel(): java.awt.image.ColorModel;
                /**
                 * The setDimensions method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setDimensions(width: number, height: number): void;
                /**
                 * The setHints method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setHints(hints: number): void;
                /**
                 * The setProperties method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setProperties(props: java.util.Hashtable): void;
                /**
                 * The setColorModel method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setColorModel(model: java.awt.image.ColorModel): void;
                /**
                 * The setPixels method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setPixels(srcX: number, srcY: number, srcW: number, srcH: number, model: java.awt.image.ColorModel, pixels: number, srcOff: number, srcScan: number): void;
                /**
                 * The setPixels method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setPixels(srcX: number, srcY: number, srcW: number, srcH: number, model: java.awt.image.ColorModel, pixels: number, srcOff: number, srcScan: number): void;
                /**
                 * The imageComplete method is part of the ImageConsumer API which
                 * this class must implement to retrieve the pixels.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being grabbed.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public imageComplete(status: number): void;
                /**
                 * Returns the status of the pixels.  The ImageObserver flags
                 * representing the available pixel information are returned.
                 * This method and {@link #getStatus() getStatus} have the
                 * same implementation, but <code>getStatus</code> is the
                 * preferred method because it conforms to the convention of
                 * naming information-retrieval methods with the form
                 * "getXXX".
                 */
                // @ts-ignore
                public status(): number;
            }
        }
    }
}
