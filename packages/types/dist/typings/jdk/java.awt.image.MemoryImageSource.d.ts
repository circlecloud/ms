// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class MemoryImageSource extends java.lang.Object {
                /**
                 * Constructs an ImageProducer object which uses an array of bytes
                 * to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, cm: java.awt.image.ColorModel, pix: number, off: number, scan: number)
                /**
                 * Constructs an ImageProducer object which uses an array of bytes
                 * to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, cm: java.awt.image.ColorModel, pix: number, off: number, scan: number, props: java.util.Hashtable)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, cm: java.awt.image.ColorModel, pix: number, off: number, scan: number)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, cm: java.awt.image.ColorModel, pix: number, off: number, scan: number, props: java.util.Hashtable)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * in the default RGB ColorModel to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, pix: number, off: number, scan: number)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * in the default RGB ColorModel to produce data for an Image object.
                 */
                // @ts-ignore
                constructor(w: number, h: number, pix: number, off: number, scan: number, props: java.util.Hashtable)
                /**
                 * Adds an ImageConsumer to the list of consumers interested in
                 * data for this image.
                 */
                // @ts-ignore
                public addConsumer(ic: java.awt.image.ImageConsumer): void;
                /**
                 * Determines if an ImageConsumer is on the list of consumers currently
                 * interested in data for this image.
                 */
                // @ts-ignore
                public isConsumer(ic: java.awt.image.ImageConsumer): boolean;
                /**
                 * Removes an ImageConsumer from the list of consumers interested in
                 * data for this image.
                 */
                // @ts-ignore
                public removeConsumer(ic: java.awt.image.ImageConsumer): void;
                /**
                 * Adds an ImageConsumer to the list of consumers interested in
                 * data for this image and immediately starts delivery of the
                 * image data through the ImageConsumer interface.
                 */
                // @ts-ignore
                public startProduction(ic: java.awt.image.ImageConsumer): void;
                /**
                 * Requests that a given ImageConsumer have the image data delivered
                 * one more time in top-down, left-right order.
                 */
                // @ts-ignore
                public requestTopDownLeftRightResend(ic: java.awt.image.ImageConsumer): void;
                /**
                 * Changes this memory image into a multi-frame animation or a
                 * single-frame static image depending on the animated parameter.
                 * <p>This method should be called immediately after the
                 * MemoryImageSource is constructed and before an image is
                 * created with it to ensure that all ImageConsumers will
                 * receive the correct multi-frame data.  If an ImageConsumer
                 * is added to this ImageProducer before this flag is set then
                 * that ImageConsumer will see only a snapshot of the pixel
                 * data that was available when it connected.
                 */
                // @ts-ignore
                public setAnimated(animated: boolean): void;
                /**
                 * Specifies whether this animated memory image should always be
                 * updated by sending the complete buffer of pixels whenever
                 * there is a change.
                 * This flag is ignored if the animation flag is not turned on
                 * through the setAnimated() method.
                 * <p>This method should be called immediately after the
                 * MemoryImageSource is constructed and before an image is
                 * created with it to ensure that all ImageConsumers will
                 * receive the correct pixel delivery hints.
                 */
                // @ts-ignore
                public setFullBufferUpdates(fullbuffers: boolean): void;
                /**
                 * Sends a whole new buffer of pixels to any ImageConsumers that
                 * are currently interested in the data for this image and notify
                 * them that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 */
                // @ts-ignore
                public newPixels(): void;
                /**
                 * Sends a rectangular region of the buffer of pixels to any
                 * ImageConsumers that are currently interested in the data for
                 * this image and notify them that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 * If the full buffer update flag was turned on with the
                 * setFullBufferUpdates() method then the rectangle parameters
                 * will be ignored and the entire buffer will always be sent.
                 */
                // @ts-ignore
                public newPixels(x: number, y: number, w: number, h: number): void;
                /**
                 * Sends a rectangular region of the buffer of pixels to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 * If the framenotify parameter is true then the consumers are
                 * also notified that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 * If the full buffer update flag was turned on with the
                 * setFullBufferUpdates() method then the rectangle parameters
                 * will be ignored and the entire buffer will always be sent.
                 */
                // @ts-ignore
                public newPixels(x: number, y: number, w: number, h: number, framenotify: boolean): void;
                /**
                 * Changes to a new byte array to hold the pixels for this image.
                 * If the animation flag has been turned on through the setAnimated()
                 * method, then the new pixels will be immediately delivered to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 */
                // @ts-ignore
                public newPixels(newpix: number, newmodel: java.awt.image.ColorModel, offset: number, scansize: number): void;
                /**
                 * Changes to a new int array to hold the pixels for this image.
                 * If the animation flag has been turned on through the setAnimated()
                 * method, then the new pixels will be immediately delivered to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 */
                // @ts-ignore
                public newPixels(newpix: number, newmodel: java.awt.image.ColorModel, offset: number, scansize: number): void;
            }
        }
    }
}
