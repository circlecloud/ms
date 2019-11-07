// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableCollectionValue extends org.spongepowered.api.data.value.immutable.ImmutableValue {
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
                            // @ts-ignore
                             with(collection: java.util.Collection): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with the given values
                             * along with any pre-existing values within this value.
                             */
                            // @ts-ignore
                             withElement(elements: java.lang.Object): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            // @ts-ignore
                             transform(func: java.util.function$.Function): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with the given elements
                             * along with any pre-existing values within this value.
                             */
                            // @ts-ignore
                             withAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Creates a new {@link ImmutableCollectionValue} without the given
                             * <code>E</code> element.
                             */
                            // @ts-ignore
                             without(element: java.lang.Object): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Creates a new {@link ImmutableCollectionValue} without the given
                             * elements of the provided {@link Iterable}.
                             */
                            // @ts-ignore
                             withoutAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with elements that
                             * when the given {@link Predicate} is {@link Predicate#test(Object)} on
                             * the element and {@code true} is returned, the element will remain in the
                             * new {@link ImmutableCollectionValue}.
                             */
                            // @ts-ignore
                             withoutAll(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.immutable.ImmutableCollectionValue;
                            /**
                             * Checks if the given <code>E</code> element is contained within the
                             * backed {@link Collection}.
                             */
                            // @ts-ignore
                             contains(element: java.lang.Object): boolean;
                            /**
                             * Checks if all of the given elements in the provided {@link Iterable} are
                             * contained within the backed {@link Collection}.
                             */
                            // @ts-ignore
                             containsAll(iterable: java.lang.Iterable): boolean;
                            /**
                             * Creates a new {@link Collection} of the proper type <code>C</code> with
                             * all elements copied to the new collection. Any modifications to the new
                             * collection are not reflected to this {@link ImmutableCollectionValue}.
                             * Likewise, no modifications to this {@link ImmutableCollectionValue} are
                             * reflected to the returned {@link Collection}.
                             */
                            // @ts-ignore
                             getAll(): java.util.Collection;
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.CollectionValue;
                        }
                    }
                }
            }
        }
    }
}
