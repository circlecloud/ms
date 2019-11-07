declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            interface Autoscroll {
                /**
                 * This method returns the <code>Insets</code> describing
                 * the autoscrolling region or border relative
                 * to the geometry of the implementing Component.
                 * <P>
                 * This value is read once by the <code>DropTarget</code>
                 * upon entry of the drag <code>Cursor</code>
                 * into the associated <code>Component</code>.
                 * <P>
                 */
                // @ts-ignore
                 getAutoscrollInsets(): java.awt.Insets;
                /**
                 * notify the <code>Component</code> to autoscroll
                 * <P>
                 */
                // @ts-ignore
                 autoscroll(cursorLocn: java.awt.Point): void;
            }
        }
    }
}
