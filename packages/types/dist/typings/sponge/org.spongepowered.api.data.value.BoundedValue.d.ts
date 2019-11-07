// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    // @ts-ignore
                    interface BoundedValue extends org.spongepowered.api.data.value.BaseValue {
                        /**
                         * Gets the required "minimum" value such that the value is only valid if
                         * the following is true:
                         * <pre>{@code if (getComparator().compare(getValue(), getMinValue()) <= 0)
                         * }</pre>.
                         */
                        // @ts-ignore
                         getMinValue(): java.lang.Object;
                        /**
                         * Gets the required "maximum" value such that the value is only valid if
                         * the following is true:
                         * <pre>{@code if (getComparator().compare(getValue(), getMaxValue()) >= 0)
                         * }</pre>.
                         */
                        // @ts-ignore
                         getMaxValue(): java.lang.Object;
                        /**
                         * The comparator used to compare a value of the proper type. Can be used
                         * for validation with the {@link #getMinValue()} and
                         * {@link #getMaxValue()}.
                         */
                        // @ts-ignore
                         getComparator(): java.util.Comparator;
                    }
                }
            }
        }
    }
}
