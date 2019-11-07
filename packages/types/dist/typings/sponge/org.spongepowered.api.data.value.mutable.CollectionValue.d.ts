declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface CollectionValue extends org.spongepowered.api.data.value.mutable.Value {
                            // @ts-ignore
                             set(value: java.util.Collection): org.spongepowered.api.data.value.mutable.CollectionValue;
                            // @ts-ignore
                             transform(func: java.util.function$.Function): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Gets the size of the underlying collection of elements.
                             */
                            // @ts-ignore
                             size(): number;
                            /**
                             * Checks if the backed {@link Collection} is empty.
                             */
                            // @ts-ignore
                             isEmpty(): boolean;
                            /**
                             * Adds the given {@code element} to this {@link CollectionValue}.
                             */
                            // @ts-ignore
                             add(element: java.lang.Object): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Adds all the given {@link Iterable} {@code elements} to the underlying
                             * {@link Collection}.
                             */
                            // @ts-ignore
                             addAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Removes the given {@code element} from the backed {@link Collection}.
                             */
                            // @ts-ignore
                             remove(element: java.lang.Object): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Removes all elements from the {@link Iterable} from the backed
                             * {@link Collection}.
                             */
                            // @ts-ignore
                             removeAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Iterates over all existing elements and removes any elements that
                             * {@link Predicate#test(Object)} returns {@code true}.
                             */
                            // @ts-ignore
                             removeAll(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Checks if the given <code>E</code> element is contained within the backed
                             * {@link Collection}.
                             */
                            // @ts-ignore
                             contains(element: java.lang.Object): boolean;
                            /**
                             * Checks if all of the given {@link Iterable} elements are contained
                             * within the backed {@link Collection}.
                             */
                            // @ts-ignore
                             containsAll(iterable: java.util.Collection): boolean;
                            /**
                             * Applies a {@link Predicate} to filter the underlying elements in the
                             * backed {@link Collection} to create a new {@link CollectionValue}
                             * separate from this {@link CollectionValue}. This value is not modified,
                             * nor is the underlying {@link Collection}. Elements that return
                             * <code>true</code> from {@link Predicate#test(Object)} are kept, and
                             * those that return <code>false</code> are excluded.
                             */
                            // @ts-ignore
                             filter(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.mutable.CollectionValue;
                            /**
                             * Creates a new {@link Collection} of the proper type <code>C</code> with
                             * all elements copied to the new collection. Any modifications to the new
                             * collection are not reflected to this {@link CollectionValue}. Likewise,
                             * no modifications to this {@link CollectionValue} are reflected to the
                             * returned {@link Collection}.
                             */
                            // @ts-ignore
                             getAll(): java.util.Collection;
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            // @ts-ignore
                             copy(): org.spongepowered.api.data.value.mutable.CollectionValue;
                        }
                    }
                }
            }
        }
    }
}
