// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ScrollPanePeer {
                /**
                 * Returns the height of the horizontal scroll bar.
                 */
                // @ts-ignore
                 getHScrollbarHeight(): number;
                /**
                 * Returns the width of the vertical scroll bar.
                 */
                // @ts-ignore
                 getVScrollbarWidth(): number;
                /**
                 * Sets the scroll position of the child.
                 */
                // @ts-ignore
                 setScrollPosition(x: number, y: number): void;
                /**
                 * Called when the child component changes its size.
                 */
                // @ts-ignore
                 childResized(w: number, h: number): void;
                /**
                 * Sets the unit increment of one of the scroll pane's adjustables.
                 */
                // @ts-ignore
                 setUnitIncrement(adj: java.awt.Adjustable, u: number): void;
                /**
                 * Sets the value for one of the scroll pane's adjustables.
                 */
                // @ts-ignore
                 setValue(adj: java.awt.Adjustable, v: number): void;
            }
        }
    }
}
