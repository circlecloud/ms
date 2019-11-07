// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            abstract class DropTargetAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer enters
                 * the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 */
                // @ts-ignore
                public dragEnter(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called when a drag operation is ongoing, while the mouse pointer is still
                 * over the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 */
                // @ts-ignore
                public dragOver(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called if the user has modified
                 * the current drop gesture.
                 */
                // @ts-ignore
                public dropActionChanged(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer has
                 * exited the operable part of the drop site for the
                 * <code>DropTarget</code> registered with this listener.
                 */
                // @ts-ignore
                public dragExit(dte: java.awt.dnd.DropTargetEvent): void;
            }
        }
    }
}
