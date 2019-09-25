declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        // @ts-ignore
                        interface ListData extends org.spongepowered.api.data.manipulator.DataManipulator {
                            /**
                             * Gets the {@link ListValue} of this {@link ListData}.
                             */
                            // @ts-ignore
                             getListValue(): org.spongepowered.api.data.value.mutable.ListValue;
                            /**
                             * Gets the {@link List} value itself from this manipulator.
                             */
                            // @ts-ignore
                             asList(): any[] /*java.util.List*/;
                            /**
                             * Gets an element of type {@code E} by the provided {@code index}.
                             */
                            // @ts-ignore
                             get(index: number): any;
                            /**
                             * Returns whether the underlying {@link List} contains the provided
                             * {@code element}.
                             */
                            // @ts-ignore
                             contains(element: any): boolean;
                            /**
                             * Replaces the element at the specified position in this list with the
                             * specified element (optional operation).
                             */
                            // @ts-ignore
                             setElement(index: number, element: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Replaces the underlying list of elements with the provided {@link List}
                             * of elements.
                             */
                            // @ts-ignore
                             setElements(elements: any[] /*java.util.List*/): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Appends the provided element at the end of the underlying {@link List}.
                             */
                            // @ts-ignore
                             addElement(element: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Inserts the specified element at the specified position in this list.
                             * Shifts the element currently at that position (if any) and any
                             * subsequent elements to the right (adds one to their indices).
                             */
                            // @ts-ignore
                             addElement(index: number, element: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Appends the provided {@code E} elements to the end of the internal list
                             * of elements.
                             */
                            // @ts-ignore
                             addElements(elements: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Removes the desired {@code element} from the desired {@code index}.
                             */
                            // @ts-ignore
                             remove(index: number): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Removes the desired {@code element} from the underlying {@link List}.
                             */
                            // @ts-ignore
                             remove(element: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Removes all of the provided {@code elements} from the underlying
                             * {@link List}.
                             */
                            // @ts-ignore
                             removeAll(elements: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                            /**
                             * Removes any and all {@code elements} that match {@code true} to
                             * the provided {@link Predicate} from the underlying {@link List}.
                             */
                            // @ts-ignore
                             removeAll(predicate: any): org.spongepowered.api.data.manipulator.mutable.ListData;
                        }
                    }
                }
            }
        }
    }
}
