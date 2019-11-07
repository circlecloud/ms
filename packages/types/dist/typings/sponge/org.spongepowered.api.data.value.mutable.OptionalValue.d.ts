declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface OptionalValue extends org.spongepowered.api.data.value.mutable.Value {
                            // @ts-ignore
                             set(value: java.util.Optional): org.spongepowered.api.data.value.mutable.OptionalValue;
                            /**
                             * Sets the underlying value, may be null.
                             */
                            // @ts-ignore
                             setTo(value: java.lang.Object): org.spongepowered.api.data.value.mutable.OptionalValue;
                            /**
                             * Provides the value such that if the underlying value is
                             * {@code null}, the default value is returned as a {@link Value}, if
                             * the underlying value is present, the underlying value is returned
                             * as a {@link Value}.
                             */
                            // @ts-ignore
                             or(defaultValue: java.lang.Object): org.spongepowered.api.data.value.mutable.Value;
                            // @ts-ignore
                             copy(): org.spongepowered.api.data.value.mutable.OptionalValue;
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                        }
                    }
                }
            }
        }
    }
}
