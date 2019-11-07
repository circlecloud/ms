// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class GridBagLayout extends java.lang.Object {
            /**
             * Creates a grid bag layout manager.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected static MAXGRIDSIZE: number;
            // @ts-ignore
            protected static MINSIZE: number;
            // @ts-ignore
            protected static PREFERREDSIZE: number;
            // @ts-ignore
            protected comptable: java.util.Hashtable;
            // @ts-ignore
            protected defaultConstraints: java.awt.GridBagConstraints;
            // @ts-ignore
            protected layoutInfo: java.awt.GridBagLayoutInfo;
            // @ts-ignore
            public columnWidths: number[];
            // @ts-ignore
            public rowHeights: number[];
            // @ts-ignore
            public columnWeights: number[];
            // @ts-ignore
            public rowWeights: number[];
            /**
             * Sets the constraints for the specified component in this layout.
             */
            // @ts-ignore
            public setConstraints(comp: java.awt.Component, constraints: java.awt.GridBagConstraints): void;
            /**
             * Gets the constraints for the specified component.  A copy of
             * the actual <code>GridBagConstraints</code> object is returned.
             */
            // @ts-ignore
            public getConstraints(comp: java.awt.Component): java.awt.GridBagConstraints;
            /**
             * Retrieves the constraints for the specified component.
             * The return value is not a copy, but is the actual
             * <code>GridBagConstraints</code> object used by the layout mechanism.
             * <p>
             * If <code>comp</code> is not in the <code>GridBagLayout</code>,
             * a set of default <code>GridBagConstraints</code> are returned.
             * A <code>comp</code> value of <code>null</code> is invalid
             * and returns <code>null</code>.
             */
            // @ts-ignore
            protected lookupConstraints(comp: java.awt.Component): java.awt.GridBagConstraints;
            /**
             * Determines the origin of the layout area, in the graphics coordinate
             * space of the target container.  This value represents the pixel
             * coordinates of the top-left corner of the layout area regardless of
             * the <code>ComponentOrientation</code> value of the container.  This
             * is distinct from the grid origin given by the cell coordinates (0,0).
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public getLayoutOrigin(): java.awt.Point;
            /**
             * Determines column widths and row heights for the layout grid.
             * <p>
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public getLayoutDimensions(): number[][];
            /**
             * Determines the weights of the layout grid's columns and rows.
             * Weights are used to calculate how much a given column or row
             * stretches beyond its preferred size, if the layout has extra
             * room to fill.
             * <p>
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public getLayoutWeights(): double[][];
            /**
             * Determines which cell in the layout grid contains the point
             * specified by <code>(x,&nbsp;y)</code>. Each cell is identified
             * by its column index (ranging from 0 to the number of columns
             * minus 1) and its row index (ranging from 0 to the number of
             * rows minus 1).
             * <p>
             * If the <code>(x,&nbsp;y)</code> point lies
             * outside the grid, the following rules are used.
             * The column index is returned as zero if <code>x</code> lies to the
             * left of the layout for a left-to-right container or to the right of
             * the layout for a right-to-left container.  The column index is returned
             * as the number of columns if <code>x</code> lies
             * to the right of the layout in a left-to-right container or to the left
             * in a right-to-left container.
             * The row index is returned as zero if <code>y</code> lies above the
             * layout, and as the number of rows if <code>y</code> lies
             * below the layout.  The orientation of a container is determined by its
             * <code>ComponentOrientation</code> property.
             */
            // @ts-ignore
            public location(x: number, y: number): java.awt.Point;
            /**
             * Has no effect, since this layout manager does not use a per-component string.
             */
            // @ts-ignore
            public addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Adds the specified component to the layout, using the specified
             * <code>constraints</code> object.  Note that constraints
             * are mutable and are, therefore, cloned when cached.
             */
            // @ts-ignore
            public addLayoutComponent(comp: java.awt.Component, constraints: java.lang.Object): void;
            /**
             * Removes the specified component from this layout.
             * <p>
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Determines the preferred size of the <code>parent</code>
             * container using this grid bag layout.
             * <p>
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
            /**
             * Determines the minimum size of the <code>parent</code> container
             * using this grid bag layout.
             * <p>
             * Most applications do not call this method directly.
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
             * <p>
             */
            // @ts-ignore
            public getLayoutAlignmentX(parent: java.awt.Container): number;
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             * <p>
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
             * Lays out the specified container using this grid bag layout.
             * This method reshapes components in the specified container in
             * order to satisfy the constraints of this <code>GridBagLayout</code>
             * object.
             * <p>
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public layoutContainer(parent: java.awt.Container): void;
            /**
             * Returns a string representation of this grid bag layout's values.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Fills in an instance of <code>GridBagLayoutInfo</code> for the
             * current set of managed children. This requires three passes through the
             * set of children:
             * <ol>
             * <li>Figure out the dimensions of the layout grid.
             * <li>Determine which cells the components occupy.
             * <li>Distribute the weights and min sizes among the rows/columns.
             * </ol>
             * This also caches the minsizes for all the children when they are
             * first encountered (so subsequent loops don't need to ask again).
             * <p>
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             */
            // @ts-ignore
            protected getLayoutInfo(parent: java.awt.Container, sizeflag: number): java.awt.GridBagLayoutInfo;
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #getLayoutInfo(java.awt.Container, int) getLayoutInfo} instead.
             * This method is the same as <code>getLayoutInfo</code>;
             * refer to <code>getLayoutInfo</code> for details on parameters
             * and return value.
             */
            // @ts-ignore
            protected GetLayoutInfo(parent: java.awt.Container, sizeflag: number): java.awt.GridBagLayoutInfo;
            /**
             * Adjusts the x, y, width, and height fields to the correct
             * values depending on the constraint geometry and pads.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             */
            // @ts-ignore
            protected adjustForGravity(constraints: java.awt.GridBagConstraints, r: java.awt.Rectangle): void;
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #adjustForGravity(java.awt.GridBagConstraints, java.awt.Rectangle)
             * adjustForGravity} instead.
             * This method is the same as <code>adjustForGravity</code>;
             * refer to <code>adjustForGravity</code> for details
             * on parameters.
             */
            // @ts-ignore
            protected AdjustForGravity(constraints: java.awt.GridBagConstraints, r: java.awt.Rectangle): void;
            /**
             * Figures out the minimum size of the
             * master based on the information from <code>getLayoutInfo</code>.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             */
            // @ts-ignore
            protected getMinSize(parent: java.awt.Container, info: java.awt.GridBagLayoutInfo): java.awt.Dimension;
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #getMinSize(java.awt.Container, GridBagLayoutInfo) getMinSize} instead.
             * This method is the same as <code>getMinSize</code>;
             * refer to <code>getMinSize</code> for details on parameters
             * and return value.
             */
            // @ts-ignore
            protected GetMinSize(parent: java.awt.Container, info: java.awt.GridBagLayoutInfo): java.awt.Dimension;
            /**
             * Lays out the grid.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             */
            // @ts-ignore
            protected arrangeGrid(parent: java.awt.Container): void;
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #arrangeGrid(Container) arrangeGrid} instead.
             * This method is the same as <code>arrangeGrid</code>;
             * refer to <code>arrangeGrid</code> for details on the
             * parameter.
             */
            // @ts-ignore
            protected ArrangeGrid(parent: java.awt.Container): void;
        }
    }
}
