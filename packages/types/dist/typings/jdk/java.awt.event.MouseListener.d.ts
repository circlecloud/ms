declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface MouseListener {
                /**
                 * Invoked when the mouse button has been clicked (pressed
                 * and released) on a component.
                 */
                // @ts-ignore
                 mouseClicked(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when a mouse button has been pressed on a component.
                 */
                // @ts-ignore
                 mousePressed(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when a mouse button has been released on a component.
                 */
                // @ts-ignore
                 mouseReleased(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse enters a component.
                 */
                // @ts-ignore
                 mouseEntered(e: java.awt.event.MouseEvent): void;
                /**
                 * Invoked when the mouse exits a component.
                 */
                // @ts-ignore
                 mouseExited(e: java.awt.event.MouseEvent): void;
            }
        }
    }
}
