// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DropTargetContext extends java.lang.Object {
                /**
                 * This method returns the <code>DropTarget</code> associated with this
                 * <code>DropTargetContext</code>.
                 * <P>
                 */
                // @ts-ignore
                public getDropTarget(): java.awt.dnd.DropTarget;
                /**
                 * This method returns the <code>Component</code> associated with
                 * this <code>DropTargetContext</code>.
                 * <P>
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * Called when associated with the <code>DropTargetContextPeer</code>.
                 * <P>
                 */
                // @ts-ignore
                public addNotify(dtcp: java.awt.dnd.peer.DropTargetContextPeer): void;
                /**
                 * Called when disassociated with the <code>DropTargetContextPeer</code>.
                 */
                // @ts-ignore
                public removeNotify(): void;
                /**
                 * This method sets the current actions acceptable to
                 * this <code>DropTarget</code>.
                 * <P>
                 */
                // @ts-ignore
                protected setTargetActions(actions: number): void;
                /**
                 * This method returns an <code>int</code> representing the
                 * current actions this <code>DropTarget</code> will accept.
                 * <P>
                 */
                // @ts-ignore
                protected getTargetActions(): number;
                /**
                 * This method signals that the drop is completed and
                 * if it was successful or not.
                 * <P>
                 */
                // @ts-ignore
                public dropComplete(success: boolean): void;
                /**
                 * accept the Drag.
                 * <P>
                 */
                // @ts-ignore
                protected acceptDrag(dragOperation: number): void;
                /**
                 * reject the Drag.
                 */
                // @ts-ignore
                protected rejectDrag(): void;
                /**
                 * called to signal that the drop is acceptable
                 * using the specified operation.
                 * must be called during DropTargetListener.drop method invocation.
                 * <P>
                 */
                // @ts-ignore
                protected acceptDrop(dropOperation: number): void;
                /**
                 * called to signal that the drop is unacceptable.
                 * must be called during DropTargetListener.drop method invocation.
                 */
                // @ts-ignore
                protected rejectDrop(): void;
                /**
                 * get the available DataFlavors of the
                 * <code>Transferable</code> operand of this operation.
                 * <P>
                 */
                // @ts-ignore
                protected getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * This method returns a the currently available DataFlavors
                 * of the <code>Transferable</code> operand
                 * as a <code>java.util.List</code>.
                 * <P>
                 */
                // @ts-ignore
                protected getCurrentDataFlavorsAsList(): java.util.List;
                /**
                 * This method returns a <code>boolean</code>
                 * indicating if the given <code>DataFlavor</code> is
                 * supported by this <code>DropTargetContext</code>.
                 * <P>
                 */
                // @ts-ignore
                protected isDataFlavorSupported(df: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * get the Transferable (proxy) operand of this operation
                 * <P>
                 */
                // @ts-ignore
                protected getTransferable(): java.awt.datatransfer.Transferable;
                /**
                 * Creates a TransferableProxy to proxy for the specified
                 * Transferable.
                 */
                // @ts-ignore
                protected createTransferableProxy(t: java.awt.datatransfer.Transferable, local: boolean): java.awt.datatransfer.Transferable;
            }
        }
    }
}
