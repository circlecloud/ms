// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class AreaAveragingScaleFilter extends java.awt.image.ReplicateScaleFilter {
                /**
                 * Constructs an AreaAveragingScaleFilter that scales the pixels from
                 * its source Image as specified by the width and height parameters.
                 */
                // @ts-ignore
                constructor(width: number, height: number)
                /**
                 * Detect if the data is being delivered with the necessary hints
                 * to allow the averaging algorithm to do its work.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setHints(hints: number): void;
                /**
                 * Combine the components for the delivered byte pixels into the
                 * accumulation arrays and send on any averaged data for rows of
                 * pixels that are complete.  If the correct hints were not
                 * specified in the setHints call then relay the work to our
                 * superclass which is capable of scaling pixels regardless of
                 * the delivery hints.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code>
                 * whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * Combine the components for the delivered int pixels into the
                 * accumulation arrays and send on any averaged data for rows of
                 * pixels that are complete.  If the correct hints were not
                 * specified in the setHints call then relay the work to our
                 * superclass which is capable of scaling pixels regardless of
                 * the delivery hints.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code>
                 * whose pixels are being filtered.  Developers using
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
