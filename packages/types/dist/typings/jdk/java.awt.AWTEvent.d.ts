declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class AWTEvent extends java.util.EventObject {
            /**
             * Constructs an AWTEvent object from the parameters of a 1.0-style event.
             */
            // @ts-ignore
            constructor(event: java.awt.Event)
            /**
             * Constructs an AWTEvent object with the specified source object and type.
             */
            // @ts-ignore
            constructor(source: java.lang.Object, id: number)
            // @ts-ignore
            protected id: number;
            // @ts-ignore
            protected consumed: boolean;
            // @ts-ignore
            public static COMPONENT_EVENT_MASK: number;
            // @ts-ignore
            public static CONTAINER_EVENT_MASK: number;
            // @ts-ignore
            public static FOCUS_EVENT_MASK: number;
            // @ts-ignore
            public static KEY_EVENT_MASK: number;
            // @ts-ignore
            public static MOUSE_EVENT_MASK: number;
            // @ts-ignore
            public static MOUSE_MOTION_EVENT_MASK: number;
            // @ts-ignore
            public static WINDOW_EVENT_MASK: number;
            // @ts-ignore
            public static ACTION_EVENT_MASK: number;
            // @ts-ignore
            public static ADJUSTMENT_EVENT_MASK: number;
            // @ts-ignore
            public static ITEM_EVENT_MASK: number;
            // @ts-ignore
            public static TEXT_EVENT_MASK: number;
            // @ts-ignore
            public static INPUT_METHOD_EVENT_MASK: number;
            // @ts-ignore
            public static PAINT_EVENT_MASK: number;
            // @ts-ignore
            public static INVOCATION_EVENT_MASK: number;
            // @ts-ignore
            public static HIERARCHY_EVENT_MASK: number;
            // @ts-ignore
            public static HIERARCHY_BOUNDS_EVENT_MASK: number;
            // @ts-ignore
            public static MOUSE_WHEEL_EVENT_MASK: number;
            // @ts-ignore
            public static WINDOW_STATE_EVENT_MASK: number;
            // @ts-ignore
            public static WINDOW_FOCUS_EVENT_MASK: number;
            // @ts-ignore
            public static RESERVED_ID_MAX: number;
            /**
             * Retargets an event to a new source. This method is typically used to
             * retarget an event to a lightweight child Component of the original
             * heavyweight source.
             * <p>
             * This method is intended to be used only by event targeting subsystems,
             * such as client-defined KeyboardFocusManagers. It is not for general
             * client use.
             */
            // @ts-ignore
            public setSource(newSource: java.lang.Object): void;
            /**
             * Returns the event type.
             */
            // @ts-ignore
            public getID(): number;
            /**
             * Returns a String representation of this object.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a string representing the state of this <code>Event</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
            /**
             * Consumes this event, if this event can be consumed. Only low-level,
             * system events can be consumed
             */
            // @ts-ignore
            protected consume(): void;
            /**
             * Returns whether this event has been consumed.
             */
            // @ts-ignore
            protected isConsumed(): boolean;
        }
    }
}
