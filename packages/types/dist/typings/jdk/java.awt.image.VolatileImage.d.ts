// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class VolatileImage extends java.awt.Image {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static IMAGE_OK: number;
                // @ts-ignore
                public static IMAGE_RESTORED: number;
                // @ts-ignore
                public static IMAGE_INCOMPATIBLE: number;
                // @ts-ignore
                protected transparency: number;
                /**
                 * Returns a static snapshot image of this object.  The
                 * <code>BufferedImage</code> returned is only current with
                 * the <code>VolatileImage</code> at the time of the request
                 * and will not be updated with any future changes to the
                 * <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract getSnapshot(): java.awt.image.BufferedImage;
                /**
                 * Returns the width of the <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract getWidth(): number;
                /**
                 * Returns the height of the <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract getHeight(): number;
                /**
                 * This returns an ImageProducer for this VolatileImage.
                 * Note that the VolatileImage object is optimized for
                 * rendering operations and blitting to the screen or other
                 * VolatileImage objects, as opposed to reading back the
                 * pixels of the image.  Therefore, operations such as
                 * <code>getSource</code> may not perform as fast as
                 * operations that do not rely on reading the pixels.
                 * Note also that the pixel values read from the image are current
                 * with those in the image only at the time that they are
                 * retrieved. This method takes a snapshot
                 * of the image at the time the request is made and the
                 * ImageProducer object returned works with
                 * that static snapshot image, not the original VolatileImage.
                 * Calling getSource()
                 * is equivalent to calling getSnapshot().getSource().
                 */
                // @ts-ignore
                public getSource(): java.awt.image.ImageProducer;
                /**
                 * This method returns a {@link Graphics2D}, but is here
                 * for backwards compatibility.  {@link #createGraphics() createGraphics} is more
                 * convenient, since it is declared to return a
                 * <code>Graphics2D</code>.
                 */
                // @ts-ignore
                public getGraphics(): java.awt.Graphics;
                /**
                 * Creates a <code>Graphics2D</code>, which can be used to draw into
                 * this <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract createGraphics(): java.awt.Graphics2D;
                /**
                 * Attempts to restore the drawing surface of the image if the surface
                 * had been lost since the last <code>validate</code> call.  Also
                 * validates this image against the given GraphicsConfiguration
                 * parameter to see whether operations from this image to the
                 * GraphicsConfiguration are compatible.  An example of an
                 * incompatible combination might be a situation where a VolatileImage
                 * object was created on one graphics device and then was used
                 * to render to a different graphics device.  Since VolatileImage
                 * objects tend to be very device-specific, this operation might
                 * not work as intended, so the return code from this validate
                 * call would note that incompatibility.  A null or incorrect
                 * value for gc may cause incorrect values to be returned from
                 * <code>validate</code> and may cause later problems with rendering.
                 */
                // @ts-ignore
                public abstract validate(gc: java.awt.GraphicsConfiguration): number;
                /**
                 * Returns <code>true</code> if rendering data was lost since last
                 * <code>validate</code> call.  This method should be called by the
                 * application at the end of any series of rendering operations to
                 * or from the image to see whether
                 * the image needs to be validated and the rendering redone.
                 */
                // @ts-ignore
                public abstract contentsLost(): boolean;
                /**
                 * Returns an ImageCapabilities object which can be
                 * inquired as to the specific capabilities of this
                 * VolatileImage.  This would allow programmers to find
                 * out more runtime information on the specific VolatileImage
                 * object that they have created.  For example, the user
                 * might create a VolatileImage but the system may have
                 * no video memory left for creating an image of that
                 * size, so although the object is a VolatileImage, it is
                 * not as accelerated as other VolatileImage objects on
                 * this platform might be.  The user might want that
                 * information to find other solutions to their problem.
                 */
                // @ts-ignore
                public abstract getCapabilities(): java.awt.ImageCapabilities;
                /**
                 * Returns the transparency.  Returns either OPAQUE, BITMASK,
                 * or TRANSLUCENT.
                 */
                // @ts-ignore
                public getTransparency(): number;
            }
        }
    }
}
