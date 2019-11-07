declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    // @ts-ignore
                    interface ImmutableDataManipulator extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.value.ValueContainer {
                        /**
                         * Creates a new {@link ImmutableDataManipulator} with the provided value
                         * if the {@link Key} is supported by this {@link ImmutableDataManipulator}
                         * without exception.
                         */
                        // @ts-ignore
                         with(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): java.util.Optional;
                        /**
                         * Creates a new {@link ImmutableDataManipulator} with the provided
                         * {@link BaseValue} provided that the {@link BaseValue} is supported by
                         * this {@link ImmutableDataManipulator}. A simple check can be called for
                         * {@link #supports(BaseValue)} prior to ensure
                         * {@link Optional#isPresent()} returns {@code true}.
                         */
                        // @ts-ignore
                         with(value: org.spongepowered.api.data.value.BaseValue): java.util.Optional;
                        // @ts-ignore
                         copy(): org.spongepowered.api.data.manipulator.ImmutableDataManipulator;
                        /**
                         * Gets a {@link DataManipulator} copy of this
                         * {@link ImmutableDataManipulator} such that all backed
                         * {@link ImmutableValue}s are copied into their {@link Value}
                         * counterparts. Any changes to this {@link ImmutableDataManipulator} will
                         * NOT be reflected on the returned {@link DataManipulator} and vice versa.
                         */
                        // @ts-ignore
                         asMutable(): org.spongepowered.api.data.manipulator.DataManipulator;
                    }
                }
            }
        }
    }
}
