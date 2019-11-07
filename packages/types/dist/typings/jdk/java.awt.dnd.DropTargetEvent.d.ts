// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DropTargetEvent extends java.util.EventObject {
                /**
                 * Construct a <code>DropTargetEvent</code> object with
                 * the specified <code>DropTargetContext</code>.
                 * <P>
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext)
                // @ts-ignore
                protected context: java.awt.dnd.DropTargetContext;
                /**
                 * This method returns the <code>DropTargetContext</code>
                 * associated with this <code>DropTargetEvent</code>.
                 * <P>
                 */
                // @ts-ignore
                public getDropTargetContext(): java.awt.dnd.DropTargetContext;
            }
        }
    }
}
