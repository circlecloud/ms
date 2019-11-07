declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class ContainerAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a component has been added to the container.
                 */
                // @ts-ignore
                public componentAdded(e: java.awt.event.ContainerEvent): void;
                /**
                 * Invoked when a component has been removed from the container.
                 */
                // @ts-ignore
                public componentRemoved(e: java.awt.event.ContainerEvent): void;
            }
        }
    }
}
