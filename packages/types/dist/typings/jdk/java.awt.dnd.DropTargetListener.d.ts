declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            interface DropTargetListener {
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer enters
                 * the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 */
                // @ts-ignore
                 dragEnter(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called when a drag operation is ongoing, while the mouse pointer is still
                 * over the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 */
                // @ts-ignore
                 dragOver(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called if the user has modified
                 * the current drop gesture.
                 * <P>
                 */
                // @ts-ignore
                 dropActionChanged(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer has
                 * exited the operable part of the drop site for the
                 * <code>DropTarget</code> registered with this listener.
                 */
                // @ts-ignore
                 dragExit(dte: java.awt.dnd.DropTargetEvent): void;
                /**
                 * Called when the drag operation has terminated with a drop on
                 * the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 * <p>
                 * This method is responsible for undertaking
                 * the transfer of the data associated with the
                 * gesture. The <code>DropTargetDropEvent</code>
                 * provides a means to obtain a <code>Transferable</code>
                 * object that represents the data object(s) to
                 * be transfered.<P>
                 * From this method, the <code>DropTargetListener</code>
                 * shall accept or reject the drop via the
                 * acceptDrop(int dropAction) or rejectDrop() methods of the
                 * <code>DropTargetDropEvent</code> parameter.
                 * <P>
                 * Subsequent to acceptDrop(), but not before,
                 * <code>DropTargetDropEvent</code>'s getTransferable()
                 * method may be invoked, and data transfer may be
                 * performed via the returned <code>Transferable</code>'s
                 * getTransferData() method.
                 * <P>
                 * At the completion of a drop, an implementation
                 * of this method is required to signal the success/failure
                 * of the drop by passing an appropriate
                 * <code>boolean</code> to the <code>DropTargetDropEvent</code>'s
                 * dropComplete(boolean success) method.
                 * <P>
                 * Note: The data transfer should be completed before the call  to the
                 * <code>DropTargetDropEvent</code>'s dropComplete(boolean success) method.
                 * After that, a call to the getTransferData() method of the
                 * <code>Transferable</code> returned by
                 * <code>DropTargetDropEvent.getTransferable()</code> is guaranteed to
                 * succeed only if the data transfer is local; that is, only if
                 * <code>DropTargetDropEvent.isLocalTransfer()</code> returns
                 * <code>true</code>. Otherwise, the behavior of the call is
                 * implementation-dependent.
                 * <P>
                 */
                // @ts-ignore
                 drop(dtde: java.awt.dnd.DropTargetDropEvent): void;
            }
        }
    }
}
