// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    // @ts-ignore
                    interface BaseValue {
                        /**
                         * Gets the held value. Usually all held values are "filled" and not
                         * "defaulted"; however, in the case that the actual value is not set or
                         * {@link #exists()} returns false, the {@link #getDefault()} value is
                         * returned.
                         */
                        // @ts-ignore
                         get(): java.lang.Object;
                        /**
                         * Checks that the underlying value exists (or "set").
                         */
                        // @ts-ignore
                         exists(): boolean;
                        /**
                         * Gets the default value. There is always a default value, however,
                         * usability of the default value may be questionable in certain
                         * circumstances.
                         */
                        // @ts-ignore
                         getDefault(): java.lang.Object;
                        /**
                         * Gets the direct value. Since some values may be absent for various
                         * reasons, the {@link #get()} would return the {@link #getDefault()} when
                         * necessary.
                         */
                        // @ts-ignore
                         getDirect(): java.util.Optional;
                        /**
                         * Gets the key for this {@link BaseValue}.
                         */
                        // @ts-ignore
                         getKey(): org.spongepowered.api.data.key.Key;
                    }
                }
            }
        }
    }
}
