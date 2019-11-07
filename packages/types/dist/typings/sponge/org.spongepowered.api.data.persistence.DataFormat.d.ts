// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    interface DataFormat extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link InputStream}.
                         */
                        // @ts-ignore
                         readFrom(input: java.io.InputStream): org.spongepowered.api.data.DataContainer;
                        /**
                         * Writes the given {@link DataView} to the given {@link OutputStream} using
                         * the format specified by this {@link DataFormat}.
                         */
                        // @ts-ignore
                         writeTo(output: java.io.OutputStream, data: org.spongepowered.api.data.DataView): void;
                    }
                }
            }
        }
    }
}
