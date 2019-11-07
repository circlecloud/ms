declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace merge {
                    // @ts-ignore
                    interface MergeFunction {
                        // @ts-ignore
                         IGNORE_ALL: org.spongepowered.api.data.merge.MergeFunction;
                        // @ts-ignore
                         FORCE_NOTHING: org.spongepowered.api.data.merge.MergeFunction;
                        /**
                         * Performs a merge of a type of {@link ValueContainer} such that a merge
                         * of the contained {@link BaseValue}s has been performed and the resulting
                         * merged {@link ValueContainer} is returned. It is suffice to say that
                         * only one of the {@link ValueContainer} containers may be {@code null},
                         * such that <pre> {@code
                         * if (original == null) {
                         * return checkNotNull(replacement);
                         * } else if (replacement == null) {
                         * return original;
                         * } else {
                         * // do something merging the necessary values
                         * }
                         * }</pre>
                         * It can be therefor discerned that both values are passed in as copies
                         * and therefor either one can be modified and returned.
                         * <p>Since
                         * {@link CompositeValueStore#copyFrom(CompositeValueStore, MergeFunction)}
                         * accepts only a single {@link MergeFunction}, and a
                         * {@link CompositeValueStore} may have multiple {@link ValueContainer}s,
                         * as provided by {@link CompositeValueStore#getContainers()}, the merge
                         * function may be called for every single number of {@link ValueContainer}.
                         * This way, a {@link MergeFunction} can be fully customized to merge
                         * specific {@link ValueContainer}s of matching types.</p>
                         */
                        // @ts-ignore
                         merge(original: org.spongepowered.api.data.value.ValueContainer, replacement: org.spongepowered.api.data.value.ValueContainer): org.spongepowered.api.data.value.ValueContainer;
                        /**
                         * Creates a new {@link MergeFunction} chaining this current merge function
                         * with the provided merge function. The order of the merge is this
                         * performs {@link #merge(ValueContainer, ValueContainer)} then, the
                         * provided {@link MergeFunction} merges the returned merged
                         * {@link ValueContainer} and the {@code replacement}. This can be used to
                         * apply a custom merge strategy after a pre-defined {@link MergeFunction}
                         * is applied.
                         */
                        // @ts-ignore
                         andThen(that: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.merge.MergeFunction;
                    }
                }
            }
        }
    }
}
