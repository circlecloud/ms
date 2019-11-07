declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            abstract class DragSourceAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Called as the cursor's hotspot enters a platform-dependent drop site.
                 * This method is invoked when all the following conditions are true:
                 * <UL>
                 * <LI>The cursor's hotspot enters the operable part of
                 * a platform-dependent drop site.
                 * <LI>The drop site is active.
                 * <LI>The drop site accepts the drag.
                 * </UL>
                 */
                // @ts-ignore
                public dragEnter(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Called as the cursor's hotspot moves over a platform-dependent drop site.
                 * This method is invoked when all the following conditions are true:
                 * <UL>
                 * <LI>The cursor's hotspot has moved, but still intersects the
                 * operable part of the drop site associated with the previous
                 * dragEnter() invocation.
                 * <LI>The drop site is still active.
                 * <LI>The drop site accepts the drag.
                 * </UL>
                 */
                // @ts-ignore
                public dragOver(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Called whenever the mouse is moved during a drag operation.
                 */
                // @ts-ignore
                public dragMouseMoved(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Called when the user has modified the drop gesture.
                 * This method is invoked when the state of the input
                 * device(s) that the user is interacting with changes.
                 * Such devices are typically the mouse buttons or keyboard
                 * modifiers that the user is interacting with.
                 */
                // @ts-ignore
                public dropActionChanged(dsde: java.awt.dnd.DragSourceDragEvent): void;
                /**
                 * Called as the cursor's hotspot exits a platform-dependent drop site.
                 * This method is invoked when any of the following conditions are true:
                 * <UL>
                 * <LI>The cursor's hotspot no longer intersects the operable part
                 * of the drop site associated with the previous dragEnter() invocation.
                 * </UL>
                 * OR
                 * <UL>
                 * <LI>The drop site associated with the previous dragEnter() invocation
                 * is no longer active.
                 * </UL>
                 * OR
                 * <UL>
                 * <LI> The drop site associated with the previous dragEnter() invocation
                 * has rejected the drag.
                 * </UL>
                 */
                // @ts-ignore
                public dragExit(dse: java.awt.dnd.DragSourceEvent): void;
                /**
                 * This method is invoked to signify that the Drag and Drop
                 * operation is complete. The getDropSuccess() method of
                 * the <code>DragSourceDropEvent</code> can be used to
                 * determine the termination state. The getDropAction() method
                 * returns the operation that the drop site selected
                 * to apply to the Drop operation. Once this method is complete, the
                 * current <code>DragSourceContext</code> and
                 * associated resources become invalid.
                 */
                // @ts-ignore
                public dragDropEnd(dsde: java.awt.dnd.DragSourceDropEvent): void;
            }
        }
    }
}
