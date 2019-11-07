declare namespace java {
    namespace awt {
        // @ts-ignore
         class Frame extends java.awt.Window {
            /**
             * Constructs a new instance of <code>Frame</code> that is
             * initially invisible.  The title of the <code>Frame</code>
             * is empty.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new, initially invisible {@code Frame} with the
             * specified {@code GraphicsConfiguration}.
             */
            // @ts-ignore
            constructor(gc: java.awt.GraphicsConfiguration)
            /**
             * Constructs a new, initially invisible <code>Frame</code> object
             * with the specified title.
             */
            // @ts-ignore
            constructor(title: string)
            /**
             * Constructs a new, initially invisible <code>Frame</code> object
             * with the specified title and a
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            constructor(title: string, gc: java.awt.GraphicsConfiguration)
            // @ts-ignore
            public static DEFAULT_CURSOR: number;
            // @ts-ignore
            public static CROSSHAIR_CURSOR: number;
            // @ts-ignore
            public static TEXT_CURSOR: number;
            // @ts-ignore
            public static WAIT_CURSOR: number;
            // @ts-ignore
            public static SW_RESIZE_CURSOR: number;
            // @ts-ignore
            public static SE_RESIZE_CURSOR: number;
            // @ts-ignore
            public static NW_RESIZE_CURSOR: number;
            // @ts-ignore
            public static NE_RESIZE_CURSOR: number;
            // @ts-ignore
            public static N_RESIZE_CURSOR: number;
            // @ts-ignore
            public static S_RESIZE_CURSOR: number;
            // @ts-ignore
            public static W_RESIZE_CURSOR: number;
            // @ts-ignore
            public static E_RESIZE_CURSOR: number;
            // @ts-ignore
            public static HAND_CURSOR: number;
            // @ts-ignore
            public static MOVE_CURSOR: number;
            // @ts-ignore
            public static NORMAL: number;
            // @ts-ignore
            public static ICONIFIED: number;
            // @ts-ignore
            public static MAXIMIZED_HORIZ: number;
            // @ts-ignore
            public static MAXIMIZED_VERT: number;
            // @ts-ignore
            public static MAXIMIZED_BOTH: number;
            /**
             * Makes this Frame displayable by connecting it to
             * a native screen resource.  Making a frame displayable will
             * cause any of its children to be made displayable.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the title of the frame.  The title is displayed in the
             * frame's border.
             */
            // @ts-ignore
            public getTitle(): string;
            /**
             * Sets the title for this frame to the specified string.
             */
            // @ts-ignore
            public setTitle(title: string): void;
            /**
             * Returns the image to be displayed as the icon for this frame.
             * <p>
             * This method is obsolete and kept for backward compatibility
             * only. Use {@link Window#getIconImages Window.getIconImages()} instead.
             * <p>
             * If a list of several images was specified as a Window's icon,
             * this method will return the first item of the list.
             */
            // @ts-ignore
            public getIconImage(): java.awt.Image;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setIconImage(image: java.awt.Image): void;
            /**
             * Gets the menu bar for this frame.
             */
            // @ts-ignore
            public getMenuBar(): java.awt.MenuBar;
            /**
             * Sets the menu bar for this frame to the specified menu bar.
             */
            // @ts-ignore
            public setMenuBar(mb: java.awt.MenuBar): void;
            /**
             * Indicates whether this frame is resizable by the user.
             * By default, all frames are initially resizable.
             */
            // @ts-ignore
            public isResizable(): boolean;
            /**
             * Sets whether this frame is resizable by the user.
             */
            // @ts-ignore
            public setResizable(resizable: boolean): void;
            /**
             * Sets the state of this frame (obsolete).
             * <p>
             * In older versions of JDK a frame state could only be NORMAL or
             * ICONIFIED.  Since JDK 1.4 set of supported frame states is
             * expanded and frame state is represented as a bitwise mask.
             * <p>
             * For compatibility with applications developed
             * earlier this method still accepts
             * {@code Frame.NORMAL} and
             * {@code Frame.ICONIFIED} only.  The iconic
             * state of the frame is only changed, other aspects
             * of frame state are not affected by this method. If
             * the state passed to this method is neither {@code
             * Frame.NORMAL} nor {@code Frame.ICONIFIED} the
             * method performs no actions at all.
             * <p>Note that if the state is not supported on a
             * given platform, neither the state nor the return
             * value of the {@link #getState} method will be
             * changed. The application may determine whether a
             * specific state is supported via the {@link
             * java.awt.Toolkit#isFrameStateSupported} method.
             * <p><b>If the frame is currently visible on the
             * screen</b> (the {@link #isShowing} method returns
             * {@code true}), the developer should examine the
             * return value of the  {@link
             * java.awt.event.WindowEvent#getNewState} method of
             * the {@code WindowEvent} received through the
             * {@link java.awt.event.WindowStateListener} to
             * determine that the state has actually been
             * changed.
             * <p><b>If the frame is not visible on the
             * screen</b>, the events may or may not be
             * generated.  In this case the developer may assume
             * that the state changes immediately after this
             * method returns.  Later, when the {@code
             * setVisible(true)} method is invoked, the frame
             * will attempt to apply this state. Receiving any
             * {@link
             * java.awt.event.WindowEvent#WINDOW_STATE_CHANGED}
             * events is not guaranteed in this case also.
             */
            // @ts-ignore
            public setState(state: number): void;
            /**
             * Sets the state of this frame. The state is
             * represented as a bitwise mask.
             * <ul>
             * <li><code>NORMAL</code>
             * <br>Indicates that no state bits are set.
             * <li><code>ICONIFIED</code>
             * <li><code>MAXIMIZED_HORIZ</code>
             * <li><code>MAXIMIZED_VERT</code>
             * <li><code>MAXIMIZED_BOTH</code>
             * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
             * and <code>MAXIMIZED_VERT</code>.
             * </ul>
             * <p>Note that if the state is not supported on a
             * given platform, neither the state nor the return
             * value of the {@link #getExtendedState} method will
             * be changed. The application may determine whether
             * a specific state is supported via the {@link
             * java.awt.Toolkit#isFrameStateSupported} method.
             * <p><b>If the frame is currently visible on the
             * screen</b> (the {@link #isShowing} method returns
             * {@code true}), the developer should examine the
             * return value of the {@link
             * java.awt.event.WindowEvent#getNewState} method of
             * the {@code WindowEvent} received through the
             * {@link java.awt.event.WindowStateListener} to
             * determine that the state has actually been
             * changed.
             * <p><b>If the frame is not visible on the
             * screen</b>, the events may or may not be
             * generated.  In this case the developer may assume
             * that the state changes immediately after this
             * method returns.  Later, when the {@code
             * setVisible(true)} method is invoked, the frame
             * will attempt to apply this state. Receiving any
             * {@link
             * java.awt.event.WindowEvent#WINDOW_STATE_CHANGED}
             * events is not guaranteed in this case also.
             */
            // @ts-ignore
            public setExtendedState(state: number): void;
            /**
             * Gets the state of this frame (obsolete).
             * <p>
             * In older versions of JDK a frame state could only be NORMAL or
             * ICONIFIED.  Since JDK 1.4 set of supported frame states is
             * expanded and frame state is represented as a bitwise mask.
             * <p>
             * For compatibility with old programs this method still returns
             * <code>Frame.NORMAL</code> and <code>Frame.ICONIFIED</code> but
             * it only reports the iconic state of the frame, other aspects of
             * frame state are not reported by this method.
             */
            // @ts-ignore
            public getState(): number;
            /**
             * Gets the state of this frame. The state is
             * represented as a bitwise mask.
             * <ul>
             * <li><code>NORMAL</code>
             * <br>Indicates that no state bits are set.
             * <li><code>ICONIFIED</code>
             * <li><code>MAXIMIZED_HORIZ</code>
             * <li><code>MAXIMIZED_VERT</code>
             * <li><code>MAXIMIZED_BOTH</code>
             * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
             * and <code>MAXIMIZED_VERT</code>.
             * </ul>
             */
            // @ts-ignore
            public getExtendedState(): number;
            /**
             * Sets the maximized bounds for this frame.
             * <p>
             * When a frame is in maximized state the system supplies some
             * defaults bounds.  This method allows some or all of those
             * system supplied values to be overridden.
             * <p>
             * If <code>bounds</code> is <code>null</code>, accept bounds
             * supplied by the system.  If non-<code>null</code> you can
             * override some of the system supplied values while accepting
             * others by setting those fields you want to accept from system
             * to <code>Integer.MAX_VALUE</code>.
             * <p>
             * Note, the given maximized bounds are used as a hint for the native
             * system, because the underlying platform may not support setting the
             * location and/or size of the maximized windows.  If that is the case, the
             * provided values do not affect the appearance of the frame in the
             * maximized state.
             */
            // @ts-ignore
            public setMaximizedBounds(bounds: java.awt.Rectangle): void;
            /**
             * Gets maximized bounds for this frame.
             * Some fields may contain <code>Integer.MAX_VALUE</code> to indicate
             * that system supplied values for this field must be used.
             */
            // @ts-ignore
            public getMaximizedBounds(): java.awt.Rectangle;
            /**
             * Disables or enables decorations for this frame.
             * <p>
             * This method can only be called while the frame is not displayable. To
             * make this frame decorated, it must be opaque and have the default shape,
             * otherwise the {@code IllegalComponentStateException} will be thrown.
             * Refer to {@link Window#setShape}, {@link Window#setOpacity} and {@link
             * Window#setBackground} for details
             */
            // @ts-ignore
            public setUndecorated(undecorated: boolean): void;
            /**
             * Indicates whether this frame is undecorated.
             * By default, all frames are initially decorated.
             */
            // @ts-ignore
            public isUndecorated(): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setOpacity(opacity: number): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setShape(shape: java.awt.Shape): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setBackground(bgColor: java.awt.Color): void;
            /**
             * Removes the specified menu bar from this frame.
             */
            // @ts-ignore
            public remove(m: java.awt.MenuComponent): void;
            /**
             * Makes this Frame undisplayable by removing its connection
             * to its native screen resource. Making a Frame undisplayable
             * will cause any of its children to be made undisplayable.
             * This method is called by the toolkit internally and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Returns a string representing the state of this <code>Frame</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            // @ts-ignore
            public setCursor(cursorType: number): void;
            // @ts-ignore
            public getCursorType(): number;
            /**
             * Returns an array of all {@code Frame}s created by this application.
             * If called from an applet, the array includes only the {@code Frame}s
             * accessible by that applet.
             * <p>
             * <b>Warning:</b> this method may return system created frames, such
             * as a shared, hidden frame which is used by Swing. Applications
             * should not assume the existence of these frames, nor should an
             * application assume anything about these frames such as component
             * positions, <code>LayoutManager</code>s or serialization.
             * <p>
             * <b>Note</b>: To obtain a list of all ownerless windows, including
             * ownerless {@code Dialog}s (introduced in release 1.6), use {@link
             * Window#getOwnerlessWindows Window.getOwnerlessWindows}.
             */
            // @ts-ignore
            public static getFrames(): java.awt.Frame[];
            /**
             * Gets the AccessibleContext associated with this Frame.
             * For frames, the AccessibleContext takes the form of an
             * AccessibleAWTFrame.
             * A new AccessibleAWTFrame instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
