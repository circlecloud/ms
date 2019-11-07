declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class MouseMotionAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a mouse button is pressed on a component and then
                 * dragged.  Mouse drag events will continue to be delivered to
                 * the component where the first originated until the mouse button is
                 * released (regardless of whether the mouse position is within the
                 * bounds of the component).
                 */
                // @ts-ignore
                public mouseDragged(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse button has been moved on a component
                 * (with no buttons no down).
                 */
                // @ts-ignore
                public mouseMoved(e: java.awt.event.MouseEvent): void;
            }
        }
    }
}
