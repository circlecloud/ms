declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class GraphicsEnvironment extends java.lang.Object {
            /**
             * This is an abstract class and cannot be instantiated directly.
             * Instances must be obtained from a suitable factory or query method.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the local <code>GraphicsEnvironment</code>.
             */
            // @ts-ignore
            public static getLocalGraphicsEnvironment(): java.awt.GraphicsEnvironment;
            /**
             * Tests whether or not a display, keyboard, and mouse can be
             * supported in this environment.  If this method returns true,
             * a HeadlessException is thrown from areas of the Toolkit
             * and GraphicsEnvironment that are dependent on a display,
             * keyboard, or mouse.
             */
            // @ts-ignore
            public static isHeadless(): boolean;
            /**
             * Returns whether or not a display, keyboard, and mouse can be
             * supported in this graphics environment.  If this returns true,
             * <code>HeadlessException</code> will be thrown from areas of the
             * graphics environment that are dependent on a display, keyboard, or
             * mouse.
             */
            // @ts-ignore
            public isHeadlessInstance(): boolean;
            /**
             * Returns an array of all of the screen <code>GraphicsDevice</code>
             * objects.
             */
            // @ts-ignore
            public abstract getScreenDevices(): java.awt.GraphicsDevice[];
            /**
             * Returns the default screen <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            public abstract getDefaultScreenDevice(): java.awt.GraphicsDevice;
            /**
             * Returns a <code>Graphics2D</code> object for rendering into the
             * specified {@link BufferedImage}.
             */
            // @ts-ignore
            public abstract createGraphics(img: java.awt.image.BufferedImage): java.awt.Graphics2D;
            /**
             * Returns an array containing a one-point size instance of all fonts
             * available in this <code>GraphicsEnvironment</code>.  Typical usage
             * would be to allow a user to select a particular font.  Then, the
             * application can size the font and set various font attributes by
             * calling the <code>deriveFont</code> method on the chosen instance.
             * <p>
             * This method provides for the application the most precise control
             * over which <code>Font</code> instance is used to render text.
             * If a font in this <code>GraphicsEnvironment</code> has multiple
             * programmable variations, only one
             * instance of that <code>Font</code> is returned in the array, and
             * other variations must be derived by the application.
             * <p>
             * If a font in this environment has multiple programmable variations,
             * such as Multiple-Master fonts, only one instance of that font is
             * returned in the <code>Font</code> array.  The other variations
             * must be derived by the application.
             */
            // @ts-ignore
            public abstract getAllFonts(): java.awt.Font[];
            /**
             * Returns an array containing the names of all font families in this
             * <code>GraphicsEnvironment</code> localized for the default locale,
             * as returned by <code>Locale.getDefault()</code>.
             * <p>
             * Typical usage would be for presentation to a user for selection of
             * a particular family name. An application can then specify this name
             * when creating a font, in conjunction with a style, such as bold or
             * italic, giving the font system flexibility in choosing its own best
             * match among multiple fonts in the same font family.
             */
            // @ts-ignore
            public abstract getAvailableFontFamilyNames(): java.lang.String[];
            /**
             * Registers a <i>created</i> <code>Font</code>in this
             * <code>GraphicsEnvironment</code>.
             * A created font is one that was returned from calling
             * {@link Font#createFont}, or derived from a created font by
             * calling {@link Font#deriveFont}.
             * After calling this method for such a font, it is available to
             * be used in constructing new <code>Font</code>s by name or family name,
             * and is enumerated by {@link #getAvailableFontFamilyNames} and
             * {@link #getAllFonts} within the execution context of this
             * application or applet. This means applets cannot register fonts in
             * a way that they are visible to other applets.
             * <p>
             * Reasons that this method might not register the font and therefore
             * return <code>false</code> are:
             * <ul>
             * <li>The font is not a <i>created</i> <code>Font</code>.
             * <li>The font conflicts with a non-created <code>Font</code> already
             * in this <code>GraphicsEnvironment</code>. For example if the name
             * is that of a system font, or a logical font as described in the
             * documentation of the {@link Font} class. It is implementation dependent
             * whether a font may also conflict if it has the same family name
             * as a system font.
             * <p>Notice that an application can supersede the registration
             * of an earlier created font with a new one.
             * </ul>
             */
            // @ts-ignore
            public registerFont(font: java.awt.Font): boolean;
            /**
             * Indicates a preference for locale-specific fonts in the mapping of
             * logical fonts to physical fonts. Calling this method indicates that font
             * rendering should primarily use fonts specific to the primary writing
             * system (the one indicated by the default encoding and the initial
             * default locale). For example, if the primary writing system is
             * Japanese, then characters should be rendered using a Japanese font
             * if possible, and other fonts should only be used for characters for
             * which the Japanese font doesn't have glyphs.
             * <p>
             * The actual change in font rendering behavior resulting from a call
             * to this method is implementation dependent; it may have no effect at
             * all, or the requested behavior may already match the default behavior.
             * The behavior may differ between font rendering in lightweight
             * and peered components.  Since calling this method requests a
             * different font, clients should expect different metrics, and may need
             * to recalculate window sizes and layout. Therefore this method should
             * be called before user interface initialisation.
             */
            // @ts-ignore
            public preferLocaleFonts(): void;
            /**
             * Indicates a preference for proportional over non-proportional (e.g.
             * dual-spaced CJK fonts) fonts in the mapping of logical fonts to
             * physical fonts. If the default mapping contains fonts for which
             * proportional and non-proportional variants exist, then calling
             * this method indicates the mapping should use a proportional variant.
             * <p>
             * The actual change in font rendering behavior resulting from a call to
             * this method is implementation dependent; it may have no effect at all.
             * The behavior may differ between font rendering in lightweight and
             * peered components. Since calling this method requests a
             * different font, clients should expect different metrics, and may need
             * to recalculate window sizes and layout. Therefore this method should
             * be called before user interface initialisation.
             */
            // @ts-ignore
            public preferProportionalFonts(): void;
            /**
             * Returns the Point where Windows should be centered.
             * It is recommended that centered Windows be checked to ensure they fit
             * within the available display area using getMaximumWindowBounds().
             */
            // @ts-ignore
            public getCenterPoint(): java.awt.Point;
            /**
             * Returns the maximum bounds for centered Windows.
             * These bounds account for objects in the native windowing system such as
             * task bars and menu bars.  The returned bounds will reside on a single
             * display with one exception: on multi-screen systems where Windows should
             * be centered across all displays, this method returns the bounds of the
             * entire display area.
             * <p>
             * To get the usable bounds of a single display, use
             * <code>GraphicsConfiguration.getBounds()</code> and
             * <code>Toolkit.getScreenInsets()</code>.
             */
            // @ts-ignore
            public getMaximumWindowBounds(): java.awt.Rectangle;
        }
    }
}
