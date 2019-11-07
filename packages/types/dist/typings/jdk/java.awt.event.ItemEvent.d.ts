// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class ItemEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>ItemEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.ItemSelectable, id: number, item: java.lang.Object, stateChange: number)
                // @ts-ignore
                public static ITEM_FIRST: number;
                // @ts-ignore
                public static ITEM_LAST: number;
                // @ts-ignore
                public static ITEM_STATE_CHANGED: number;
                // @ts-ignore
                public static SELECTED: number;
                // @ts-ignore
                public static DESELECTED: number;
                /**
                 * Returns the originator of the event.
                 */
                // @ts-ignore
                public getItemSelectable(): java.awt.ItemSelectable;
                /**
                 * Returns the item affected by the event.
                 */
                // @ts-ignore
                public getItem(): java.lang.Object;
                /**
                 * Returns the type of state change (selected or deselected).
                 */
                // @ts-ignore
                public getStateChange(): number;
                /**
                 * Returns a parameter string identifying this item event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
