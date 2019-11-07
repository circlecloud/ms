declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class ContainerEvent extends java.awt.event.ComponentEvent {
                /**
                 * Constructs a <code>ContainerEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, child: java.awt.Component)
                // @ts-ignore
                public static CONTAINER_FIRST: number;
                // @ts-ignore
                public static CONTAINER_LAST: number;
                // @ts-ignore
                public static COMPONENT_ADDED: number;
                // @ts-ignore
                public static COMPONENT_REMOVED: number;
                /**
                 * Returns the originator of the event.
                 */
                // @ts-ignore
                public getContainer(): java.awt.Container;
                /**
                 * Returns the component that was affected by the event.
                 */
                // @ts-ignore
                public getChild(): java.awt.Component;
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
