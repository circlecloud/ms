declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface ComponentListener {
                /**
                 * Invoked when the component's size changes.
                 */
                // @ts-ignore
                 componentResized(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component's position changes.
                 */
                // @ts-ignore
                 componentMoved(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component has been made visible.
                 */
                // @ts-ignore
                 componentShown(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component has been made invisible.
                 */
                // @ts-ignore
                 componentHidden(e: java.awt.event.ComponentEvent): void;
            }
        }
    }
}
