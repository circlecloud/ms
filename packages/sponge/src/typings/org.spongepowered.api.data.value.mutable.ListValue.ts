declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface ListValue extends org.spongepowered.api.data.value.mutable.CollectionValue {
                            /**
                             * Gets the desired element at the desired index.
                             */
                            // @ts-ignore
                             get(index: number): any;
                            /**
                             * Adds the specified element at the specified position in the list.
                             * As well, the element at the provided index is shifted to the right,
                             * increasing its and the elements thereafter their indices by one.
                             */
                            // @ts-ignore
                             add(index: number, value: any): org.spongepowered.api.data.value.mutable.ListValue;
                            /**
                             * Adds the specified elements in the order that they are iterated
                             * to the list at the specified index. The element at the provided
                             * index and elements thereafter are shifted to the right, increasing
                             * their indices by one.
                             */
                            // @ts-ignore
                             add(index: number, values: any): org.spongepowered.api.data.value.mutable.ListValue;
                            /**
                             * Removes the element at the specified position in this list (optional
                             * operation). Shifts any subsequent elements to the left, subtracts
                             * one from their indices.
                             */
                            // @ts-ignore
                             remove(index: number): org.spongepowered.api.data.value.mutable.ListValue;
                            /**
                             * Replaces the element at the specified index in this list with the
                             * specified element.
                             */
                            // @ts-ignore
                             set(index: number, element: any): org.spongepowered.api.data.value.mutable.ListValue;
                            /**
                             * Queries for the index of the provided element. If the element is
                             * not contained in this list, -1 is returned.
                             */
                            // @ts-ignore
                             indexOf(element: any): number;
                        }
                    }
                }
            }
        }
    }
}
