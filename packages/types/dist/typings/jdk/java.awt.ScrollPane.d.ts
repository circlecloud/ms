// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class ScrollPane extends java.awt.Container {
            /**
             * Create a new scrollpane container with a scrollbar display
             * policy of "as needed".
             */
            // @ts-ignore
            constructor()
            /**
             * Create a new scrollpane container.
             */
            // @ts-ignore
            constructor(scrollbarDisplayPolicy: number)
            // @ts-ignore
            public static SCROLLBARS_AS_NEEDED: number;
            // @ts-ignore
            public static SCROLLBARS_ALWAYS: number;
            // @ts-ignore
            public static SCROLLBARS_NEVER: number;
            /**
             * Adds the specified component to this scroll pane container.
             * If the scroll pane has an existing child component, that
             * component is removed and the new one is added.
             */
            // @ts-ignore
            protected addImpl(comp: java.awt.Component, constraints: java.lang.Object, index: number): void;
            /**
             * Returns the display policy for the scrollbars.
             */
            // @ts-ignore
            public getScrollbarDisplayPolicy(): number;
            /**
             * Returns the current size of the scroll pane's view port.
             */
            // @ts-ignore
            public getViewportSize(): java.awt.Dimension;
            /**
             * Returns the height that would be occupied by a horizontal
             * scrollbar, which is independent of whether it is currently
             * displayed by the scroll pane or not.
             */
            // @ts-ignore
            public getHScrollbarHeight(): number;
            /**
             * Returns the width that would be occupied by a vertical
             * scrollbar, which is independent of whether it is currently
             * displayed by the scroll pane or not.
             */
            // @ts-ignore
            public getVScrollbarWidth(): number;
            /**
             * Returns the <code>ScrollPaneAdjustable</code> object which
             * represents the state of the vertical scrollbar.
             * The declared return type of this method is
             * <code>Adjustable</code> to maintain backward compatibility.
             */
            // @ts-ignore
            public getVAdjustable(): java.awt.Adjustable;
            /**
             * Returns the <code>ScrollPaneAdjustable</code> object which
             * represents the state of the horizontal scrollbar.
             * The declared return type of this method is
             * <code>Adjustable</code> to maintain backward compatibility.
             */
            // @ts-ignore
            public getHAdjustable(): java.awt.Adjustable;
            /**
             * Scrolls to the specified position within the child component.
             * A call to this method is only valid if the scroll pane contains
             * a child.  Specifying a position outside of the legal scrolling bounds
             * of the child will scroll to the closest legal position.
             * Legal bounds are defined to be the rectangle:
             * x = 0, y = 0, width = (child width - view port width),
             * height = (child height - view port height).
             * This is a convenience method which interfaces with the Adjustable
             * objects which represent the state of the scrollbars.
             */
            // @ts-ignore
            public setScrollPosition(x: number, y: number): void;
            /**
             * Scrolls to the specified position within the child component.
             * A call to this method is only valid if the scroll pane contains
             * a child and the specified position is within legal scrolling bounds
             * of the child.  Specifying a position outside of the legal scrolling
             * bounds of the child will scroll to the closest legal position.
             * Legal bounds are defined to be the rectangle:
             * x = 0, y = 0, width = (child width - view port width),
             * height = (child height - view port height).
             * This is a convenience method which interfaces with the Adjustable
             * objects which represent the state of the scrollbars.
             */
            // @ts-ignore
            public setScrollPosition(p: java.awt.Point): void;
            /**
             * Returns the current x,y position within the child which is displayed
             * at the 0,0 location of the scrolled panel's view port.
             * This is a convenience method which interfaces with the adjustable
             * objects which represent the state of the scrollbars.
             */
            // @ts-ignore
            public getScrollPosition(): java.awt.Point;
            /**
             * Sets the layout manager for this container.  This method is
             * overridden to prevent the layout mgr from being set.
             */
            // @ts-ignore
            public setLayout(mgr: java.awt.LayoutManager): void;
            /**
             * Lays out this container by resizing its child to its preferred size.
             * If the new preferred size of the child causes the current scroll
             * position to be invalid, the scroll position is set to the closest
             * valid position.
             */
            // @ts-ignore
            public doLayout(): void;
            // @ts-ignore
            public layout(): void;
            /**
             * Prints the component in this scroll pane.
             */
            // @ts-ignore
            public printComponents(g: java.awt.Graphics): void;
            /**
             * Creates the scroll pane's peer.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Returns a string representing the state of this
             * <code>ScrollPane</code>. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
            /**
             * Process mouse wheel events that are delivered to this
             * <code>ScrollPane</code> by scrolling an appropriate amount.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processMouseWheelEvent(e: java.awt.event.MouseWheelEvent): void;
            /**
             * If wheel scrolling is enabled, we return true for MouseWheelEvents
             */
            // @ts-ignore
            protected eventTypeEnabled(type: number): boolean;
            /**
             * Enables/disables scrolling in response to movement of the mouse wheel.
             * Wheel scrolling is enabled by default.
             */
            // @ts-ignore
            public setWheelScrollingEnabled(handleWheel: boolean): void;
            /**
             * Indicates whether or not scrolling will take place in response to
             * the mouse wheel.  Wheel scrolling is enabled by default.
             */
            // @ts-ignore
            public isWheelScrollingEnabled(): boolean;
            /**
             * Gets the AccessibleContext associated with this ScrollPane.
             * For scroll panes, the AccessibleContext takes the form of an
             * AccessibleAWTScrollPane.
             * A new AccessibleAWTScrollPane instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
