declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class Toolkit extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected desktopProperties: java.util.Map;
            // @ts-ignore
            protected desktopPropsSupport: java.beans.PropertyChangeSupport;
            /**
             * Creates this toolkit's implementation of the <code>Desktop</code>
             * using the specified peer interface.
             */
            // @ts-ignore
            protected abstract createDesktopPeer(target: java.awt.Desktop): java.awt.peer.DesktopPeer;
            /**
             * Creates this toolkit's implementation of <code>Button</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createButton(target: java.awt.Button): java.awt.peer.ButtonPeer;
            /**
             * Creates this toolkit's implementation of <code>TextField</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createTextField(target: java.awt.TextField): java.awt.peer.TextFieldPeer;
            /**
             * Creates this toolkit's implementation of <code>Label</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createLabel(target: java.awt.Label): java.awt.peer.LabelPeer;
            /**
             * Creates this toolkit's implementation of <code>List</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createList(target: java.awt.List): java.awt.peer.ListPeer;
            /**
             * Creates this toolkit's implementation of <code>Checkbox</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createCheckbox(target: java.awt.Checkbox): java.awt.peer.CheckboxPeer;
            /**
             * Creates this toolkit's implementation of <code>Scrollbar</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createScrollbar(target: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer;
            /**
             * Creates this toolkit's implementation of <code>ScrollPane</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createScrollPane(target: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer;
            /**
             * Creates this toolkit's implementation of <code>TextArea</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createTextArea(target: java.awt.TextArea): java.awt.peer.TextAreaPeer;
            /**
             * Creates this toolkit's implementation of <code>Choice</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createChoice(target: java.awt.Choice): java.awt.peer.ChoicePeer;
            /**
             * Creates this toolkit's implementation of <code>Frame</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createFrame(target: java.awt.Frame): java.awt.peer.FramePeer;
            /**
             * Creates this toolkit's implementation of <code>Canvas</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createCanvas(target: java.awt.Canvas): java.awt.peer.CanvasPeer;
            /**
             * Creates this toolkit's implementation of <code>Panel</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createPanel(target: java.awt.Panel): java.awt.peer.PanelPeer;
            /**
             * Creates this toolkit's implementation of <code>Window</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createWindow(target: java.awt.Window): java.awt.peer.WindowPeer;
            /**
             * Creates this toolkit's implementation of <code>Dialog</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createDialog(target: java.awt.Dialog): java.awt.peer.DialogPeer;
            /**
             * Creates this toolkit's implementation of <code>MenuBar</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createMenuBar(target: java.awt.MenuBar): java.awt.peer.MenuBarPeer;
            /**
             * Creates this toolkit's implementation of <code>Menu</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createMenu(target: java.awt.Menu): java.awt.peer.MenuPeer;
            /**
             * Creates this toolkit's implementation of <code>PopupMenu</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createPopupMenu(target: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer;
            /**
             * Creates this toolkit's implementation of <code>MenuItem</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createMenuItem(target: java.awt.MenuItem): java.awt.peer.MenuItemPeer;
            /**
             * Creates this toolkit's implementation of <code>FileDialog</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createFileDialog(target: java.awt.FileDialog): java.awt.peer.FileDialogPeer;
            /**
             * Creates this toolkit's implementation of <code>CheckboxMenuItem</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract createCheckboxMenuItem(target: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer;
            /**
             * Obtains this toolkit's implementation of helper class for
             * <code>MouseInfo</code> operations.
             */
            // @ts-ignore
            protected getMouseInfoPeer(): java.awt.peer.MouseInfoPeer;
            /**
             * Creates a peer for a component or container.  This peer is windowless
             * and allows the Component and Container classes to be extended directly
             * to create windowless components that are defined entirely in java.
             */
            // @ts-ignore
            protected createComponent(target: java.awt.Component): java.awt.peer.LightweightPeer;
            /**
             * Creates this toolkit's implementation of <code>Font</code> using
             * the specified peer interface.
             */
            // @ts-ignore
            protected abstract getFontPeer(name: string, style: number): java.awt.peer.FontPeer;
            /**
             * Fills in the integer array that is supplied as an argument
             * with the current system color values.
             */
            // @ts-ignore
            protected loadSystemColors(systemColors: number): void;
            /**
             * Controls whether the layout of Containers is validated dynamically
             * during resizing, or statically, after resizing is complete.
             * Use {@code isDynamicLayoutActive()} to detect if this feature enabled
             * in this program and is supported by this operating system
             * and/or window manager.
             * Note that this feature is supported not on all platforms, and
             * conversely, that this feature cannot be turned off on some platforms.
             * On these platforms where dynamic layout during resizing is not supported
             * (or is always supported), setting this property has no effect.
             * Note that this feature can be set or unset as a property of the
             * operating system or window manager on some platforms.  On such
             * platforms, the dynamic resize property must be set at the operating
             * system or window manager level before this method can take effect.
             * This method does not change support or settings of the underlying
             * operating system or
             * window manager.  The OS/WM support can be
             * queried using getDesktopProperty("awt.dynamicLayoutSupported") method.
             */
            // @ts-ignore
            public setDynamicLayout(dynamic: boolean): void;
            /**
             * Returns whether the layout of Containers is validated dynamically
             * during resizing, or statically, after resizing is complete.
             * Note: this method returns the value that was set programmatically;
             * it does not reflect support at the level of the operating system
             * or window manager for dynamic layout on resizing, or the current
             * operating system or window manager settings.  The OS/WM support can
             * be queried using getDesktopProperty("awt.dynamicLayoutSupported").
             */
            // @ts-ignore
            protected isDynamicLayoutSet(): boolean;
            /**
             * Returns whether dynamic layout of Containers on resize is
             * currently active (both set in program
             * ( {@code isDynamicLayoutSet()} )
             * , and supported
             * by the underlying operating system and/or window manager).
             * If dynamic layout is currently inactive then Containers
             * re-layout their components when resizing is completed. As a result
             * the {@code Component.validate()} method will be invoked only
             * once per resize.
             * If dynamic layout is currently active then Containers
             * re-layout their components on every native resize event and
             * the {@code validate()} method will be invoked each time.
             * The OS/WM support can be queried using
             * the getDesktopProperty("awt.dynamicLayoutSupported") method.
             */
            // @ts-ignore
            public isDynamicLayoutActive(): boolean;
            /**
             * Gets the size of the screen.  On systems with multiple displays, the
             * primary display is used.  Multi-screen aware display dimensions are
             * available from <code>GraphicsConfiguration</code> and
             * <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            public abstract getScreenSize(): java.awt.Dimension;
            /**
             * Returns the screen resolution in dots-per-inch.
             */
            // @ts-ignore
            public abstract getScreenResolution(): number;
            /**
             * Gets the insets of the screen.
             */
            // @ts-ignore
            public getScreenInsets(gc: java.awt.GraphicsConfiguration): java.awt.Insets;
            /**
             * Determines the color model of this toolkit's screen.
             * <p>
             * <code>ColorModel</code> is an abstract class that
             * encapsulates the ability to translate between the
             * pixel values of an image and its red, green, blue,
             * and alpha components.
             * <p>
             * This toolkit method is called by the
             * <code>getColorModel</code> method
             * of the <code>Component</code> class.
             */
            // @ts-ignore
            public abstract getColorModel(): java.awt.image.ColorModel;
            /**
             * Returns the names of the available fonts in this toolkit.<p>
             * For 1.1, the following font names are deprecated (the replacement
             * name follows):
             * <ul>
             * <li>TimesRoman (use Serif)
             * <li>Helvetica (use SansSerif)
             * <li>Courier (use Monospaced)
             * </ul><p>
             * The ZapfDingbats fontname is also deprecated in 1.1 but the characters
             * are defined in Unicode starting at 0x2700, and as of 1.1 Java supports
             * those characters.
             */
            // @ts-ignore
            public abstract getFontList(): java.lang.String[];
            /**
             * Gets the screen device metrics for rendering of the font.
             */
            // @ts-ignore
            public abstract getFontMetrics(font: java.awt.Font): java.awt.FontMetrics;
            /**
             * Synchronizes this toolkit's graphics state. Some window systems
             * may do buffering of graphics events.
             * <p>
             * This method ensures that the display is up-to-date. It is useful
             * for animation.
             */
            // @ts-ignore
            public abstract sync(): void;
            /**
             * Gets the default toolkit.
             * <p>
             * If a system property named <code>"java.awt.headless"</code> is set
             * to <code>true</code> then the headless implementation
             * of <code>Toolkit</code> is used.
             * <p>
             * If there is no <code>"java.awt.headless"</code> or it is set to
             * <code>false</code> and there is a system property named
             * <code>"awt.toolkit"</code>,
             * that property is treated as the name of a class that is a subclass
             * of <code>Toolkit</code>;
             * otherwise the default platform-specific implementation of
             * <code>Toolkit</code> is used.
             * <p>
             * Also loads additional classes into the VM, using the property
             * 'assistive_technologies' specified in the Sun reference
             * implementation by a line in the 'accessibility.properties'
             * file.  The form is "assistive_technologies=..." where
             * the "..." is a comma-separated list of assistive technology
             * classes to load.  Each class is loaded in the order given
             * and a single instance of each is created using
             * Class.forName(class).newInstance().  This is done just after
             * the AWT toolkit is created.  All errors are handled via an
             * AWTError exception.
             */
            // @ts-ignore
            public static getDefaultToolkit(): java.awt.Toolkit;
            /**
             * Returns an image which gets pixel data from the specified file,
             * whose format can be either GIF, JPEG or PNG.
             * The underlying toolkit attempts to resolve multiple requests
             * with the same filename to the same returned Image.
             * <p>
             * Since the mechanism required to facilitate this sharing of
             * <code>Image</code> objects may continue to hold onto images
             * that are no longer in use for an indefinite period of time,
             * developers are encouraged to implement their own caching of
             * images by using the {@link #createImage(java.lang.String) createImage}
             * variant wherever available.
             * If the image data contained in the specified file changes,
             * the <code>Image</code> object returned from this method may
             * still contain stale information which was loaded from the
             * file after a prior call.
             * Previously loaded image data can be manually discarded by
             * calling the {@link Image#flush flush} method on the
             * returned <code>Image</code>.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkRead</code> method with the file specified to ensure
             * that the access to the image is allowed.
             */
            // @ts-ignore
            public abstract getImage(filename: string): java.awt.Image;
            /**
             * Returns an image which gets pixel data from the specified file.
             * The returned Image is a new object which will not be shared
             * with any other caller of this method or its getImage variant.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkRead</code> method with the specified file to ensure
             * that the image creation is allowed.
             */
            // @ts-ignore
            public abstract createImage(filename: string): java.awt.Image;
            /**
             * Prepares an image for rendering.
             * <p>
             * If the values of the width and height arguments are both
             * <code>-1</code>, this method prepares the image for rendering
             * on the default screen; otherwise, this method prepares an image
             * for rendering on the default screen at the specified width and height.
             * <p>
             * The image data is downloaded asynchronously in another thread,
             * and an appropriately scaled screen representation of the image is
             * generated.
             * <p>
             * This method is called by components <code>prepareImage</code>
             * methods.
             * <p>
             * Information on the flags returned by this method can be found
             * with the definition of the <code>ImageObserver</code> interface.
             */
            // @ts-ignore
            public abstract prepareImage(image: java.awt.Image, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
            /**
             * Indicates the construction status of a specified image that is
             * being prepared for display.
             * <p>
             * If the values of the width and height arguments are both
             * <code>-1</code>, this method returns the construction status of
             * a screen representation of the specified image in this toolkit.
             * Otherwise, this method returns the construction status of a
             * scaled representation of the image at the specified width
             * and height.
             * <p>
             * This method does not cause the image to begin loading.
             * An application must call <code>prepareImage</code> to force
             * the loading of an image.
             * <p>
             * This method is called by the component's <code>checkImage</code>
             * methods.
             * <p>
             * Information on the flags returned by this method can be found
             * with the definition of the <code>ImageObserver</code> interface.
             */
            // @ts-ignore
            public abstract checkImage(image: java.awt.Image, width: number, height: number, observer: java.awt.image.ImageObserver): number;
            /**
             * Creates an image which decodes the image stored in the specified
             * byte array.
             * <p>
             * The data must be in some image format, such as GIF or JPEG,
             * that is supported by this toolkit.
             */
            // @ts-ignore
            public createImage(imagedata: number): java.awt.Image;
            /**
             * Gets a <code>PrintJob</code> object which is the result of initiating
             * a print operation on the toolkit's platform.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's <code>checkPrintJobAccess</code> method to
             * ensure initiation of a print operation is allowed. If the default
             * implementation of <code>checkPrintJobAccess</code> is used (that is,
             * that method is not overriden), then this results in a call to the
             * security manager's <code>checkPermission</code> method with a <code>
             * RuntimePermission("queuePrintJob")</code> permission.
             */
            // @ts-ignore
            public abstract getPrintJob(frame: java.awt.Frame, jobtitle: string, props: java.util.Properties): java.awt.PrintJob;
            /**
             * Gets a <code>PrintJob</code> object which is the result of initiating
             * a print operation on the toolkit's platform.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's <code>checkPrintJobAccess</code> method to
             * ensure initiation of a print operation is allowed. If the default
             * implementation of <code>checkPrintJobAccess</code> is used (that is,
             * that method is not overriden), then this results in a call to the
             * security manager's <code>checkPermission</code> method with a <code>
             * RuntimePermission("queuePrintJob")</code> permission.
             */
            // @ts-ignore
            public getPrintJob(frame: java.awt.Frame, jobtitle: string, jobAttributes: java.awt.JobAttributes, pageAttributes: java.awt.PageAttributes): java.awt.PrintJob;
            /**
             * Emits an audio beep depending on native system settings and hardware
             * capabilities.
             */
            // @ts-ignore
            public abstract beep(): void;
            /**
             * Gets the singleton instance of the system Clipboard which interfaces
             * with clipboard facilities provided by the native platform. This
             * clipboard enables data transfer between Java programs and native
             * applications which use native clipboard facilities.
             * <p>
             * In addition to any and all formats specified in the flavormap.properties
             * file, or other file specified by the <code>AWT.DnD.flavorMapFileURL
             * </code> Toolkit property, text returned by the system Clipboard's <code>
             * getTransferData()</code> method is available in the following flavors:
             * <ul>
             * <li>DataFlavor.stringFlavor</li>
             * <li>DataFlavor.plainTextFlavor (<b>deprecated</b>)</li>
             * </ul>
             * As with <code>java.awt.datatransfer.StringSelection</code>, if the
             * requested flavor is <code>DataFlavor.plainTextFlavor</code>, or an
             * equivalent flavor, a Reader is returned. <b>Note:</b> The behavior of
             * the system Clipboard's <code>getTransferData()</code> method for <code>
             * DataFlavor.plainTextFlavor</code>, and equivalent DataFlavors, is
             * inconsistent with the definition of <code>DataFlavor.plainTextFlavor
             * </code>. Because of this, support for <code>
             * DataFlavor.plainTextFlavor</code>, and equivalent flavors, is
             * <b>deprecated</b>.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's {@link SecurityManager#checkPermission
             * checkPermission} method to check {@code AWTPermission("accessClipboard")}.
             */
            // @ts-ignore
            public abstract getSystemClipboard(): java.awt.datatransfer.Clipboard;
            /**
             * Gets the singleton instance of the system selection as a
             * <code>Clipboard</code> object. This allows an application to read and
             * modify the current, system-wide selection.
             * <p>
             * An application is responsible for updating the system selection whenever
             * the user selects text, using either the mouse or the keyboard.
             * Typically, this is implemented by installing a
             * <code>FocusListener</code> on all <code>Component</code>s which support
             * text selection, and, between <code>FOCUS_GAINED</code> and
             * <code>FOCUS_LOST</code> events delivered to that <code>Component</code>,
             * updating the system selection <code>Clipboard</code> when the selection
             * changes inside the <code>Component</code>. Properly updating the system
             * selection ensures that a Java application will interact correctly with
             * native applications and other Java applications running simultaneously
             * on the system. Note that <code>java.awt.TextComponent</code> and
             * <code>javax.swing.text.JTextComponent</code> already adhere to this
             * policy. When using these classes, and their subclasses, developers need
             * not write any additional code.
             * <p>
             * Some platforms do not support a system selection <code>Clipboard</code>.
             * On those platforms, this method will return <code>null</code>. In such a
             * case, an application is absolved from its responsibility to update the
             * system selection <code>Clipboard</code> as described above.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's {@link SecurityManager#checkPermission
             * checkPermission} method to check {@code AWTPermission("accessClipboard")}.
             */
            // @ts-ignore
            public getSystemSelection(): java.awt.datatransfer.Clipboard;
            /**
             * Determines which modifier key is the appropriate accelerator
             * key for menu shortcuts.
             * <p>
             * Menu shortcuts, which are embodied in the
             * <code>MenuShortcut</code> class, are handled by the
             * <code>MenuBar</code> class.
             * <p>
             * By default, this method returns <code>Event.CTRL_MASK</code>.
             * Toolkit implementations should override this method if the
             * <b>Control</b> key isn't the correct key for accelerators.
             */
            // @ts-ignore
            public getMenuShortcutKeyMask(): number;
            /**
             * Returns whether the given locking key on the keyboard is currently in
             * its "on" state.
             * Valid key codes are
             * {@link java.awt.event.KeyEvent#VK_CAPS_LOCK VK_CAPS_LOCK},
             * {@link java.awt.event.KeyEvent#VK_NUM_LOCK VK_NUM_LOCK},
             * {@link java.awt.event.KeyEvent#VK_SCROLL_LOCK VK_SCROLL_LOCK}, and
             * {@link java.awt.event.KeyEvent#VK_KANA_LOCK VK_KANA_LOCK}.
             */
            // @ts-ignore
            public getLockingKeyState(keyCode: number): boolean;
            /**
             * Sets the state of the given locking key on the keyboard.
             * Valid key codes are
             * {@link java.awt.event.KeyEvent#VK_CAPS_LOCK VK_CAPS_LOCK},
             * {@link java.awt.event.KeyEvent#VK_NUM_LOCK VK_NUM_LOCK},
             * {@link java.awt.event.KeyEvent#VK_SCROLL_LOCK VK_SCROLL_LOCK}, and
             * {@link java.awt.event.KeyEvent#VK_KANA_LOCK VK_KANA_LOCK}.
             * <p>
             * Depending on the platform, setting the state of a locking key may
             * involve event processing and therefore may not be immediately
             * observable through getLockingKeyState.
             */
            // @ts-ignore
            public setLockingKeyState(keyCode: number, on: boolean): void;
            /**
             * Give native peers the ability to query the native container
             * given a native component (eg the direct parent may be lightweight).
             */
            // @ts-ignore
            protected static getNativeContainer(c: java.awt.Component): java.awt.Container;
            /**
             * Creates a new custom cursor object.
             * If the image to display is invalid, the cursor will be hidden (made
             * completely transparent), and the hotspot will be set to (0, 0).
             * <p>Note that multi-frame images are invalid and may cause this
             * method to hang.
             */
            // @ts-ignore
            public createCustomCursor(cursor: java.awt.Image, hotSpot: java.awt.Point, name: string): java.awt.Cursor;
            /**
             * Returns the supported cursor dimension which is closest to the desired
             * sizes.  Systems which only support a single cursor size will return that
             * size regardless of the desired sizes.  Systems which don't support custom
             * cursors will return a dimension of 0, 0. <p>
             * Note:  if an image is used whose dimensions don't match a supported size
             * (as returned by this method), the Toolkit implementation will attempt to
             * resize the image to a supported size.
             * Since converting low-resolution images is difficult,
             * no guarantees are made as to the quality of a cursor image which isn't a
             * supported size.  It is therefore recommended that this method
             * be called and an appropriate image used so no image conversion is made.
             */
            // @ts-ignore
            public getBestCursorSize(preferredWidth: number, preferredHeight: number): java.awt.Dimension;
            /**
             * Returns the maximum number of colors the Toolkit supports in a custom cursor
             * palette.<p>
             * Note: if an image is used which has more colors in its palette than
             * the supported maximum, the Toolkit implementation will attempt to flatten the
             * palette to the maximum.  Since converting low-resolution images is difficult,
             * no guarantees are made as to the quality of a cursor image which has more
             * colors than the system supports.  It is therefore recommended that this method
             * be called and an appropriate image used so no image conversion is made.
             */
            // @ts-ignore
            public getMaximumCursorColors(): number;
            /**
             * Returns whether Toolkit supports this state for
             * <code>Frame</code>s.  This method tells whether the <em>UI
             * concept</em> of, say, maximization or iconification is
             * supported.  It will always return false for "compound" states
             * like <code>Frame.ICONIFIED|Frame.MAXIMIZED_VERT</code>.
             * In other words, the rule of thumb is that only queries with a
             * single frame state constant as an argument are meaningful.
             * <p>Note that supporting a given concept is a platform-
             * dependent feature. Due to native limitations the Toolkit
             * object may report a particular state as supported, however at
             * the same time the Toolkit object will be unable to apply the
             * state to a given frame.  This circumstance has two following
             * consequences:
             * <ul>
             * <li>Only the return value of {@code false} for the present
             * method actually indicates that the given state is not
             * supported. If the method returns {@code true} the given state
             * may still be unsupported and/or unavailable for a particular
             * frame.
             * <li>The developer should consider examining the value of the
             * {@link java.awt.event.WindowEvent#getNewState} method of the
             * {@code WindowEvent} received through the {@link
             * java.awt.event.WindowStateListener}, rather than assuming
             * that the state given to the {@code setExtendedState()} method
             * will be definitely applied. For more information see the
             * documentation for the {@link Frame#setExtendedState} method.
             * </ul>
             */
            // @ts-ignore
            public isFrameStateSupported(state: number): boolean;
            /**
             * Gets a property with the specified key and default.
             * This method returns defaultValue if the property is not found.
             */
            // @ts-ignore
            public static getProperty(key: string, defaultValue: string): string;
            /**
             * Get the application's or applet's EventQueue instance.
             * Depending on the Toolkit implementation, different EventQueues
             * may be returned for different applets.  Applets should
             * therefore not assume that the EventQueue instance returned
             * by this method will be shared by other applets or the system.
             * <p> If there is a security manager then its
             * {@link SecurityManager#checkPermission checkPermission} method
             * is called to check {@code AWTPermission("accessEventQueue")}.
             */
            // @ts-ignore
            public getSystemEventQueue(): java.awt.EventQueue;
            /**
             * Gets the application's or applet's <code>EventQueue</code>
             * instance, without checking access.  For security reasons,
             * this can only be called from a <code>Toolkit</code> subclass.
             */
            // @ts-ignore
            protected abstract getSystemEventQueueImpl(): java.awt.EventQueue;
            /**
             * Creates the peer for a DragSourceContext.
             * Always throws InvalidDndOperationException if
             * GraphicsEnvironment.isHeadless() returns true.
             */
            // @ts-ignore
            public abstract createDragSourceContextPeer(dge: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer;
            /**
             * Creates a concrete, platform dependent, subclass of the abstract
             * DragGestureRecognizer class requested, and associates it with the
             * DragSource, Component and DragGestureListener specified.
             * subclasses should override this to provide their own implementation
             */
            // @ts-ignore
            public createDragGestureRecognizer(abstractRecognizerClass: java.lang.Class, ds: java.awt.dnd.DragSource, c: java.awt.Component, srcActions: number, dgl: java.awt.dnd.DragGestureListener): java.awt.dnd.DragGestureRecognizer;
            /**
             * Obtains a value for the specified desktop property.
             * A desktop property is a uniquely named value for a resource that
             * is Toolkit global in nature. Usually it also is an abstract
             * representation for an underlying platform dependent desktop setting.
             * For more information on desktop properties supported by the AWT see
             * <a href="doc-files/DesktopProperties.html">AWT Desktop Properties</a>.
             */
            // @ts-ignore
            public getDesktopProperty(propertyName: string): java.lang.Object;
            /**
             * Sets the named desktop property to the specified value and fires a
             * property change event to notify any listeners that the value has changed.
             */
            // @ts-ignore
            protected setDesktopProperty(name: string, newValue: java.lang.Object): void;
            /**
             * an opportunity to lazily evaluate desktop property values.
             */
            // @ts-ignore
            protected lazilyLoadDesktopProperty(name: string): java.lang.Object;
            /**
             * initializeDesktopProperties
             */
            // @ts-ignore
            protected initializeDesktopProperties(): void;
            /**
             * Adds the specified property change listener for the named desktop
             * property. When a {@link java.beans.PropertyChangeListenerProxy} object is added,
             * its property name is ignored, and the wrapped listener is added.
             * If {@code name} is {@code null} or {@code pcl} is {@code null},
             * no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
            /**
             * Removes the specified property change listener for the named
             * desktop property. When a {@link java.beans.PropertyChangeListenerProxy} object
             * is removed, its property name is ignored, and
             * the wrapped listener is removed.
             * If {@code name} is {@code null} or {@code pcl} is {@code null},
             * no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public removePropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the property change listeners
             * registered on this toolkit. The returned array
             * contains {@link java.beans.PropertyChangeListenerProxy} objects
             * that associate listeners with the names of desktop properties.
             */
            // @ts-ignore
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
            /**
             * Returns an array of all property change listeners
             * associated with the specified name of a desktop property.
             */
            // @ts-ignore
            public getPropertyChangeListeners(propertyName: string): java.beans.PropertyChangeListener[];
            /**
             * Returns whether the always-on-top mode is supported by this toolkit.
             * To detect whether the always-on-top mode is supported for a
             * particular Window, use {@link Window#isAlwaysOnTopSupported}.
             */
            // @ts-ignore
            public isAlwaysOnTopSupported(): boolean;
            /**
             * Returns whether the given modality type is supported by this toolkit. If
             * a dialog with unsupported modality type is created, then
             * <code>Dialog.ModalityType.MODELESS</code> is used instead.
             */
            // @ts-ignore
            public abstract isModalityTypeSupported(modalityType: java.awt.Dialog.ModalityType): boolean;
            /**
             * Returns whether the given modal exclusion type is supported by this
             * toolkit. If an unsupported modal exclusion type property is set on a window,
             * then <code>Dialog.ModalExclusionType.NO_EXCLUDE</code> is used instead.
             */
            // @ts-ignore
            public abstract isModalExclusionTypeSupported(modalExclusionType: java.awt.Dialog.ModalExclusionType): boolean;
            /**
             * Adds an AWTEventListener to receive all AWTEvents dispatched
             * system-wide that conform to the given <code>eventMask</code>.
             * <p>
             * First, if there is a security manager, its <code>checkPermission</code>
             * method is called with an
             * <code>AWTPermission("listenToAllAWTEvents")</code> permission.
             * This may result in a SecurityException.
             * <p>
             * <code>eventMask</code> is a bitmask of event types to receive.
             * It is constructed by bitwise OR-ing together the event masks
             * defined in <code>AWTEvent</code>.
             * <p>
             * Note:  event listener use is not recommended for normal
             * application use, but are intended solely to support special
             * purpose facilities including support for accessibility,
             * event record/playback, and diagnostic tracing.
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addAWTEventListener(listener: java.awt.event.AWTEventListener, eventMask: number): void;
            /**
             * Removes an AWTEventListener from receiving dispatched AWTEvents.
             * <p>
             * First, if there is a security manager, its <code>checkPermission</code>
             * method is called with an
             * <code>AWTPermission("listenToAllAWTEvents")</code> permission.
             * This may result in a SecurityException.
             * <p>
             * Note:  event listener use is not recommended for normal
             * application use, but are intended solely to support special
             * purpose facilities including support for accessibility,
             * event record/playback, and diagnostic tracing.
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public removeAWTEventListener(listener: java.awt.event.AWTEventListener): void;
            /**
             * Returns an array of all the <code>AWTEventListener</code>s
             * registered on this toolkit.
             * If there is a security manager, its {@code checkPermission}
             * method is called with an
             * {@code AWTPermission("listenToAllAWTEvents")} permission.
             * This may result in a SecurityException.
             * Listeners can be returned
             * within <code>AWTEventListenerProxy</code> objects, which also contain
             * the event mask for the given listener.
             * Note that listener objects
             * added multiple times appear only once in the returned array.
             */
            // @ts-ignore
            public getAWTEventListeners(): java.awt.event.AWTEventListener[];
            /**
             * Returns an array of all the <code>AWTEventListener</code>s
             * registered on this toolkit which listen to all of the event
             * types specified in the {@code eventMask} argument.
             * If there is a security manager, its {@code checkPermission}
             * method is called with an
             * {@code AWTPermission("listenToAllAWTEvents")} permission.
             * This may result in a SecurityException.
             * Listeners can be returned
             * within <code>AWTEventListenerProxy</code> objects, which also contain
             * the event mask for the given listener.
             * Note that listener objects
             * added multiple times appear only once in the returned array.
             */
            // @ts-ignore
            public getAWTEventListeners(eventMask: number): java.awt.event.AWTEventListener[];
            /**
             * Returns a map of visual attributes for the abstract level description
             * of the given input method highlight, or null if no mapping is found.
             * The style field of the input method highlight is ignored. The map
             * returned is unmodifiable.
             */
            // @ts-ignore
            public abstract mapInputMethodHighlight(highlight: java.awt.im.InputMethodHighlight): java.util.Map;
            /**
             * Reports whether events from extra mouse buttons are allowed to be processed and posted into
             * {@code EventQueue}.
             * <br>
             * To change the returned value it is necessary to set the {@code sun.awt.enableExtraMouseButtons}
             * property before the {@code Toolkit} class initialization. This setting could be done on the application
             * startup by the following command:
             * <pre>
             * java -Dsun.awt.enableExtraMouseButtons=false Application
             * </pre>
             * Alternatively, the property could be set in the application by using the following code:
             * <pre>
             * System.setProperty("sun.awt.enableExtraMouseButtons", "true");
             * </pre>
             * before the {@code Toolkit} class initialization.
             * If not set by the time of the {@code Toolkit} class initialization, this property will be
             * initialized with {@code true}.
             * Changing this value after the {@code Toolkit} class initialization will have no effect.
             * <p>
             */
            // @ts-ignore
            public areExtraMouseButtonsEnabled(): boolean;
        }
    }
}
