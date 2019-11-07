declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class WindowEvent extends java.awt.event.ComponentEvent {
                /**
                 * Constructs a <code>WindowEvent</code> object.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Window, id: number, opposite: java.awt.Window, oldState: number, newState: number)
                /**
                 * Constructs a <code>WindowEvent</code> object with the
                 * specified opposite <code>Window</code>. The opposite
                 * <code>Window</code> is the other <code>Window</code>
                 * involved in this focus or activation change.
                 * For a <code>WINDOW_ACTIVATED</code> or
                 * <code>WINDOW_GAINED_FOCUS</code> event, this is the
                 * <code>Window</code> that lost activation or focus.
                 * For a <code>WINDOW_DEACTIVATED</code> or
                 * <code>WINDOW_LOST_FOCUS</code> event, this is the
                 * <code>Window</code> that gained activation or focus.
                 * If this focus change occurs with a native application, with a
                 * Java application in a different VM, or with no other
                 * <code>Window</code>, then the opposite Window is <code>null</code>.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Window, id: number, opposite: java.awt.Window)
                /**
                 * Constructs a <code>WindowEvent</code> object with the specified
                 * previous and new window states.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Window, id: number, oldState: number, newState: number)
                /**
                 * Constructs a <code>WindowEvent</code> object.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Window, id: number)
                // @ts-ignore
                public static WINDOW_FIRST: number;
                // @ts-ignore
                public static WINDOW_OPENED: number;
                // @ts-ignore
                public static WINDOW_CLOSING: number;
                // @ts-ignore
                public static WINDOW_CLOSED: number;
                // @ts-ignore
                public static WINDOW_ICONIFIED: number;
                // @ts-ignore
                public static WINDOW_DEICONIFIED: number;
                // @ts-ignore
                public static WINDOW_ACTIVATED: number;
                // @ts-ignore
                public static WINDOW_DEACTIVATED: number;
                // @ts-ignore
                public static WINDOW_GAINED_FOCUS: number;
                // @ts-ignore
                public static WINDOW_LOST_FOCUS: number;
                // @ts-ignore
                public static WINDOW_STATE_CHANGED: number;
                // @ts-ignore
                public static WINDOW_LAST: number;
                /**
                 * Returns the originator of the event.
                 */
                // @ts-ignore
                public getWindow(): java.awt.Window;
                /**
                 * Returns the other Window involved in this focus or activation change.
                 * For a WINDOW_ACTIVATED or WINDOW_GAINED_FOCUS event, this is the Window
                 * that lost activation or focus. For a WINDOW_DEACTIVATED or
                 * WINDOW_LOST_FOCUS event, this is the Window that gained activation or
                 * focus. For any other type of WindowEvent, or if the focus or activation
                 * change occurs with a native application, with a Java application in a
                 * different VM or context, or with no other Window, null is returned.
                 */
                // @ts-ignore
                public getOppositeWindow(): java.awt.Window;
                /**
                 * For <code>WINDOW_STATE_CHANGED</code> events returns the
                 * previous state of the window. The state is
                 * represented as a bitwise mask.
                 * <ul>
                 * <li><code>NORMAL</code>
                 * <br>Indicates that no state bits are set.
                 * <li><code>ICONIFIED</code>
                 * <li><code>MAXIMIZED_HORIZ</code>
                 * <li><code>MAXIMIZED_VERT</code>
                 * <li><code>MAXIMIZED_BOTH</code>
                 * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
                 * and <code>MAXIMIZED_VERT</code>.
                 * </ul>
                 */
                // @ts-ignore
                public getOldState(): number;
                /**
                 * For <code>WINDOW_STATE_CHANGED</code> events returns the
                 * new state of the window. The state is
                 * represented as a bitwise mask.
                 * <ul>
                 * <li><code>NORMAL</code>
                 * <br>Indicates that no state bits are set.
                 * <li><code>ICONIFIED</code>
                 * <li><code>MAXIMIZED_HORIZ</code>
                 * <li><code>MAXIMIZED_VERT</code>
                 * <li><code>MAXIMIZED_BOTH</code>
                 * <br>Concatenates <code>MAXIMIZED_HORIZ</code>
                 * and <code>MAXIMIZED_VERT</code>.
                 * </ul>
                 */
                // @ts-ignore
                public getNewState(): number;
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
