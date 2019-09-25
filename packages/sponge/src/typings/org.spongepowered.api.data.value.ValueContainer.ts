declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    // @ts-ignore
                    interface ValueContainer {
                        /**
                         * Attempts to get the underlying value backed by a {@link BaseValue}
                         * linked to the provided {@link Key}. If the {@link Key} is not
                         * supported, {@link Optional#empty()} is returned. It is important
                         * to check for support of a {@link Key} by either calling
                         * {@link #supports(BaseValue)} or {@link #supports(Key)}.
                         */
                        // @ts-ignore
                         get(key: org.spongepowered.api.data.key.Key): any;
                        /**
                         * Attempts to get the underlying value backed by a {@link BaseValue}
                         * linked to the provided {@link Key}.
                         * <p>If the {@link Key} is not supported or
                         * available, {@link NoSuchElementException} will be thrown.</p>
                         */
                        // @ts-ignore
                         require(key: org.spongepowered.api.data.key.Key): any;
                        /**
                         * Attempts to get the underlying value if available and supported. If the
                         * {@link BaseValue} is not supported whatsoever by this
                         * {@link ValueContainer}, an exception is thrown.
                         */
                        // @ts-ignore
                         getOrNull(key: org.spongepowered.api.data.key.Key): any;
                        /**
                         * Attempts to get the underlying value if available. If the value is not
                         * set, the given {@code defaultValue} is returned, if the
                         * {@link BaseValue} is even supported.
                         */
                        // @ts-ignore
                         getOrElse(key: org.spongepowered.api.data.key.Key, defaultValue: any): any;
                        /**
                         * Gets the {@link BaseValue} for the given {@link Key}.
                         */
                        // @ts-ignore
                         getValue(key: org.spongepowered.api.data.key.Key): any;
                        /**
                         * Checks if the given {@link Key} is supported by this
                         * {@link ValueContainer}.
                         */
                        // @ts-ignore
                         supports(key: org.spongepowered.api.data.key.Key): boolean;
                        /**
                         * Checks if the provided {@link BaseValue} is supported.
                         */
                        // @ts-ignore
                         supports(baseValue: org.spongepowered.api.data.value.BaseValue): boolean;
                        /**
                         * Creates a clone copy of this {@link ValueContainer} as a new
                         * {@link ValueContainer} such that all the {@link BaseValue}s are
                         * safely duplicated to the new instance.
                         */
                        // @ts-ignore
                         copy(): org.spongepowered.api.data.value.ValueContainer;
                        /**
                         * Gets all applicable {@link Key}s for this {@link ValueContainer}.
                         * Changes can not be made to the set to alter the {@link ValueContainer},
                         * nor can the {@link BaseValue}s be changed with the provided
                         * {@link ImmutableSet}.
                         */
                        // @ts-ignore
                         getKeys(): any[] /*java.util.Set*/;
                        /**
                         * Gets all applicable {@link BaseValue}s associated with this
                         * {@link ValueContainer}. As the data backed by the values are copied,
                         * any modifications to the {@link BaseValue}s will not be reflected onto
                         * this {@link ValueContainer}.
                         */
                        // @ts-ignore
                         getValues(): any[] /*java.util.Set*/;
                    }
                }
            }
        }
    }
}
