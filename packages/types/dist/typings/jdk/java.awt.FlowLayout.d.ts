// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class FlowLayout extends java.lang.Object {
            /**
             * Constructs a new <code>FlowLayout</code> with a centered alignment and a
             * default 5-unit horizontal and vertical gap.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>FlowLayout</code> with the specified
             * alignment and a default 5-unit horizontal and vertical gap.
             * The value of the alignment argument must be one of
             * <code>FlowLayout.LEFT</code>, <code>FlowLayout.RIGHT</code>,
             * <code>FlowLayout.CENTER</code>, <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             */
            // @ts-ignore
            constructor(align: number)
            /**
             * Creates a new flow layout manager with the indicated alignment
             * and the indicated horizontal and vertical gaps.
             * <p>
             * The value of the alignment argument must be one of
             * <code>FlowLayout.LEFT</code>, <code>FlowLayout.RIGHT</code>,
             * <code>FlowLayout.CENTER</code>, <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             */
            // @ts-ignore
            constructor(align: number, hgap: number, vgap: number)
            // @ts-ignore
            public static LEFT: number;
            // @ts-ignore
            public static CENTER: number;
            // @ts-ignore
            public static RIGHT: number;
            // @ts-ignore
            public static LEADING: number;
            // @ts-ignore
            public static TRAILING: number;
            /**
             * Gets the alignment for this layout.
             * Possible values are <code>FlowLayout.LEFT</code>,
             * <code>FlowLayout.RIGHT</code>, <code>FlowLayout.CENTER</code>,
             * <code>FlowLayout.LEADING</code>,
             * or <code>FlowLayout.TRAILING</code>.
             */
            // @ts-ignore
            public getAlignment(): number;
            /**
             * Sets the alignment for this layout.
             * Possible values are
             * <ul>
             * <li><code>FlowLayout.LEFT</code>
             * <li><code>FlowLayout.RIGHT</code>
             * <li><code>FlowLayout.CENTER</code>
             * <li><code>FlowLayout.LEADING</code>
             * <li><code>FlowLayout.TRAILING</code>
             * </ul>
             */
            // @ts-ignore
            public setAlignment(align: number): void;
            /**
             * Gets the horizontal gap between components
             * and between the components and the borders
             * of the <code>Container</code>
             */
            // @ts-ignore
            public getHgap(): number;
            /**
             * Sets the horizontal gap between components and
             * between the components and the borders of the
             * <code>Container</code>.
             */
            // @ts-ignore
            public setHgap(hgap: number): void;
            /**
             * Gets the vertical gap between components and
             * between the components and the borders of the
             * <code>Container</code>.
             */
            // @ts-ignore
            public getVgap(): number;
            /**
             * Sets the vertical gap between components and between
             * the components and the borders of the <code>Container</code>.
             */
            // @ts-ignore
            public setVgap(vgap: number): void;
            /**
             * Sets whether or not components should be vertically aligned along their
             * baseline.  Components that do not have a baseline will be centered.
             * The default is false.
             */
            // @ts-ignore
            public setAlignOnBaseline(alignOnBaseline: boolean): void;
            /**
             * Returns true if components are to be vertically aligned along
             * their baseline.  The default is false.
             */
            // @ts-ignore
            public getAlignOnBaseline(): boolean;
            /**
             * Adds the specified component to the layout.
             * Not used by this class.
             */
            // @ts-ignore
            public addLayoutComponent(name: string, comp: java.awt.Component): void;
            /**
             * Removes the specified component from the layout.
             * Not used by this class.
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void;
            /**
             * Returns the preferred dimensions for this layout given the
             * <i>visible</i> components in the specified target container.
             */
            // @ts-ignore
            public preferredLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Returns the minimum dimensions needed to layout the <i>visible</i>
             * components contained in the specified target container.
             */
            // @ts-ignore
            public minimumLayoutSize(target: java.awt.Container): java.awt.Dimension;
            /**
             * Lays out the container. This method lets each
             * <i>visible</i> component take
             * its preferred size by reshaping the components in the
             * target container in order to satisfy the alignment of
             * this <code>FlowLayout</code> object.
             */
            // @ts-ignore
            public layoutContainer(target: java.awt.Container): void;
            /**
             * Returns a string representation of this <code>FlowLayout</code>
             * object and its values.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
