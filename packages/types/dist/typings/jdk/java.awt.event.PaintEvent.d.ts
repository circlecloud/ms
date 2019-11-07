// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class PaintEvent extends java.awt.event.ComponentEvent {
                /**
                 * Constructs a <code>PaintEvent</code> object with the specified
                 * source component and type.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, updateRect: java.awt.Rectangle)
                // @ts-ignore
                public static PAINT_FIRST: number;
                // @ts-ignore
                public static PAINT_LAST: number;
                // @ts-ignore
                public static PAINT: number;
                // @ts-ignore
                public static UPDATE: number;
                /**
                 * Returns the rectangle representing the area which needs to be
                 * repainted in response to this event.
                 */
                // @ts-ignore
                public getUpdateRect(): java.awt.Rectangle;
                /**
                 * Sets the rectangle representing the area which needs to be
                 * repainted in response to this event.
                 */
                // @ts-ignore
                public setUpdateRect(updateRect: java.awt.Rectangle): void;
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
