declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class BufferedImageFilter extends java.awt.image.ImageFilter {
                /**
                 * Constructs a <code>BufferedImageFilter</code> with the
                 * specified single-source/single-destination operator.
                 */
                // @ts-ignore
                constructor(op: java.awt.image.BufferedImageOp)
                /**
                 * Returns the <code>BufferedImageOp</code>.
                 */
                // @ts-ignore
                public getBufferedImageOp(): java.awt.image.BufferedImageOp;
                /**
                 * Filters the information provided in the
                 * {@link ImageConsumer#setDimensions(int, int) setDimensions } method
                 * of the {@link ImageConsumer} interface.
                 * <p>
                 * Note: This method is intended to be called by the
                 * {@link ImageProducer} of the <code>Image</code> whose pixels are
                 * being filtered. Developers using this class to retrieve pixels from
                 * an image should avoid calling this method directly since that
                 * operation could result in problems with retrieving the requested
                 * pixels.
                 * <p>
                 */
                // @ts-ignore
                public setDimensions(width: number, height: number): void;
                /**
                 * Filters the information provided in the
                 * {@link ImageConsumer#setColorModel(ColorModel) setColorModel} method
                 * of the <code>ImageConsumer</code> interface.
                 * <p>
                 * If <code>model</code> is <code>null</code>, this
                 * method clears the current <code>ColorModel</code> of this
                 * <code>BufferedImageFilter</code>.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code>
                 * whose pixels are being filtered.  Developers using this
                 * class to retrieve pixels from an image
                 * should avoid calling this method directly since that
                 * operation could result in problems with retrieving the
                 * requested pixels.
                 */
                // @ts-ignore
                public setColorModel(model: java.awt.image.ColorModel): void;
                /**
                 * Filters the information provided in the <code>setPixels</code>
                 * method of the <code>ImageConsumer</code> interface which takes
                 * an array of bytes.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Filters the information provided in the <code>setPixels</code>
                 * method of the <code>ImageConsumer</code> interface which takes
                 * an array of integers.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered.  Developers using this class to
                 * retrieve pixels from an image should avoid calling this method
                 * directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Filters the information provided in the <code>imageComplete</code>
                 * method of the <code>ImageConsumer</code> interface.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered.  Developers using
                 * this class to retrieve pixels from an image should avoid calling
                 * this method directly since that operation could result in problems
                 * with retrieving the requested pixels.
                 */
                // @ts-ignore
                public imageComplete(status: number): void;
            }
        }
    }
}
