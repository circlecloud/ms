declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface ImmutableDataBuilder extends org.spongepowered.api.data.persistence.DataBuilder {
                    /**
                     * Adds the given {@link DataManipulator} to the builder. The
                     * {@link DataManipulator} is copied when the {@link ImmutableDataHolder}
                     * is created.
                     */
                    // @ts-ignore
                     add(manipulator: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.data.ImmutableDataBuilder;
                    /**
                     * Adds the given {@link ImmutableDataManipulator} to the builder.
                     */
                    // @ts-ignore
                     add(manipulator: org.spongepowered.api.data.manipulator.ImmutableDataManipulator): org.spongepowered.api.data.ImmutableDataBuilder;
                    /**
                     * Adds the given {@link Key} with the given value.
                     */
                    // @ts-ignore
                     add(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.ImmutableDataBuilder;
                    /**
                     * Copies all known {@link DataManipulator}s from the given
                     * {@link ImmutableDataHolder}. This is a defensive copy as
                     * {@link DataManipulator} is mutable.
                     */
                    // @ts-ignore
                     from(holder: org.spongepowered.api.data.ImmutableDataHolder): org.spongepowered.api.data.ImmutableDataBuilder;
                    /**
                     * Attempts to build a new {@link ImmutableDataHolder}.
                     */
                    // @ts-ignore
                     build(): org.spongepowered.api.data.ImmutableDataHolder;
                    // @ts-ignore
                     reset(): org.spongepowered.api.data.ImmutableDataBuilder;
                }
            }
        }
    }
}
