// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragSourceContext extends java.lang.Object {
                /**
                 * Called from <code>DragSource</code>, this constructor creates a new
                 * <code>DragSourceContext</code> given the
                 * <code>DragSourceContextPeer</code> for this Drag, the
                 * <code>DragGestureEvent</code> that triggered the Drag, the initial
                 * <code>Cursor</code> to use for the Drag, an (optional)
                 * <code>Image</code> to display while the Drag is taking place, the offset
                 * of the <code>Image</code> origin from the hotspot at the instant of the
                 * triggering event, the <code>Transferable</code> subject data, and the
                 * <code>DragSourceListener</code> to use during the Drag and Drop
                 * operation.
                 * <br>
                 * If <code>DragSourceContextPeer</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>DragGestureEvent</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>Cursor</code> is <code>null</code> no exception is thrown and
                 * the default drag cursor behavior is activated for this drag operation.
                 * <br>
                 * If <code>Image</code> is <code>null</code> no exception is thrown.
                 * <br>
                 * If <code>Image</code> is not <code>null</code> and the offset is
                 * <code>null</code> <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>Transferable</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>DragSourceListener</code> is <code>null</code> no exception
                 * is thrown.
                 */
                // @ts-ignore
                constructor(dscp: java.awt.dnd.peer.DragSourceContextPeer, trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, dragImage: java.awt.Image, offset: java.awt.Point, t: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener)
                // @ts-ignore
                protected static DEFAULT: number;
                // @ts-ignore
                protected static ENTER: number;
                // @ts-ignore
                protected static OVER: number;
                // @ts-ignore
                protected static CHANGED: number;
                /**
                 * Returns the <code>DragSource</code>
                 * that instantiated this <code>DragSourceContext</code>.
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource;
                /**
                 * Returns the <code>Component</code> associated with this
                 * <code>DragSourceContext</code>.
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * Returns the <code>DragGestureEvent</code>
                 * that initially triggered the drag.
                 */
                // @ts-ignore
                public getTrigger(): java.awt.dnd.DragGestureEvent;
                /**
                 * Returns a bitwise mask of <code>DnDConstants</code> that
                 * represent the set of drop actions supported by the drag source for the
                 * drag operation associated with this <code>DragSourceContext</code>.
                 */
                // @ts-ignore
                public getSourceActions(): number;
                /**
                 * Sets the cursor for this drag operation to the specified
                 * <code>Cursor</code>.  If the specified <code>Cursor</code>
                 * is <code>null</code>, the default drag cursor behavior is
                 * activated for this drag operation, otherwise it is deactivated.
                 */
                // @ts-ignore
                public setCursor(c: java.awt.Cursor): void;
                /**
                 * Returns the current drag <code>Cursor</code>.
                 * <P>
                 */
                // @ts-ignore
                public getCursor(): java.awt.Cursor;
                /**
                 * Add a <code>DragSourceListener</code> to this
                 * <code>DragSourceContext</code> if one has not already been added.
                 * If a <code>DragSourceListener</code> already exists,
                 * this method throws a <code>TooManyListenersException</code>.
                 * <P>
                 */
                // @ts-ignore
                public addDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Removes the specified <code>DragSourceListener</code>
                 * from  this <code>DragSourceContext</code>.
                 */
                // @ts-ignore
                public removeDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Notifies the peer that the <code>Transferable</code>'s
                 * <code>DataFlavor</code>s have changed.
                 */
                // @ts-ignore
                public transferablesFlavorsChanged(): void;
                /**
                 * Calls <code>dragEnter</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 */
                // @ts-ignore
                public dragEnter(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Calls <code>dragOver</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 */
                // @ts-ignore
                public dragOver(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Calls <code>dragExit</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceEvent</code>.
                 */
                // @ts-ignore
                public dragExit(dse: java.awt.dnd.DragSourceEvent): void;
                /**
                 * Calls <code>dropActionChanged</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 */
                // @ts-ignore
                public dropActionChanged(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Calls <code>dragDropEnd</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDropEvent</code>.
                 */
                // @ts-ignore
                public dragDropEnd(dsde: java.awt.dnd.DragSourceDropEvent): void;
                /**
                 * Calls <code>dragMouseMoved</code> on the
                 * <code>DragSourceMotionListener</code>s registered with the
                 * <code>DragSource</code> associated with this
                 * <code>DragSourceContext</code>, and them passes the specified
                 * <code>DragSourceDragEvent</code>.
                 */
                // @ts-ignore
                public dragMouseMoved(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Returns the <code>Transferable</code> associated with
                 * this <code>DragSourceContext</code>.
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable;
                /**
                 * If the default drag cursor behavior is active, this method
                 * sets the default drag cursor for the specified actions
                 * supported by the drag source, the drop target action,
                 * and status, otherwise this method does nothing.
                 */
                // @ts-ignore
                protected updateCurrentCursor(sourceAct: number, targetAct: number, status: number): void;
            }
        }
    }
}
