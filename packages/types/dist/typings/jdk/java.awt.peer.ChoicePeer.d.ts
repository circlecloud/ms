declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ChoicePeer {
                /**
                 * Adds an item with the string {@code item} to the combo box list
                 * at index {@code index}.
                 */
                // @ts-ignore
                 add(item: string, index: number): void;
                /**
                 * Removes the item at index {@code index} from the combo box list.
                 */
                // @ts-ignore
                 remove(index: number): void;
                /**
                 * Removes all items from the combo box list.
                 */
                // @ts-ignore
                 removeAll(): void;
                /**
                 * Selects the item at index {@code index}.
                 */
                // @ts-ignore
                 select(index: number): void;
            }
        }
    }
}
