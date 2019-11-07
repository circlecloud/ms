declare namespace java {
    namespace awt {
        // @ts-ignore
         class BorderLayout extends java.lang.Object {
            /**
             * Constructs a new border layout with
             * no gaps between components.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a border layout with the specified gaps
             * between components.
             * The horizontal gap is specified by <code>hgap</code>
             * and the vertical gap is specified by <code>vgap</code>.
             */
            // @ts-ignore
            constructor(hgap: number, vgap: number)
            // @ts-ignore
            public static NORTH: string;
            // @ts-ignore
            public static SOUTH: string;
            // @ts-ignore
            public static EAST: string;
            // @ts-ignore
            public static WEST: string;
            // @ts-ignore
            public static CENTER: string;
            // @ts-ignore
            public static BEFORE_FIRST_LINE: string;
            // @ts-ignore
            public static AFTER_LAST_LINE: string;
            // @ts-ignore
            public static BEFORE_LINE_BEGINS: string;
            // @ts-ignore
            public static AFTER_LINE_ENDS: string;
            // @ts-ignore
            public static PAGE_START: string;
            // @ts-ignore
            public static PAGE_END: string;
            // @ts-ignore
            public static LINE_START: string;
            // @ts-ignore
            public static LINE_END: string;
            /**
             * Returns the horizontal gap between components.
             */
            // @ts-ignore
            public getHgap(): number;
            /**
             * Sets the horizontal gap between components.
             */
            // @ts-ignore
            public setHgap(hgap: number): void;
            /**
             * Returns the vertical gap between components.
             */
            // @ts-ignore
            public getVgap(): number;
            /**
             * Sets the vertical gap between components.
             */
            // @ts-ignore
            public setVgap(vgap: number): void;
            /**
             * Adds the specified component to the layout, using the specified
             * constraint object.  For border layouts, the constraint must be
             * one of the following constants:  <code>NORTH</code>,
             * <code>SOUTH</code>, <code>EAST</code>,
             * <code>WEST</code>, or <code>CENTER</code>.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a component is added to a container using the
             * <code>Container.add</code> method with the same argument types.
             */
            // @ts-ignore
            public addLayoutComponent(comp: java.awt.Component, constraints: java.lang.Object): void;
            // @ts-ignore
            public addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Removes the specified component from this border layout. This
             * method is called when a container calls its <code>remove</code> or
             * <code>removeAll</code> methods. Most applications do not call this
             * method directly.
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Gets the component that was added using the given constraint
             */
            // @ts-ignore
            public getLayoutComponent(constraints: java.lang.Object): java.awt.Component;
            /**
             * Returns the component that corresponds to the given constraint location
             * based on the target <code>Container</code>'s component orientation.
             * Components added with the relative constraints <code>PAGE_START</code>,
             * <code>PAGE_END</code>, <code>LINE_START</code>, and <code>LINE_END</code>
             * take precedence over components added with the explicit constraints
             * <code>NORTH</code>, <code>SOUTH</code>, <code>WEST</code>, and <code>EAST</code>.
             * The <code>Container</code>'s component orientation is used to determine the location of components
             * added with <code>LINE_START</code> and <code>LINE_END</code>.
             */
            // @ts-ignore
            public getLayoutComponent(target: java.awt.Container, constraints: java.lang.Object): java.awt.Component;
            /**
             * Gets the constraints for the specified component
             */
            // @ts-ignore
            public getConstraints(comp: java.awt.Component): java.lang.Object;
            /**
             * Determines the minimum size of the <code>target</code> container
             * using this layout manager.
             * <p>
             * This method is called when a container calls its
             * <code>getMinimumSize</code> method. Most applications do not call
             * this method directly.
             */
            // @ts-ignore
            public minimumLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Determines the preferred size of the <code>target</code>
             * container using this layout manager, based on the components
             * in the container.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a container calls its <code>getPreferredSize</code>
             * method.
             */
            // @ts-ignore
            public preferredLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Returns the maximum dimensions for this layout given the components
             * in the specified target container.
             */
            // @ts-ignore
            public maximumLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getLayoutAlignmentX(parent: java.awt.Container): number;
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getLayoutAlignmentY(parent: java.awt.Container): number;
            /**
             * Invalidates the layout, indicating that if the layout manager
             * has cached information it should be discarded.
             */
            // @ts-ignore
            public invalidateLayout(target: java.awt.Container): void;
            /**
             * Lays out the container argument using this border layout.
             * <p>
             * This method actually reshapes the components in the specified
             * container in order to satisfy the constraints of this
             * <code>BorderLayout</code> object. The <code>NORTH</code>
             * and <code>SOUTH</code> components, if any, are placed at
             * the top and bottom of the container, respectively. The
             * <code>WEST</code> and <code>EAST</code> components are
             * then placed on the left and right, respectively. Finally,
             * the <code>CENTER</code> object is placed in any remaining
             * space in the middle.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a container calls its <code>doLayout</code> method.
             */
            // @ts-ignore
            public layoutContainer(target: java.awt.Container): void;
            /**
             * Returns a string representation of the state of this border layout.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
