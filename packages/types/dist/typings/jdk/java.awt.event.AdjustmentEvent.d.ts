// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class AdjustmentEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>AdjustmentEvent</code> object with the
                 * specified <code>Adjustable</code> source, event type,
                 * adjustment type, and value.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Adjustable, id: number, type: number, value: number)
                /**
                 * Constructs an <code>AdjustmentEvent</code> object with the
                 * specified Adjustable source, event type, adjustment type, and value.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Adjustable, id: number, type: number, value: number, isAdjusting: boolean)
                // @ts-ignore
                public static ADJUSTMENT_FIRST: number;
                // @ts-ignore
                public static ADJUSTMENT_LAST: number;
                // @ts-ignore
                public static ADJUSTMENT_VALUE_CHANGED: number;
                // @ts-ignore
                public static UNIT_INCREMENT: number;
                // @ts-ignore
                public static UNIT_DECREMENT: number;
                // @ts-ignore
                public static BLOCK_DECREMENT: number;
                // @ts-ignore
                public static BLOCK_INCREMENT: number;
                // @ts-ignore
                public static TRACK: number;
                /**
                 * Returns the <code>Adjustable</code> object where this event originated.
                 */
                // @ts-ignore
                public getAdjustable(): java.awt.Adjustable;
                /**
                 * Returns the current value in the adjustment event.
                 */
                // @ts-ignore
                public getValue(): number;
                /**
                 * Returns the type of adjustment which caused the value changed
                 * event.  It will have one of the following values:
                 * <ul>
                 * <li>{@link #UNIT_INCREMENT}
                 * <li>{@link #UNIT_DECREMENT}
                 * <li>{@link #BLOCK_INCREMENT}
                 * <li>{@link #BLOCK_DECREMENT}
                 * <li>{@link #TRACK}
                 * </ul>
                 */
                // @ts-ignore
                public getAdjustmentType(): number;
                /**
                 * Returns <code>true</code> if this is one of multiple
                 * adjustment events.
                 */
                // @ts-ignore
                public getValueIsAdjusting(): boolean;
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
