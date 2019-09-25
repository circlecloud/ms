declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface Value extends org.spongepowered.api.data.value.BaseValue {
                            /**
                             * Sets the underlying value to the provided {@code value}.
                             */
                            // @ts-ignore
                             set(value: any): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Attempts to transform the underlying value based on the provided
                             * {@link Function} such that the result of {@link Function#apply(Object)}
                             * will replace the underlying value.
                             */
                            // @ts-ignore
                             transform(func: any): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets the {@link ImmutableValue} version of this {@link Value} such that
                             * all data is duplicated across to the new {@link ImmutableValue}. Note
                             * that once created, the {@link ImmutableValue} is not going to change.
                             */
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            /**
                             * Makes an independent copy of this {@link Value} with the same initial
                             * data. Both this value and the new value will refer to the same object
                             * initially.
                             */
                            // @ts-ignore
                             copy(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
