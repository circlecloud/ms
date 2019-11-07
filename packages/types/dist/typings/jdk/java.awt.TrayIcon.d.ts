// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class TrayIcon extends java.lang.Object {
            /**
             * Creates a <code>TrayIcon</code> with the specified image.
             */
            // @ts-ignore
            constructor(image: java.awt.Image)
            /**
             * Creates a <code>TrayIcon</code> with the specified image and
             * tooltip text.
             */
            // @ts-ignore
            constructor(image: java.awt.Image, tooltip: string)
            /**
             * Creates a <code>TrayIcon</code> with the specified image,
             * tooltip and popup menu.
             */
            // @ts-ignore
            constructor(image: java.awt.Image, tooltip: string, popup: java.awt.PopupMenu)
            /**
             * Sets the image for this <code>TrayIcon</code>.  The previous
             * tray icon image is discarded without calling the {@link
             * java.awt.Image#flush} method &#151; you will need to call it
             * manually.
             * <p> If the image represents an animated image, it will be
             * animated automatically.
             * <p> See the {@link #setImageAutoSize(boolean)} property for
             * details on the size of the displayed image.
             * <p> Calling this method with the same image that is currently
             * being used has no effect.
             */
            // @ts-ignore
            public setImage(image: java.awt.Image): void;
            /**
             * Returns the current image used for this <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getImage(): java.awt.Image;
            /**
             * Sets the popup menu for this <code>TrayIcon</code>.  If
             * <code>popup</code> is <code>null</code>, no popup menu will be
             * associated with this <code>TrayIcon</code>.
             * <p>Note that this <code>popup</code> must not be added to any
             * parent before or after it is set on the tray icon.  If you add
             * it to some parent, the <code>popup</code> may be removed from
             * that parent.
             * <p>The {@code popup} can be set on one {@code TrayIcon} only.
             * Setting the same popup on multiple {@code TrayIcon}s will cause
             * an {@code IllegalArgumentException}.
             * <p><strong>Note:</strong> Some platforms may not support
             * showing the user-specified popup menu component when the user
             * right-clicks the tray icon.  In this situation, either no menu
             * will be displayed or, on some systems, a native version of the
             * menu may be displayed.
             */
            // @ts-ignore
            public setPopupMenu(popup: java.awt.PopupMenu): void;
            /**
             * Returns the popup menu associated with this <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getPopupMenu(): java.awt.PopupMenu;
            /**
             * Sets the tooltip string for this <code>TrayIcon</code>. The
             * tooltip is displayed automatically when the mouse hovers over
             * the icon.  Setting the tooltip to <code>null</code> removes any
             * tooltip text.
             * When displayed, the tooltip string may be truncated on some platforms;
             * the number of characters that may be displayed is platform-dependent.
             */
            // @ts-ignore
            public setToolTip(tooltip: string): void;
            /**
             * Returns the tooltip string associated with this
             * <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getToolTip(): string;
            /**
             * Sets the auto-size property.  Auto-size determines whether the
             * tray image is automatically sized to fit the space allocated
             * for the image on the tray.  By default, the auto-size property
             * is set to <code>false</code>.
             * <p> If auto-size is <code>false</code>, and the image size
             * doesn't match the tray icon space, the image is painted as-is
             * inside that space &#151; if larger than the allocated space, it will
             * be cropped.
             * <p> If auto-size is <code>true</code>, the image is stretched or shrunk to
             * fit the tray icon space.
             */
            // @ts-ignore
            public setImageAutoSize(autosize: boolean): void;
            /**
             * Returns the value of the auto-size property.
             */
            // @ts-ignore
            public isImageAutoSize(): boolean;
            /**
             * Adds the specified mouse listener to receive mouse events from
             * this <code>TrayIcon</code>.  Calling this method with a
             * <code>null</code> value has no effect.
             * <p><b>Note</b>: The {@code MouseEvent}'s coordinates (received
             * from the {@code TrayIcon}) are relative to the screen, not the
             * {@code TrayIcon}.
             * <p> <b>Note: </b>The <code>MOUSE_ENTERED</code> and
             * <code>MOUSE_EXITED</code> mouse events are not supported.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addMouseListener(listener: java.awt.event.MouseListener): void;
            /**
             * Removes the specified mouse listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeMouseListener(listener: java.awt.event.MouseListener): void;
            /**
             * Returns an array of all the mouse listeners
             * registered on this <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getMouseListeners(): java.awt.event.MouseListener[];
            /**
             * Adds the specified mouse listener to receive mouse-motion
             * events from this <code>TrayIcon</code>.  Calling this method
             * with a <code>null</code> value has no effect.
             * <p><b>Note</b>: The {@code MouseEvent}'s coordinates (received
             * from the {@code TrayIcon}) are relative to the screen, not the
             * {@code TrayIcon}.
             * <p> <b>Note: </b>The <code>MOUSE_DRAGGED</code> mouse event is not supported.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addMouseMotionListener(listener: java.awt.event.MouseMotionListener): void;
            /**
             * Removes the specified mouse-motion listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeMouseMotionListener(listener: java.awt.event.MouseMotionListener): void;
            /**
             * Returns an array of all the mouse-motion listeners
             * registered on this <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getMouseMotionListeners(): java.awt.event.MouseMotionListener[];
            /**
             * Returns the command name of the action event fired by this tray icon.
             */
            // @ts-ignore
            public getActionCommand(): string;
            /**
             * Sets the command name for the action event fired by this tray
             * icon.  By default, this action command is set to
             * <code>null</code>.
             */
            // @ts-ignore
            public setActionCommand(command: string): void;
            /**
             * Adds the specified action listener to receive
             * <code>ActionEvent</code>s from this <code>TrayIcon</code>.
             * Action events usually occur when a user selects the tray icon,
             * using either the mouse or keyboard.  The conditions in which
             * action events are generated are platform-dependent.
             * <p>Calling this method with a <code>null</code> value has no
             * effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addActionListener(listener: java.awt.event.ActionListener): void;
            /**
             * Removes the specified action listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeActionListener(listener: java.awt.event.ActionListener): void;
            /**
             * Returns an array of all the action listeners
             * registered on this <code>TrayIcon</code>.
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[];
            /**
             * Displays a popup message near the tray icon.  The message will
             * disappear after a time or if the user clicks on it.  Clicking
             * on the message may trigger an {@code ActionEvent}.
             * <p>Either the caption or the text may be <code>null</code>, but an
             * <code>NullPointerException</code> is thrown if both are
             * <code>null</code>.
             * When displayed, the caption or text strings may be truncated on
             * some platforms; the number of characters that may be displayed is
             * platform-dependent.
             * <p><strong>Note:</strong> Some platforms may not support
             * showing a message.
             */
            // @ts-ignore
            public displayMessage(caption: string, text: string, messageType: java.awt.TrayIcon.MessageType): void;
            /**
             * Returns the size, in pixels, of the space that the tray icon
             * occupies in the system tray.  For the tray icon that is not yet
             * added to the system tray, the returned size is equal to the
             * result of the {@link SystemTray#getTrayIconSize}.
             */
            // @ts-ignore
            public getSize(): java.awt.Dimension;
        }
    }
}
