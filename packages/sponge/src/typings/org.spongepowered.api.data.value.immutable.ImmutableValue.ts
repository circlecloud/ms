declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableValue extends org.spongepowered.api.data.value.BaseValue {
                            /**
                             * Creates a new {@link ImmutableValue} with the given <code>E</code> typed
                             * value, such that if the owning {@link ValueContainer} is immutable, the
                             * {@link ValueContainer} too is recreated as a new instance with the new
                             * {@link ImmutableValue}.
                             */
                            // @ts-ignore
                             with(value: any): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            /**
                             * Retrieves the underlying value for this {@link ImmutableValue} and
                             * applies the given {@link Function} onto that value, after which, the
                             * product is sent to a new {@link ImmutableValue} replacing this one.
                             * <p>If the {@link ValueContainer} too is immutable, a new instance of
                             * the {@link ValueContainer} may be created. If the {@link ValueContainer}
                             * is mutable, the same instance of the {@link ValueContainer} is retained.
                             * </p>
                             */
                            // @ts-ignore
                             transform(func: any): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            /**
                             * Creates a mutable {@link Value} for this {@link ImmutableValue}.
                             */
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
