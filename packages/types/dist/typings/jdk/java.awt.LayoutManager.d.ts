declare namespace java {
    namespace awt {
        // @ts-ignore
        interface LayoutManager {
            /**
             * If the layout manager uses a per-component string,
             * adds the component <code>comp</code> to the layout,
             * associating it
             * with the string specified by <code>name</code>.
             */
            // @ts-ignore
             addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Removes the specified component from the layout.
             */
            // @ts-ignore
             removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Calculates the preferred size dimensions for the specified
             * container, given the components it contains.
             */
            // @ts-ignore
             preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Calculates the minimum size dimensions for the specified
             * container, given the components it contains.
             */
            // @ts-ignore
             minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Lays out the specified container.
             */
            // @ts-ignore
             layoutContainer(parent: java.awt.Container): void;
        }
    }
}
