// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DropTargetDropEvent extends java.awt.dnd.DropTargetEvent {
                /**
                 * Construct a <code>DropTargetDropEvent</code> given
                 * the <code>DropTargetContext</code> for this operation,
                 * the location of the drag <code>Cursor</code>'s
                 * hotspot in the <code>Component</code>'s coordinates,
                 * the currently
                 * selected user drop action, and the current set of
                 * actions supported by the source.
                 * By default, this constructor
                 * assumes that the target is not in the same virtual machine as
                 * the source; that is, {@link #isLocalTransfer()} will
                 * return <code>false</code>.
                 * <P>
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext, cursorLocn: java.awt.Point, dropAction: number, srcActions: number)
                /**
                 * Construct a <code>DropTargetEvent</code> given the
                 * <code>DropTargetContext</code> for this operation,
                 * the location of the drag <code>Cursor</code>'s hotspot
                 * in the <code>Component</code>'s
                 * coordinates, the currently selected user drop action,
                 * the current set of actions supported by the source,
                 * and a <code>boolean</code> indicating if the source is in the same JVM
                 * as the target.
                 * <P>
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext, cursorLocn: java.awt.Point, dropAction: number, srcActions: number, isLocal: boolean)
                /**
                 * This method returns a <code>Point</code>
                 * indicating the <code>Cursor</code>'s current
                 * location in the <code>Component</code>'s coordinates.
                 * <P>
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point;
                /**
                 * This method returns the current DataFlavors.
                 * <P>
                 */
                // @ts-ignore
                public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * This method returns the currently available
                 * <code>DataFlavor</code>s as a <code>java.util.List</code>.
                 * <P>
                 */
                // @ts-ignore
                public getCurrentDataFlavorsAsList(): java.util.List;
                /**
                 * This method returns a <code>boolean</code> indicating if the
                 * specified <code>DataFlavor</code> is available
                 * from the source.
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
                 * This method returns the <code>Transferable</code> object
                 * associated with the drop.
                 * <P>
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable;
                /**
                 * accept the drop, using the specified action.
                 * <P>
                 */
                // @ts-ignore
                public acceptDrop(dropAction: number): void;
                /**
                 * reject the Drop.
                 */
                // @ts-ignore
                public rejectDrop(): void;
                /**
                 * This method notifies the <code>DragSource</code>
                 * that the drop transfer(s) are completed.
                 * <P>
                 */
                // @ts-ignore
                public dropComplete(success: boolean): void;
                /**
                 * This method returns an <code>int</code> indicating if
                 * the source is in the same JVM as the target.
                 * <P>
                 */
                // @ts-ignore
                public isLocalTransfer(): boolean;
            }
        }
    }
}
