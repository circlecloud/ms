// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    // @ts-ignore
                    interface DataManipulatorBuilder extends org.spongepowered.api.data.persistence.DataBuilder {
                        /**
                         * Creates a new specific {@link DataManipulator} for consumption.
                         */
                        // @ts-ignore
                         create(): org.spongepowered.api.data.manipulator.DataManipulator;
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
                    }
                }
            }
        }
    }
}
