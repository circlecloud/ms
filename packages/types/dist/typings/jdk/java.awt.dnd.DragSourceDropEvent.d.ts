// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragSourceDropEvent extends java.awt.dnd.DragSourceEvent {
                /**
                 * Construct a <code>DragSourceDropEvent</code> for a drop,
                 * given the
                 * <code>DragSourceContext</code>, the drop action,
                 * and a <code>boolean</code> indicating if the drop was successful.
                 * The coordinates for this <code>DragSourceDropEvent</code>
                 * are not specified, so <code>getLocation</code> will return
                 * <code>null</code> for this event.
                 * <p>
                 * The argument <code>action</code> should be one of <code>DnDConstants</code>
                 * that represents a single action.
                 * This constructor does not throw any exception for invalid <code>action</code>.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, action: number, success: boolean)
                /**
                 * Construct a <code>DragSourceDropEvent</code> for a drop, given the
                 * <code>DragSourceContext</code>, the drop action, a <code>boolean</code>
                 * indicating if the drop was successful, and coordinates.
                 * <p>
                 * The argument <code>action</code> should be one of <code>DnDConstants</code>
                 * that represents a single action.
                 * This constructor does not throw any exception for invalid <code>action</code>.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, action: number, success: boolean, x: number, y: number)
                /**
                 * Construct a <code>DragSourceDropEvent</code>
                 * for a drag that does not result in a drop.
                 * The coordinates for this <code>DragSourceDropEvent</code>
                 * are not specified, so <code>getLocation</code> will return
                 * <code>null</code> for this event.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext)
                /**
                 * This method returns a <code>boolean</code> indicating
                 * if the drop was successful.
                 */
                // @ts-ignore
                public getDropSuccess(): boolean;
                /**
                 * This method returns an <code>int</code> representing
                 * the action performed by the target on the subject of the drop.
                 */
                // @ts-ignore
                public getDropAction(): number;
            }
        }
    }
}
