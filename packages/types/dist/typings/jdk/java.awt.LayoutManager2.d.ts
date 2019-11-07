// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        interface LayoutManager2 {
            /**
             * Adds the specified component to the layout, using the specified
             * constraint object.
             */
            // @ts-ignore
             addLayoutComponent(comp: java.awt.Component, constraints: java.lang.Object): void;
            /**
             * Calculates the maximum size dimensions for the specified container,
             * given the components it contains.
             */
            // @ts-ignore
             maximumLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
             getLayoutAlignmentX(target: java.awt.Container): number;
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
             getLayoutAlignmentY(target: java.awt.Container): number;
            /**
             * Invalidates the layout, indicating that if the layout manager
             * has cached information it should be discarded.
             */
            // @ts-ignore
             invalidateLayout(target: java.awt.Container): void;
        }
    }
}
