// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class Component extends java.lang.Object {
            /**
             * Constructs a new component. Class <code>Component</code> can be
             * extended directly to create a lightweight component that does not
             * utilize an opaque native window. A lightweight component must be
             * hosted by a native container somewhere higher up in the component
             * tree (for example, by a <code>Frame</code> object).
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static TOP_ALIGNMENT: number;
            // @ts-ignore
            public static CENTER_ALIGNMENT: number;
            // @ts-ignore
            public static BOTTOM_ALIGNMENT: number;
            // @ts-ignore
            public static LEFT_ALIGNMENT: number;
            // @ts-ignore
            public static RIGHT_ALIGNMENT: number;
            // @ts-ignore
            protected accessibleContext: any /*javax.accessibility.AccessibleContext*/;
            /**
             * Gets the name of the component.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Sets the name of the component to the specified string.
             */
            // @ts-ignore
            public setName(name: string): void;
            /**
             * Gets the parent of this component.
             */
            // @ts-ignore
            public getParent(): java.awt.Container;
            // @ts-ignore
            public getPeer(): java.awt.peer.ComponentPeer;
            /**
             * Associate a <code>DropTarget</code> with this component.
             * The <code>Component</code> will receive drops only if it
             * is enabled.
             */
            // @ts-ignore
            public setDropTarget(dt: java.awt.dnd.DropTarget): void;
            /**
             * Gets the <code>DropTarget</code> associated with this
             * <code>Component</code>.
             */
            // @ts-ignore
            public getDropTarget(): java.awt.dnd.DropTarget;
            /**
             * Gets the <code>GraphicsConfiguration</code> associated with this
             * <code>Component</code>.
             * If the <code>Component</code> has not been assigned a specific
             * <code>GraphicsConfiguration</code>,
             * the <code>GraphicsConfiguration</code> of the
             * <code>Component</code> object's top-level container is
             * returned.
             * If the <code>Component</code> has been created, but not yet added
             * to a <code>Container</code>, this method returns <code>null</code>.
             */
            // @ts-ignore
            public getGraphicsConfiguration(): java.awt.GraphicsConfiguration;
            /**
             * Gets this component's locking object (the object that owns the thread
             * synchronization monitor) for AWT component-tree and layout
             * operations.
             */
            // @ts-ignore
            public getTreeLock(): java.lang.Object;
            /**
             * Gets the toolkit of this component. Note that
             * the frame that contains a component controls which
             * toolkit is used by that component. Therefore if the component
             * is moved from one frame to another, the toolkit it uses may change.
             */
            // @ts-ignore
            public getToolkit(): java.awt.Toolkit;
            /**
             * Determines whether this component is valid. A component is valid
             * when it is correctly sized and positioned within its parent
             * container and all its children are also valid.
             * In order to account for peers' size requirements, components are invalidated
             * before they are first shown on the screen. By the time the parent container
             * is fully realized, all its components will be valid.
             */
            // @ts-ignore
            public isValid(): boolean;
            /**
             * Determines whether this component is displayable. A component is
             * displayable when it is connected to a native screen resource.
             * <p>
             * A component is made displayable either when it is added to
             * a displayable containment hierarchy or when its containment
             * hierarchy is made displayable.
             * A containment hierarchy is made displayable when its ancestor
             * window is either packed or made visible.
             * <p>
             * A component is made undisplayable either when it is removed from
             * a displayable containment hierarchy or when its containment hierarchy
             * is made undisplayable.  A containment hierarchy is made
             * undisplayable when its ancestor window is disposed.
             */
            // @ts-ignore
            public isDisplayable(): boolean;
            /**
             * Determines whether this component should be visible when its
             * parent is visible. Components are
             * initially visible, with the exception of top level components such
             * as <code>Frame</code> objects.
             */
            // @ts-ignore
            public isVisible(): boolean;
            /**
             * Returns the position of the mouse pointer in this <code>Component</code>'s
             * coordinate space if the <code>Component</code> is directly under the mouse
             * pointer, otherwise returns <code>null</code>.
             * If the <code>Component</code> is not showing on the screen, this method
             * returns <code>null</code> even if the mouse pointer is above the area
             * where the <code>Component</code> would be displayed.
             * If the <code>Component</code> is partially or fully obscured by other
             * <code>Component</code>s or native windows, this method returns a non-null
             * value only if the mouse pointer is located above the unobscured part of the
             * <code>Component</code>.
             * <p>
             * For <code>Container</code>s it returns a non-null value if the mouse is
             * above the <code>Container</code> itself or above any of its descendants.
             * Use {@link Container#getMousePosition(boolean)} if you need to exclude children.
             * <p>
             * Sometimes the exact mouse coordinates are not important, and the only thing
             * that matters is whether a specific <code>Component</code> is under the mouse
             * pointer. If the return value of this method is <code>null</code>, mouse
             * pointer is not directly above the <code>Component</code>.
             */
            // @ts-ignore
            public getMousePosition(): java.awt.Point;
            /**
             * Determines whether this component is showing on screen. This means
             * that the component must be visible, and it must be in a container
             * that is visible and showing.
             * <p>
             * <strong>Note:</strong> sometimes there is no way to detect whether the
             * {@code Component} is actually visible to the user.  This can happen when:
             * <ul>
             * <li>the component has been added to a visible {@code ScrollPane} but
             * the {@code Component} is not currently in the scroll pane's view port.
             * <li>the {@code Component} is obscured by another {@code Component} or
             * {@code Container}.
             * </ul>
             */
            // @ts-ignore
            public isShowing(): boolean;
            /**
             * Determines whether this component is enabled. An enabled component
             * can respond to user input and generate events. Components are
             * enabled initially by default. A component may be enabled or disabled by
             * calling its <code>setEnabled</code> method.
             */
            // @ts-ignore
            public isEnabled(): boolean;
            /**
             * Enables or disables this component, depending on the value of the
             * parameter <code>b</code>. An enabled component can respond to user
             * input and generate events. Components are enabled initially by default.
             * <p>Note: Disabling a lightweight component does not prevent it from
             * receiving MouseEvents.
             * <p>Note: Disabling a heavyweight container prevents all components
             * in this container from receiving any input events.  But disabling a
             * lightweight container affects only this container.
             */
            // @ts-ignore
            public setEnabled(b: boolean): void;
            // @ts-ignore
            public enable(): void;
            // @ts-ignore
            public enable(b: boolean): void;
            // @ts-ignore
            public disable(): void;
            /**
             * Returns true if this component is painted to an offscreen image
             * ("buffer") that's copied to the screen later.  Component
             * subclasses that support double buffering should override this
             * method to return true if double buffering is enabled.
             */
            // @ts-ignore
            public isDoubleBuffered(): boolean;
            /**
             * Enables or disables input method support for this component. If input
             * method support is enabled and the component also processes key events,
             * incoming events are offered to
             * the current input method and will only be processed by the component or
             * dispatched to its listeners if the input method does not consume them.
             * By default, input method support is enabled.
             */
            // @ts-ignore
            public enableInputMethods(enable: boolean): void;
            /**
             * Shows or hides this component depending on the value of parameter
             * <code>b</code>.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setVisible(b: boolean): void;
            // @ts-ignore
            public show(): void;
            // @ts-ignore
            public show(b: boolean): void;
            // @ts-ignore
            public hide(): void;
            /**
             * Gets the foreground color of this component.
             */
            // @ts-ignore
            public getForeground(): java.awt.Color;
            /**
             * Sets the foreground color of this component.
             */
            // @ts-ignore
            public setForeground(c: java.awt.Color): void;
            /**
             * Returns whether the foreground color has been explicitly set for this
             * Component. If this method returns <code>false</code>, this Component is
             * inheriting its foreground color from an ancestor.
             */
            // @ts-ignore
            public isForegroundSet(): boolean;
            /**
             * Gets the background color of this component.
             */
            // @ts-ignore
            public getBackground(): java.awt.Color;
            /**
             * Sets the background color of this component.
             * <p>
             * The background color affects each component differently and the
             * parts of the component that are affected by the background color
             * may differ between operating systems.
             */
            // @ts-ignore
            public setBackground(c: java.awt.Color): void;
            /**
             * Returns whether the background color has been explicitly set for this
             * Component. If this method returns <code>false</code>, this Component is
             * inheriting its background color from an ancestor.
             */
            // @ts-ignore
            public isBackgroundSet(): boolean;
            /**
             * Gets the font of this component.
             */
            // @ts-ignore
            public getFont(): java.awt.Font;
            /**
             * Sets the font of this component.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setFont(f: java.awt.Font): void;
            /**
             * Returns whether the font has been explicitly set for this Component. If
             * this method returns <code>false</code>, this Component is inheriting its
             * font from an ancestor.
             */
            // @ts-ignore
            public isFontSet(): boolean;
            /**
             * Gets the locale of this component.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale;
            /**
             * Sets the locale of this component.  This is a bound property.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setLocale(l: java.util.Locale): void;
            /**
             * Gets the instance of <code>ColorModel</code> used to display
             * the component on the output device.
             */
            // @ts-ignore
            public getColorModel(): java.awt.image.ColorModel;
            /**
             * Gets the location of this component in the form of a
             * point specifying the component's top-left corner.
             * The location will be relative to the parent's coordinate space.
             * <p>
             * Due to the asynchronous nature of native event handling, this
             * method can return outdated values (for instance, after several calls
             * of <code>setLocation()</code> in rapid succession).  For this
             * reason, the recommended method of obtaining a component's position is
             * within <code>java.awt.event.ComponentListener.componentMoved()</code>,
             * which is called after the operating system has finished moving the
             * component.
             * </p>
             */
            // @ts-ignore
            public getLocation(): java.awt.Point;
            /**
             * Gets the location of this component in the form of a point
             * specifying the component's top-left corner in the screen's
             * coordinate space.
             */
            // @ts-ignore
            public getLocationOnScreen(): java.awt.Point;
            // @ts-ignore
            public location(): java.awt.Point;
            /**
             * Moves this component to a new location. The top-left corner of
             * the new location is specified by the <code>x</code> and <code>y</code>
             * parameters in the coordinate space of this component's parent.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setLocation(x: number, y: number): void;
            // @ts-ignore
            public move(x: number, y: number): void;
            /**
             * Moves this component to a new location. The top-left corner of
             * the new location is specified by point <code>p</code>. Point
             * <code>p</code> is given in the parent's coordinate space.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setLocation(p: java.awt.Point): void;
            /**
             * Returns the size of this component in the form of a
             * <code>Dimension</code> object. The <code>height</code>
             * field of the <code>Dimension</code> object contains
             * this component's height, and the <code>width</code>
             * field of the <code>Dimension</code> object contains
             * this component's width.
             */
            // @ts-ignore
            public getSize(): java.awt.Dimension;
            // @ts-ignore
            public size(): java.awt.Dimension;
            /**
             * Resizes this component so that it has width <code>width</code>
             * and height <code>height</code>.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setSize(width: number, height: number): void;
            // @ts-ignore
            public resize(width: number, height: number): void;
            /**
             * Resizes this component so that it has width <code>d.width</code>
             * and height <code>d.height</code>.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setSize(d: java.awt.Dimension): void;
            // @ts-ignore
            public resize(d: java.awt.Dimension): void;
            /**
             * Gets the bounds of this component in the form of a
             * <code>Rectangle</code> object. The bounds specify this
             * component's width, height, and location relative to
             * its parent.
             */
            // @ts-ignore
            public getBounds(): java.awt.Rectangle;
            // @ts-ignore
            public bounds(): java.awt.Rectangle;
            /**
             * Moves and resizes this component. The new location of the top-left
             * corner is specified by <code>x</code> and <code>y</code>, and the
             * new size is specified by <code>width</code> and <code>height</code>.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setBounds(x: number, y: number, width: number, height: number): void;
            // @ts-ignore
            public reshape(x: number, y: number, width: number, height: number): void;
            /**
             * Moves and resizes this component to conform to the new
             * bounding rectangle <code>r</code>. This component's new
             * position is specified by <code>r.x</code> and <code>r.y</code>,
             * and its new size is specified by <code>r.width</code> and
             * <code>r.height</code>
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setBounds(r: java.awt.Rectangle): void;
            /**
             * Returns the current x coordinate of the components origin.
             * This method is preferable to writing
             * <code>component.getBounds().x</code>,
             * or <code>component.getLocation().x</code> because it doesn't
             * cause any heap allocations.
             */
            // @ts-ignore
            public getX(): number;
            /**
             * Returns the current y coordinate of the components origin.
             * This method is preferable to writing
             * <code>component.getBounds().y</code>,
             * or <code>component.getLocation().y</code> because it
             * doesn't cause any heap allocations.
             */
            // @ts-ignore
            public getY(): number;
            /**
             * Returns the current width of this component.
             * This method is preferable to writing
             * <code>component.getBounds().width</code>,
             * or <code>component.getSize().width</code> because it
             * doesn't cause any heap allocations.
             */
            // @ts-ignore
            public getWidth(): number;
            /**
             * Returns the current height of this component.
             * This method is preferable to writing
             * <code>component.getBounds().height</code>,
             * or <code>component.getSize().height</code> because it
             * doesn't cause any heap allocations.
             */
            // @ts-ignore
            public getHeight(): number;
            /**
             * Stores the bounds of this component into "return value" <b>rv</b> and
             * return <b>rv</b>.  If rv is <code>null</code> a new
             * <code>Rectangle</code> is allocated.
             * This version of <code>getBounds</code> is useful if the caller
             * wants to avoid allocating a new <code>Rectangle</code> object
             * on the heap.
             */
            // @ts-ignore
            public getBounds(rv: java.awt.Rectangle): java.awt.Rectangle;
            /**
             * Stores the width/height of this component into "return value" <b>rv</b>
             * and return <b>rv</b>.   If rv is <code>null</code> a new
             * <code>Dimension</code> object is allocated.  This version of
             * <code>getSize</code> is useful if the caller wants to avoid
             * allocating a new <code>Dimension</code> object on the heap.
             */
            // @ts-ignore
            public getSize(rv: java.awt.Dimension): java.awt.Dimension;
            /**
             * Stores the x,y origin of this component into "return value" <b>rv</b>
             * and return <b>rv</b>.   If rv is <code>null</code> a new
             * <code>Point</code> is allocated.
             * This version of <code>getLocation</code> is useful if the
             * caller wants to avoid allocating a new <code>Point</code>
             * object on the heap.
             */
            // @ts-ignore
            public getLocation(rv: java.awt.Point): java.awt.Point;
            /**
             * Returns true if this component is completely opaque, returns
             * false by default.
             * <p>
             * An opaque component paints every pixel within its
             * rectangular region. A non-opaque component paints only some of
             * its pixels, allowing the pixels underneath it to "show through".
             * A component that does not fully paint its pixels therefore
             * provides a degree of transparency.
             * <p>
             * Subclasses that guarantee to always completely paint their
             * contents should override this method and return true.
             */
            // @ts-ignore
            public isOpaque(): boolean;
            /**
             * A lightweight component doesn't have a native toolkit peer.
             * Subclasses of <code>Component</code> and <code>Container</code>,
             * other than the ones defined in this package like <code>Button</code>
             * or <code>Scrollbar</code>, are lightweight.
             * All of the Swing components are lightweights.
             * <p>
             * This method will always return <code>false</code> if this component
             * is not displayable because it is impossible to determine the
             * weight of an undisplayable component.
             */
            // @ts-ignore
            public isLightweight(): boolean;
            /**
             * Sets the preferred size of this component to a constant
             * value.  Subsequent calls to <code>getPreferredSize</code> will always
             * return this value.  Setting the preferred size to <code>null</code>
             * restores the default behavior.
             */
            // @ts-ignore
            public setPreferredSize(preferredSize: java.awt.Dimension): void;
            /**
             * Returns true if the preferred size has been set to a
             * non-<code>null</code> value otherwise returns false.
             */
            // @ts-ignore
            public isPreferredSizeSet(): boolean;
            /**
             * Gets the preferred size of this component.
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(): java.awt.Dimension;
            /**
             * Sets the minimum size of this component to a constant
             * value.  Subsequent calls to <code>getMinimumSize</code> will always
             * return this value.  Setting the minimum size to <code>null</code>
             * restores the default behavior.
             */
            // @ts-ignore
            public setMinimumSize(minimumSize: java.awt.Dimension): void;
            /**
             * Returns whether or not <code>setMinimumSize</code> has been
             * invoked with a non-null value.
             */
            // @ts-ignore
            public isMinimumSizeSet(): boolean;
            /**
             * Gets the minimum size of this component.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(): java.awt.Dimension;
            /**
             * Sets the maximum size of this component to a constant
             * value.  Subsequent calls to <code>getMaximumSize</code> will always
             * return this value.  Setting the maximum size to <code>null</code>
             * restores the default behavior.
             */
            // @ts-ignore
            public setMaximumSize(maximumSize: java.awt.Dimension): void;
            /**
             * Returns true if the maximum size has been set to a non-<code>null</code>
             * value otherwise returns false.
             */
            // @ts-ignore
            public isMaximumSizeSet(): boolean;
            /**
             * Gets the maximum size of this component.
             */
            // @ts-ignore
            public getMaximumSize(): java.awt.Dimension;
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentX(): number;
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentY(): number;
            /**
             * Returns the baseline.  The baseline is measured from the top of
             * the component.  This method is primarily meant for
             * <code>LayoutManager</code>s to align components along their
             * baseline.  A return value less than 0 indicates this component
             * does not have a reasonable baseline and that
             * <code>LayoutManager</code>s should not align this component on
             * its baseline.
             * <p>
             * The default implementation returns -1.  Subclasses that support
             * baseline should override appropriately.  If a value &gt;= 0 is
             * returned, then the component has a valid baseline for any
             * size &gt;= the minimum size and <code>getBaselineResizeBehavior</code>
             * can be used to determine how the baseline changes with size.
             */
            // @ts-ignore
            public getBaseline(width: number, height: number): number;
            /**
             * Returns an enum indicating how the baseline of the component
             * changes as the size changes.  This method is primarily meant for
             * layout managers and GUI builders.
             * <p>
             * The default implementation returns
             * <code>BaselineResizeBehavior.OTHER</code>.  Subclasses that have a
             * baseline should override appropriately.  Subclasses should
             * never return <code>null</code>; if the baseline can not be
             * calculated return <code>BaselineResizeBehavior.OTHER</code>.  Callers
             * should first ask for the baseline using
             * <code>getBaseline</code> and if a value &gt;= 0 is returned use
             * this method.  It is acceptable for this method to return a
             * value other than <code>BaselineResizeBehavior.OTHER</code> even if
             * <code>getBaseline</code> returns a value less than 0.
             */
            // @ts-ignore
            public getBaselineResizeBehavior(): java.awt.Component.BaselineResizeBehavior;
            /**
             * Prompts the layout manager to lay out this component. This is
             * usually called when the component (more specifically, container)
             * is validated.
             */
            // @ts-ignore
            public doLayout(): void;
            // @ts-ignore
            public layout(): void;
            /**
             * Validates this component.
             * <p>
             * The meaning of the term <i>validating</i> is defined by the ancestors of
             * this class. See {@link Container#validate} for more details.
             */
            // @ts-ignore
            public validate(): void;
            /**
             * Invalidates this component and its ancestors.
             * <p>
             * By default, all the ancestors of the component up to the top-most
             * container of the hierarchy are marked invalid. If the {@code
             * java.awt.smartInvalidate} system property is set to {@code true},
             * invalidation stops on the nearest validate root of this component.
             * Marking a container <i>invalid</i> indicates that the container needs to
             * be laid out.
             * <p>
             * This method is called automatically when any layout-related information
             * changes (e.g. setting the bounds of the component, or adding the
             * component to a container).
             * <p>
             * This method might be called often, so it should work fast.
             */
            // @ts-ignore
            public invalidate(): void;
            /**
             * Revalidates the component hierarchy up to the nearest validate root.
             * <p>
             * This method first invalidates the component hierarchy starting from this
             * component up to the nearest validate root. Afterwards, the component
             * hierarchy is validated starting from the nearest validate root.
             * <p>
             * This is a convenience method supposed to help application developers
             * avoid looking for validate roots manually. Basically, it's equivalent to
             * first calling the {@link #invalidate()} method on this component, and
             * then calling the {@link #validate()} method on the nearest validate
             * root.
             */
            // @ts-ignore
            public revalidate(): void;
            /**
             * Creates a graphics context for this component. This method will
             * return <code>null</code> if this component is currently not
             * displayable.
             */
            // @ts-ignore
            public getGraphics(): java.awt.Graphics;
            /**
             * Gets the font metrics for the specified font.
             * Warning: Since Font metrics are affected by the
             * {@link java.awt.font.FontRenderContext FontRenderContext} and
             * this method does not provide one, it can return only metrics for
             * the default render context which may not match that used when
             * rendering on the Component if {@link Graphics2D} functionality is being
             * used. Instead metrics can be obtained at rendering time by calling
             * {@link Graphics#getFontMetrics()} or text measurement APIs on the
             * {@link Font Font} class.
             */
            // @ts-ignore
            public getFontMetrics(font: java.awt.Font): java.awt.FontMetrics;
            /**
             * Sets the cursor image to the specified cursor.  This cursor
             * image is displayed when the <code>contains</code> method for
             * this component returns true for the current cursor location, and
             * this Component is visible, displayable, and enabled. Setting the
             * cursor of a <code>Container</code> causes that cursor to be displayed
             * within all of the container's subcomponents, except for those
             * that have a non-<code>null</code> cursor.
             * <p>
             * The method may have no visual effect if the Java platform
             * implementation and/or the native system do not support
             * changing the mouse cursor shape.
             */
            // @ts-ignore
            public setCursor(cursor: java.awt.Cursor): void;
            /**
             * Gets the cursor set in the component. If the component does
             * not have a cursor set, the cursor of its parent is returned.
             * If no cursor is set in the entire hierarchy,
             * <code>Cursor.DEFAULT_CURSOR</code> is returned.
             */
            // @ts-ignore
            public getCursor(): java.awt.Cursor;
            /**
             * Returns whether the cursor has been explicitly set for this Component.
             * If this method returns <code>false</code>, this Component is inheriting
             * its cursor from an ancestor.
             */
            // @ts-ignore
            public isCursorSet(): boolean;
            /**
             * Paints this component.
             * <p>
             * This method is called when the contents of the component should
             * be painted; such as when the component is first being shown or
             * is damaged and in need of repair.  The clip rectangle in the
             * <code>Graphics</code> parameter is set to the area
             * which needs to be painted.
             * Subclasses of <code>Component</code> that override this
             * method need not call <code>super.paint(g)</code>.
             * <p>
             * For performance reasons, <code>Component</code>s with zero width
             * or height aren't considered to need painting when they are first shown,
             * and also aren't considered to need repair.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void;
            /**
             * Updates this component.
             * <p>
             * If this component is not a lightweight component, the
             * AWT calls the <code>update</code> method in response to
             * a call to <code>repaint</code>.  You can assume that
             * the background is not cleared.
             * <p>
             * The <code>update</code> method of <code>Component</code>
             * calls this component's <code>paint</code> method to redraw
             * this component.  This method is commonly overridden by subclasses
             * which need to do additional work in response to a call to
             * <code>repaint</code>.
             * Subclasses of Component that override this method should either
             * call <code>super.update(g)</code>, or call <code>paint(g)</code>
             * directly from their <code>update</code> method.
             * <p>
             * The origin of the graphics context, its
             * (<code>0</code>,&nbsp;<code>0</code>) coordinate point, is the
             * top-left corner of this component. The clipping region of the
             * graphics context is the bounding rectangle of this component.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void;
            /**
             * Paints this component and all of its subcomponents.
             * <p>
             * The origin of the graphics context, its
             * (<code>0</code>,&nbsp;<code>0</code>) coordinate point, is the
             * top-left corner of this component. The clipping region of the
             * graphics context is the bounding rectangle of this component.
             */
            // @ts-ignore
            public paintAll(g: java.awt.Graphics): void;
            /**
             * Repaints this component.
             * <p>
             * If this component is a lightweight component, this method
             * causes a call to this component's <code>paint</code>
             * method as soon as possible.  Otherwise, this method causes
             * a call to this component's <code>update</code> method as soon
             * as possible.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public repaint(): void;
            /**
             * Repaints the component.  If this component is a lightweight
             * component, this results in a call to <code>paint</code>
             * within <code>tm</code> milliseconds.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public repaint(tm: number): void;
            /**
             * Repaints the specified rectangle of this component.
             * <p>
             * If this component is a lightweight component, this method
             * causes a call to this component's <code>paint</code> method
             * as soon as possible.  Otherwise, this method causes a call to
             * this component's <code>update</code> method as soon as possible.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public repaint(x: number, y: number, width: number, height: number): void;
            /**
             * Repaints the specified rectangle of this component within
             * <code>tm</code> milliseconds.
             * <p>
             * If this component is a lightweight component, this method causes
             * a call to this component's <code>paint</code> method.
             * Otherwise, this method causes a call to this component's
             * <code>update</code> method.
             * <p>
             * <b>Note</b>: For more information on the paint mechanisms utilitized
             * by AWT and Swing, including information on how to write the most
             * efficient painting code, see
             * <a href="http://www.oracle.com/technetwork/java/painting-140037.html">Painting in AWT and Swing</a>.
             */
            // @ts-ignore
            public repaint(tm: number, x: number, y: number, width: number, height: number): void;
            /**
             * Prints this component. Applications should override this method
             * for components that must do special processing before being
             * printed or should be printed differently than they are painted.
             * <p>
             * The default implementation of this method calls the
             * <code>paint</code> method.
             * <p>
             * The origin of the graphics context, its
             * (<code>0</code>,&nbsp;<code>0</code>) coordinate point, is the
             * top-left corner of this component. The clipping region of the
             * graphics context is the bounding rectangle of this component.
             */
            // @ts-ignore
            public print(g: java.awt.Graphics): void;
            /**
             * Prints this component and all of its subcomponents.
             * <p>
             * The origin of the graphics context, its
             * (<code>0</code>,&nbsp;<code>0</code>) coordinate point, is the
             * top-left corner of this component. The clipping region of the
             * graphics context is the bounding rectangle of this component.
             */
            // @ts-ignore
            public printAll(g: java.awt.Graphics): void;
            /**
             * Repaints the component when the image has changed.
             * This <code>imageUpdate</code> method of an <code>ImageObserver</code>
             * is called when more information about an
             * image which had been previously requested using an asynchronous
             * routine such as the <code>drawImage</code> method of
             * <code>Graphics</code> becomes available.
             * See the definition of <code>imageUpdate</code> for
             * more information on this method and its arguments.
             * <p>
             * The <code>imageUpdate</code> method of <code>Component</code>
             * incrementally draws an image on the component as more of the bits
             * of the image are available.
             * <p>
             * If the system property <code>awt.image.incrementaldraw</code>
             * is missing or has the value <code>true</code>, the image is
             * incrementally drawn. If the system property has any other value,
             * then the image is not drawn until it has been completely loaded.
             * <p>
             * Also, if incremental drawing is in effect, the value of the
             * system property <code>awt.image.redrawrate</code> is interpreted
             * as an integer to give the maximum redraw rate, in milliseconds. If
             * the system property is missing or cannot be interpreted as an
             * integer, the redraw rate is once every 100ms.
             * <p>
             * The interpretation of the <code>x</code>, <code>y</code>,
             * <code>width</code>, and <code>height</code> arguments depends on
             * the value of the <code>infoflags</code> argument.
             */
            // @ts-ignore
            public imageUpdate(img: java.awt.Image, infoflags: number, x: number, y: number, w: number, h: number): boolean;
            /**
             * Creates an image from the specified image producer.
             */
            // @ts-ignore
            public createImage(producer: java.awt.image.ImageProducer): java.awt.Image;
            /**
             * Creates an off-screen drawable image
             * to be used for double buffering.
             */
            // @ts-ignore
            public createImage(width: number, height: number): java.awt.Image;
            /**
             * Creates a volatile off-screen drawable image
             * to be used for double buffering.
             */
            // @ts-ignore
            public createVolatileImage(width: number, height: number): java.awt.image.VolatileImage;
            /**
             * Creates a volatile off-screen drawable image, with the given capabilities.
             * The contents of this image may be lost at any time due
             * to operating system issues, so the image must be managed
             * via the <code>VolatileImage</code> interface.
             */
            // @ts-ignore
            public createVolatileImage(width: number, height: number, caps: java.awt.ImageCapabilities): java.awt.image.VolatileImage;
            /**
             * Prepares an image for rendering on this component.  The image
             * data is downloaded asynchronously in another thread and the
             * appropriate screen representation of the image is generated.
             */
            // @ts-ignore
            public prepareImage(image: java.awt.Image, observer: java.awt.image.ImageObserver): boolean;
            /**
             * Prepares an image for rendering on this component at the
             * specified width and height.
             * <p>
             * The image data is downloaded asynchronously in another thread,
             * and an appropriately scaled screen representation of the image is
             * generated.
             */
            // @ts-ignore
            public prepareImage(image: java.awt.Image, width: number, height: number, observer: java.awt.image.ImageObserver): boolean;
            /**
             * Returns the status of the construction of a screen representation
             * of the specified image.
             * <p>
             * This method does not cause the image to begin loading. An
             * application must use the <code>prepareImage</code> method
             * to force the loading of an image.
             * <p>
             * Information on the flags returned by this method can be found
             * with the discussion of the <code>ImageObserver</code> interface.
             */
            // @ts-ignore
            public checkImage(image: java.awt.Image, observer: java.awt.image.ImageObserver): number;
            /**
             * Returns the status of the construction of a screen representation
             * of the specified image.
             * <p>
             * This method does not cause the image to begin loading. An
             * application must use the <code>prepareImage</code> method
             * to force the loading of an image.
             * <p>
             * The <code>checkImage</code> method of <code>Component</code>
             * calls its peer's <code>checkImage</code> method to calculate
             * the flags. If this component does not yet have a peer, the
             * component's toolkit's <code>checkImage</code> method is called
             * instead.
             * <p>
             * Information on the flags returned by this method can be found
             * with the discussion of the <code>ImageObserver</code> interface.
             */
            // @ts-ignore
            public checkImage(image: java.awt.Image, width: number, height: number, observer: java.awt.image.ImageObserver): number;
            /**
             * Sets whether or not paint messages received from the operating system
             * should be ignored.  This does not affect paint events generated in
             * software by the AWT, unless they are an immediate response to an
             * OS-level paint message.
             * <p>
             * This is useful, for example, if running under full-screen mode and
             * better performance is desired, or if page-flipping is used as the
             * buffer strategy.
             */
            // @ts-ignore
            public setIgnoreRepaint(ignoreRepaint: boolean): void;
            // @ts-ignore
            public getIgnoreRepaint(): boolean;
            /**
             * Checks whether this component "contains" the specified point,
             * where <code>x</code> and <code>y</code> are defined to be
             * relative to the coordinate system of this component.
             */
            // @ts-ignore
            public contains(x: number, y: number): boolean;
            // @ts-ignore
            public inside(x: number, y: number): boolean;
            /**
             * Checks whether this component "contains" the specified point,
             * where the point's <i>x</i> and <i>y</i> coordinates are defined
             * to be relative to the coordinate system of this component.
             */
            // @ts-ignore
            public contains(p: java.awt.Point): boolean;
            /**
             * Determines if this component or one of its immediate
             * subcomponents contains the (<i>x</i>,&nbsp;<i>y</i>) location,
             * and if so, returns the containing component. This method only
             * looks one level deep. If the point (<i>x</i>,&nbsp;<i>y</i>) is
             * inside a subcomponent that itself has subcomponents, it does not
             * go looking down the subcomponent tree.
             * <p>
             * The <code>locate</code> method of <code>Component</code> simply
             * returns the component itself if the (<i>x</i>,&nbsp;<i>y</i>)
             * coordinate location is inside its bounding box, and <code>null</code>
             * otherwise.
             */
            // @ts-ignore
            public getComponentAt(x: number, y: number): java.awt.Component;
            // @ts-ignore
            public locate(x: number, y: number): java.awt.Component;
            /**
             * Returns the component or subcomponent that contains the
             * specified point.
             */
            // @ts-ignore
            public getComponentAt(p: java.awt.Point): java.awt.Component;
            // @ts-ignore
            public deliverEvent(e: java.awt.Event): void;
            /**
             * Dispatches an event to this component or one of its sub components.
             * Calls <code>processEvent</code> before returning for 1.1-style
             * events which have been enabled for the <code>Component</code>.
             */
            // @ts-ignore
            public dispatchEvent(e: java.awt.AWTEvent): void;
            // @ts-ignore
            public postEvent(e: java.awt.Event): boolean;
            /**
             * Adds the specified component listener to receive component events from
             * this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addComponentListener(l: java.awt.event.ComponentListener): void;
            /**
             * Removes the specified component listener so that it no longer
             * receives component events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeComponentListener(l: java.awt.event.ComponentListener): void;
            /**
             * Returns an array of all the component listeners
             * registered on this component.
             */
            // @ts-ignore
            public getComponentListeners(): java.awt.event.ComponentListener[];
            /**
             * Adds the specified focus listener to receive focus events from
             * this component when this component gains input focus.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addFocusListener(l: java.awt.event.FocusListener): void;
            /**
             * Removes the specified focus listener so that it no longer
             * receives focus events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeFocusListener(l: java.awt.event.FocusListener): void;
            /**
             * Returns an array of all the focus listeners
             * registered on this component.
             */
            // @ts-ignore
            public getFocusListeners(): java.awt.event.FocusListener[];
            /**
             * Adds the specified hierarchy listener to receive hierarchy changed
             * events from this component when the hierarchy to which this container
             * belongs changes.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addHierarchyListener(l: java.awt.event.HierarchyListener): void;
            /**
             * Removes the specified hierarchy listener so that it no longer
             * receives hierarchy changed events from this component. This method
             * performs no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeHierarchyListener(l: java.awt.event.HierarchyListener): void;
            /**
             * Returns an array of all the hierarchy listeners
             * registered on this component.
             */
            // @ts-ignore
            public getHierarchyListeners(): java.awt.event.HierarchyListener[];
            /**
             * Adds the specified hierarchy bounds listener to receive hierarchy
             * bounds events from this component when the hierarchy to which this
             * container belongs changes.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addHierarchyBoundsListener(l: java.awt.event.HierarchyBoundsListener): void;
            /**
             * Removes the specified hierarchy bounds listener so that it no longer
             * receives hierarchy bounds events from this component. This method
             * performs no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeHierarchyBoundsListener(l: java.awt.event.HierarchyBoundsListener): void;
            /**
             * Returns an array of all the hierarchy bounds listeners
             * registered on this component.
             */
            // @ts-ignore
            public getHierarchyBoundsListeners(): java.awt.event.HierarchyBoundsListener[];
            /**
             * Adds the specified key listener to receive key events from
             * this component.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addKeyListener(l: java.awt.event.KeyListener): void;
            /**
             * Removes the specified key listener so that it no longer
             * receives key events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeKeyListener(l: java.awt.event.KeyListener): void;
            /**
             * Returns an array of all the key listeners
             * registered on this component.
             */
            // @ts-ignore
            public getKeyListeners(): java.awt.event.KeyListener[];
            /**
             * Adds the specified mouse listener to receive mouse events from
             * this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addMouseListener(l: java.awt.event.MouseListener): void;
            /**
             * Removes the specified mouse listener so that it no longer
             * receives mouse events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeMouseListener(l: java.awt.event.MouseListener): void;
            /**
             * Returns an array of all the mouse listeners
             * registered on this component.
             */
            // @ts-ignore
            public getMouseListeners(): java.awt.event.MouseListener[];
            /**
             * Adds the specified mouse motion listener to receive mouse motion
             * events from this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addMouseMotionListener(l: java.awt.event.MouseMotionListener): void;
            /**
             * Removes the specified mouse motion listener so that it no longer
             * receives mouse motion events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeMouseMotionListener(l: java.awt.event.MouseMotionListener): void;
            /**
             * Returns an array of all the mouse motion listeners
             * registered on this component.
             */
            // @ts-ignore
            public getMouseMotionListeners(): java.awt.event.MouseMotionListener[];
            /**
             * Adds the specified mouse wheel listener to receive mouse wheel events
             * from this component.  Containers also receive mouse wheel events from
             * sub-components.
             * <p>
             * For information on how mouse wheel events are dispatched, see
             * the class description for {@link MouseWheelEvent}.
             * <p>
             * If l is <code>null</code>, no exception is thrown and no
             * action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addMouseWheelListener(l: java.awt.event.MouseWheelListener): void;
            /**
             * Removes the specified mouse wheel listener so that it no longer
             * receives mouse wheel events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeMouseWheelListener(l: java.awt.event.MouseWheelListener): void;
            /**
             * Returns an array of all the mouse wheel listeners
             * registered on this component.
             */
            // @ts-ignore
            public getMouseWheelListeners(): java.awt.event.MouseWheelListener[];
            /**
             * Adds the specified input method listener to receive
             * input method events from this component. A component will
             * only receive input method events from input methods
             * if it also overrides <code>getInputMethodRequests</code> to return an
             * <code>InputMethodRequests</code> instance.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="{@docRoot}/java/awt/doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addInputMethodListener(l: java.awt.event.InputMethodListener): void;
            /**
             * Removes the specified input method listener so that it no longer
             * receives input method events from this component. This method performs
             * no function, nor does it throw an exception, if the listener
             * specified by the argument was not previously added to this component.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeInputMethodListener(l: java.awt.event.InputMethodListener): void;
            /**
             * Returns an array of all the input method listeners
             * registered on this component.
             */
            // @ts-ignore
            public getInputMethodListeners(): java.awt.event.InputMethodListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Component</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Component</code> <code>c</code>
             * for its mouse listeners with the following code:
             * <pre>MouseListener[] mls = (MouseListener[])(c.getListeners(MouseListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Gets the input method request handler which supports
             * requests from input methods for this component. A component
             * that supports on-the-spot text input must override this
             * method to return an <code>InputMethodRequests</code> instance.
             * At the same time, it also has to handle input method events.
             */
            // @ts-ignore
            public getInputMethodRequests(): java.awt.im.InputMethodRequests;
            /**
             * Gets the input context used by this component for handling
             * the communication with input methods when text is entered
             * in this component. By default, the input context used for
             * the parent component is returned. Components may
             * override this to return a private input context.
             */
            // @ts-ignore
            public getInputContext(): java.awt.im.InputContext;
            /**
             * Enables the events defined by the specified event mask parameter
             * to be delivered to this component.
             * <p>
             * Event types are automatically enabled when a listener for
             * that event type is added to the component.
             * <p>
             * This method only needs to be invoked by subclasses of
             * <code>Component</code> which desire to have the specified event
             * types delivered to <code>processEvent</code> regardless of whether
             * or not a listener is registered.
             */
            // @ts-ignore
            protected enableEvents(eventsToEnable: number): void;
            /**
             * Disables the events defined by the specified event mask parameter
             * from being delivered to this component.
             */
            // @ts-ignore
            protected disableEvents(eventsToDisable: number): void;
            /**
             * Potentially coalesce an event being posted with an existing
             * event.  This method is called by <code>EventQueue.postEvent</code>
             * if an event with the same ID as the event to be posted is found in
             * the queue (both events must have this component as their source).
             * This method either returns a coalesced event which replaces
             * the existing event (and the new event is then discarded), or
             * <code>null</code> to indicate that no combining should be done
             * (add the second event to the end of the queue).  Either event
             * parameter may be modified and returned, as the other one is discarded
             * unless <code>null</code> is returned.
             * <p>
             * This implementation of <code>coalesceEvents</code> coalesces
             * two event types: mouse move (and drag) events,
             * and paint (and update) events.
             * For mouse move events the last event is always returned, causing
             * intermediate moves to be discarded.  For paint events, the new
             * event is coalesced into a complex <code>RepaintArea</code> in the peer.
             * The new <code>AWTEvent</code> is always returned.
             */
            // @ts-ignore
            protected coalesceEvents(existingEvent: java.awt.AWTEvent, newEvent: java.awt.AWTEvent): java.awt.AWTEvent;
            /**
             * Processes events occurring on this component. By default this
             * method calls the appropriate
             * <code>process&lt;event&nbsp;type&gt;Event</code>
             * method for the given class of event.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes component events occurring on this component by
             * dispatching them to any registered
             * <code>ComponentListener</code> objects.
             * <p>
             * This method is not called unless component events are
             * enabled for this component. Component events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>ComponentListener</code> object is registered
             * via <code>addComponentListener</code>.
             * <li>Component events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processComponentEvent(e: java.awt.event.ComponentEvent): void;
            /**
             * Processes focus events occurring on this component by
             * dispatching them to any registered
             * <code>FocusListener</code> objects.
             * <p>
             * This method is not called unless focus events are
             * enabled for this component. Focus events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>FocusListener</code> object is registered
             * via <code>addFocusListener</code>.
             * <li>Focus events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>
             * If focus events are enabled for a <code>Component</code>,
             * the current <code>KeyboardFocusManager</code> determines
             * whether or not a focus event should be dispatched to
             * registered <code>FocusListener</code> objects.  If the
             * events are to be dispatched, the <code>KeyboardFocusManager</code>
             * calls the <code>Component</code>'s <code>dispatchEvent</code>
             * method, which results in a call to the <code>Component</code>'s
             * <code>processFocusEvent</code> method.
             * <p>
             * If focus events are enabled for a <code>Component</code>, calling
             * the <code>Component</code>'s <code>dispatchEvent</code> method
             * with a <code>FocusEvent</code> as the argument will result in a
             * call to the <code>Component</code>'s <code>processFocusEvent</code>
             * method regardless of the current <code>KeyboardFocusManager</code>.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processFocusEvent(e: java.awt.event.FocusEvent): void;
            /**
             * Processes key events occurring on this component by
             * dispatching them to any registered
             * <code>KeyListener</code> objects.
             * <p>
             * This method is not called unless key events are
             * enabled for this component. Key events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>KeyListener</code> object is registered
             * via <code>addKeyListener</code>.
             * <li>Key events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>
             * If key events are enabled for a <code>Component</code>,
             * the current <code>KeyboardFocusManager</code> determines
             * whether or not a key event should be dispatched to
             * registered <code>KeyListener</code> objects.  The
             * <code>DefaultKeyboardFocusManager</code> will not dispatch
             * key events to a <code>Component</code> that is not the focus
             * owner or is not showing.
             * <p>
             * As of J2SE 1.4, <code>KeyEvent</code>s are redirected to
             * the focus owner. Please see the
             * <a href="doc-files/FocusSpec.html">Focus Specification</a>
             * for further information.
             * <p>
             * Calling a <code>Component</code>'s <code>dispatchEvent</code>
             * method with a <code>KeyEvent</code> as the argument will
             * result in a call to the <code>Component</code>'s
             * <code>processKeyEvent</code> method regardless of the
             * current <code>KeyboardFocusManager</code> as long as the
             * component is showing, focused, and enabled, and key events
             * are enabled on it.
             * <p>If the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processKeyEvent(e: java.awt.event.KeyEvent): void;
            /**
             * Processes mouse events occurring on this component by
             * dispatching them to any registered
             * <code>MouseListener</code> objects.
             * <p>
             * This method is not called unless mouse events are
             * enabled for this component. Mouse events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>MouseListener</code> object is registered
             * via <code>addMouseListener</code>.
             * <li>Mouse events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processMouseEvent(e: java.awt.event.MouseEvent): void;
            /**
             * Processes mouse motion events occurring on this component by
             * dispatching them to any registered
             * <code>MouseMotionListener</code> objects.
             * <p>
             * This method is not called unless mouse motion events are
             * enabled for this component. Mouse motion events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>MouseMotionListener</code> object is registered
             * via <code>addMouseMotionListener</code>.
             * <li>Mouse motion events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processMouseMotionEvent(e: java.awt.event.MouseEvent): void;
            /**
             * Processes mouse wheel events occurring on this component by
             * dispatching them to any registered
             * <code>MouseWheelListener</code> objects.
             * <p>
             * This method is not called unless mouse wheel events are
             * enabled for this component. Mouse wheel events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>A <code>MouseWheelListener</code> object is registered
             * via <code>addMouseWheelListener</code>.
             * <li>Mouse wheel events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>
             * For information on how mouse wheel events are dispatched, see
             * the class description for {@link MouseWheelEvent}.
             * <p>
             * Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processMouseWheelEvent(e: java.awt.event.MouseWheelEvent): void;
            /**
             * Processes input method events occurring on this component by
             * dispatching them to any registered
             * <code>InputMethodListener</code> objects.
             * <p>
             * This method is not called unless input method events
             * are enabled for this component. Input method events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>InputMethodListener</code> object is registered
             * via <code>addInputMethodListener</code>.
             * <li>Input method events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processInputMethodEvent(e: java.awt.event.InputMethodEvent): void;
            /**
             * Processes hierarchy events occurring on this component by
             * dispatching them to any registered
             * <code>HierarchyListener</code> objects.
             * <p>
             * This method is not called unless hierarchy events
             * are enabled for this component. Hierarchy events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>HierarchyListener</code> object is registered
             * via <code>addHierarchyListener</code>.
             * <li>Hierarchy events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processHierarchyEvent(e: java.awt.event.HierarchyEvent): void;
            /**
             * Processes hierarchy bounds events occurring on this component by
             * dispatching them to any registered
             * <code>HierarchyBoundsListener</code> objects.
             * <p>
             * This method is not called unless hierarchy bounds events
             * are enabled for this component. Hierarchy bounds events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>HierarchyBoundsListener</code> object is registered
             * via <code>addHierarchyBoundsListener</code>.
             * <li>Hierarchy bounds events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processHierarchyBoundsEvent(e: java.awt.event.HierarchyEvent): void;
            // @ts-ignore
            public handleEvent(evt: java.awt.Event): boolean;
            // @ts-ignore
            public mouseDown(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public mouseDrag(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public mouseUp(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public mouseMove(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public mouseEnter(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public mouseExit(evt: java.awt.Event, x: number, y: number): boolean;
            // @ts-ignore
            public keyDown(evt: java.awt.Event, key: number): boolean;
            // @ts-ignore
            public keyUp(evt: java.awt.Event, key: number): boolean;
            // @ts-ignore
            public action(evt: java.awt.Event, what: java.lang.Object): boolean;
            /**
             * Makes this <code>Component</code> displayable by connecting it to a
             * native screen resource.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Makes this <code>Component</code> undisplayable by destroying it native
             * screen resource.
             * <p>
             * This method is called by the toolkit internally and should
             * not be called directly by programs. Code overriding
             * this method should call <code>super.removeNotify</code> as
             * the first line of the overriding method.
             */
            // @ts-ignore
            public removeNotify(): void;
            // @ts-ignore
            public gotFocus(evt: java.awt.Event, what: java.lang.Object): boolean;
            // @ts-ignore
            public lostFocus(evt: java.awt.Event, what: java.lang.Object): boolean;
            /**
             * Returns whether this <code>Component</code> can become the focus
             * owner.
             */
            // @ts-ignore
            public isFocusTraversable(): boolean;
            /**
             * Returns whether this Component can be focused.
             */
            // @ts-ignore
            public isFocusable(): boolean;
            /**
             * Sets the focusable state of this Component to the specified value. This
             * value overrides the Component's default focusability.
             */
            // @ts-ignore
            public setFocusable(focusable: boolean): void;
            /**
             * Sets the focus traversal keys for a given traversal operation for this
             * Component.
             * <p>
             * The default values for a Component's focus traversal keys are
             * implementation-dependent. Sun recommends that all implementations for a
             * particular native platform use the same default values. The
             * recommendations for Windows and Unix are listed below. These
             * recommendations are used in the Sun AWT implementations.
             * <table border=1 summary="Recommended default values for a Component's focus traversal keys">
             * <tr>
             * <th>Identifier</th>
             * <th>Meaning</th>
             * <th>Default</th>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS</td>
             * <td>Normal forward keyboard traversal</td>
             * <td>TAB on KEY_PRESSED, CTRL-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS</td>
             * <td>Normal reverse keyboard traversal</td>
             * <td>SHIFT-TAB on KEY_PRESSED, CTRL-SHIFT-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS</td>
             * <td>Go up one focus traversal cycle</td>
             * <td>none</td>
             * </tr>
             * </table>
             * To disable a traversal key, use an empty Set; Collections.EMPTY_SET is
             * recommended.
             * <p>
             * Using the AWTKeyStroke API, client code can specify on which of two
             * specific KeyEvents, KEY_PRESSED or KEY_RELEASED, the focus traversal
             * operation will occur. Regardless of which KeyEvent is specified,
             * however, all KeyEvents related to the focus traversal key, including the
             * associated KEY_TYPED event, will be consumed, and will not be dispatched
             * to any Component. It is a runtime error to specify a KEY_TYPED event as
             * mapping to a focus traversal operation, or to map the same event to
             * multiple default focus traversal operations.
             * <p>
             * If a value of null is specified for the Set, this Component inherits the
             * Set from its parent. If all ancestors of this Component have null
             * specified for the Set, then the current KeyboardFocusManager's default
             * Set is used.
             * <p>
             * This method may throw a {@code ClassCastException} if any {@code Object}
             * in {@code keystrokes} is not an {@code AWTKeyStroke}.
             */
            // @ts-ignore
            public setFocusTraversalKeys(id: number, keystrokes: java.util.Set): void;
            /**
             * Returns the Set of focus traversal keys for a given traversal operation
             * for this Component. (See
             * <code>setFocusTraversalKeys</code> for a full description of each key.)
             * <p>
             * If a Set of traversal keys has not been explicitly defined for this
             * Component, then this Component's parent's Set is returned. If no Set
             * has been explicitly defined for any of this Component's ancestors, then
             * the current KeyboardFocusManager's default Set is returned.
             */
            // @ts-ignore
            public getFocusTraversalKeys(id: number): java.util.Set;
            /**
             * Returns whether the Set of focus traversal keys for the given focus
             * traversal operation has been explicitly defined for this Component. If
             * this method returns <code>false</code>, this Component is inheriting the
             * Set from an ancestor, or from the current KeyboardFocusManager.
             */
            // @ts-ignore
            public areFocusTraversalKeysSet(id: number): boolean;
            /**
             * Sets whether focus traversal keys are enabled for this Component.
             * Components for which focus traversal keys are disabled receive key
             * events for focus traversal keys. Components for which focus traversal
             * keys are enabled do not see these events; instead, the events are
             * automatically converted to traversal operations.
             */
            // @ts-ignore
            public setFocusTraversalKeysEnabled(focusTraversalKeysEnabled: boolean): void;
            /**
             * Returns whether focus traversal keys are enabled for this Component.
             * Components for which focus traversal keys are disabled receive key
             * events for focus traversal keys. Components for which focus traversal
             * keys are enabled do not see these events; instead, the events are
             * automatically converted to traversal operations.
             */
            // @ts-ignore
            public getFocusTraversalKeysEnabled(): boolean;
            /**
             * Requests that this Component get the input focus, and that this
             * Component's top-level ancestor become the focused Window. This
             * component must be displayable, focusable, visible and all of
             * its ancestors (with the exception of the top-level Window) must
             * be visible for the request to be granted. Every effort will be
             * made to honor the request; however, in some cases it may be
             * impossible to do so. Developers must never assume that this
             * Component is the focus owner until this Component receives a
             * FOCUS_GAINED event. If this request is denied because this
             * Component's top-level Window cannot become the focused Window,
             * the request will be remembered and will be granted when the
             * Window is later focused by the user.
             * <p>
             * This method cannot be used to set the focus owner to no Component at
             * all. Use <code>KeyboardFocusManager.clearGlobalFocusOwner()</code>
             * instead.
             * <p>
             * Because the focus behavior of this method is platform-dependent,
             * developers are strongly encouraged to use
             * <code>requestFocusInWindow</code> when possible.
             * <p>Note: Not all focus transfers result from invoking this method. As
             * such, a component may receive focus without this or any of the other
             * {@code requestFocus} methods of {@code Component} being invoked.
             */
            // @ts-ignore
            public requestFocus(): void;
            /**
             * Requests that this <code>Component</code> get the input focus,
             * and that this <code>Component</code>'s top-level ancestor
             * become the focused <code>Window</code>. This component must be
             * displayable, focusable, visible and all of its ancestors (with
             * the exception of the top-level Window) must be visible for the
             * request to be granted. Every effort will be made to honor the
             * request; however, in some cases it may be impossible to do
             * so. Developers must never assume that this component is the
             * focus owner until this component receives a FOCUS_GAINED
             * event. If this request is denied because this component's
             * top-level window cannot become the focused window, the request
             * will be remembered and will be granted when the window is later
             * focused by the user.
             * <p>
             * This method returns a boolean value. If <code>false</code> is returned,
             * the request is <b>guaranteed to fail</b>. If <code>true</code> is
             * returned, the request will succeed <b>unless</b> it is vetoed, or an
             * extraordinary event, such as disposal of the component's peer, occurs
             * before the request can be granted by the native windowing system. Again,
             * while a return value of <code>true</code> indicates that the request is
             * likely to succeed, developers must never assume that this component is
             * the focus owner until this component receives a FOCUS_GAINED event.
             * <p>
             * This method cannot be used to set the focus owner to no component at
             * all. Use <code>KeyboardFocusManager.clearGlobalFocusOwner</code>
             * instead.
             * <p>
             * Because the focus behavior of this method is platform-dependent,
             * developers are strongly encouraged to use
             * <code>requestFocusInWindow</code> when possible.
             * <p>
             * Every effort will be made to ensure that <code>FocusEvent</code>s
             * generated as a
             * result of this request will have the specified temporary value. However,
             * because specifying an arbitrary temporary state may not be implementable
             * on all native windowing systems, correct behavior for this method can be
             * guaranteed only for lightweight <code>Component</code>s.
             * This method is not intended
             * for general use, but exists instead as a hook for lightweight component
             * libraries, such as Swing.
             * <p>Note: Not all focus transfers result from invoking this method. As
             * such, a component may receive focus without this or any of the other
             * {@code requestFocus} methods of {@code Component} being invoked.
             */
            // @ts-ignore
            protected requestFocus(temporary: boolean): boolean;
            /**
             * Requests that this Component get the input focus, if this
             * Component's top-level ancestor is already the focused
             * Window. This component must be displayable, focusable, visible
             * and all of its ancestors (with the exception of the top-level
             * Window) must be visible for the request to be granted. Every
             * effort will be made to honor the request; however, in some
             * cases it may be impossible to do so. Developers must never
             * assume that this Component is the focus owner until this
             * Component receives a FOCUS_GAINED event.
             * <p>
             * This method returns a boolean value. If <code>false</code> is returned,
             * the request is <b>guaranteed to fail</b>. If <code>true</code> is
             * returned, the request will succeed <b>unless</b> it is vetoed, or an
             * extraordinary event, such as disposal of the Component's peer, occurs
             * before the request can be granted by the native windowing system. Again,
             * while a return value of <code>true</code> indicates that the request is
             * likely to succeed, developers must never assume that this Component is
             * the focus owner until this Component receives a FOCUS_GAINED event.
             * <p>
             * This method cannot be used to set the focus owner to no Component at
             * all. Use <code>KeyboardFocusManager.clearGlobalFocusOwner()</code>
             * instead.
             * <p>
             * The focus behavior of this method can be implemented uniformly across
             * platforms, and thus developers are strongly encouraged to use this
             * method over <code>requestFocus</code> when possible. Code which relies
             * on <code>requestFocus</code> may exhibit different focus behavior on
             * different platforms.
             * <p>Note: Not all focus transfers result from invoking this method. As
             * such, a component may receive focus without this or any of the other
             * {@code requestFocus} methods of {@code Component} being invoked.
             */
            // @ts-ignore
            public requestFocusInWindow(): boolean;
            /**
             * Requests that this <code>Component</code> get the input focus,
             * if this <code>Component</code>'s top-level ancestor is already
             * the focused <code>Window</code>.  This component must be
             * displayable, focusable, visible and all of its ancestors (with
             * the exception of the top-level Window) must be visible for the
             * request to be granted. Every effort will be made to honor the
             * request; however, in some cases it may be impossible to do
             * so. Developers must never assume that this component is the
             * focus owner until this component receives a FOCUS_GAINED event.
             * <p>
             * This method returns a boolean value. If <code>false</code> is returned,
             * the request is <b>guaranteed to fail</b>. If <code>true</code> is
             * returned, the request will succeed <b>unless</b> it is vetoed, or an
             * extraordinary event, such as disposal of the component's peer, occurs
             * before the request can be granted by the native windowing system. Again,
             * while a return value of <code>true</code> indicates that the request is
             * likely to succeed, developers must never assume that this component is
             * the focus owner until this component receives a FOCUS_GAINED event.
             * <p>
             * This method cannot be used to set the focus owner to no component at
             * all. Use <code>KeyboardFocusManager.clearGlobalFocusOwner</code>
             * instead.
             * <p>
             * The focus behavior of this method can be implemented uniformly across
             * platforms, and thus developers are strongly encouraged to use this
             * method over <code>requestFocus</code> when possible. Code which relies
             * on <code>requestFocus</code> may exhibit different focus behavior on
             * different platforms.
             * <p>
             * Every effort will be made to ensure that <code>FocusEvent</code>s
             * generated as a
             * result of this request will have the specified temporary value. However,
             * because specifying an arbitrary temporary state may not be implementable
             * on all native windowing systems, correct behavior for this method can be
             * guaranteed only for lightweight components. This method is not intended
             * for general use, but exists instead as a hook for lightweight component
             * libraries, such as Swing.
             * <p>Note: Not all focus transfers result from invoking this method. As
             * such, a component may receive focus without this or any of the other
             * {@code requestFocus} methods of {@code Component} being invoked.
             */
            // @ts-ignore
            protected requestFocusInWindow(temporary: boolean): boolean;
            /**
             * Returns the Container which is the focus cycle root of this Component's
             * focus traversal cycle. Each focus traversal cycle has only a single
             * focus cycle root and each Component which is not a Container belongs to
             * only a single focus traversal cycle. Containers which are focus cycle
             * roots belong to two cycles: one rooted at the Container itself, and one
             * rooted at the Container's nearest focus-cycle-root ancestor. For such
             * Containers, this method will return the Container's nearest focus-cycle-
             * root ancestor.
             */
            // @ts-ignore
            public getFocusCycleRootAncestor(): java.awt.Container;
            /**
             * Returns whether the specified Container is the focus cycle root of this
             * Component's focus traversal cycle. Each focus traversal cycle has only
             * a single focus cycle root and each Component which is not a Container
             * belongs to only a single focus traversal cycle.
             */
            // @ts-ignore
            public isFocusCycleRoot(container: java.awt.Container): boolean;
            /**
             * Transfers the focus to the next component, as though this Component were
             * the focus owner.
             */
            // @ts-ignore
            public transferFocus(): void;
            // @ts-ignore
            public nextFocus(): void;
            /**
             * Transfers the focus to the previous component, as though this Component
             * were the focus owner.
             */
            // @ts-ignore
            public transferFocusBackward(): void;
            /**
             * Transfers the focus up one focus traversal cycle. Typically, the focus
             * owner is set to this Component's focus cycle root, and the current focus
             * cycle root is set to the new focus owner's focus cycle root. If,
             * however, this Component's focus cycle root is a Window, then the focus
             * owner is set to the focus cycle root's default Component to focus, and
             * the current focus cycle root is unchanged.
             */
            // @ts-ignore
            public transferFocusUpCycle(): void;
            /**
             * Returns <code>true</code> if this <code>Component</code> is the
             * focus owner.  This method is obsolete, and has been replaced by
             * <code>isFocusOwner()</code>.
             */
            // @ts-ignore
            public hasFocus(): boolean;
            /**
             * Returns <code>true</code> if this <code>Component</code> is the
             * focus owner.
             */
            // @ts-ignore
            public isFocusOwner(): boolean;
            /**
             * Adds the specified popup menu to the component.
             */
            // @ts-ignore
            public add(popup: java.awt.PopupMenu): void;
            /**
             * Removes the specified popup menu from the component.
             */
            // @ts-ignore
            public remove(popup: java.awt.MenuComponent): void;
            /**
             * Returns a string representing the state of this component. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Returns a string representation of this component and its values.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Prints a listing of this component to the standard system output
             * stream <code>System.out</code>.
             */
            // @ts-ignore
            public list(): void;
            /**
             * Prints a listing of this component to the specified output
             * stream.
             */
            // @ts-ignore
            public list(out: java.io.PrintStream): void;
            /**
             * Prints out a list, starting at the specified indentation, to the
             * specified print stream.
             */
            // @ts-ignore
            public list(out: java.io.PrintStream, indent: number): void;
            /**
             * Prints a listing to the specified print writer.
             */
            // @ts-ignore
            public list(out: java.io.PrintWriter): void;
            /**
             * Prints out a list, starting at the specified indentation, to
             * the specified print writer.
             */
            // @ts-ignore
            public list(out: java.io.PrintWriter, indent: number): void;
            /**
             * Adds a PropertyChangeListener to the listener list. The listener is
             * registered for all bound properties of this class, including the
             * following:
             * <ul>
             * <li>this Component's font ("font")</li>
             * <li>this Component's background color ("background")</li>
             * <li>this Component's foreground color ("foreground")</li>
             * <li>this Component's focusability ("focusable")</li>
             * <li>this Component's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Component's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Component's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Component's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Component's preferred size ("preferredSize")</li>
             * <li>this Component's minimum size ("minimumSize")</li>
             * <li>this Component's maximum size ("maximumSize")</li>
             * <li>this Component's name ("name")</li>
             * </ul>
             * Note that if this <code>Component</code> is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If <code>listener</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Removes a PropertyChangeListener from the listener list. This method
             * should be used to remove PropertyChangeListeners that were registered
             * for all bound properties of this class.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             */
            // @ts-ignore
            public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the property change listeners
             * registered on this component.
             */
            // @ts-ignore
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
            /**
             * Adds a PropertyChangeListener to the listener list for a specific
             * property. The specified property may be user-defined, or one of the
             * following:
             * <ul>
             * <li>this Component's font ("font")</li>
             * <li>this Component's background color ("background")</li>
             * <li>this Component's foreground color ("foreground")</li>
             * <li>this Component's focusability ("focusable")</li>
             * <li>this Component's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Component's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Component's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Component's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * </ul>
             * Note that if this <code>Component</code> is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If <code>propertyName</code> or <code>listener</code> is <code>null</code>,
             * no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Removes a <code>PropertyChangeListener</code> from the listener
             * list for a specific property. This method should be used to remove
             * <code>PropertyChangeListener</code>s
             * that were registered for a specific bound property.
             * <p>
             * If <code>propertyName</code> or <code>listener</code> is <code>null</code>,
             * no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public removePropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the listeners which have been associated
             * with the named property.
             */
            // @ts-ignore
            public getPropertyChangeListeners(propertyName: string): java.beans.PropertyChangeListener[];
            /**
             * Support for reporting bound property changes for Object properties.
             * This method can be called when a bound property has changed and it will
             * send the appropriate PropertyChangeEvent to any registered
             * PropertyChangeListeners.
             */
            // @ts-ignore
            protected firePropertyChange(propertyName: string, oldValue: java.lang.Object, newValue: java.lang.Object): void;
            /**
             * Support for reporting bound property changes for boolean properties.
             * This method can be called when a bound property has changed and it will
             * send the appropriate PropertyChangeEvent to any registered
             * PropertyChangeListeners.
             */
            // @ts-ignore
            protected firePropertyChange(propertyName: string, oldValue: boolean, newValue: boolean): void;
            /**
             * Support for reporting bound property changes for integer properties.
             * This method can be called when a bound property has changed and it will
             * send the appropriate PropertyChangeEvent to any registered
             * PropertyChangeListeners.
             */
            // @ts-ignore
            protected firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: string, newValue: string): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a bound property change.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Sets the language-sensitive orientation that is to be used to order
             * the elements or text within this component.  Language-sensitive
             * <code>LayoutManager</code> and <code>Component</code>
             * subclasses will use this property to
             * determine how to lay out and draw components.
             * <p>
             * At construction time, a component's orientation is set to
             * <code>ComponentOrientation.UNKNOWN</code>,
             * indicating that it has not been specified
             * explicitly.  The UNKNOWN orientation behaves the same as
             * <code>ComponentOrientation.LEFT_TO_RIGHT</code>.
             * <p>
             * To set the orientation of a single component, use this method.
             * To set the orientation of an entire component
             * hierarchy, use
             * {@link #applyComponentOrientation applyComponentOrientation}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public setComponentOrientation(o: java.awt.ComponentOrientation): void;
            /**
             * Retrieves the language-sensitive orientation that is to be used to order
             * the elements or text within this component.  <code>LayoutManager</code>
             * and <code>Component</code>
             * subclasses that wish to respect orientation should call this method to
             * get the component's orientation before performing layout or drawing.
             */
            // @ts-ignore
            public getComponentOrientation(): java.awt.ComponentOrientation;
            /**
             * Sets the <code>ComponentOrientation</code> property of this component
             * and all components contained within it.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             */
            // @ts-ignore
            public applyComponentOrientation(orientation: java.awt.ComponentOrientation): void;
            /**
             * Gets the <code>AccessibleContext</code> associated
             * with this <code>Component</code>.
             * The method implemented by this base
             * class returns null.  Classes that extend <code>Component</code>
             * should implement this method to return the
             * <code>AccessibleContext</code> associated with the subclass.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
