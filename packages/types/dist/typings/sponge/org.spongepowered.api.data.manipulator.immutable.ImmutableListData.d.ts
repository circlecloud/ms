declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableListData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                            /**
                             * Gets the {@link ImmutableListValue} of this {@link ImmutableListData}.
                             */
                            // @ts-ignore
                             getListValue(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                            /**
                             * Gets the {@link List} value itself from this manipulator.
                             */
                            // @ts-ignore
                             asList(): java.util.List;
                            /**
                             * Gets an element of type {@code E} by the provided {@code index}.
                             */
                            // @ts-ignore
                             get(index: number): java.util.Optional;
                            /**
                             * Returns whether the underlying {@link List} contains the provided
                             * {@code element}.
                             */
                            // @ts-ignore
                             contains(element: java.lang.Object): boolean;
                        }
                    }
                }
            }
        }
    }
}
