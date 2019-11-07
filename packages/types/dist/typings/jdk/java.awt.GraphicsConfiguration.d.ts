// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class GraphicsConfiguration extends java.lang.Object {
            /**
             * This is an abstract class that cannot be instantiated directly.
             * Instances must be obtained from a suitable factory or query method.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the {@link GraphicsDevice} associated with this
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public abstract getDevice(): java.awt.GraphicsDevice;
            /**
             * Returns a {@link BufferedImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.  This
             * method has nothing to do with memory-mapping
             * a device.  The returned <code>BufferedImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             */
            // @ts-ignore
            public createCompatibleImage(width: number, height: number): java.awt.image.BufferedImage;
            /**
             * Returns a <code>BufferedImage</code> that supports the specified
             * transparency and has a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.  This
             * method has nothing to do with memory-mapping
             * a device. The returned <code>BufferedImage</code> has a layout and
             * color model that can be optimally blitted to a device
             * with this <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public createCompatibleImage(width: number, height: number, transparency: number): java.awt.image.BufferedImage;
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.
             * The returned <code>VolatileImage</code>
             * may have data that is stored optimally for the underlying graphics
             * device and may therefore benefit from platform-specific rendering
             * acceleration.
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number, height: number): java.awt.image.VolatileImage;
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.
             * The returned <code>VolatileImage</code>
             * may have data that is stored optimally for the underlying graphics
             * device and may therefore benefit from platform-specific rendering
             * acceleration.
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number, height: number, transparency: number): java.awt.image.VolatileImage;
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>, using
             * the specified image capabilities.
             * If the <code>caps</code> parameter is null, it is effectively ignored
             * and this method will create a VolatileImage without regard to
             * <code>ImageCapabilities</code> constraints.
             * The returned <code>VolatileImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number, height: number, caps: java.awt.ImageCapabilities): java.awt.image.VolatileImage;
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>, using
             * the specified image capabilities and transparency value.
             * If the <code>caps</code> parameter is null, it is effectively ignored
             * and this method will create a VolatileImage without regard to
             * <code>ImageCapabilities</code> constraints.
             * The returned <code>VolatileImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number, height: number, caps: java.awt.ImageCapabilities, transparency: number): java.awt.image.VolatileImage;
            /**
             * Returns the {@link ColorModel} associated with this
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public abstract getColorModel(): java.awt.image.ColorModel;
            /**
             * Returns the default {@link AffineTransform} for this
             * <code>GraphicsConfiguration</code>. This
             * <code>AffineTransform</code> is typically the Identity transform
             * for most normal screens.  The default <code>AffineTransform</code>
             * maps coordinates onto the device such that 72 user space
             * coordinate units measure approximately 1 inch in device
             * space.  The normalizing transform can be used to make
             * this mapping more exact.  Coordinates in the coordinate space
             * defined by the default <code>AffineTransform</code> for screen and
             * printer devices have the origin in the upper left-hand corner of
             * the target region of the device, with X coordinates
             * increasing to the right and Y coordinates increasing downwards.
             * For image buffers not associated with a device, such as those not
             * created by <code>createCompatibleImage</code>,
             * this <code>AffineTransform</code> is the Identity transform.
             */
            // @ts-ignore
            public abstract getDefaultTransform(): java.awt.geom.AffineTransform;
            /**
             * Returns a <code>AffineTransform</code> that can be concatenated
             * with the default <code>AffineTransform</code>
             * of a <code>GraphicsConfiguration</code> so that 72 units in user
             * space equals 1 inch in device space.
             * <p>
             * For a particular {@link Graphics2D}, g, one
             * can reset the transformation to create
             * such a mapping by using the following pseudocode:
             * <pre>
             * GraphicsConfiguration gc = g.getDeviceConfiguration();
             * g.setTransform(gc.getDefaultTransform());
             * g.transform(gc.getNormalizingTransform());
             * </pre>
             * Note that sometimes this <code>AffineTransform</code> is identity,
             * such as for printers or metafile output, and that this
             * <code>AffineTransform</code> is only as accurate as the information
             * supplied by the underlying system.  For image buffers not
             * associated with a device, such as those not created by
             * <code>createCompatibleImage</code>, this
             * <code>AffineTransform</code> is the Identity transform
             * since there is no valid distance measurement.
             */
            // @ts-ignore
            public abstract getNormalizingTransform(): java.awt.geom.AffineTransform;
            /**
             * Returns the bounds of the <code>GraphicsConfiguration</code>
             * in the device coordinates. In a multi-screen environment
             * with a virtual device, the bounds can have negative X
             * or Y origins.
             */
            // @ts-ignore
            public abstract getBounds(): java.awt.Rectangle;
            /**
             * Returns the buffering capabilities of this
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public getBufferCapabilities(): java.awt.BufferCapabilities;
            /**
             * Returns the image capabilities of this
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public getImageCapabilities(): java.awt.ImageCapabilities;
            /**
             * Returns whether this {@code GraphicsConfiguration} supports
             * the {@link GraphicsDevice.WindowTranslucency#PERPIXEL_TRANSLUCENT
             * PERPIXEL_TRANSLUCENT} kind of translucency.
             */
            // @ts-ignore
            public isTranslucencyCapable(): boolean;
        }
    }
}
