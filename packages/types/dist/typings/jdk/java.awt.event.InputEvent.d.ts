// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class InputEvent extends java.awt.event.ComponentEvent {
                // @ts-ignore
                public static SHIFT_MASK: number;
                // @ts-ignore
                public static CTRL_MASK: number;
                // @ts-ignore
                public static META_MASK: number;
                // @ts-ignore
                public static ALT_MASK: number;
                // @ts-ignore
                public static ALT_GRAPH_MASK: number;
                // @ts-ignore
                public static BUTTON1_MASK: number;
                // @ts-ignore
                public static BUTTON2_MASK: number;
                // @ts-ignore
                public static BUTTON3_MASK: number;
                // @ts-ignore
                public static SHIFT_DOWN_MASK: number;
                // @ts-ignore
                public static CTRL_DOWN_MASK: number;
                // @ts-ignore
                public static META_DOWN_MASK: number;
                // @ts-ignore
                public static ALT_DOWN_MASK: number;
                // @ts-ignore
                public static BUTTON1_DOWN_MASK: number;
                // @ts-ignore
                public static BUTTON2_DOWN_MASK: number;
                // @ts-ignore
                public static BUTTON3_DOWN_MASK: number;
                // @ts-ignore
                public static ALT_GRAPH_DOWN_MASK: number;
                /**
                 * A method to obtain a mask for any existing mouse button.
                 * The returned mask may be used for different purposes. Following are some of them:
                 * <ul>
                 * <li> {@link java.awt.Robot#mousePress(int) mousePress(buttons)} and
                 * {@link java.awt.Robot#mouseRelease(int) mouseRelease(buttons)}
                 * <li> as a {@code modifiers} parameter when creating a new {@link MouseEvent} instance
                 * <li> to check {@link MouseEvent#getModifiersEx() modifiersEx} of existing {@code MouseEvent}
                 * </ul>
                 */
                // @ts-ignore
                public static getMaskForButton(button: number): number;
                /**
                 * Returns whether or not the Shift modifier is down on this event.
                 */
                // @ts-ignore
                public isShiftDown(): boolean;
                /**
                 * Returns whether or not the Control modifier is down on this event.
                 */
                // @ts-ignore
                public isControlDown(): boolean;
                /**
                 * Returns whether or not the Meta modifier is down on this event.
                 */
                // @ts-ignore
                public isMetaDown(): boolean;
                /**
                 * Returns whether or not the Alt modifier is down on this event.
                 */
                // @ts-ignore
                public isAltDown(): boolean;
                /**
                 * Returns whether or not the AltGraph modifier is down on this event.
                 */
                // @ts-ignore
                public isAltGraphDown(): boolean;
                /**
                 * Returns the difference in milliseconds between the timestamp of when this event occurred and
                 * midnight, January 1, 1970 UTC.
                 */
                // @ts-ignore
                public getWhen(): number;
                /**
                 * Returns the modifier mask for this event.
                 */
                // @ts-ignore
                public getModifiers(): number;
                /**
                 * Returns the extended modifier mask for this event.
                 * <P>
                 * Extended modifiers are the modifiers that ends with the _DOWN_MASK suffix,
                 * such as ALT_DOWN_MASK, BUTTON1_DOWN_MASK, and others.
                 * <P>
                 * Extended modifiers represent the state of all modal keys,
                 * such as ALT, CTRL, META, and the mouse buttons just after
                 * the event occurred.
                 * <P>
                 * For example, if the user presses <b>button 1</b> followed by
                 * <b>button 2</b>, and then releases them in the same order,
                 * the following sequence of events is generated:
                 * <PRE>
                 * <code>MOUSE_PRESSED</code>:  <code>BUTTON1_DOWN_MASK</code>
                 * <code>MOUSE_PRESSED</code>:  <code>BUTTON1_DOWN_MASK | BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_RELEASED</code>: <code>BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_CLICKED</code>:  <code>BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_RELEASED</code>:
                 * <code>MOUSE_CLICKED</code>:
                 * </PRE>
                 * <P>
                 * It is not recommended to compare the return value of this method
                 * using <code>==</code> because new modifiers can be added in the future.
                 * For example, the appropriate way to check that SHIFT and BUTTON1 are
                 * down, but CTRL is up is demonstrated by the following code:
                 * <PRE>
                 * int onmask = SHIFT_DOWN_MASK | BUTTON1_DOWN_MASK;
                 * int offmask = CTRL_DOWN_MASK;
                 * if ((event.getModifiersEx() &amp; (onmask | offmask)) == onmask) {
                 * ...
                 * }
                 * </PRE>
                 * The above code will work even if new modifiers are added.
                 */
                // @ts-ignore
                public getModifiersEx(): number;
                /**
                 * Consumes this event so that it will not be processed
                 * in the default manner by the source which originated it.
                 */
                // @ts-ignore
                public consume(): void;
                /**
                 * Returns whether or not this event has been consumed.
                 */
                // @ts-ignore
                public isConsumed(): boolean;
                /**
                 * Returns a String describing the extended modifier keys and
                 * mouse buttons, such as "Shift", "Button1", or "Ctrl+Shift".
                 * These strings can be localized by changing the
                 * <code>awt.properties</code> file.
                 * <p>
                 * Note that passing negative parameter is incorrect,
                 * and will cause the returning an unspecified string.
                 * Zero parameter means that no modifiers were passed and will
                 * cause the returning an empty string.
                 */
                // @ts-ignore
                public static getModifiersExText(modifiers: number): string;
            }
        }
    }
}
