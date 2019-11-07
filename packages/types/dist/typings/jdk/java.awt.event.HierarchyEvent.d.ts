declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class HierarchyEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>HierarchyEvent</code> object to identify a
                 * change in the <code>Component</code> hierarchy.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, changed: java.awt.Component, changedParent: java.awt.Container)
                /**
                 * Constructs an <code>HierarchyEvent</code> object to identify
                 * a change in the <code>Component</code> hierarchy.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, changed: java.awt.Component, changedParent: java.awt.Container, changeFlags: number)
                // @ts-ignore
                public static HIERARCHY_FIRST: number;
                // @ts-ignore
                public static HIERARCHY_CHANGED: number;
                // @ts-ignore
                public static ANCESTOR_MOVED: number;
                // @ts-ignore
                public static ANCESTOR_RESIZED: number;
                // @ts-ignore
                public static HIERARCHY_LAST: number;
                // @ts-ignore
                public static PARENT_CHANGED: number;
                // @ts-ignore
                public static DISPLAYABILITY_CHANGED: number;
                // @ts-ignore
                public static SHOWING_CHANGED: number;
                /**
                 * Returns the originator of the event.
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * Returns the Component at the top of the hierarchy which was
                 * changed.
                 */
                // @ts-ignore
                public getChanged(): java.awt.Component;
                /**
                 * Returns the parent of the Component returned by <code>
                 * getChanged()</code>. For a HIERARCHY_CHANGED event where the
                 * change was of type PARENT_CHANGED via a call to <code>
                 * Container.add</code>, the parent returned is the parent
                 * after the add operation. For a HIERARCHY_CHANGED event where
                 * the change was of type PARENT_CHANGED via a call to <code>
                 * Container.remove</code>, the parent returned is the parent
                 * before the remove operation. For all other events and types,
                 * the parent returned is the parent during the operation.
                 */
                // @ts-ignore
                public getChangedParent(): java.awt.Container;
                /**
                 * Returns a bitmask which indicates the type(s) of
                 * HIERARCHY_CHANGED events represented in this event object.
                 * The bits have been bitwise-ored together.
                 */
                // @ts-ignore
                public getChangeFlags(): number;
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
