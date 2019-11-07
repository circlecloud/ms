declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class ComponentEvent extends java.awt.AWTEvent {
                /**
                 * Constructs a <code>ComponentEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number)
                // @ts-ignore
                public static COMPONENT_FIRST: number;
                // @ts-ignore
                public static COMPONENT_LAST: number;
                // @ts-ignore
                public static COMPONENT_MOVED: number;
                // @ts-ignore
                public static COMPONENT_RESIZED: number;
                // @ts-ignore
                public static COMPONENT_SHOWN: number;
                // @ts-ignore
                public static COMPONENT_HIDDEN: number;
                /**
                 * Returns the originator of the event.
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
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
