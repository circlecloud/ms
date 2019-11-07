// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace MenuComponent {
            // @ts-ignore
            protected abstract class AccessibleAWTMenuComponent extends javax.accessibility.AccessibleContext {
                /**
                 * Although the class is abstract, this should be called by
                 * all sub-classes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the <code>AccessibleSelection</code> associated with this
                 * object which allows its <code>Accessible</code> children to be selected.
                 */
                // @ts-ignore
                public getAccessibleSelection(): any /*javax.accessibility.AccessibleSelection*/;
                /**
                 * Gets the accessible name of this object.  This should almost never
                 * return <code>java.awt.MenuComponent.getName</code>, as that
                 * generally isn't a localized name, and doesn't have meaning for the
                 * user.  If the object is fundamentally a text object (e.g. a menu item), the
                 * accessible name should be the text of the object (e.g. "save").
                 * If the object has a tooltip, the tooltip text may also be an
                 * appropriate String to return.
                 */
                // @ts-ignore
                public getAccessibleName(): string;
                /**
                 * Gets the accessible description of this object.  This should be
                 * a concise, localized description of what this object is - what
                 * is its meaning to the user.  If the object has a tooltip, the
                 * tooltip text may be an appropriate string to return, assuming
                 * it contains a concise description of the object (instead of just
                 * the name of the object - e.g. a "Save" icon on a toolbar that
                 * had "save" as the tooltip text shouldn't return the tooltip
                 * text as the description, but something like "Saves the current
                 * text document" instead).
                 */
                // @ts-ignore
                public getAccessibleDescription(): string;
                /**
                 * Gets the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                /**
                 * Gets the state of this object.
                 */
                // @ts-ignore
                public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
                /**
                 * Gets the <code>Accessible</code> parent of this object.
                 * If the parent of this object implements <code>Accessible</code>,
                 * this method should simply return <code>getParent</code>.
                 */
                // @ts-ignore
                public getAccessibleParent(): any /*javax.accessibility.Accessible*/;
                /**
                 * Gets the index of this object in its accessible parent.
                 */
                // @ts-ignore
                public getAccessibleIndexInParent(): number;
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement <code>Accessible</code>,
                 * then this method should return the number of children of this object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number;
                /**
                 * Returns the nth <code>Accessible</code> child of the object.
                 */
                // @ts-ignore
                public getAccessibleChild(i: number): any /*javax.accessibility.Accessible*/;
                /**
                 * Returns the locale of this object.
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale;
                /**
                 * Gets the <code>AccessibleComponent</code> associated with
                 * this object if one exists.  Otherwise return <code>null</code>.
                 */
                // @ts-ignore
                public getAccessibleComponent(): any /*javax.accessibility.AccessibleComponent*/;
                /**
                 * Gets the background color of this object.
                 */
                // @ts-ignore
                public getBackground(): java.awt.Color;
                /**
                 * Sets the background color of this object.
                 * (For transparency, see <code>isOpaque</code>.)
                 */
                // @ts-ignore
                public setBackground(c: java.awt.Color): void;
                /**
                 * Gets the foreground color of this object.
                 */
                // @ts-ignore
                public getForeground(): java.awt.Color;
                /**
                 * Sets the foreground color of this object.
                 */
                // @ts-ignore
                public setForeground(c: java.awt.Color): void;
                /**
                 * Gets the <code>Cursor</code> of this object.
                 */
                // @ts-ignore
                public getCursor(): java.awt.Cursor;
                /**
                 * Sets the <code>Cursor</code> of this object.
                 * <p>
                 * The method may have no visual effect if the Java platform
                 * implementation and/or the native system do not support
                 * changing the mouse cursor shape.
                 */
                // @ts-ignore
                public setCursor(cursor: java.awt.Cursor): void;
                /**
                 * Gets the <code>Font</code> of this object.
                 */
                // @ts-ignore
                public getFont(): java.awt.Font;
                /**
                 * Sets the <code>Font</code> of this object.
                 */
                // @ts-ignore
                public setFont(f: java.awt.Font): void;
                /**
                 * Gets the <code>FontMetrics</code> of this object.
                 */
                // @ts-ignore
                public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics;
                /**
                 * Determines if the object is enabled.
                 */
                // @ts-ignore
                public isEnabled(): boolean;
                /**
                 * Sets the enabled state of the object.
                 */
                // @ts-ignore
                public setEnabled(b: boolean): void;
                /**
                 * Determines if the object is visible.  Note: this means that the
                 * object intends to be visible; however, it may not in fact be
                 * showing on the screen because one of the objects that this object
                 * is contained by is not visible.  To determine if an object is
                 * showing on the screen, use <code>isShowing</code>.
                 */
                // @ts-ignore
                public isVisible(): boolean;
                /**
                 * Sets the visible state of the object.
                 */
                // @ts-ignore
                public setVisible(b: boolean): void;
                /**
                 * Determines if the object is showing.  This is determined by checking
                 * the visibility of the object and ancestors of the object.  Note:
                 * this will return true even if the object is obscured by another
                 * (for example, it happens to be underneath a menu that was pulled
                 * down).
                 */
                // @ts-ignore
                public isShowing(): boolean;
                /**
                 * Checks whether the specified point is within this object's bounds,
                 * where the point's x and y coordinates are defined to be relative to
                 * the coordinate system of the object.
                 */
                // @ts-ignore
                public contains(p: java.awt.Point): boolean;
                /**
                 * Returns the location of the object on the screen.
                 */
                // @ts-ignore
                public getLocationOnScreen(): java.awt.Point;
                /**
                 * Gets the location of the object relative to the parent in the form
                 * of a point specifying the object's top-left corner in the screen's
                 * coordinate space.
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point;
                /**
                 * Sets the location of the object relative to the parent.
                 */
                // @ts-ignore
                public setLocation(p: java.awt.Point): void;
                /**
                 * Gets the bounds of this object in the form of a
                 * <code>Rectangle</code> object.
                 * The bounds specify this object's width, height, and location
                 * relative to its parent.
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Sets the bounds of this object in the form of a
                 * <code>Rectangle</code> object.
                 * The bounds specify this object's width, height, and location
                 * relative to its parent.
                 */
                // @ts-ignore
                public setBounds(r: java.awt.Rectangle): void;
                /**
                 * Returns the size of this object in the form of a
                 * <code>Dimension</code> object. The height field of
                 * the <code>Dimension</code> object contains this object's
                 * height, and the width field of the <code>Dimension</code>
                 * object contains this object's width.
                 */
                // @ts-ignore
                public getSize(): java.awt.Dimension;
                /**
                 * Resizes this object.
                 */
                // @ts-ignore
                public setSize(d: java.awt.Dimension): void;
                /**
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 * If there is no <code>Accessible</code> child, <code>null</code>
                 * is returned.
                 */
                // @ts-ignore
                public getAccessibleAt(p: java.awt.Point): any /*javax.accessibility.Accessible*/;
                /**
                 * Returns whether this object can accept focus or not.
                 */
                // @ts-ignore
                public isFocusTraversable(): boolean;
                /**
                 * Requests focus for this object.
                 */
                // @ts-ignore
                public requestFocus(): void;
                /**
                 * Adds the specified focus listener to receive focus events from this
                 * component.
                 */
                // @ts-ignore
                public addFocusListener(l: java.awt.event.FocusListener): void;
                /**
                 * Removes the specified focus listener so it no longer receives focus
                 * events from this component.
                 */
                // @ts-ignore
                public removeFocusListener(l: java.awt.event.FocusListener): void;
                /**
                 * Returns the number of <code>Accessible</code> children currently selected.
                 * If no children are selected, the return value will be 0.
                 */
                // @ts-ignore
                public getAccessibleSelectionCount(): number;
                /**
                 * Returns an <code>Accessible</code> representing the specified
                 * selected child in the object.  If there isn't a selection, or there are
                 * fewer children selected than the integer passed in, the return
                 * value will be <code>null</code>.
                 * <p>Note that the index represents the i-th selected child, which
                 * is different from the i-th child.
                 */
                // @ts-ignore
                public getAccessibleSelection(i: number): any /*javax.accessibility.Accessible*/;
                /**
                 * Determines if the current child of this object is selected.
                 */
                // @ts-ignore
                public isAccessibleChildSelected(i: number): boolean;
                /**
                 * Adds the specified <code>Accessible</code> child of the object
                 * to the object's selection.  If the object supports multiple selections,
                 * the specified child is added to any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified child is already selected, this method has no effect.
                 */
                // @ts-ignore
                public addAccessibleSelection(i: number): void;
                /**
                 * Removes the specified child of the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 */
                // @ts-ignore
                public removeAccessibleSelection(i: number): void;
                /**
                 * Clears the selection in the object, so that no children in the
                 * object are selected.
                 */
                // @ts-ignore
                public clearAccessibleSelection(): void;
                /**
                 * Causes every child of the object to be selected
                 * if the object supports multiple selections.
                 */
                // @ts-ignore
                public selectAllAccessibleSelection(): void;
            }
        }
    }
}
