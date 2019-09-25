declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableOptionalValue extends org.spongepowered.api.data.value.immutable.ImmutableValue {
                            // @ts-ignore
                             with(value: any): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                            // @ts-ignore
                             transform(func: any): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                            /**
                             * Creates a new {@link ImmutableOptionalValue} with the provided value,
                             * may be null.
                             */
                            // @ts-ignore
                             instead(value: any): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                            /**
                             * Provides the value such that if the underlying value is
                             * {@code null}, the default value is returned as an
                             * {@link ImmutableValue}, if the underlying value is present, the
                             * underlying value is returned as a {@link ImmutableValue}.
                             */
                            // @ts-ignore
                             or(value: any): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.OptionalValue;
                        }
                    }
                }
            }
        }
    }
}
