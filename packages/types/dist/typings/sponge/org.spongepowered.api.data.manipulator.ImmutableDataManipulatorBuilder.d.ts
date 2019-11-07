declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    // @ts-ignore
                    interface ImmutableDataManipulatorBuilder extends org.spongepowered.api.data.persistence.DataBuilder {
                        /**
                         * Creates a new specific {@link ImmutableDataManipulator} for consumption.
                         */
                        // @ts-ignore
                         createImmutable(): org.spongepowered.api.data.manipulator.ImmutableDataManipulator;
                        /**
                         * Attempts to read data from the given {@link DataHolder} and constructs
                         * a new copy of the {@link DataManipulator} as an instance of
                         * <code>T</code>.
                         * <p>If the {@link DataHolder} does not contain the necessary information
                         * to pre-populate the {@link DataManipulator}, a fresh new
                         * {@link DataManipulator} is returned. If the {@link DataManipulator} is
                         * incompatible with the {@link DataHolder}, {@link Optional#empty()} is
                         * returned.</p>
                         */
                        // @ts-ignore
                         createFrom(dataHolder: org.spongepowered.api.data.DataHolder): java.util.Optional;
                        /**
                         * Creates the desired {@link ImmutableDataManipulator} from the provided
                         * {@link ImmutableDataHolder}, if it is supported.
                         */
                        // @ts-ignore
                         createFrom(dataHolder: org.spongepowered.api.data.ImmutableDataHolder): java.util.Optional;
                        // @ts-ignore
                         reset(): org.spongepowered.api.data.manipulator.ImmutableDataManipulatorBuilder;
                    }
                }
            }
        }
    }
}
