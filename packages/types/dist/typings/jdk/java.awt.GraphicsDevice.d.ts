// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class GraphicsDevice extends java.lang.Object {
            /**
             * This is an abstract class that cannot be instantiated directly.
             * Instances must be obtained from a suitable factory or query method.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static TYPE_RASTER_SCREEN: number;
            // @ts-ignore
            public static TYPE_PRINTER: number;
            // @ts-ignore
            public static TYPE_IMAGE_BUFFER: number;
            /**
             * Returns the type of this <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            public abstract getType(): number;
            /**
             * Returns the identification string associated with this
             * <code>GraphicsDevice</code>.
             * <p>
             * A particular program might use more than one
             * <code>GraphicsDevice</code> in a <code>GraphicsEnvironment</code>.
             * This method returns a <code>String</code> identifying a
             * particular <code>GraphicsDevice</code> in the local
             * <code>GraphicsEnvironment</code>.  Although there is
             * no public method to set this <code>String</code>, a programmer can
             * use the <code>String</code> for debugging purposes.  Vendors of
             * the Java&trade; Runtime Environment can
             * format the return value of the <code>String</code>.  To determine
             * how to interpret the value of the <code>String</code>, contact the
             * vendor of your Java Runtime.  To find out who the vendor is, from
             * your program, call the
             * {@link System#getProperty(String) getProperty} method of the
             * System class with "java.vendor".
             */
            // @ts-ignore
            public abstract getIDstring(): string;
            /**
             * Returns all of the <code>GraphicsConfiguration</code>
             * objects associated with this <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            public abstract getConfigurations(): java.awt.GraphicsConfiguration[];
            /**
             * Returns the default <code>GraphicsConfiguration</code>
             * associated with this <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            public abstract getDefaultConfiguration(): java.awt.GraphicsConfiguration;
            /**
             * Returns the "best" configuration possible that passes the
             * criteria defined in the {@link GraphicsConfigTemplate}.
             */
            // @ts-ignore
            public getBestConfiguration(gct: java.awt.GraphicsConfigTemplate): java.awt.GraphicsConfiguration;
            /**
             * Returns <code>true</code> if this <code>GraphicsDevice</code>
             * supports full-screen exclusive mode.
             * If a SecurityManager is installed, its
             * <code>checkPermission</code> method will be called
             * with <code>AWTPermission("fullScreenExclusive")</code>.
             * <code>isFullScreenSupported</code> returns true only if
             * that permission is granted.
             */
            // @ts-ignore
            public isFullScreenSupported(): boolean;
            /**
             * Enter full-screen mode, or return to windowed mode.  The entered
             * full-screen mode may be either exclusive or simulated.  Exclusive
             * mode is only available if <code>isFullScreenSupported</code>
             * returns <code>true</code>.
             * <p>
             * Exclusive mode implies:
             * <ul>
             * <li>Windows cannot overlap the full-screen window.  All other application
             * windows will always appear beneath the full-screen window in the Z-order.
             * <li>There can be only one full-screen window on a device at any time,
             * so calling this method while there is an existing full-screen Window
             * will cause the existing full-screen window to
             * return to windowed mode.
             * <li>Input method windows are disabled.  It is advisable to call
             * <code>Component.enableInputMethods(false)</code> to make a component
             * a non-client of the input method framework.
             * </ul>
             * <p>
             * The simulated full-screen mode places and resizes the window to the maximum
             * possible visible area of the screen. However, the native windowing system
             * may modify the requested geometry-related data, so that the {@code Window} object
             * is placed and sized in a way that corresponds closely to the desktop settings.
             * <p>
             * When entering full-screen mode, if the window to be used as a
             * full-screen window is not visible, this method will make it visible.
             * It will remain visible when returning to windowed mode.
             * <p>
             * When entering full-screen mode, all the translucency effects are reset for
             * the window. Its shape is set to {@code null}, the opacity value is set to
             * 1.0f, and the background color alpha is set to 255 (completely opaque).
             * These values are not restored when returning to windowed mode.
             * <p>
             * It is unspecified and platform-dependent how decorated windows operate
             * in full-screen mode. For this reason, it is recommended to turn off
             * the decorations in a {@code Frame} or {@code Dialog} object by using the
             * {@code setUndecorated} method.
             * <p>
             * When returning to windowed mode from an exclusive full-screen window,
             * any display changes made by calling {@code setDisplayMode} are
             * automatically restored to their original state.
             */
            // @ts-ignore
            public setFullScreenWindow(w: java.awt.Window): void;
            /**
             * Returns the <code>Window</code> object representing the
             * full-screen window if the device is in full-screen mode.
             */
            // @ts-ignore
            public getFullScreenWindow(): java.awt.Window;
            /**
             * Returns <code>true</code> if this <code>GraphicsDevice</code>
             * supports low-level display changes.
             * On some platforms low-level display changes may only be allowed in
             * full-screen exclusive mode (i.e., if {@link #isFullScreenSupported()}
             * returns {@code true} and the application has already entered
             * full-screen mode using {@link #setFullScreenWindow}).
             */
            // @ts-ignore
            public isDisplayChangeSupported(): boolean;
            /**
             * Sets the display mode of this graphics device. This is only allowed
             * if {@link #isDisplayChangeSupported()} returns {@code true} and may
             * require first entering full-screen exclusive mode using
             * {@link #setFullScreenWindow} providing that full-screen exclusive mode is
             * supported (i.e., {@link #isFullScreenSupported()} returns
             * {@code true}).
             * <p>
             * The display mode must be one of the display modes returned by
             * {@link #getDisplayModes()}, with one exception: passing a display mode
             * with {@link DisplayMode#REFRESH_RATE_UNKNOWN} refresh rate will result in
             * selecting a display mode from the list of available display modes with
             * matching width, height and bit depth.
             * However, passing a display mode with {@link DisplayMode#BIT_DEPTH_MULTI}
             * for bit depth is only allowed if such mode exists in the list returned by
             * {@link #getDisplayModes()}.
             * <p>
             * Example code:
             * <pre><code>
             * Frame frame;
             * DisplayMode newDisplayMode;
             * GraphicsDevice gd;
             * // create a Frame, select desired DisplayMode from the list of modes
             * // returned by gd.getDisplayModes() ...
             * if (gd.isFullScreenSupported()) {
             * gd.setFullScreenWindow(frame);
             * } else {
             * // proceed in non-full-screen mode
             * frame.setSize(...);
             * frame.setLocation(...);
             * frame.setVisible(true);
             * }
             * if (gd.isDisplayChangeSupported()) {
             * gd.setDisplayMode(newDisplayMode);
             * }
             * </code></pre>
             */
            // @ts-ignore
            public setDisplayMode(dm: java.awt.DisplayMode): void;
            /**
             * Returns the current display mode of this
             * <code>GraphicsDevice</code>.
             * The returned display mode is allowed to have a refresh rate
             * {@link DisplayMode#REFRESH_RATE_UNKNOWN} if it is indeterminate.
             * Likewise, the returned display mode is allowed to have a bit depth
             * {@link DisplayMode#BIT_DEPTH_MULTI} if it is indeterminate or if multiple
             * bit depths are supported.
             */
            // @ts-ignore
            public getDisplayMode(): java.awt.DisplayMode;
            /**
             * Returns all display modes available for this
             * <code>GraphicsDevice</code>.
             * The returned display modes are allowed to have a refresh rate
             * {@link DisplayMode#REFRESH_RATE_UNKNOWN} if it is indeterminate.
             * Likewise, the returned display modes are allowed to have a bit depth
             * {@link DisplayMode#BIT_DEPTH_MULTI} if it is indeterminate or if multiple
             * bit depths are supported.
             */
            // @ts-ignore
            public getDisplayModes(): java.awt.DisplayMode[];
            /**
             * This method returns the number of bytes available in
             * accelerated memory on this device.
             * Some images are created or cached
             * in accelerated memory on a first-come,
             * first-served basis.  On some operating systems,
             * this memory is a finite resource.  Calling this method
             * and scheduling the creation and flushing of images carefully may
             * enable applications to make the most efficient use of
             * that finite resource.
             * <br>
             * Note that the number returned is a snapshot of how much
             * memory is available; some images may still have problems
             * being allocated into that memory.  For example, depending
             * on operating system, driver, memory configuration, and
             * thread situations, the full extent of the size reported
             * may not be available for a given image.  There are further
             * inquiry methods on the {@link ImageCapabilities} object
             * associated with a VolatileImage that can be used to determine
             * whether a particular VolatileImage has been created in accelerated
             * memory.
             */
            // @ts-ignore
            public getAvailableAcceleratedMemory(): number;
            /**
             * Returns whether the given level of translucency is supported by
             * this graphics device.
             */
            // @ts-ignore
            public isWindowTranslucencySupported(translucencyKind: java.awt.GraphicsDevice.WindowTranslucency): boolean;
        }
    }
}
