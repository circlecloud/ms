declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class ActionEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>ActionEvent</code> object.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, id: number, command: string)
                /**
                 * Constructs an <code>ActionEvent</code> object with modifier keys.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, id: number, command: string, modifiers: number)
                /**
                 * Constructs an <code>ActionEvent</code> object with the specified
                 * modifier keys and timestamp.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, id: number, command: string, when: number, modifiers: number)
                // @ts-ignore
                public static SHIFT_MASK: number;
                // @ts-ignore
                public static CTRL_MASK: number;
                // @ts-ignore
                public static META_MASK: number;
                // @ts-ignore
                public static ALT_MASK: number;
                // @ts-ignore
                public static ACTION_FIRST: number;
                // @ts-ignore
                public static ACTION_LAST: number;
                // @ts-ignore
                public static ACTION_PERFORMED: number;
                /**
                 * Returns the command string associated with this action.
                 * This string allows a "modal" component to specify one of several
                 * commands, depending on its state. For example, a single button might
                 * toggle between "show details" and "hide details". The source object
                 * and the event would be the same in each case, but the command string
                 * would identify the intended action.
                 * <p>
                 * Note that if a <code>null</code> command string was passed
                 * to the constructor for this <code>ActionEvent</code>, this
                 * this method returns <code>null</code>.
                 */
                // @ts-ignore
                public getActionCommand(): string;
                /**
                 * Returns the timestamp of when this event occurred. Because an
                 * ActionEvent is a high-level, semantic event, the timestamp is typically
                 * the same as an underlying InputEvent.
                 */
                // @ts-ignore
                public getWhen(): number;
                /**
                 * Returns the modifier keys held down during this action event.
                 */
                // @ts-ignore
                public getModifiers(): number;
                /**
                 * Returns a parameter string identifying this action event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
