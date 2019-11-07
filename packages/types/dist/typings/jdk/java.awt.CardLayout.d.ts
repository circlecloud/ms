// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class CardLayout extends java.lang.Object {
            /**
             * Creates a new card layout with gaps of size zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new card layout with the specified horizontal and
             * vertical gaps. The horizontal gaps are placed at the left and
             * right edges. The vertical gaps are placed at the top and bottom
             * edges.
             */
            // @ts-ignore
            constructor(hgap: number, vgap: number)
            /**
             * Gets the horizontal gap between components.
             */
            // @ts-ignore
            public getHgap(): number;
            /**
             * Sets the horizontal gap between components.
             */
            // @ts-ignore
            public setHgap(hgap: number): void;
            /**
             * Gets the vertical gap between components.
             */
            // @ts-ignore
            public getVgap(): number;
            /**
             * Sets the vertical gap between components.
             */
            // @ts-ignore
            public setVgap(vgap: number): void;
            /**
             * Adds the specified component to this card layout's internal
             * table of names. The object specified by <code>constraints</code>
             * must be a string. The card layout stores this string as a key-value
             * pair that can be used for random access to a particular card.
             * By calling the <code>show</code> method, an application can
             * display the component with the specified name.
             */
            // @ts-ignore
            public addLayoutComponent(comp: java.awt.Component, constraints: java.lang.Object): void;
            // @ts-ignore
            public addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Removes the specified component from the layout.
             * If the card was visible on top, the next card underneath it is shown.
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Determines the preferred size of the container argument using
             * this card layout.
             */
            // @ts-ignore
            public preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Calculates the minimum size for the specified panel.
             */
            // @ts-ignore
            public minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension;
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
             * Lays out the specified container using this card layout.
             * <p>
             * Each component in the <code>parent</code> container is reshaped
             * to be the size of the container, minus space for surrounding
             * insets, horizontal gaps, and vertical gaps.
             */
            // @ts-ignore
            public layoutContainer(parent: java.awt.Container): void;
            /**
             * Flips to the first card of the container.
             */
            // @ts-ignore
            public first(parent: java.awt.Container): void;
            /**
             * Flips to the next card of the specified container. If the
             * currently visible card is the last one, this method flips to the
             * first card in the layout.
             */
            // @ts-ignore
            public next(parent: java.awt.Container): void;
            /**
             * Flips to the previous card of the specified container. If the
             * currently visible card is the first one, this method flips to the
             * last card in the layout.
             */
            // @ts-ignore
            public previous(parent: java.awt.Container): void;
            /**
             * Flips to the last card of the container.
             */
            // @ts-ignore
            public last(parent: java.awt.Container): void;
            /**
             * Flips to the component that was added to this layout with the
             * specified <code>name</code>, using <code>addLayoutComponent</code>.
             * If no such component exists, then nothing happens.
             */
            // @ts-ignore
            public show(parent: java.awt.Container, name: string): void;
            /**
             * Returns a string representation of the state of this card layout.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
