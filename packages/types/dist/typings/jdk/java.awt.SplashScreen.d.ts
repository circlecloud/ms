declare namespace java {
    namespace awt {
        // @ts-ignore
         class SplashScreen extends java.lang.Object {
            /**
             * Returns the {@code SplashScreen} object used for
             * Java startup splash screen control on systems that support display.
             */
            // @ts-ignore
            public static getSplashScreen(): java.awt.SplashScreen;
            /**
             * Changes the splash screen image. The new image is loaded from the
             * specified URL; GIF, JPEG and PNG image formats are supported.
             * The method returns after the image has finished loading and the window
             * has been updated.
             * The splash screen window is resized according to the size of
             * the image and is centered on the screen.
             */
            // @ts-ignore
            public setImageURL(imageURL: java.net.URL): void;
            /**
             * Returns the current splash screen image.
             */
            // @ts-ignore
            public getImageURL(): java.net.URL;
            /**
             * Returns the bounds of the splash screen window as a {@link Rectangle}.
             * This may be useful if, for example, you want to replace the splash
             * screen with your window at the same location.
             * <p>
             * You cannot control the size or position of the splash screen.
             * The splash screen size is adjusted automatically when the image changes.
             * <p>
             * The image may contain transparent areas, and thus the reported bounds may
             * be larger than the visible splash screen image on the screen.
             */
            // @ts-ignore
            public getBounds(): java.awt.Rectangle;
            /**
             * Returns the size of the splash screen window as a {@link Dimension}.
             * This may be useful if, for example,
             * you want to draw on the splash screen overlay surface.
             * <p>
             * You cannot control the size or position of the splash screen.
             * The splash screen size is adjusted automatically when the image changes.
             * <p>
             * The image may contain transparent areas, and thus the reported size may
             * be larger than the visible splash screen image on the screen.
             */
            // @ts-ignore
            public getSize(): java.awt.Dimension;
            /**
             * Creates a graphics context (as a {@link Graphics2D} object) for the splash
             * screen overlay image, which allows you to draw over the splash screen.
             * Note that you do not draw on the main image but on the image that is
             * displayed over the main image using alpha blending. Also note that drawing
             * on the overlay image does not necessarily update the contents of splash
             * screen window. You should call {@code update()} on the
             * <code>SplashScreen</code> when you want the splash screen to be
             * updated immediately.
             * <p>
             * The pixel (0, 0) in the coordinate space of the graphics context
             * corresponds to the origin of the splash screen native window bounds (see
             * {@link #getBounds()}).
             */
            // @ts-ignore
            public createGraphics(): java.awt.Graphics2D;
            /**
             * Updates the splash window with current contents of the overlay image.
             */
            // @ts-ignore
            public update(): void;
            /**
             * Hides the splash screen, closes the window, and releases all associated
             * resources.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Determines whether the splash screen is visible. The splash screen may
             * be hidden using {@link #close()}, it is also hidden automatically when
             * the first AWT/Swing window is made visible.
             * <p>
             * Note that the native platform may delay presenting the splash screen
             * native window on the screen. The return value of {@code true} for this
             * method only guarantees that the conditions to hide the splash screen
             * window have not occurred yet.
             */
            // @ts-ignore
            public isVisible(): boolean;
        }
    }
}
