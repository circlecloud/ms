declare namespace java {
    namespace awt {
        // @ts-ignore
         class Event extends java.lang.Object {
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code> with the specified target
             * component, time stamp, event type, <i>x</i> and <i>y</i>
             * coordinates, keyboard key, state of the modifier keys, and
             * argument.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, when: number, id: number, x: number, y: number, key: number, modifiers: number, arg: java.lang.Object)
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code>, with the specified target
             * component, time stamp, event type, <i>x</i> and <i>y</i>
             * coordinates, keyboard key, state of the modifier keys, and an
             * argument set to <code>null</code>.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, when: number, id: number, x: number, y: number, key: number, modifiers: number)
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code> with the specified
             * target component, event type, and argument.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, id: number, arg: java.lang.Object)
            // @ts-ignore
            public static SHIFT_MASK: number;
            // @ts-ignore
            public static CTRL_MASK: number;
            // @ts-ignore
            public static META_MASK: number;
            // @ts-ignore
            public static ALT_MASK: number;
            // @ts-ignore
            public static HOME: number;
            // @ts-ignore
            public static END: number;
            // @ts-ignore
            public static PGUP: number;
            // @ts-ignore
            public static PGDN: number;
            // @ts-ignore
            public static UP: number;
            // @ts-ignore
            public static DOWN: number;
            // @ts-ignore
            public static LEFT: number;
            // @ts-ignore
            public static RIGHT: number;
            // @ts-ignore
            public static F1: number;
            // @ts-ignore
            public static F2: number;
            // @ts-ignore
            public static F3: number;
            // @ts-ignore
            public static F4: number;
            // @ts-ignore
            public static F5: number;
            // @ts-ignore
            public static F6: number;
            // @ts-ignore
            public static F7: number;
            // @ts-ignore
            public static F8: number;
            // @ts-ignore
            public static F9: number;
            // @ts-ignore
            public static F10: number;
            // @ts-ignore
            public static F11: number;
            // @ts-ignore
            public static F12: number;
            // @ts-ignore
            public static PRINT_SCREEN: number;
            // @ts-ignore
            public static SCROLL_LOCK: number;
            // @ts-ignore
            public static CAPS_LOCK: number;
            // @ts-ignore
            public static NUM_LOCK: number;
            // @ts-ignore
            public static PAUSE: number;
            // @ts-ignore
            public static INSERT: number;
            // @ts-ignore
            public static ENTER: number;
            // @ts-ignore
            public static BACK_SPACE: number;
            // @ts-ignore
            public static TAB: number;
            // @ts-ignore
            public static ESCAPE: number;
            // @ts-ignore
            public static DELETE: number;
            // @ts-ignore
            public static WINDOW_DESTROY: number;
            // @ts-ignore
            public static WINDOW_EXPOSE: number;
            // @ts-ignore
            public static WINDOW_ICONIFY: number;
            // @ts-ignore
            public static WINDOW_DEICONIFY: number;
            // @ts-ignore
            public static WINDOW_MOVED: number;
            // @ts-ignore
            public static KEY_PRESS: number;
            // @ts-ignore
            public static KEY_RELEASE: number;
            // @ts-ignore
            public static KEY_ACTION: number;
            // @ts-ignore
            public static KEY_ACTION_RELEASE: number;
            // @ts-ignore
            public static MOUSE_DOWN: number;
            // @ts-ignore
            public static MOUSE_UP: number;
            // @ts-ignore
            public static MOUSE_MOVE: number;
            // @ts-ignore
            public static MOUSE_ENTER: number;
            // @ts-ignore
            public static MOUSE_EXIT: number;
            // @ts-ignore
            public static MOUSE_DRAG: number;
            // @ts-ignore
            public static SCROLL_LINE_UP: number;
            // @ts-ignore
            public static SCROLL_LINE_DOWN: number;
            // @ts-ignore
            public static SCROLL_PAGE_UP: number;
            // @ts-ignore
            public static SCROLL_PAGE_DOWN: number;
            // @ts-ignore
            public static SCROLL_ABSOLUTE: number;
            // @ts-ignore
            public static SCROLL_BEGIN: number;
            // @ts-ignore
            public static SCROLL_END: number;
            // @ts-ignore
            public static LIST_SELECT: number;
            // @ts-ignore
            public static LIST_DESELECT: number;
            // @ts-ignore
            public static ACTION_EVENT: number;
            // @ts-ignore
            public static LOAD_FILE: number;
            // @ts-ignore
            public static SAVE_FILE: number;
            // @ts-ignore
            public static GOT_FOCUS: number;
            // @ts-ignore
            public static LOST_FOCUS: number;
            // @ts-ignore
            public target: java.lang.Object;
            // @ts-ignore
            public when: number;
            // @ts-ignore
            public id: number;
            // @ts-ignore
            public x: number;
            // @ts-ignore
            public y: number;
            // @ts-ignore
            public key: number;
            // @ts-ignore
            public modifiers: number;
            // @ts-ignore
            public clickCount: number;
            // @ts-ignore
            public arg: java.lang.Object;
            // @ts-ignore
            public evt: java.awt.Event;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Translates this event so that its <i>x</i> and <i>y</i>
             * coordinates are increased by <i>dx</i> and <i>dy</i>,
             * respectively.
             * <p>
             * This method translates an event relative to the given component.
             * This involves, at a minimum, translating the coordinates into the
             * local coordinate system of the given component. It may also involve
             * translating a region in the case of an expose event.
             */
            // @ts-ignore
            public translate(dx: number, dy: number): void;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Shift key is down.
             */
            // @ts-ignore
            public shiftDown(): boolean;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Control key is down.
             */
            // @ts-ignore
            public controlDown(): boolean;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Meta key is down.
             */
            // @ts-ignore
            public metaDown(): boolean;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Returns a string representing the state of this <code>Event</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Returns a representation of this event's values as a string.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
