declare namespace java {
    namespace awt {
        // @ts-ignore
         class PopupMenu extends java.awt.Menu {
            /**
             * Creates a new popup menu with an empty name.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new popup menu with the specified name.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getParent(): java.awt.MenuContainer;
            /**
             * Creates the popup menu's peer.
             * The peer allows us to change the appearance of the popup menu without
             * changing any of the popup menu's functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Shows the popup menu at the x, y position relative to an origin
             * component.
             * The origin component must be contained within the component
             * hierarchy of the popup menu's parent.  Both the origin and the parent
             * must be showing on the screen for this method to be valid.
             * <p>
             * If this <code>PopupMenu</code> is being used as a <code>Menu</code>
             * (i.e., it has a non-<code>Component</code> parent),
             * then you cannot call this method on the <code>PopupMenu</code>.
             */
            // @ts-ignore
            public show(origin: java.awt.Component, x: number, y: number): void;
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>PopupMenu</code>.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
