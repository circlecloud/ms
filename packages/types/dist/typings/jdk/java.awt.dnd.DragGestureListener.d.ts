declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            interface DragGestureListener {
                /**
                 * This method is invoked by the {@code DragGestureRecognizer}
                 * when the {@code DragGestureRecognizer} detects a platform-dependent
                 * drag initiating gesture. To initiate the drag and drop operation,
                 * if appropriate, {@link DragGestureEvent#startDrag startDrag()} method on
                 * the {@code DragGestureEvent} has to be invoked.
                 * <P>
                 */
                // @ts-ignore
                 dragGestureRecognized(dge: java.awt.dnd.DragGestureEvent): void;
            }
        }
    }
}
