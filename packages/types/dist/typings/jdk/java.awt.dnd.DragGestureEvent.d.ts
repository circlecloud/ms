declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragGestureEvent extends java.util.EventObject {
                /**
                 * Constructs a <code>DragGestureEvent</code> object given by the
                 * <code>DragGestureRecognizer</code> instance firing this event,
                 * an {@code act} parameter representing
                 * the user's preferred action, an {@code ori} parameter
                 * indicating the origin of the drag, and a {@code List} of
                 * events that comprise the gesture({@code evs} parameter).
                 * <P>
                 */
                // @ts-ignore
                constructor(dgr: java.awt.dnd.DragGestureRecognizer, act: number, ori: java.awt.Point, evs: java.util.List)
                /**
                 * Returns the source as a <code>DragGestureRecognizer</code>.
                 * <P>
                 */
                // @ts-ignore
                public getSourceAsDragGestureRecognizer(): java.awt.dnd.DragGestureRecognizer;
                /**
                 * Returns the <code>Component</code> associated
                 * with this <code>DragGestureEvent</code>.
                 * <P>
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * Returns the <code>DragSource</code>.
                 * <P>
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource;
                /**
                 * Returns a <code>Point</code> in the coordinates
                 * of the <code>Component</code> over which the drag originated.
                 * <P>
                 */
                // @ts-ignore
                public getDragOrigin(): java.awt.Point;
                /**
                 * Returns an <code>Iterator</code> for the events
                 * comprising the gesture.
                 * <P>
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns an <code>Object</code> array of the
                 * events comprising the drag gesture.
                 * <P>
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Returns an array of the events comprising the drag gesture.
                 * <P>
                 */
                // @ts-ignore
                public toArray(array: java.lang.Object): java.lang.Object[];
                /**
                 * Returns an <code>int</code> representing the
                 * action selected by the user.
                 * <P>
                 */
                // @ts-ignore
                public getDragAction(): number;
                /**
                 * Returns the initial event that triggered the gesture.
                 * <P>
                 */
                // @ts-ignore
                public getTriggerEvent(): java.awt.event.InputEvent;
                /**
                 * Starts the drag operation given the <code>Cursor</code> for this drag
                 * operation and the <code>Transferable</code> representing the source data
                 * for this drag operation.
                 * <br>
                 * If a <code>null</code> <code>Cursor</code> is specified no exception will
                 * be thrown and default drag cursors will be used instead.
                 * <br>
                 * If a <code>null</code> <code>Transferable</code> is specified
                 * <code>NullPointerException</code> will be thrown.
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable): void;
                /**
                 * Starts the drag given the initial <code>Cursor</code> to display,
                 * the <code>Transferable</code> object,
                 * and the <code>DragSourceListener</code> to use.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Start the drag given the initial <code>Cursor</code> to display,
                 * a drag <code>Image</code>, the offset of
                 * the <code>Image</code>,
                 * the <code>Transferable</code> object, and
                 * the <code>DragSourceListener</code> to use.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void;
            }
        }
    }
}
