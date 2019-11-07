declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface ImageConsumer {
                // @ts-ignore
                 RANDOMPIXELORDER: number;
                // @ts-ignore
                 TOPDOWNLEFTRIGHT: number;
                // @ts-ignore
                 COMPLETESCANLINES: number;
                // @ts-ignore
                 SINGLEPASS: number;
                // @ts-ignore
                 SINGLEFRAME: number;
                // @ts-ignore
                 IMAGEERROR: number;
                // @ts-ignore
                 SINGLEFRAMEDONE: number;
                // @ts-ignore
                 STATICIMAGEDONE: number;
                // @ts-ignore
                 IMAGEABORTED: number;
                /**
                 * The dimensions of the source image are reported using the
                 * setDimensions method call.
                 */
                // @ts-ignore
                 setDimensions(width: number, height: number): void;
                /**
                 * Sets the extensible list of properties associated with this image.
                 */
                // @ts-ignore
                 setProperties(props: java.util.Hashtable): void;
                /**
                 * Sets the ColorModel object used for the majority of
                 * the pixels reported using the setPixels method
                 * calls.  Note that each set of pixels delivered using setPixels
                 * contains its own ColorModel object, so no assumption should
                 * be made that this model will be the only one used in delivering
                 * pixel values.  A notable case where multiple ColorModel objects
                 * may be seen is a filtered image when for each set of pixels
                 * that it filters, the filter
                 * determines  whether the
                 * pixels can be sent on untouched, using the original ColorModel,
                 * or whether the pixels should be modified (filtered) and passed
                 * on using a ColorModel more convenient for the filtering process.
                 */
                // @ts-ignore
                 setColorModel(model: java.awt.image.ColorModel): void;
                /**
                 * Sets the hints that the ImageConsumer uses to process the
                 * pixels delivered by the ImageProducer.
                 * The ImageProducer can deliver the pixels in any order, but
                 * the ImageConsumer may be able to scale or convert the pixels
                 * to the destination ColorModel more efficiently or with higher
                 * quality if it knows some information about how the pixels will
                 * be delivered up front.  The setHints method should be called
                 * before any calls to any of the setPixels methods with a bit mask
                 * of hints about the manner in which the pixels will be delivered.
                 * If the ImageProducer does not follow the guidelines for the
                 * indicated hint, the results are undefined.
                 */
                // @ts-ignore
                 setHints(hintflags: number): void;
                /**
                 * Delivers the pixels of the image with one or more calls
                 * to this method.  Each call specifies the location and
                 * size of the rectangle of source pixels that are contained in
                 * the array of pixels.  The specified ColorModel object should
                 * be used to convert the pixels into their corresponding color
                 * and alpha components.  Pixel (m,n) is stored in the pixels array
                 * at index (n * scansize + m + off).  The pixels delivered using
                 * this method are all stored as bytes.
                 */
                // @ts-ignore
                 setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * The pixels of the image are delivered using one or more calls
                 * to the setPixels method.  Each call specifies the location and
                 * size of the rectangle of source pixels that are contained in
                 * the array of pixels.  The specified ColorModel object should
                 * be used to convert the pixels into their corresponding color
                 * and alpha components.  Pixel (m,n) is stored in the pixels array
                 * at index (n * scansize + m + off).  The pixels delivered using
                 * this method are all stored as ints.
                 * this method are all stored as ints.
                 */
                // @ts-ignore
                 setPixels(x: number, y: number, w: number, h: number, model: java.awt.image.ColorModel, pixels: number, off: number, scansize: number): void;
                /**
                 * The imageComplete method is called when the ImageProducer is
                 * finished delivering all of the pixels that the source image
                 * contains, or when a single frame of a multi-frame animation has
                 * been completed, or when an error in loading or producing the
                 * image has occurred.  The ImageConsumer should remove itself from the
                 * list of consumers registered with the ImageProducer at this time,
                 * unless it is interested in successive frames.
                 */
                // @ts-ignore
                 imageComplete(status: number): void;
            }
        }
    }
}
