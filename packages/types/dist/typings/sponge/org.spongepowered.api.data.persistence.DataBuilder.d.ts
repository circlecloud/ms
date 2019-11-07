// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    interface DataBuilder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Attempts to build the provided {@link DataSerializable} from the given
                         * {@link DataView}. If the {@link DataView} is invalid or
                         * missing necessary information to complete building the
                         * {@link DataSerializable}, {@link Optional#empty()} may be returned.
                         */
                        // @ts-ignore
                         build(container: org.spongepowered.api.data.DataView): java.util.Optional;
                        // @ts-ignore
                         reset(): org.spongepowered.api.data.persistence.DataBuilder;
                        // @ts-ignore
                         from(value: org.spongepowered.api.data.DataSerializable): org.spongepowered.api.data.persistence.DataBuilder;
                    }
                }
            }
        }
    }
}
