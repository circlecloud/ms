declare namespace java {
    namespace awt {
        // @ts-ignore
         class GridLayout extends java.lang.Object {
            /**
             * Creates a grid layout with a default of one column per component,
             * in a single row.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a grid layout with the specified number of rows and
             * columns. All components in the layout are given equal size.
             * <p>
             * One, but not both, of <code>rows</code> and <code>cols</code> can
             * be zero, which means that any number of objects can be placed in a
             * row or in a column.
             */
            // @ts-ignore
            constructor(rows: number, cols: number)
            /**
             * Creates a grid layout with the specified number of rows and
             * columns. All components in the layout are given equal size.
             * <p>
             * In addition, the horizontal and vertical gaps are set to the
             * specified values. Horizontal gaps are placed between each
             * of the columns. Vertical gaps are placed between each of
             * the rows.
             * <p>
             * One, but not both, of <code>rows</code> and <code>cols</code> can
             * be zero, which means that any number of objects can be placed in a
             * row or in a column.
             * <p>
             * All <code>GridLayout</code> constructors defer to this one.
             */
            // @ts-ignore
            constructor(rows: number, cols: number, hgap: number, vgap: number)
            /**
             * Gets the number of rows in this layout.
             */
            // @ts-ignore
            public getRows(): number;
            /**
             * Sets the number of rows in this layout to the specified value.
             */
            // @ts-ignore
            public setRows(rows: number): void;
            /**
             * Gets the number of columns in this layout.
             */
            // @ts-ignore
            public getColumns(): number;
            /**
             * Sets the number of columns in this layout to the specified value.
             * Setting the number of columns has no affect on the layout
             * if the number of rows specified by a constructor or by
             * the <tt>setRows</tt> method is non-zero. In that case, the number
             * of columns displayed in the layout is determined by the total
             * number of components and the number of rows specified.
             */
            // @ts-ignore
            public setColumns(cols: number): void;
            /**
             * Gets the horizontal gap between components.
             */
            // @ts-ignore
            public getHgap(): number;
            /**
             * Sets the horizontal gap between components to the specified value.
             */
            // @ts-ignore
            public setHgap(hgap: number): void;
            /**
             * Gets the vertical gap between components.
             */
            // @ts-ignore
            public getVgap(): number;
            /**
             * Sets the vertical gap between components to the specified value.
             */
            // @ts-ignore
            public setVgap(vgap: number): void;
            /**
             * Adds the specified component with the specified name to the layout.
             */
            // @ts-ignore
            public addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Removes the specified component from the layout.
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Determines the preferred size of the container argument using
             * this grid layout.
             * <p>
             * The preferred width of a grid layout is the largest preferred
             * width of all of the components in the container times the number of
             * columns, plus the horizontal padding times the number of columns
             * minus one, plus the left and right insets of the target container.
             * <p>
             * The preferred height of a grid layout is the largest preferred
             * height of all of the components in the container times the number of
             * rows, plus the vertical padding times the number of rows minus one,
             * plus the top and bottom insets of the target container.
             */
            // @ts-ignore
            public preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Determines the minimum size of the container argument using this
             * grid layout.
             * <p>
             * The minimum width of a grid layout is the largest minimum width
             * of all of the components in the container times the number of columns,
             * plus the horizontal padding times the number of columns minus one,
             * plus the left and right insets of the target container.
             * <p>
             * The minimum height of a grid layout is the largest minimum height
             * of all of the components in the container times the number of rows,
             * plus the vertical padding times the number of rows minus one, plus
             * the top and bottom insets of the target container.
             */
            // @ts-ignore
            public minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Lays out the specified container using this layout.
             * <p>
             * This method reshapes the components in the specified target
             * container in order to satisfy the constraints of the
             * <code>GridLayout</code> object.
             * <p>
             * The grid layout manager determines the size of individual
             * components by dividing the free space in the container into
             * equal-sized portions according to the number of rows and columns
             * in the layout. The container's free space equals the container's
             * size minus any insets and any specified horizontal or vertical
             * gap. All components in a grid layout are given the same size.
             */
            // @ts-ignore
            public layoutContainer(parent: java.awt.Container): void;
            /**
             * Returns the string representation of this grid layout's values.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
