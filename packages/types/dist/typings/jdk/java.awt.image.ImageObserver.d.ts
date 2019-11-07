declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface ImageObserver {
                // @ts-ignore
                 WIDTH: number;
                // @ts-ignore
                 HEIGHT: number;
                // @ts-ignore
                 PROPERTIES: number;
                // @ts-ignore
                 SOMEBITS: number;
                // @ts-ignore
                 FRAMEBITS: number;
                // @ts-ignore
                 ALLBITS: number;
                // @ts-ignore
                 ERROR: number;
                // @ts-ignore
                 ABORT: number;
                /**
                 * This method is called when information about an image which was
                 * previously requested using an asynchronous interface becomes
                 * available.  Asynchronous interfaces are method calls such as
                 * getWidth(ImageObserver) and drawImage(img, x, y, ImageObserver)
                 * which take an ImageObserver object as an argument.  Those methods
                 * register the caller as interested either in information about
                 * the overall image itself (in the case of getWidth(ImageObserver))
                 * or about an output version of an image (in the case of the
                 * drawImage(img, x, y, [w, h,] ImageObserver) call).
                 * <p>This method
                 * should return true if further updates are needed or false if the
                 * required information has been acquired.  The image which was being
                 * tracked is passed in using the img argument.  Various constants
                 * are combined to form the infoflags argument which indicates what
                 * information about the image is now available.  The interpretation
                 * of the x, y, width, and height arguments depends on the contents
                 * of the infoflags argument.
                 * <p>
                 * The <code>infoflags</code> argument should be the bitwise inclusive
                 * <b>OR</b> of the following flags: <code>WIDTH</code>,
                 * <code>HEIGHT</code>, <code>PROPERTIES</code>, <code>SOMEBITS</code>,
                 * <code>FRAMEBITS</code>, <code>ALLBITS</code>, <code>ERROR</code>,
                 * <code>ABORT</code>.
                 */
                // @ts-ignore
                 imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, width: number, height: number): boolean;
            }
        }
    }
}
