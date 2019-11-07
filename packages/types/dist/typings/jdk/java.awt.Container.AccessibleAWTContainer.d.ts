declare namespace java {
    namespace awt {
        namespace Container {
            // @ts-ignore
            protected class AccessibleAWTContainer extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected accessibleContainerHandler: java.awt.event.ContainerListener;
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
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 */
                // @ts-ignore
                public getAccessibleAt(p: java.awt.Point): any /*javax.accessibility.Accessible*/;
                /**
                 * Adds a PropertyChangeListener to the listener list.
                 */
                // @ts-ignore
                public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
                /**
                 * Remove a PropertyChangeListener from the listener list.
                 * This removes a PropertyChangeListener that was registered
                 * for all properties.
                 */
                // @ts-ignore
                public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            }
        }
    }
}
