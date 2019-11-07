// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        interface ItemSelectable {
            /**
             * Returns the selected items or <code>null</code> if no
             * items are selected.
             */
            // @ts-ignore
             getSelectedObjects(): java.lang.Object[];
            /**
             * Adds a listener to receive item events when the state of an item is
             * changed by the user. Item events are not sent when an item's
             * state is set programmatically.  If <code>l</code> is
             * <code>null</code>, no exception is thrown and no action is performed.
             */
            // @ts-ignore
             addItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Removes an item listener.
             * If <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             */
            // @ts-ignore
             removeItemListener(l: java.awt.event.ItemListener): void;
        }
    }
}
