declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableListValue extends org.spongepowered.api.data.value.immutable.ImmutableCollectionValue {
                            /**
                             * Gets the desired element at the desired index.
                             */
                            // @ts-ignore
                             get(index: number): any;
                            /**
                             * Creates a new {@link ImmutableListValue} with the specified element
                             * at the specified position in the list. As well, the element at the
                             * provided index is shifted to the right,  increasing its and the elements
                             * thereafter their indices by one.
                             */
                            // @ts-ignore
                             with(index: number, value: any): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                            /**
                             * Creates a new {@link ImmutableListValue} with the specified elements
                             * in the order that they are iterated to the list at the specified index.
                             * The element at the provided index and elements thereafter are shifted to
                             * the right, increasing their indices by one.
                             */
                            // @ts-ignore
                             with(index: number, values: any): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                            /**
                             * Creates a new {@link ImmutableListValue} without the element at the
                             * specified index. Shifts any subsequent elements to the left, subtracts
                             * one from their indices.
                             */
                            // @ts-ignore
                             without(index: number): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                            /**
                             * Creates a new {@link ImmutableListValue} with the desired element at
                             * the desired index.
                             */
                            // @ts-ignore
                             set(index: number, element: any): org.spongepowered.api.data.value.immutable.ImmutableListValue;
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
