declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    interface StringDataFormat extends org.spongepowered.api.data.persistence.DataFormat {
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link String}.
                         */
                        // @ts-ignore
                         read(input: string): org.spongepowered.api.data.DataContainer;
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link Reader}.
                         */
                        // @ts-ignore
                         readFrom(input: any): org.spongepowered.api.data.DataContainer;
                        /**
                         * Serializes the given {@link DataView} to a {@link String} using
                         * the format specified by this {@link DataFormat}.
                         */
                        // @ts-ignore
                         write(data: org.spongepowered.api.data.DataView): string;
                        /**
                         * Writes the given {@link DataView} to the given {@link Writer} using
                         * the format specified by this {@link DataFormat}.
                         */
                        // @ts-ignore
                         writeTo(output: any, data: org.spongepowered.api.data.DataView): void;
                    }
                }
            }
        }
    }
}
