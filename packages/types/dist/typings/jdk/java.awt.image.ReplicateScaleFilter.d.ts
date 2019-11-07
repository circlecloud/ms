declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ReplicateScaleFilter extends java.awt.image.ImageFilter {
                /**
                 * Constructs a ReplicateScaleFilter that scales the pixels from
                 * its source Image as specified by the width and height parameters.
                 */
                // @ts-ignore
                constructor(width: number, height: number)
                // @ts-ignore
                protected srcWidth: number;
                // @ts-ignore
                protected srcHeight: number;
                // @ts-ignore
                protected destWidth: number;
                // @ts-ignore
                protected destHeight: number;
                // @ts-ignore
                protected srcrows: number[];
                // @ts-ignore
                protected srccols: number[];
                // @ts-ignore
                protected outpixbuf: java.lang.Object;
                /**
                 * Passes along the properties from the source object after adding a
                 * property indicating the scale applied.
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
                 * Override the dimensions of the source image and pass the dimensions
                 * of the new scaled size to the ImageConsumer.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setDimensions(w: number, h: number): void;
                /**
                 * Choose which rows and columns of the delivered byte pixels are
                 * needed for the destination scaled image and pass through just
                 * those rows and columns that are needed, replicated as necessary.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Choose which rows and columns of the delivered int pixels are
                 * needed for the destination scaled image and pass through just
                 * those rows and columns that are needed, replicated as necessary.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
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
