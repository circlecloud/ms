declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class CropImageFilter extends java.awt.image.ImageFilter {
                /**
                 * Constructs a CropImageFilter that extracts the absolute rectangular
                 * region of pixels from its source Image as specified by the x, y,
                 * w, and h parameters.
                 */
                // @ts-ignore
                constructor(x: number, y: number, w: number, h: number)
                /**
                 * Passes along  the properties from the source object after adding a
                 * property indicating the cropped region.
                 * This method invokes <code>super.setProperties</code>,
                 * which might result in additional properties being added.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setProperties(props: java.util.Hashtable): void;
                /**
                 * Override the source image's dimensions and pass the dimensions
                 * of the rectangular cropped region to the ImageConsumer.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setDimensions(w: number, h: number): void;
                /**
                 * Determine whether the delivered byte pixels intersect the region to
                 * be extracted and passes through only that subset of pixels that
                 * appear in the output region.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Determine if the delivered int pixels intersect the region to
                 * be extracted and pass through only that subset of pixels that
                 * appear in the output region.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
            }
        }
    }
}
