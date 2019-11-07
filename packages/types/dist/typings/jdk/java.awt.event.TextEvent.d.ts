declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class TextEvent extends java.awt.AWTEvent {
                /**
                 * Constructs a <code>TextEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, id: number)
                // @ts-ignore
                public static TEXT_FIRST: number;
                // @ts-ignore
                public static TEXT_LAST: number;
                // @ts-ignore
                public static TEXT_VALUE_CHANGED: number;
                /**
                 * Returns a parameter string identifying this text event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
