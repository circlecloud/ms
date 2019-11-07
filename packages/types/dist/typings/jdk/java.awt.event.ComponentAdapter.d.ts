// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class ComponentAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when the component's size changes.
                 */
                // @ts-ignore
                public componentResized(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component's position changes.
                 */
                // @ts-ignore
                public componentMoved(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component has been made visible.
                 */
                // @ts-ignore
                public componentShown(e: java.awt.event.ComponentEvent): void;
                /**
                 * Invoked when the component has been made invisible.
                 */
                // @ts-ignore
                public componentHidden(e: java.awt.event.ComponentEvent): void;
            }
        }
    }
}
