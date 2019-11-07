declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace ValueFactory {
                        // @ts-ignore
                        interface BoundedValueBuilder {
                            /**
                             * If <code>E</code> is not {@link Comparable}, a {@link Comparator}
                             * is required. The builder by default will attempt to check if
                             * the type is a {@link Comparable} and delegate to the default
                             * {@link Comparable#compareTo(Object)} for comparisons. In short, the
                             * {@link Comparator} is only required if the element is not
                             * {@link Comparable}, or custom comparisons are required.
                             */
                            // @ts-ignore
                             comparator(comparator: java.util.Comparator): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                            /**
                             * Sets the minimum supported value.
                             */
                            // @ts-ignore
                             minimum(min: java.lang.Object): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                            /**
                             * Sets the maximum supported value.
                             */
                            // @ts-ignore
                             maximum(max: java.lang.Object): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                            /**
                             * Sets the default value. This is required. If no value is set,
                             * the default value transitively sets the value.
                             */
                            // @ts-ignore
                             defaultValue(defaultValue: java.lang.Object): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                            /**
                             * Sets the actual value. Though not required, if the value is
                             * different from the {@link #defaultValue(Object)}, it should be
                             * set.
                             */
                            // @ts-ignore
                             actualValue(actual: java.lang.Object): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                            /**
                             * Builds a new {@link MutableBoundedValue}. The requirements are
                             * that the {@link #minimum(Object)}, {@link #maximum(Object)},
                             * {@link #defaultValue(Object)} are set, and if the <code>E</code> is
                             * not {@link Comparable}, {@link #comparator(Comparator)} is set.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
