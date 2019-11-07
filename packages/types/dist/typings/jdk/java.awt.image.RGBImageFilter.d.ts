// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class RGBImageFilter extends java.awt.image.ImageFilter {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected origmodel: java.awt.image.ColorModel;
                // @ts-ignore
                protected newmodel: java.awt.image.ColorModel;
                // @ts-ignore
                protected canFilterIndexColorModel: boolean;
                /**
                 * If the ColorModel is an IndexColorModel and the subclass has
                 * set the canFilterIndexColorModel flag to true, we substitute
                 * a filtered version of the color model here and wherever
                 * that original ColorModel object appears in the setPixels methods.
                 * If the ColorModel is not an IndexColorModel or is null, this method
                 * overrides the default ColorModel used by the ImageProducer and
                 * specifies the default RGB ColorModel instead.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setColorModel(model: java.awt.image.ColorModel): void;
                /**
                 * Registers two ColorModel objects for substitution.  If the oldcm
                 * is encountered during any of the setPixels methods, the newcm
                 * is substituted and the pixels passed through
                 * untouched (but with the new ColorModel object).
                 */
                // @ts-ignore
                public substituteColorModel(oldcm: java.awt.image.ColorModel, newcm: java.awt.image.ColorModel): void;
                /**
                 * Filters an IndexColorModel object by running each entry in its
                 * color tables through the filterRGB function that RGBImageFilter
                 * subclasses must provide.  Uses coordinates of -1 to indicate that
                 * a color table entry is being filtered rather than an actual
                 * pixel value.
                 */
                // @ts-ignore
                public filterIndexColorModel(icm: java.awt.image.IndexColorModel): java.awt.image.IndexColorModel;
                /**
                 * Filters a buffer of pixels in the default RGB ColorModel by passing
                 * them one by one through the filterRGB method.
                 */
                // @ts-ignore
                public filterRGBPixels(x: number, y: number, w: number, h: number, pixels: number, off: number, scansize: number): void;
                /**
                 * If the ColorModel object is the same one that has already
                 * been converted, then simply passes the pixels through with the
                 * converted ColorModel. Otherwise converts the buffer of byte
                 * pixels to the default RGB ColorModel and passes the converted
                 * buffer to the filterRGBPixels method to be converted one by one.
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
                 * If the ColorModel object is the same one that has already
                 * been converted, then simply passes the pixels through with the
                 * converted ColorModel, otherwise converts the buffer of integer
                 * pixels to the default RGB ColorModel and passes the converted
                 * buffer to the filterRGBPixels method to be converted one by one.
                 * Converts a buffer of integer pixels to the default RGB ColorModel
                 * and passes the converted buffer to the filterRGBPixels method.
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
                 * Subclasses must specify a method to convert a single input pixel
                 * in the default RGB ColorModel to a single output pixel.
                 */
                // @ts-ignore
                public abstract filterRGB(x: number, y: number, rgb: number): number;
            }
        }
    }
}
