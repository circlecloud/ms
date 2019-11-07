// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ImageFilter extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected consumer: java.awt.image.ImageConsumer;
                /**
                 * Returns a unique instance of an ImageFilter object which will
                 * actually perform the filtering for the specified ImageConsumer.
                 * The default implementation just clones this object.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public getFilterInstance(ic: java.awt.image.ImageConsumer): java.awt.image.ImageFilter;
                /**
                 * Filters the information provided in the setDimensions method
                 * of the ImageConsumer interface.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setDimensions(width: number, height: number): void;
                /**
                 * Passes the properties from the source object along after adding a
                 * property indicating the stream of filters it has been run through.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setProperties(props: java.util.Hashtable): void;
                /**
                 * Filter the information provided in the setColorModel method
                 * of the ImageConsumer interface.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setColorModel(model: java.awt.image.ColorModel): void;
                /**
                 * Filters the information provided in the setHints method
                 * of the ImageConsumer interface.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setHints(hints: number): void;
                /**
                 * Filters the information provided in the setPixels method of the
                 * ImageConsumer interface which takes an array of bytes.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Filters the information provided in the setPixels method of the
                 * ImageConsumer interface which takes an array of integers.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Filters the information provided in the imageComplete method of
                 * the ImageConsumer interface.
                 * <p>
                 * Note: This method is intended to be called by the ImageProducer
                 * of the Image whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public imageComplete(status: number): void;
                /**
                 * Responds to a request for a TopDownLeftRight (TDLR) ordered resend
                 * of the pixel data from an <code>ImageConsumer</code>.
                 * When an <code>ImageConsumer</code> being fed
                 * by an instance of this <code>ImageFilter</code>
                 * requests a resend of the data in TDLR order,
                 * the <code>FilteredImageSource</code>
                 * invokes this method of the <code>ImageFilter</code>.
                 * <p>
                 * An <code>ImageFilter</code> subclass might override this method or not,
                 * depending on if and how it can send data in TDLR order.
                 * Three possibilities exist:
                 * <ul>
                 * <li>
                 * Do not override this method.
                 * This makes the subclass use the default implementation,
                 * which is to
                 * forward the request
                 * to the indicated <code>ImageProducer</code>
                 * using this filter as the requesting <code>ImageConsumer</code>.
                 * This behavior
                 * is appropriate if the filter can determine
                 * that it will forward the pixels
                 * in TDLR order if its upstream producer object
                 * sends them in TDLR order.
                 * <li>
                 * Override the method to simply send the data.
                 * This is appropriate if the filter can handle the request itself &#151;
                 * for example,
                 * if the generated pixels have been saved in some sort of buffer.
                 * <li>
                 * Override the method to do nothing.
                 * This is appropriate
                 * if the filter cannot produce filtered data in TDLR order.
                 * </ul>
                 */
                // @ts-ignore
                public resendTopDownLeftRight(ip: java.awt.image.ImageProducer): void;
                /**
                 * Clones this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
