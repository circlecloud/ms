// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class AWTEventListenerProxy extends java.util.EventListenerProxy {
                /**
                 * Constructor which binds the {@code AWTEventListener}
                 * to a specific event mask.
                 */
                // @ts-ignore
                constructor(eventMask: number, listener: java.awt.event.AWTEventListener)
                /**
                 * Forwards the AWT event to the listener delegate.
                 */
                // @ts-ignore
                public eventDispatched(event: java.awt.AWTEvent): void;
                /**
                 * Returns the event mask associated with the listener.
                 */
                // @ts-ignore
                public getEventMask(): number;
            }
        }
    }
}
