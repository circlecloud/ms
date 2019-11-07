declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DropTarget extends java.lang.Object {
                /**
                 * Creates a new DropTarget given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s) to
                 * support, a <code>DropTargetListener</code>
                 * to handle event processing, a <code>boolean</code> indicating
                 * if the <code>DropTarget</code> is currently accepting drops, and
                 * a <code>FlavorMap</code> to use (or null for the default <CODE>FlavorMap</CODE>).
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number, dtl: java.awt.dnd.DropTargetListener, act: boolean, fm: java.awt.datatransfer.FlavorMap)
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s)
                 * to support, a <code>DropTargetListener</code>
                 * to handle event processing, and a <code>boolean</code> indicating
                 * if the <code>DropTarget</code> is currently accepting drops.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number, dtl: java.awt.dnd.DropTargetListener, act: boolean)
                /**
                 * Creates a <code>DropTarget</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, and the <code>DropTargetListener</code>
                 * to handle event processing.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, dtl: java.awt.dnd.DropTargetListener)
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s) to support, and a
                 * <code>DropTargetListener</code> to handle event processing.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number, dtl: java.awt.dnd.DropTargetListener)
                /**
                 * Note: this interface is required to permit the safe association
                 * of a DropTarget with a Component in one of two ways, either:
                 * <code> component.setDropTarget(droptarget); </code>
                 * or <code> droptarget.setComponent(component); </code>
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 */
                // @ts-ignore
                public setComponent(c: java.awt.Component): void;
                /**
                 * Gets the <code>Component</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * Sets the default acceptable actions for this <code>DropTarget</code>
                 * <P>
                 */
                // @ts-ignore
                public setDefaultActions(ops: number): void;
                /**
                 * Gets an <code>int</code> representing the
                 * current action(s) supported by this <code>DropTarget</code>.
                 * <P>
                 */
                // @ts-ignore
                public getDefaultActions(): number;
                /**
                 * Sets the DropTarget active if <code>true</code>,
                 * inactive if <code>false</code>.
                 * <P>
                 */
                // @ts-ignore
                public setActive(isActive: boolean): void;
                /**
                 * Reports whether or not
                 * this <code>DropTarget</code>
                 * is currently active (ready to accept drops).
                 * <P>
                 */
                // @ts-ignore
                public isActive(): boolean;
                /**
                 * Adds a new <code>DropTargetListener</code> (UNICAST SOURCE).
                 * <P>
                 */
                // @ts-ignore
                public addDropTargetListener(dtl: java.awt.dnd.DropTargetListener): void;
                /**
                 * Removes the current <code>DropTargetListener</code> (UNICAST SOURCE).
                 * <P>
                 */
                // @ts-ignore
                public removeDropTargetListener(dtl: java.awt.dnd.DropTargetListener): void;
                /**
                 * Calls <code>dragEnter</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 */
                // @ts-ignore
                public dragEnter(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Calls <code>dragOver</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 */
                // @ts-ignore
                public dragOver(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Calls <code>dropActionChanged</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 */
                // @ts-ignore
                public dropActionChanged(dtde: java.awt.dnd.DropTargetDragEvent): void;
                /**
                 * Calls <code>dragExit</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 * <p>
                 * This method itself does not throw any exception
                 * for null parameter but for exceptions thrown by
                 * the respective method of the listener.
                 */
                // @ts-ignore
                public dragExit(dte: java.awt.dnd.DropTargetEvent): void;
                /**
                 * Calls <code>drop</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDropEvent</code>
                 * if this <code>DropTarget</code> is active.
                 */
                // @ts-ignore
                public drop(dtde: java.awt.dnd.DropTargetDropEvent): void;
                /**
                 * Gets the <code>FlavorMap</code>
                 * associated with this <code>DropTarget</code>.
                 * If no <code>FlavorMap</code> has been set for this
                 * <code>DropTarget</code>, it is associated with the default
                 * <code>FlavorMap</code>.
                 * <P>
                 */
                // @ts-ignore
                public getFlavorMap(): java.awt.datatransfer.FlavorMap;
                /**
                 * Sets the <code>FlavorMap</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 */
                // @ts-ignore
                public setFlavorMap(fm: java.awt.datatransfer.FlavorMap): void;
                /**
                 * Notify the DropTarget that it has been associated with a Component
                 * This method is usually called from java.awt.Component.addNotify() of
                 * the Component associated with this DropTarget to notify the DropTarget
                 * that a ComponentPeer has been associated with that Component.
                 * Calling this method, other than to notify this DropTarget of the
                 * association of the ComponentPeer with the Component may result in
                 * a malfunction of the DnD system.
                 * <P>
                 */
                // @ts-ignore
                public addNotify(peer: java.awt.peer.ComponentPeer): void;
                /**
                 * Notify the DropTarget that it has been disassociated from a Component
                 * This method is usually called from java.awt.Component.removeNotify() of
                 * the Component associated with this DropTarget to notify the DropTarget
                 * that a ComponentPeer has been disassociated with that Component.
                 * Calling this method, other than to notify this DropTarget of the
                 * disassociation of the ComponentPeer from the Component may result in
                 * a malfunction of the DnD system.
                 * <P>
                 */
                // @ts-ignore
                public removeNotify(peer: java.awt.peer.ComponentPeer): void;
                /**
                 * Gets the <code>DropTargetContext</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 */
                // @ts-ignore
                public getDropTargetContext(): java.awt.dnd.DropTargetContext;
                /**
                 * Creates the DropTargetContext associated with this DropTarget.
                 * Subclasses may override this method to instantiate their own
                 * DropTargetContext subclass.
                 * This call is typically *only* called by the platform's
                 * DropTargetContextPeer as a drag operation encounters this
                 * DropTarget. Accessing the Context while no Drag is current
                 * has undefined results.
                 */
                // @ts-ignore
                protected createDropTargetContext(): java.awt.dnd.DropTargetContext;
                /**
                 * create an embedded autoscroller
                 * <P>
                 */
                // @ts-ignore
                protected createDropTargetAutoScroller(c: java.awt.Component, p: java.awt.Point): java.awt.dnd.DropTarget.DropTargetAutoScroller;
                /**
                 * initialize autoscrolling
                 * <P>
                 */
                // @ts-ignore
                protected initializeAutoscrolling(p: java.awt.Point): void;
                /**
                 * update autoscrolling with current cursor location
                 * <P>
                 */
                // @ts-ignore
                protected updateAutoscroll(dragCursorLocn: java.awt.Point): void;
                /**
                 * clear autoscrolling
                 */
                // @ts-ignore
                protected clearAutoscroll(): void;
            }
        }
    }
}
