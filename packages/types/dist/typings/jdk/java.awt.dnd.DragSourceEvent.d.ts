declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragSourceEvent extends java.util.EventObject {
                /**
                 * Construct a <code>DragSourceEvent</code>
                 * given a specified <code>DragSourceContext</code>.
                 * The coordinates for this <code>DragSourceEvent</code>
                 * are not specified, so <code>getLocation</code> will return
                 * <code>null</code> for this event.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext)
                /**
                 * Construct a <code>DragSourceEvent</code> given a specified
                 * <code>DragSourceContext</code>, and coordinates of the cursor
                 * location.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, x: number, y: number)
                /**
                 * This method returns the <code>DragSourceContext</code> that
                 * originated the event.
                 * <P>
                 */
                // @ts-ignore
                public getDragSourceContext(): java.awt.dnd.DragSourceContext;
                /**
                 * This method returns a <code>Point</code> indicating the cursor
                 * location in screen coordinates at the moment this event occurred, or
                 * <code>null</code> if the cursor location is not specified for this
                 * event.
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point;
                /**
                 * This method returns the horizontal coordinate of the cursor location in
                 * screen coordinates at the moment this event occurred, or zero if the
                 * cursor location is not specified for this event.
                 */
                // @ts-ignore
                public getX(): number;
                /**
                 * This method returns the vertical coordinate of the cursor location in
                 * screen coordinates at the moment this event occurred, or zero if the
                 * cursor location is not specified for this event.
                 */
                // @ts-ignore
                public getY(): number;
            }
        }
    }
}
