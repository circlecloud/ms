// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DropTargetDragEvent extends java.awt.dnd.DropTargetEvent {
                /**
                 * Construct a <code>DropTargetDragEvent</code> given the
                 * <code>DropTargetContext</code> for this operation,
                 * the location of the "Drag" <code>Cursor</code>'s hotspot
                 * in the <code>Component</code>'s coordinates, the
                 * user drop action, and the source drop actions.
                 * <P>
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext, cursorLocn: java.awt.Point, dropAction: number, srcActions: number)
                /**
                 * This method returns a <code>Point</code>
                 * indicating the <code>Cursor</code>'s current
                 * location within the <code>Component'</code>s
                 * coordinates.
                 * <P>
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point;
                /**
                 * This method returns the current <code>DataFlavor</code>s from the
                 * <code>DropTargetContext</code>.
                 * <P>
                 */
                // @ts-ignore
                public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * This method returns the current <code>DataFlavor</code>s
                 * as a <code>java.util.List</code>
                 * <P>
                 */
                // @ts-ignore
                public getCurrentDataFlavorsAsList(): java.util.List;
                /**
                 * This method returns a <code>boolean</code> indicating
                 * if the specified <code>DataFlavor</code> is supported.
                 * <P>
                 */
                // @ts-ignore
                public isDataFlavorSupported(df: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * This method returns the source drop actions.
                 */
                // @ts-ignore
                public getSourceActions(): number;
                /**
                 * This method returns the user drop action.
                 */
                // @ts-ignore
                public getDropAction(): number;
                /**
                 * This method returns the Transferable object that represents
                 * the data associated with the current drag operation.
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable;
                /**
                 * Accepts the drag.
                 * This method should be called from a
                 * <code>DropTargetListeners</code> <code>dragEnter</code>,
                 * <code>dragOver</code>, and <code>dropActionChanged</code>
                 * methods if the implementation wishes to accept an operation
                 * from the srcActions other than the one selected by
                 * the user as represented by the <code>dropAction</code>.
                 */
                // @ts-ignore
                public acceptDrag(dragOperation: number): void;
                /**
                 * Rejects the drag as a result of examining either the
                 * <code>dropAction</code> or the available <code>DataFlavor</code>
                 * types.
                 */
                // @ts-ignore
                public rejectDrag(): void;
            }
        }
    }
}
