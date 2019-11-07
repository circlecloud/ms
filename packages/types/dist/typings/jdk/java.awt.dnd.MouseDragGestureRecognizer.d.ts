// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            abstract class MouseDragGestureRecognizer extends java.awt.dnd.DragGestureRecognizer {
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the
                 * <code>Component</code> c, the <code>Component</code>
                 * to observe, the action(s)
                 * permitted for this drag operation, and
                 * the <code>DragGestureListener</code> to
                 * notify when a drag gesture is detected.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, act: number, dgl: java.awt.dnd.DragGestureListener)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for
                 * the <code>Component</code> c,
                 * the <code>Component</code> to observe, and the action(s)
                 * permitted for this drag operation.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, act: number)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the
                 * <code>Component</code> c, and the
                 * <code>Component</code> to observe.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the <code>Component</code>.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource)
                /**
                 * register this DragGestureRecognizer's Listeners with the Component
                 */
                // @ts-ignore
                protected registerListeners(): void;
                /**
                 * unregister this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                protected unregisterListeners(): void;
                /**
                 * Invoked when the mouse has been clicked on a component.
                 * <P>
                 */
                // @ts-ignore
                public mouseClicked(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when a mouse button has been
                 * pressed on a <code>Component</code>.
                 * <P>
                 */
                // @ts-ignore
                public mousePressed(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when a mouse button has been released on a component.
                 * <P>
                 */
                // @ts-ignore
                public mouseReleased(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse enters a component.
                 * <P>
                 */
                // @ts-ignore
                public mouseEntered(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse exits a component.
                 * <P>
                 */
                // @ts-ignore
                public mouseExited(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when a mouse button is pressed on a component.
                 * <P>
                 */
                // @ts-ignore
                public mouseDragged(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse button has been moved on a component
                 * (with no buttons no down).
                 * <P>
                 */
                // @ts-ignore
                public mouseMoved(e: java.awt.event.MouseEvent): void;
            }
        }
    }
}
