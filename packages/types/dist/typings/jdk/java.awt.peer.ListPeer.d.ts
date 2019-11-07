// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ListPeer {
                /**
                 * Returns the indices of the list items that are currently selected.
                 * The returned array is not required to be a copy, the callers of this
                 * method already make sure it is not modified.
                 */
                // @ts-ignore
                 getSelectedIndexes(): number[];
                /**
                 * Adds an item to the list at the specified index.
                 */
                // @ts-ignore
                 add(item: string, index: number): void;
                /**
                 * Deletes items from the list. All items from start to end should are
                 * deleted, including the item at the start and end indices.
                 */
                // @ts-ignore
                 delItems(start: number, end: number): void;
                /**
                 * Removes all items from the list.
                 */
                // @ts-ignore
                 removeAll(): void;
                /**
                 * Selects the item at the specified {@code index}.
                 */
                // @ts-ignore
                 select(index: number): void;
                /**
                 * De-selects the item at the specified {@code index}.
                 */
                // @ts-ignore
                 deselect(index: number): void;
                /**
                 * Makes sure that the item at the specified {@code index} is visible,
                 * by scrolling the list or similar.
                 */
                // @ts-ignore
                 makeVisible(index: number): void;
                /**
                 * Toggles multiple selection mode on or off.
                 */
                // @ts-ignore
                 setMultipleMode(m: boolean): void;
                /**
                 * Returns the preferred size for a list with the specified number of rows.
                 */
                // @ts-ignore
                 getPreferredSize(rows: number): java.awt.Dimension;
                /**
                 * Returns the minimum size for a list with the specified number of rows.
                 */
                // @ts-ignore
                 getMinimumSize(rows: number): java.awt.Dimension;
            }
        }
    }
}
