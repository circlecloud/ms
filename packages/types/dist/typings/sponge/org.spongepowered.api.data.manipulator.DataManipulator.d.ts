declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    // @ts-ignore
                    interface DataManipulator extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.value.ValueContainer {
                        /**
                         * Attempts to read data from the given {@link DataHolder} and fills the
                         * associated data onto this {@link DataManipulator}.
                         * <p>Any data that overlaps existing data from the {@link DataHolder} will
                         * take priority and be overwritten from the pre-existing data from the
                         * {@link DataHolder}. It is recommended that a call from
                         * {@link DataHolder#supports(Class)} is checked prior to using this
                         * method on any {@link DataHolder}.</p>
                         */
                        // @ts-ignore
                         fill(dataHolder: org.spongepowered.api.data.DataHolder): java.util.Optional;
                        /**
                         * Attempts to read data from the given {@link DataHolder} and fills the
                         * associated data onto this {@link DataManipulator}. Any data that
                         * overlaps between this and the given {@link DataHolder} will be resolved
                         * using the given {@link MergeFunction}.
                         * <p>Any data that overlaps existing data from the {@link DataHolder} will
                         * take priority and be overwritten from the pre-existing data from the
                         * {@link DataHolder}. It is recommended that a call from
                         * {@link DataHolder#supports(Class)} is checked prior to using this
                         * method on any {@link DataHolder}.</p>
                         */
                        // @ts-ignore
                         fill(dataHolder: org.spongepowered.api.data.DataHolder, overlap: org.spongepowered.api.data.merge.MergeFunction): java.util.Optional;
                        /**
                         * Attempts to read the raw data from the provided {@link DataContainer}.
                         * This manipulator should be "reset" to a default state and apply all data
                         * from the given {@link DataContainer}. If data is missing from the
                         * {@link DataContainer}, {@link Optional#empty()} can be returned.
                         */
                        // @ts-ignore
                         from(container: org.spongepowered.api.data.DataContainer): java.util.Optional;
                        /**
                         * Sets the supported {@link Key}'s value such that the value is set on
                         * this {@link DataManipulator} without having to directly set the
                         * {@link Value} and {@link #set(BaseValue)} afterwards. The requirement
                         * for this to succeed is that the {@link Key} must be checked that it is
                         * supported via {@link #supports(BaseValue)} or {@link #supports(Key)}
                         * otherwise an {@link IllegalArgumentException} may be thrown. For
                         * fluency, after setting, this {@link DataManipulator} is returned.
                         */
                        // @ts-ignore
                         set(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.manipulator.DataManipulator;
                        /**
                         * Sets the supported {@link BaseValue} onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         */
                        // @ts-ignore
                         set(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.manipulator.DataManipulator;
                        /**
                         * Sets the supported {@link BaseValue}s onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         */
                        // @ts-ignore
                         set(values: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.manipulator.DataManipulator;
                        /**
                         * Sets the supported {@link BaseValue}s onto this {@link DataManipulator}.
                         * The requirement for this to succeed is that the {@link BaseValue} is
                         * checked for support via {@link #supports(BaseValue)} or
                         * {@link #supports(Key)} otherwise an {@link IllegalArgumentException}
                         * may be thrown. For fluency, after setting, this {@link DataManipulator}
                         * is returned.
                         */
                        // @ts-ignore
                         set(values: java.lang.Iterable): org.spongepowered.api.data.manipulator.DataManipulator;
                        /**
                         * Applies a transformation on the provided value if available. This is
                         * the same as {@link CompositeValueStore#transform(Key, Function)}.
                         */
                        // @ts-ignore
                         transform(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.manipulator.DataManipulator;
                        // @ts-ignore
                         copy(): org.spongepowered.api.data.manipulator.DataManipulator;
                        /**
                         * Gets an {@link ImmutableDataManipulator} copy of this
                         * {@link DataManipulator} such that all backed {@link Value}s are copied
                         * into {@link ImmutableValue} counterparts. Any changes to this
                         * {@link DataManipulator} will NOT be reflected on the returned
                         * {@link ImmutableDataManipulator} and vice versa.
                         */
                        // @ts-ignore
                         asImmutable(): org.spongepowered.api.data.manipulator.ImmutableDataManipulator;
                    }
                }
            }
        }
    }
}
