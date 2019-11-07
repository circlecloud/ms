declare namespace java {
    namespace awt {
        namespace List {
            namespace AccessibleAWTList {
                // @ts-ignore
                protected class AccessibleAWTListChild extends java.awt.Component.AccessibleAWTComponent {
                    // @ts-ignore
                    constructor(parent: java.awt.List, indexInParent: number)
                    /**
                     * Gets the AccessibleContext for this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which acts as its own AccessibleContext.
                     */
                    // @ts-ignore
                    public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
                    /**
                     * Get the role of this object.
                     */
                    // @ts-ignore
                    public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                    /**
                     * Get the state set of this object.  The AccessibleStateSet of an
                     * object is composed of a set of unique AccessibleState's.  A
                     * change in the AccessibleStateSet of an object will cause a
                     * PropertyChangeEvent to be fired for the
                     * ACCESSIBLE_STATE_PROPERTY property.
                     */
                    // @ts-ignore
                    public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
                    /**
                     * Gets the locale of the component. If the component does not
                     * have a locale, then the locale of its parent is returned.
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale;
                    /**
                     * Get the 0-based index of this object in its accessible parent.
                     */
                    // @ts-ignore
                    public getAccessibleIndexInParent(): number;
                    /**
                     * Returns the number of accessible children of the object.
                     */
                    // @ts-ignore
                    public getAccessibleChildrenCount(): number;
                    /**
                     * Return the specified Accessible child of the object.  The
                     * Accessible children of an Accessible object are zero-based,
                     * so the first child of an Accessible child is at index 0, the
                     * second child is at index 1, and so on.
                     */
                    // @ts-ignore
                    public getAccessibleChild(i: number): any /*javax.accessibility.Accessible*/;
                    /**
                     * Get the background color of this object.
                     */
                    // @ts-ignore
                    public getBackground(): java.awt.Color;
                    /**
                     * Set the background color of this object.
                     */
                    // @ts-ignore
                    public setBackground(c: java.awt.Color): void;
                    /**
                     * Get the foreground color of this object.
                     */
                    // @ts-ignore
                    public getForeground(): java.awt.Color;
                    /**
                     * Set the foreground color of this object.
                     */
                    // @ts-ignore
                    public setForeground(c: java.awt.Color): void;
                    /**
                     * Get the Cursor of this object.
                     */
                    // @ts-ignore
                    public getCursor(): java.awt.Cursor;
                    /**
                     * Set the Cursor of this object.
                     * <p>
                     * The method may have no visual effect if the Java platform
                     * implementation and/or the native system do not support
                     * changing the mouse cursor shape.
                     */
                    // @ts-ignore
                    public setCursor(cursor: java.awt.Cursor): void;
                    /**
                     * Get the Font of this object.
                     */
                    // @ts-ignore
                    public getFont(): java.awt.Font;
                    /**
                     * Set the Font of this object.
                     */
                    // @ts-ignore
                    public setFont(f: java.awt.Font): void;
                    /**
                     * Get the FontMetrics of this object.
                     */
                    // @ts-ignore
                    public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics;
                    /**
                     * Determine if the object is enabled.  Objects that are enabled
                     * will also have the AccessibleState.ENABLED state set in their
                     * AccessibleStateSet.
                     */
                    // @ts-ignore
                    public isEnabled(): boolean;
                    /**
                     * Set the enabled state of the object.
                     */
                    // @ts-ignore
                    public setEnabled(b: boolean): void;
                    /**
                     * Determine if the object is visible.  Note: this means that the
                     * object intends to be visible; however, it may not be
                     * showing on the screen because one of the objects that this object
                     * is contained by is currently not visible.  To determine if an
                     * object is showing on the screen, use isShowing().
                     * <p>Objects that are visible will also have the
                     * AccessibleState.VISIBLE state set in their AccessibleStateSet.
                     */
                    // @ts-ignore
                    public isVisible(): boolean;
                    /**
                     * Set the visible state of the object.
                     */
                    // @ts-ignore
                    public setVisible(b: boolean): void;
                    /**
                     * Determine if the object is showing.  This is determined by
                     * checking the visibility of the object and visibility of the
                     * object ancestors.
                     * Note: this will return true even if the object is obscured
                     * by another (for example, it to object is underneath a menu
                     * that was pulled down).
                     */
                    // @ts-ignore
                    public isShowing(): boolean;
                    /**
                     * Checks whether the specified point is within this object's
                     * bounds, where the point's x and y coordinates are defined to
                     * be relative to the coordinate system of the object.
                     */
                    // @ts-ignore
                    public contains(p: java.awt.Point): boolean;
                    /**
                     * Returns the location of the object on the screen.
                     */
                    // @ts-ignore
                    public getLocationOnScreen(): java.awt.Point;
                    /**
                     * Gets the location of the object relative to the parent in the
                     * form of a point specifying the object's top-left corner in the
                     * screen's coordinate space.
                     */
                    // @ts-ignore
                    public getLocation(): java.awt.Point;
                    /**
                     * Sets the location of the object relative to the parent.
                     */
                    // @ts-ignore
                    public setLocation(p: java.awt.Point): void;
                    /**
                     * Gets the bounds of this object in the form of a Rectangle object.
                     * The bounds specify this object's width, height, and location
                     * relative to its parent.
                     */
                    // @ts-ignore
                    public getBounds(): java.awt.Rectangle;
                    /**
                     * Sets the bounds of this object in the form of a Rectangle
                     * object.  The bounds specify this object's width, height, and
                     * location relative to its parent.
                     */
                    // @ts-ignore
                    public setBounds(r: java.awt.Rectangle): void;
                    /**
                     * Returns the size of this object in the form of a Dimension
                     * object.  The height field of the Dimension object contains this
                     * objects's height, and the width field of the Dimension object
                     * contains this object's width.
                     */
                    // @ts-ignore
                    public getSize(): java.awt.Dimension;
                    /**
                     * Resizes this object so that it has width and height.
                     */
                    // @ts-ignore
                    public setSize(d: java.awt.Dimension): void;
                    /**
                     * Returns the <code>Accessible</code> child, if one exists,
                     * contained at the local coordinate <code>Point</code>.
                     */
                    // @ts-ignore
                    public getAccessibleAt(p: java.awt.Point): any /*javax.accessibility.Accessible*/;
                    /**
                     * Returns whether this object can accept focus or not.   Objects
                     * that can accept focus will also have the
                     * <code>AccessibleState.FOCUSABLE</code> state set in their
                     * <code>AccessibleStateSet</code>.
                     */
                    // @ts-ignore
                    public isFocusTraversable(): boolean;
                    /**
                     * Requests focus for this object.  If this object cannot accept
                     * focus, nothing will happen.  Otherwise, the object will attempt
                     * to take focus.
                     */
                    // @ts-ignore
                    public requestFocus(): void;
                    /**
                     * Adds the specified focus listener to receive focus events from
                     * this component.
                     */
                    // @ts-ignore
                    public addFocusListener(l: java.awt.event.FocusListener): void;
                    /**
                     * Removes the specified focus listener so it no longer receives
                     * focus events from this component.
                     */
                    // @ts-ignore
                    public removeFocusListener(l: java.awt.event.FocusListener): void;
                }
            }
        }
    }
}
