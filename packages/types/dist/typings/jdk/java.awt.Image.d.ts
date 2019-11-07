declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class Image extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected accelerationPriority: number;
            // @ts-ignore
            public static UndefinedProperty: java.lang.Object;
            // @ts-ignore
            public static SCALE_DEFAULT: number;
            // @ts-ignore
            public static SCALE_FAST: number;
            // @ts-ignore
            public static SCALE_SMOOTH: number;
            // @ts-ignore
            public static SCALE_REPLICATE: number;
            // @ts-ignore
            public static SCALE_AREA_AVERAGING: number;
            /**
             * Determines the width of the image. If the width is not yet known,
             * this method returns <code>-1</code> and the specified
             * <code>ImageObserver</code> object is notified later.
             */
            // @ts-ignore
            public abstract getWidth(observer: java.awt.image.ImageObserver): number;
            /**
             * Determines the height of the image. If the height is not yet known,
             * this method returns <code>-1</code> and the specified
             * <code>ImageObserver</code> object is notified later.
             */
            // @ts-ignore
            public abstract getHeight(observer: java.awt.image.ImageObserver): number;
            /**
             * Gets the object that produces the pixels for the image.
             * This method is called by the image filtering classes and by
             * methods that perform image conversion and scaling.
             */
            // @ts-ignore
            public abstract getSource(): java.awt.image.ImageProducer;
            /**
             * Creates a graphics context for drawing to an off-screen image.
             * This method can only be called for off-screen images.
             */
            // @ts-ignore
            public abstract getGraphics(): java.awt.Graphics;
            /**
             * Gets a property of this image by name.
             * <p>
             * Individual property names are defined by the various image
             * formats. If a property is not defined for a particular image, this
             * method returns the <code>UndefinedProperty</code> object.
             * <p>
             * If the properties for this image are not yet known, this method
             * returns <code>null</code>, and the <code>ImageObserver</code>
             * object is notified later.
             * <p>
             * The property name <code>"comment"</code> should be used to store
             * an optional comment which can be presented to the application as a
             * description of the image, its source, or its author.
             */
            // @ts-ignore
            public abstract getProperty(name: string, observer: java.awt.image.ImageObserver): java.lang.Object;
            /**
             * Creates a scaled version of this image.
             * A new <code>Image</code> object is returned which will render
             * the image at the specified <code>width</code> and
             * <code>height</code> by default.  The new <code>Image</code> object
             * may be loaded asynchronously even if the original source image
             * has already been loaded completely.
             * <p>
             * If either <code>width</code>
             * or <code>height</code> is a negative number then a value is
             * substituted to maintain the aspect ratio of the original image
             * dimensions. If both <code>width</code> and <code>height</code>
             * are negative, then the original image dimensions are used.
             */
            // @ts-ignore
            public getScaledInstance(width: number, height: number, hints: number): java.awt.Image;
            /**
             * Flushes all reconstructable resources being used by this Image object.
             * This includes any pixel data that is being cached for rendering to
             * the screen as well as any system resources that are being used
             * to store data or pixels for the image if they can be recreated.
             * The image is reset to a state similar to when it was first created
             * so that if it is again rendered, the image data will have to be
             * recreated or fetched again from its source.
             * <p>
             * Examples of how this method affects specific types of Image object:
             * <ul>
             * <li>
             * BufferedImage objects leave the primary Raster which stores their
             * pixels untouched, but flush any information cached about those
             * pixels such as copies uploaded to the display hardware for
             * accelerated blits.
             * <li>
             * Image objects created by the Component methods which take a
             * width and height leave their primary buffer of pixels untouched,
             * but have all cached information released much like is done for
             * BufferedImage objects.
             * <li>
             * VolatileImage objects release all of their pixel resources
             * including their primary copy which is typically stored on
             * the display hardware where resources are scarce.
             * These objects can later be restored using their
             * {@link java.awt.image.VolatileImage#validate validate}
             * method.
             * <li>
             * Image objects created by the Toolkit and Component classes which are
             * loaded from files, URLs or produced by an {@link ImageProducer}
             * are unloaded and all local resources are released.
             * These objects can later be reloaded from their original source
             * as needed when they are rendered, just as when they were first
             * created.
             * </ul>
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Returns an ImageCapabilities object which can be
             * inquired as to the capabilities of this
             * Image on the specified GraphicsConfiguration.
             * This allows programmers to find
             * out more runtime information on the specific Image
             * object that they have created.  For example, the user
             * might create a BufferedImage but the system may have
             * no video memory left for creating an image of that
             * size on the given GraphicsConfiguration, so although the object
             * may be acceleratable in general, it
             * does not have that capability on this GraphicsConfiguration.
             */
            // @ts-ignore
            public getCapabilities(gc: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities;
            /**
             * Sets a hint for this image about how important acceleration is.
             * This priority hint is used to compare to the priorities of other
             * Image objects when determining how to use scarce acceleration
             * resources such as video memory.  When and if it is possible to
             * accelerate this Image, if there are not enough resources available
             * to provide that acceleration but enough can be freed up by
             * de-accelerating some other image of lower priority, then that other
             * Image may be de-accelerated in deference to this one.  Images
             * that have the same priority take up resources on a first-come,
             * first-served basis.
             */
            // @ts-ignore
            public setAccelerationPriority(priority: number): void;
            /**
             * Returns the current value of the acceleration priority hint.
             */
            // @ts-ignore
            public getAccelerationPriority(): number;
        }
    }
}
