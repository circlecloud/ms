declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class FocusEvent extends java.awt.event.ComponentEvent {
                /**
                 * Constructs a <code>FocusEvent</code> object with the
                 * specified temporary state and opposite <code>Component</code>.
                 * The opposite <code>Component</code> is the other
                 * <code>Component</code> involved in this focus change.
                 * For a <code>FOCUS_GAINED</code> event, this is the
                 * <code>Component</code> that lost focus. For a
                 * <code>FOCUS_LOST</code> event, this is the <code>Component</code>
                 * that gained focus. If this focus change occurs with a native
                 * application, with a Java application in a different VM,
                 * or with no other <code>Component</code>, then the opposite
                 * <code>Component</code> is <code>null</code>.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, temporary: boolean, opposite: java.awt.Component)
                /**
                 * Constructs a <code>FocusEvent</code> object and identifies
                 * whether or not the change is temporary.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, temporary: boolean)
                /**
                 * Constructs a <code>FocusEvent</code> object and identifies it
                 * as a permanent change in focus.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number)
                // @ts-ignore
                public static FOCUS_FIRST: number;
                // @ts-ignore
                public static FOCUS_LAST: number;
                // @ts-ignore
                public static FOCUS_GAINED: number;
                // @ts-ignore
                public static FOCUS_LOST: number;
                /**
                 * Identifies the focus change event as temporary or permanent.
                 */
                // @ts-ignore
                public isTemporary(): boolean;
                /**
                 * Returns the other Component involved in this focus change. For a
                 * FOCUS_GAINED event, this is the Component that lost focus. For a
                 * FOCUS_LOST event, this is the Component that gained focus. If this
                 * focus change occurs with a native application, with a Java application
                 * in a different VM or context, or with no other Component, then null is
                 * returned.
                 */
                // @ts-ignore
                public getOppositeComponent(): java.awt.Component;
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
