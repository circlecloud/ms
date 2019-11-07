// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Window extends java.awt.Container {
            /**
             * Constructs a new, initially invisible window with the specified
             * {@code Frame} as its owner. The window will not be focusable
             * unless its owner is showing on the screen.
             * <p>
             * If there is a security manager set, it is invoked to check
             * {@code AWTPermission("showWindowWithoutWarningBanner")}.
             * If that check fails with a {@code SecurityException} then a warning
             * banner is created.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame)
            /**
             * Constructs a new, initially invisible window with the specified
             * {@code Window} as its owner. This window will not be focusable
             * unless its nearest owning {@code Frame} or {@code Dialog}
             * is showing on the screen.
             * <p>
             * If there is a security manager set, it is invoked to check
             * {@code AWTPermission("showWindowWithoutWarningBanner")}.
             * If that check fails with a {@code SecurityException} then a
             * warning banner is created.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window)
            /**
             * Constructs a new, initially invisible window with the specified owner
             * {@code Window} and a {@code GraphicsConfiguration}
             * of a screen device. The Window will not be focusable unless
             * its nearest owning {@code Frame} or {@code Dialog}
             * is showing on the screen.
             * <p>
             * If there is a security manager set, it is invoked to check
             * {@code AWTPermission("showWindowWithoutWarningBanner")}. If that
             * check fails with a {@code SecurityException} then a warning banner
             * is created.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, gc: java.awt.GraphicsConfiguration)
            /**
             * Returns the sequence of images to be displayed as the icon for this window.
             * <p>
             * This method returns a copy of the internally stored list, so all operations
             * on the returned object will not affect the window's behavior.
             */
            // @ts-ignore
            public getIconImages(): java.util.List;
            /**
             * Sets the sequence of images to be displayed as the icon
             * for this window. Subsequent calls to {@code getIconImages} will
             * always return a copy of the {@code icons} list.
             * <p>
             * Depending on the platform capabilities one or several images
             * of different dimensions will be used as the window's icon.
             * <p>
             * The {@code icons} list is scanned for the images of most
             * appropriate dimensions from the beginning. If the list contains
             * several images of the same size, the first will be used.
             * <p>
             * Ownerless windows with no icon specified use platfrom-default icon.
             * The icon of an owned window may be inherited from the owner
             * unless explicitly overridden.
             * Setting the icon to {@code null} or empty list restores
             * the default behavior.
             * <p>
             * Note : Native windowing systems may use different images of differing
             * dimensions to represent a window, depending on the context (e.g.
             * window decoration, window list, taskbar, etc.). They could also use
             * just a single image for all contexts or no image at all.
             */
            // @ts-ignore
            public setIconImages(icons: java.util.List): void;
            /**
             * Sets the image to be displayed as the icon for this window.
             * <p>
             * This method can be used instead of {@link #setIconImages setIconImages()}
             * to specify a single image as a window's icon.
             * <p>
             * The following statement:
             * <pre>
             * setIconImage(image);
             * </pre>
             * is equivalent to:
             * <pre>
             * ArrayList&lt;Image&gt; imageList = new ArrayList&lt;Image&gt;();
             * imageList.add(image);
             * setIconImages(imageList);
             * </pre>
             * <p>
             * Note : Native windowing systems may use different images of differing
             * dimensions to represent a window, depending on the context (e.g.
             * window decoration, window list, taskbar, etc.). They could also use
             * just a single image for all contexts or no image at all.
             */
            // @ts-ignore
            public setIconImage(image: java.awt.Image): void;
            /**
             * Makes this Window displayable by creating the connection to its
             * native screen resource.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Causes this Window to be sized to fit the preferred size
             * and layouts of its subcomponents. The resulting width and
             * height of the window are automatically enlarged if either
             * of dimensions is less than the minimum size as specified
             * by the previous call to the {@code setMinimumSize} method.
             * <p>
             * If the window and/or its owner are not displayable yet,
             * both of them are made displayable before calculating
             * the preferred size. The Window is validated after its
             * size is being calculated.
             */
            // @ts-ignore
            public pack(): void;
            /**
             * Sets the minimum size of this window to a constant
             * value.  Subsequent calls to {@code getMinimumSize}
             * will always return this value. If current window's
             * size is less than {@code minimumSize} the size of the
             * window is automatically enlarged to honor the minimum size.
             * <p>
             * If the {@code setSize} or {@code setBounds} methods
             * are called afterwards with a width or height less than
             * that was specified by the {@code setMinimumSize} method
             * the window is automatically enlarged to meet
             * the {@code minimumSize} value. The {@code minimumSize}
             * value also affects the behaviour of the {@code pack} method.
             * <p>
             * The default behavior is restored by setting the minimum size
             * parameter to the {@code null} value.
             * <p>
             * Resizing operation may be restricted if the user tries
             * to resize window below the {@code minimumSize} value.
             * This behaviour is platform-dependent.
             */
            // @ts-ignore
            public setMinimumSize(minimumSize: java.awt.Dimension): void;
            /**
             * {@inheritDoc}
             * <p>
             * The {@code d.width} and {@code d.height} values
             * are automatically enlarged if either is less than
             * the minimum size as specified by previous call to
             * {@code setMinimumSize}.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setSize(d: java.awt.Dimension): void;
            /**
             * {@inheritDoc}
             * <p>
             * The {@code width} and {@code height} values
             * are automatically enlarged if either is less than
             * the minimum size as specified by previous call to
             * {@code setMinimumSize}.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setSize(width: number, height: number): void;
            /**
             * {@inheritDoc}
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setLocation(x: number, y: number): void;
            /**
             * {@inheritDoc}
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setLocation(p: java.awt.Point): void;
            // @ts-ignore
            public reshape(x: number, y: number, width: number, height: number): void;
            /**
             * Shows or hides this {@code Window} depending on the value of parameter
             * {@code b}.
             * <p>
             * If the method shows the window then the window is also made
             * focused under the following conditions:
             * <ul>
             * <li> The {@code Window} meets the requirements outlined in the
             * {@link #isFocusableWindow} method.
             * <li> The {@code Window}'s {@code autoRequestFocus} property is of the {@code true} value.
             * <li> Native windowing system allows the {@code Window} to get focused.
             * </ul>
             * There is an exception for the second condition (the value of the
             * {@code autoRequestFocus} property). The property is not taken into account if the
             * window is a modal dialog, which blocks the currently focused window.
             * <p>
             * Developers must never assume that the window is the focused or active window
             * until it receives a WINDOW_GAINED_FOCUS or WINDOW_ACTIVATED event.
             */
            // @ts-ignore
            public setVisible(b: boolean): void;
            /**
             * Makes the Window visible. If the Window and/or its owner
             * are not yet displayable, both are made displayable.  The
             * Window will be validated prior to being made visible.
             * If the Window is already visible, this will bring the Window
             * to the front.
             */
            // @ts-ignore
            public show(): void;
            /**
             * Hide this Window, its subcomponents, and all of its owned children.
             * The Window and its subcomponents can be made visible again
             * with a call to {@code show}.
             */
            // @ts-ignore
            public hide(): void;
            /**
             * Releases all of the native screen resources used by this
             * {@code Window}, its subcomponents, and all of its owned
             * children. That is, the resources for these {@code Component}s
             * will be destroyed, any memory they consume will be returned to the
             * OS, and they will be marked as undisplayable.
             * <p>
             * The {@code Window} and its subcomponents can be made displayable
             * again by rebuilding the native resources with a subsequent call to
             * {@code pack} or {@code show}. The states of the recreated
             * {@code Window} and its subcomponents will be identical to the
             * states of these objects at the point where the {@code Window}
             * was disposed (not accounting for additional modifications between
             * those actions).
             * <p>
             * <b>Note</b>: When the last displayable window
             * within the Java virtual machine (VM) is disposed of, the VM may
             * terminate.  See <a href="doc-files/AWTThreadIssues.html#Autoshutdown">
             * AWT Threading Issues</a> for more information.
             */
            // @ts-ignore
            public dispose(): void;
            /**
             * If this Window is visible, brings this Window to the front and may make
             * it the focused Window.
             * <p>
             * Places this Window at the top of the stacking order and shows it in
             * front of any other Windows in this VM. No action will take place if this
             * Window is not visible. Some platforms do not allow Windows which own
             * other Windows to appear on top of those owned Windows. Some platforms
             * may not permit this VM to place its Windows above windows of native
             * applications, or Windows of other VMs. This permission may depend on
             * whether a Window in this VM is already focused. Every attempt will be
             * made to move this Window as high as possible in the stacking order;
             * however, developers should not assume that this method will move this
             * Window above all other windows in every situation.
             * <p>
             * Developers must never assume that this Window is the focused or active
             * Window until this Window receives a WINDOW_GAINED_FOCUS or WINDOW_ACTIVATED
             * event. On platforms where the top-most window is the focused window, this
             * method will <b>probably</b> focus this Window (if it is not already focused)
             * under the following conditions:
             * <ul>
             * <li> The window meets the requirements outlined in the
             * {@link #isFocusableWindow} method.
             * <li> The window's property {@code autoRequestFocus} is of the
             * {@code true} value.
             * <li> Native windowing system allows the window to get focused.
             * </ul>
             * On platforms where the stacking order does not typically affect the focused
             * window, this method will <b>probably</b> leave the focused and active
             * Windows unchanged.
             * <p>
             * If this method causes this Window to be focused, and this Window is a
             * Frame or a Dialog, it will also become activated. If this Window is
             * focused, but it is not a Frame or a Dialog, then the first Frame or
             * Dialog that is an owner of this Window will be activated.
             * <p>
             * If this window is blocked by modal dialog, then the blocking dialog
             * is brought to the front and remains above the blocked window.
             */
            // @ts-ignore
            public toFront(): void;
            /**
             * If this Window is visible, sends this Window to the back and may cause
             * it to lose focus or activation if it is the focused or active Window.
             * <p>
             * Places this Window at the bottom of the stacking order and shows it
             * behind any other Windows in this VM. No action will take place is this
             * Window is not visible. Some platforms do not allow Windows which are
             * owned by other Windows to appear below their owners. Every attempt will
             * be made to move this Window as low as possible in the stacking order;
             * however, developers should not assume that this method will move this
             * Window below all other windows in every situation.
             * <p>
             * Because of variations in native windowing systems, no guarantees about
             * changes to the focused and active Windows can be made. Developers must
             * never assume that this Window is no longer the focused or active Window
             * until this Window receives a WINDOW_LOST_FOCUS or WINDOW_DEACTIVATED
             * event. On platforms where the top-most window is the focused window,
             * this method will <b>probably</b> cause this Window to lose focus. In
             * that case, the next highest, focusable Window in this VM will receive
             * focus. On platforms where the stacking order does not typically affect
             * the focused window, this method will <b>probably</b> leave the focused
             * and active Windows unchanged.
             */
            // @ts-ignore
            public toBack(): void;
            /**
             * Returns the toolkit of this frame.
             */
            // @ts-ignore
            public getToolkit(): java.awt.Toolkit;
            /**
             * Gets the warning string that is displayed with this window.
             * If this window is insecure, the warning string is displayed
             * somewhere in the visible area of the window. A window is
             * insecure if there is a security manager and the security
             * manager denies
             * {@code AWTPermission("showWindowWithoutWarningBanner")}.
             * <p>
             * If the window is secure, then {@code getWarningString}
             * returns {@code null}. If the window is insecure, this
             * method checks for the system property
             * {@code awt.appletWarning}
             * and returns the string value of that property.
             */
            // @ts-ignore
            public getWarningString(): string;
            /**
             * Gets the {@code Locale} object that is associated
             * with this window, if the locale has been set.
             * If no locale has been set, then the default locale
             * is returned.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale;
            /**
             * Gets the input context for this window. A window always has an input context,
             * which is shared by subcomponents unless they create and set their own.
             */
            // @ts-ignore
            public getInputContext(): java.awt.im.InputContext;
            /**
             * Set the cursor image to a specified cursor.
             * <p>
             * The method may have no visual effect if the Java platform
             * implementation and/or the native system do not support
             * changing the mouse cursor shape.
             */
            // @ts-ignore
            public setCursor(cursor: java.awt.Cursor): void;
            /**
             * Returns the owner of this window.
             */
            // @ts-ignore
            public getOwner(): java.awt.Window;
            /**
             * Return an array containing all the windows this
             * window currently owns.
             */
            // @ts-ignore
            public getOwnedWindows(): java.awt.Window[];
            /**
             * Returns an array of all {@code Window}s, both owned and ownerless,
             * created by this application.
             * If called from an applet, the array includes only the {@code Window}s
             * accessible by that applet.
             * <p>
             * <b>Warning:</b> this method may return system created windows, such
             * as a print dialog. Applications should not assume the existence of
             * these dialogs, nor should an application assume anything about these
             * dialogs such as component positions, {@code LayoutManager}s
             * or serialization.
             */
            // @ts-ignore
            public static getWindows(): java.awt.Window[];
            /**
             * Returns an array of all {@code Window}s created by this application
             * that have no owner. They include {@code Frame}s and ownerless
             * {@code Dialog}s and {@code Window}s.
             * If called from an applet, the array includes only the {@code Window}s
             * accessible by that applet.
             * <p>
             * <b>Warning:</b> this method may return system created windows, such
             * as a print dialog. Applications should not assume the existence of
             * these dialogs, nor should an application assume anything about these
             * dialogs such as component positions, {@code LayoutManager}s
             * or serialization.
             */
            // @ts-ignore
            public static getOwnerlessWindows(): java.awt.Window[];
            /**
             * Specifies the modal exclusion type for this window. If a window is modal
             * excluded, it is not blocked by some modal dialogs. See {@link
             * java.awt.Dialog.ModalExclusionType Dialog.ModalExclusionType} for
             * possible modal exclusion types.
             * <p>
             * If the given type is not supported, {@code NO_EXCLUDE} is used.
             * <p>
             * Note: changing the modal exclusion type for a visible window may have no
             * effect until it is hidden and then shown again.
             */
            // @ts-ignore
            public setModalExclusionType(exclusionType: java.awt.Dialog.ModalExclusionType): void;
            /**
             * Returns the modal exclusion type of this window.
             */
            // @ts-ignore
            public getModalExclusionType(): java.awt.Dialog.ModalExclusionType;
            /**
             * Adds the specified window listener to receive window events from
             * this window.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addWindowListener(l: java.awt.event.WindowListener): void;
            /**
             * Adds the specified window state listener to receive window
             * events from this window.  If {@code l} is {@code null},
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addWindowStateListener(l: java.awt.event.WindowStateListener): void;
            /**
             * Adds the specified window focus listener to receive window events
             * from this window.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addWindowFocusListener(l: java.awt.event.WindowFocusListener): void;
            /**
             * Removes the specified window listener so that it no longer
             * receives window events from this window.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeWindowListener(l: java.awt.event.WindowListener): void;
            /**
             * Removes the specified window state listener so that it no
             * longer receives window events from this window.  If
             * {@code l} is {@code null}, no exception is thrown and
             * no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeWindowStateListener(l: java.awt.event.WindowStateListener): void;
            /**
             * Removes the specified window focus listener so that it no longer
             * receives window events from this window.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeWindowFocusListener(l: java.awt.event.WindowFocusListener): void;
            /**
             * Returns an array of all the window listeners
             * registered on this window.
             */
            // @ts-ignore
            public getWindowListeners(): java.awt.event.WindowListener[];
            /**
             * Returns an array of all the window focus listeners
             * registered on this window.
             */
            // @ts-ignore
            public getWindowFocusListeners(): java.awt.event.WindowFocusListener[];
            /**
             * Returns an array of all the window state listeners
             * registered on this window.
             */
            // @ts-ignore
            public getWindowStateListeners(): java.awt.event.WindowStateListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this {@code Window}.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the {@code listenerType} argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * {@code Window} {@code w}
             * for its window listeners with the following code:
             * <pre>WindowListener[] wls = (WindowListener[])(w.getListeners(WindowListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this window. If the event is an
             * {@code WindowEvent}, it invokes the
             * {@code processWindowEvent} method, else it invokes its
             * superclass's {@code processEvent}.
             * <p>Note that if the event parameter is {@code null}
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes window events occurring on this window by
             * dispatching them to any registered WindowListener objects.
             * NOTE: This method will not be called unless window events
             * are enabled for this component; this happens when one of the
             * following occurs:
             * <ul>
             * <li>A WindowListener object is registered via
             * {@code addWindowListener}
             * <li>Window events are enabled via {@code enableEvents}
             * </ul>
             * <p>Note that if the event parameter is {@code null}
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processWindowEvent(e: java.awt.event.WindowEvent): void;
            /**
             * Processes window focus event occurring on this window by
             * dispatching them to any registered WindowFocusListener objects.
             * NOTE: this method will not be called unless window focus events
             * are enabled for this window. This happens when one of the
             * following occurs:
             * <ul>
             * <li>a WindowFocusListener is registered via
             * {@code addWindowFocusListener}
             * <li>Window focus events are enabled via {@code enableEvents}
             * </ul>
             * <p>Note that if the event parameter is {@code null}
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processWindowFocusEvent(e: java.awt.event.WindowEvent): void;
            /**
             * Processes window state event occurring on this window by
             * dispatching them to any registered {@code WindowStateListener}
             * objects.
             * NOTE: this method will not be called unless window state events
             * are enabled for this window.  This happens when one of the
             * following occurs:
             * <ul>
             * <li>a {@code WindowStateListener} is registered via
             * {@code addWindowStateListener}
             * <li>window state events are enabled via {@code enableEvents}
             * </ul>
             * <p>Note that if the event parameter is {@code null}
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processWindowStateEvent(e: java.awt.event.WindowEvent): void;
            /**
             * Sets whether this window should always be above other windows.  If
             * there are multiple always-on-top windows, their relative order is
             * unspecified and platform dependent.
             * <p>
             * If some other window is already always-on-top then the
             * relative order between these windows is unspecified (depends on
             * platform).  No window can be brought to be over the always-on-top
             * window except maybe another always-on-top window.
             * <p>
             * All windows owned by an always-on-top window inherit this state and
             * automatically become always-on-top.  If a window ceases to be
             * always-on-top, the windows that it owns will no longer be
             * always-on-top.  When an always-on-top window is sent {@link #toBack
             * toBack}, its always-on-top state is set to {@code false}.
             * <p> When this method is called on a window with a value of
             * {@code true}, and the window is visible and the platform
             * supports always-on-top for this window, the window is immediately
             * brought forward, "sticking" it in the top-most position. If the
             * window isn`t currently visible, this method sets the always-on-top
             * state to {@code true} but does not bring the window forward.
             * When the window is later shown, it will be always-on-top.
             * <p> When this method is called on a window with a value of
             * {@code false} the always-on-top state is set to normal. It may also
             * cause an unspecified, platform-dependent change in the z-order of
             * top-level windows, but other always-on-top windows will remain in
             * top-most position. Calling this method with a value of {@code false}
             * on a window that has a normal state has no effect.
             * <p><b>Note</b>: some platforms might not support always-on-top
             * windows.  To detect if always-on-top windows are supported by the
             * current platform, use {@link Toolkit#isAlwaysOnTopSupported()} and
             * {@link Window#isAlwaysOnTopSupported()}.  If always-on-top mode
             * isn't supported for this window or this window's toolkit does not
             * support always-on-top windows, calling this method has no effect.
             * <p>
             * If a SecurityManager is installed, the calling thread must be
             * granted the AWTPermission "setWindowAlwaysOnTop" in
             * order to set the value of this property. If this
             * permission is not granted, this method will throw a
             * SecurityException, and the current value of the property will
             * be left unchanged.
             */
            // @ts-ignore
            public setAlwaysOnTop(alwaysOnTop: boolean): void;
            /**
             * Returns whether the always-on-top mode is supported for this
             * window. Some platforms may not support always-on-top windows, some
             * may support only some kinds of top-level windows; for example,
             * a platform may not support always-on-top modal dialogs.
             */
            // @ts-ignore
            public isAlwaysOnTopSupported(): boolean;
            /**
             * Returns whether this window is an always-on-top window.
             */
            // @ts-ignore
            public isAlwaysOnTop(): boolean;
            /**
             * Returns the child Component of this Window that has focus if this Window
             * is focused; returns null otherwise.
             */
            // @ts-ignore
            public getFocusOwner(): java.awt.Component;
            /**
             * Returns the child Component of this Window that will receive the focus
             * when this Window is focused. If this Window is currently focused, this
             * method returns the same Component as {@code getFocusOwner()}. If
             * this Window is not focused, then the child Component that most recently
             * requested focus will be returned. If no child Component has ever
             * requested focus, and this is a focusable Window, then this Window's
             * initial focusable Component is returned. If no child Component has ever
             * requested focus, and this is a non-focusable Window, null is returned.
             */
            // @ts-ignore
            public getMostRecentFocusOwner(): java.awt.Component;
            /**
             * Returns whether this Window is active. Only a Frame or a Dialog may be
             * active. The native windowing system may denote the active Window or its
             * children with special decorations, such as a highlighted title bar. The
             * active Window is always either the focused Window, or the first Frame or
             * Dialog that is an owner of the focused Window.
             */
            // @ts-ignore
            public isActive(): boolean;
            /**
             * Returns whether this Window is focused. If there exists a focus owner,
             * the focused Window is the Window that is, or contains, that focus owner.
             * If there is no focus owner, then no Window is focused.
             * <p>
             * If the focused Window is a Frame or a Dialog it is also the active
             * Window. Otherwise, the active Window is the first Frame or Dialog that
             * is an owner of the focused Window.
             */
            // @ts-ignore
            public isFocused(): boolean;
            /**
             * Gets a focus traversal key for this Window. (See {@code
             * setFocusTraversalKeys} for a full description of each key.)
             * <p>
             * If the traversal key has not been explicitly set for this Window,
             * then this Window's parent's traversal key is returned. If the
             * traversal key has not been explicitly set for any of this Window's
             * ancestors, then the current KeyboardFocusManager's default traversal key
             * is returned.
             */
            // @ts-ignore
            public getFocusTraversalKeys(id: number): java.util.Set;
            /**
             * Does nothing because Windows must always be roots of a focus traversal
             * cycle. The passed-in value is ignored.
             */
            // @ts-ignore
            public setFocusCycleRoot(focusCycleRoot: boolean): void;
            /**
             * Always returns {@code true} because all Windows must be roots of a
             * focus traversal cycle.
             */
            // @ts-ignore
            public isFocusCycleRoot(): boolean;
            /**
             * Always returns {@code null} because Windows have no ancestors; they
             * represent the top of the Component hierarchy.
             */
            // @ts-ignore
            public getFocusCycleRootAncestor(): java.awt.Container;
            /**
             * Returns whether this Window can become the focused Window, that is,
             * whether this Window or any of its subcomponents can become the focus
             * owner. For a Frame or Dialog to be focusable, its focusable Window state
             * must be set to {@code true}. For a Window which is not a Frame or
             * Dialog to be focusable, its focusable Window state must be set to
             * {@code true}, its nearest owning Frame or Dialog must be
             * showing on the screen, and it must contain at least one Component in
             * its focus traversal cycle. If any of these conditions is not met, then
             * neither this Window nor any of its subcomponents can become the focus
             * owner.
             */
            // @ts-ignore
            public isFocusableWindow(): boolean;
            /**
             * Returns whether this Window can become the focused Window if it meets
             * the other requirements outlined in {@code isFocusableWindow}. If
             * this method returns {@code false}, then
             * {@code isFocusableWindow} will return {@code false} as well.
             * If this method returns {@code true}, then
             * {@code isFocusableWindow} may return {@code true} or
             * {@code false} depending upon the other requirements which must be
             * met in order for a Window to be focusable.
             * <p>
             * By default, all Windows have a focusable Window state of
             * {@code true}.
             */
            // @ts-ignore
            public getFocusableWindowState(): boolean;
            /**
             * Sets whether this Window can become the focused Window if it meets
             * the other requirements outlined in {@code isFocusableWindow}. If
             * this Window's focusable Window state is set to {@code false}, then
             * {@code isFocusableWindow} will return {@code false}. If this
             * Window's focusable Window state is set to {@code true}, then
             * {@code isFocusableWindow} may return {@code true} or
             * {@code false} depending upon the other requirements which must be
             * met in order for a Window to be focusable.
             * <p>
             * Setting a Window's focusability state to {@code false} is the
             * standard mechanism for an application to identify to the AWT a Window
             * which will be used as a floating palette or toolbar, and thus should be
             * a non-focusable Window.
             * Setting the focusability state on a visible {@code Window}
             * can have a delayed effect on some platforms &#151; the actual
             * change may happen only when the {@code Window} becomes
             * hidden and then visible again.  To ensure consistent behavior
             * across platforms, set the {@code Window}'s focusable state
             * when the {@code Window} is invisible and then show it.
             */
            // @ts-ignore
            public setFocusableWindowState(focusableWindowState: boolean): void;
            /**
             * Sets whether this window should receive focus on
             * subsequently being shown (with a call to {@link #setVisible setVisible(true)}),
             * or being moved to the front (with a call to {@link #toFront}).
             * <p>
             * Note that {@link #setVisible setVisible(true)} may be called indirectly
             * (e.g. when showing an owner of the window makes the window to be shown).
             * {@link #toFront} may also be called indirectly (e.g. when
             * {@link #setVisible setVisible(true)} is called on already visible window).
             * In all such cases this property takes effect as well.
             * <p>
             * The value of the property is not inherited by owned windows.
             */
            // @ts-ignore
            public setAutoRequestFocus(autoRequestFocus: boolean): void;
            /**
             * Returns whether this window should receive focus on subsequently being shown
             * (with a call to {@link #setVisible setVisible(true)}), or being moved to the front
             * (with a call to {@link #toFront}).
             * <p>
             * By default, the window has {@code autoRequestFocus} value of {@code true}.
             */
            // @ts-ignore
            public isAutoRequestFocus(): boolean;
            /**
             * Adds a PropertyChangeListener to the listener list. The listener is
             * registered for all bound properties of this class, including the
             * following:
             * <ul>
             * <li>this Window's font ("font")</li>
             * <li>this Window's background color ("background")</li>
             * <li>this Window's foreground color ("foreground")</li>
             * <li>this Window's focusability ("focusable")</li>
             * <li>this Window's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Window's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Window's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Window's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Window's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Window's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Window's focusable Window state ("focusableWindowState")
             * </li>
             * <li>this Window's always-on-top state("alwaysOnTop")</li>
             * </ul>
             * Note that if this Window is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Adds a PropertyChangeListener to the listener list for a specific
             * property. The specified property may be user-defined, or one of the
             * following:
             * <ul>
             * <li>this Window's font ("font")</li>
             * <li>this Window's background color ("background")</li>
             * <li>this Window's foreground color ("foreground")</li>
             * <li>this Window's focusability ("focusable")</li>
             * <li>this Window's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Window's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Window's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Window's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Window's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Window's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Window's focusable Window state ("focusableWindowState")
             * </li>
             * <li>this Window's always-on-top state("alwaysOnTop")</li>
             * </ul>
             * Note that if this Window is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Indicates if this container is a validate root.
             * <p>
             * {@code Window} objects are the validate roots, and, therefore, they
             * override this method to return {@code true}.
             */
            // @ts-ignore
            public isValidateRoot(): boolean;
            // @ts-ignore
            public postEvent(e: java.awt.Event): boolean;
            /**
             * Checks if this Window is showing on screen.
             */
            // @ts-ignore
            public isShowing(): boolean;
            // @ts-ignore
            public applyResourceBundle(rb: java.util.ResourceBundle): void;
            // @ts-ignore
            public applyResourceBundle(rbName: string): void;
            /**
             * Sets the type of the window.
             * This method can only be called while the window is not displayable.
             */
            // @ts-ignore
            public setType(type: java.awt.Window.Type): void;
            /**
             * Returns the type of the window.
             */
            // @ts-ignore
            public getType(): java.awt.Window.Type;
            /**
             * Gets the AccessibleContext associated with this Window.
             * For windows, the AccessibleContext takes the form of an
             * AccessibleAWTWindow.
             * A new AccessibleAWTWindow instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
            /**
             * Sets the location of the window relative to the specified
             * component according to the following scenarios.
             * <p>
             * The target screen mentioned below is a screen to which
             * the window should be placed after the setLocationRelativeTo
             * method is called.
             * <ul>
             * <li>If the component is {@code null}, or the {@code
             * GraphicsConfiguration} associated with this component is
             * {@code null}, the window is placed in the center of the
             * screen. The center point can be obtained with the {@link
             * GraphicsEnvironment#getCenterPoint
             * GraphicsEnvironment.getCenterPoint} method.
             * <li>If the component is not {@code null}, but it is not
             * currently showing, the window is placed in the center of
             * the target screen defined by the {@code
             * GraphicsConfiguration} associated with this component.
             * <li>If the component is not {@code null} and is shown on
             * the screen, then the window is located in such a way that
             * the center of the window coincides with the center of the
             * component.
             * </ul>
             * <p>
             * If the screens configuration does not allow the window to
             * be moved from one screen to another, then the window is
             * only placed at the location determined according to the
             * above conditions and its {@code GraphicsConfiguration} is
             * not changed.
             * <p>
             * <b>Note</b>: If the lower edge of the window is out of the screen,
             * then the window is placed to the side of the {@code Component}
             * that is closest to the center of the screen. So if the
             * component is on the right part of the screen, the window
             * is placed to its left, and vice versa.
             * <p>
             * If after the window location has been calculated, the upper,
             * left, or right edge of the window is out of the screen,
             * then the window is located in such a way that the upper,
             * left, or right edge of the window coincides with the
             * corresponding edge of the screen. If both left and right
             * edges of the window are out of the screen, the window is
             * placed at the left side of the screen. The similar placement
             * will occur if both top and bottom edges are out of the screen.
             * In that case, the window is placed at the top side of the screen.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setLocationRelativeTo(c: java.awt.Component): void;
            /**
             * Creates a new strategy for multi-buffering on this component.
             * Multi-buffering is useful for rendering performance.  This method
             * attempts to create the best strategy available with the number of
             * buffers supplied.  It will always create a {@code BufferStrategy}
             * with that number of buffers.
             * A page-flipping strategy is attempted first, then a blitting strategy
             * using accelerated buffers.  Finally, an unaccelerated blitting
             * strategy is used.
             * <p>
             * Each time this method is called,
             * the existing buffer strategy for this component is discarded.
             */
            // @ts-ignore
            public createBufferStrategy(numBuffers: number): void;
            /**
             * Creates a new strategy for multi-buffering on this component with the
             * required buffer capabilities.  This is useful, for example, if only
             * accelerated memory or page flipping is desired (as specified by the
             * buffer capabilities).
             * <p>
             * Each time this method
             * is called, the existing buffer strategy for this component is discarded.
             */
            // @ts-ignore
            public createBufferStrategy(numBuffers: number, caps: java.awt.BufferCapabilities): void;
            /**
             * Returns the {@code BufferStrategy} used by this component.  This
             * method will return null if a {@code BufferStrategy} has not yet
             * been created or has been disposed.
             */
            // @ts-ignore
            public getBufferStrategy(): java.awt.image.BufferStrategy;
            /**
             * Sets whether this Window should appear at the default location for the
             * native windowing system or at the current location (returned by
             * {@code getLocation}) the next time the Window is made visible.
             * This behavior resembles a native window shown without programmatically
             * setting its location.  Most windowing systems cascade windows if their
             * locations are not explicitly set. The actual location is determined once the
             * window is shown on the screen.
             * <p>
             * This behavior can also be enabled by setting the System Property
             * "java.awt.Window.locationByPlatform" to "true", though calls to this method
             * take precedence.
             * <p>
             * Calls to {@code setVisible}, {@code setLocation} and
             * {@code setBounds} after calling {@code setLocationByPlatform} clear
             * this property of the Window.
             * <p>
             * For example, after the following code is executed:
             * <pre>
             * setLocationByPlatform(true);
             * setVisible(true);
             * boolean flag = isLocationByPlatform();
             * </pre>
             * The window will be shown at platform's default location and
             * {@code flag} will be {@code false}.
             * <p>
             * In the following sample:
             * <pre>
             * setLocationByPlatform(true);
             * setLocation(10, 10);
             * boolean flag = isLocationByPlatform();
             * setVisible(true);
             * </pre>
             * The window will be shown at (10, 10) and {@code flag} will be
             * {@code false}.
             */
            // @ts-ignore
            public setLocationByPlatform(locationByPlatform: boolean): void;
            /**
             * Returns {@code true} if this Window will appear at the default location
             * for the native windowing system the next time this Window is made visible.
             * This method always returns {@code false} if the Window is showing on the
             * screen.
             */
            // @ts-ignore
            public isLocationByPlatform(): boolean;
            /**
             * {@inheritDoc}
             * <p>
             * The {@code width} or {@code height} values
             * are automatically enlarged if either is less than
             * the minimum size as specified by previous call to
             * {@code setMinimumSize}.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setBounds(x: number, y: number, width: number, height: number): void;
            /**
             * {@inheritDoc}
             * <p>
             * The {@code r.width} or {@code r.height} values
             * will be automatically enlarged if either is less than
             * the minimum size as specified by previous call to
             * {@code setMinimumSize}.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code Window} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             */
            // @ts-ignore
            public setBounds(r: java.awt.Rectangle): void;
            /**
             * Returns the opacity of the window.
             */
            // @ts-ignore
            public getOpacity(): number;
            /**
             * Sets the opacity of the window.
             * <p>
             * The opacity value is in the range [0..1]. Note that setting the opacity
             * level of 0 may or may not disable the mouse event handling on this
             * window. This is a platform-dependent behavior.
             * <p>
             * The following conditions must be met in order to set the opacity value
             * less than {@code 1.0f}:
             * <ul>
             * <li>The {@link GraphicsDevice.WindowTranslucency#TRANSLUCENT TRANSLUCENT}
             * translucency must be supported by the underlying system
             * <li>The window must be undecorated (see {@link Frame#setUndecorated}
             * and {@link Dialog#setUndecorated})
             * <li>The window must not be in full-screen mode (see {@link
             * GraphicsDevice#setFullScreenWindow(Window)})
             * </ul>
             * <p>
             * If the requested opacity value is less than {@code 1.0f}, and any of the
             * above conditions are not met, the window opacity will not change,
             * and the {@code IllegalComponentStateException} will be thrown.
             * <p>
             * The translucency levels of individual pixels may also be effected by the
             * alpha component of their color (see {@link Window#setBackground(Color)}) and the
             * current shape of this window (see {@link #setShape(Shape)}).
             */
            // @ts-ignore
            public setOpacity(opacity: number): void;
            /**
             * Returns the shape of the window.
             * The value returned by this method may not be the same as
             * previously set with {@code setShape(shape)}, but it is guaranteed
             * to represent the same shape.
             */
            // @ts-ignore
            public getShape(): java.awt.Shape;
            /**
             * Sets the shape of the window.
             * <p>
             * Setting a shape cuts off some parts of the window. Only the parts that
             * belong to the given {@link Shape} remain visible and clickable. If
             * the shape argument is {@code null}, this method restores the default
             * shape, making the window rectangular on most platforms.
             * <p>
             * The following conditions must be met to set a non-null shape:
             * <ul>
             * <li>The {@link GraphicsDevice.WindowTranslucency#PERPIXEL_TRANSPARENT
             * PERPIXEL_TRANSPARENT} translucency must be supported by the
             * underlying system
             * <li>The window must be undecorated (see {@link Frame#setUndecorated}
             * and {@link Dialog#setUndecorated})
             * <li>The window must not be in full-screen mode (see {@link
             * GraphicsDevice#setFullScreenWindow(Window)})
             * </ul>
             * <p>
             * If the requested shape is not {@code null}, and any of the above
             * conditions are not met, the shape of this window will not change,
             * and either the {@code UnsupportedOperationException} or {@code
             * IllegalComponentStateException} will be thrown.
             * <p>
             * The translucency levels of individual pixels may also be effected by the
             * alpha component of their color (see {@link Window#setBackground(Color)}) and the
             * opacity value (see {@link #setOpacity(float)}). See {@link
             * GraphicsDevice.WindowTranslucency} for more details.
             */
            // @ts-ignore
            public setShape(shape: java.awt.Shape): void;
            /**
             * Gets the background color of this window.
             * <p>
             * Note that the alpha component of the returned color indicates whether
             * the window is in the non-opaque (per-pixel translucent) mode.
             */
            // @ts-ignore
            public getBackground(): java.awt.Color;
            /**
             * Sets the background color of this window.
             * <p>
             * If the windowing system supports the {@link
             * GraphicsDevice.WindowTranslucency#PERPIXEL_TRANSLUCENT PERPIXEL_TRANSLUCENT}
             * translucency, the alpha component of the given background color
             * may effect the mode of operation for this window: it indicates whether
             * this window must be opaque (alpha equals {@code 1.0f}) or per-pixel translucent
             * (alpha is less than {@code 1.0f}). If the given background color is
             * {@code null}, the window is considered completely opaque.
             * <p>
             * All the following conditions must be met to enable the per-pixel
             * transparency mode for this window:
             * <ul>
             * <li>The {@link GraphicsDevice.WindowTranslucency#PERPIXEL_TRANSLUCENT
             * PERPIXEL_TRANSLUCENT} translucency must be supported by the graphics
             * device where this window is located
             * <li>The window must be undecorated (see {@link Frame#setUndecorated}
             * and {@link Dialog#setUndecorated})
             * <li>The window must not be in full-screen mode (see {@link
             * GraphicsDevice#setFullScreenWindow(Window)})
             * </ul>
             * <p>
             * If the alpha component of the requested background color is less than
             * {@code 1.0f}, and any of the above conditions are not met, the background
             * color of this window will not change, the alpha component of the given
             * background color will not affect the mode of operation for this window,
             * and either the {@code UnsupportedOperationException} or {@code
             * IllegalComponentStateException} will be thrown.
             * <p>
             * When the window is per-pixel translucent, the drawing sub-system
             * respects the alpha value of each individual pixel. If a pixel gets
             * painted with the alpha color component equal to zero, it becomes
             * visually transparent. If the alpha of the pixel is equal to 1.0f, the
             * pixel is fully opaque. Interim values of the alpha color component make
             * the pixel semi-transparent. In this mode, the background of the window
             * gets painted with the alpha value of the given background color. If the
             * alpha value of the argument of this method is equal to {@code 0}, the
             * background is not painted at all.
             * <p>
             * The actual level of translucency of a given pixel also depends on window
             * opacity (see {@link #setOpacity(float)}), as well as the current shape of
             * this window (see {@link #setShape(Shape)}).
             * <p>
             * Note that painting a pixel with the alpha value of {@code 0} may or may
             * not disable the mouse event handling on this pixel. This is a
             * platform-dependent behavior. To make sure the mouse events do not get
             * dispatched to a particular pixel, the pixel must be excluded from the
             * shape of the window.
             * <p>
             * Enabling the per-pixel translucency mode may change the graphics
             * configuration of this window due to the native platform requirements.
             */
            // @ts-ignore
            public setBackground(bgColor: java.awt.Color): void;
            /**
             * Indicates if the window is currently opaque.
             * <p>
             * The method returns {@code false} if the background color of the window
             * is not {@code null} and the alpha component of the color is less than
             * {@code 1.0f}. The method returns {@code true} otherwise.
             */
            // @ts-ignore
            public isOpaque(): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void;
        }
    }
}
