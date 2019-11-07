// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace List {
            // @ts-ignore
            protected class AccessibleAWTList extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public actionPerformed(event: java.awt.event.ActionEvent): void;
                // @ts-ignore
                public itemStateChanged(event: java.awt.event.ItemEvent): void;
                /**
                 * Get the state set of this object.
                 */
                // @ts-ignore
                public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
                /**
                 * Get the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                /**
                 * Returns the Accessible child contained at the local coordinate
                 * Point, if one exists.
                 */
                // @ts-ignore
                public getAccessibleAt(p: java.awt.Point): any /*javax.accessibility.Accessible*/;
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement Accessible, than this
                 * method should return the number of children of this object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number;
                /**
                 * Return the nth Accessible child of the object.
                 */
                // @ts-ignore
                public getAccessibleChild(i: number): any /*javax.accessibility.Accessible*/;
                /**
                 * Get the AccessibleSelection associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleSelection interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleSelection(): any /*javax.accessibility.AccessibleSelection*/;
                /**
                 * Returns the number of items currently selected.
                 * If no items are selected, the return value will be 0.
                 */
                // @ts-ignore
                public getAccessibleSelectionCount(): number;
                /**
                 * Returns an Accessible representing the specified selected item
                 * in the object.  If there isn't a selection, or there are
                 * fewer items selected than the integer passed in, the return
                 * value will be null.
                 */
                // @ts-ignore
                public getAccessibleSelection(i: number): any /*javax.accessibility.Accessible*/;
                /**
                 * Returns true if the current child of this object is selected.
                 */
                // @ts-ignore
                public isAccessibleChildSelected(i: number): boolean;
                /**
                 * Adds the specified selected item in the object to the object's
                 * selection.  If the object supports multiple selections,
                 * the specified item is added to any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified item is already selected, this method has no effect.
                 */
                // @ts-ignore
                public addAccessibleSelection(i: number): void;
                /**
                 * Removes the specified selected item in the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 */
                // @ts-ignore
                public removeAccessibleSelection(i: number): void;
                /**
                 * Clears the selection in the object, so that nothing in the
                 * object is selected.
                 */
                // @ts-ignore
                public clearAccessibleSelection(): void;
                /**
                 * Causes every selected item in the object to be selected
                 * if the object supports multiple selections.
                 */
                // @ts-ignore
                public selectAllAccessibleSelection(): void;
            }
        }
    }
}
