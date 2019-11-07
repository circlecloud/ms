// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Panel extends java.awt.Container {
            /**
             * Creates a new panel using the default layout manager.
             * The default layout manager for all panels is the
             * <code>FlowLayout</code> class.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new panel with the specified layout manager.
             */
            // @ts-ignore
            constructor(layout: java.awt.LayoutManager)
            /**
             * Creates the Panel's peer.  The peer allows you to modify the
             * appearance of the panel without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the AccessibleContext associated with this Panel.
             * For panels, the AccessibleContext takes the form of an
             * AccessibleAWTPanel.
             * A new AccessibleAWTPanel instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
