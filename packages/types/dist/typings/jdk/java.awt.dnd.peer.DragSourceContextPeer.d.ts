declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                // @ts-ignore
                interface DragSourceContextPeer {
                    /**
                     * start a drag
                     */
                    // @ts-ignore
                     startDrag(dsc: java.awt.dnd.DragSourceContext, c: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point): void;
                    /**
                     * return the current drag cursor
                     */
                    // @ts-ignore
                     getCursor(): java.awt.Cursor;
                    /**
                     * set the current drag cursor
                     */
                    // @ts-ignore
                     setCursor(c: java.awt.Cursor): void;
                    /**
                     * notify the peer that the Transferables DataFlavors have changed
                     */
                    // @ts-ignore
                     transferablesFlavorsChanged(): void;
                }
            }
        }
    }
}
