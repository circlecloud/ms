// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    interface DataTranslator extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link TypeToken} of this translator.
                         */
                        // @ts-ignore
                         getToken(): any;
                        /**
                         * Attempts to translate the {@code T} object from the provided
                         * {@link DataView}.
                         */
                        // @ts-ignore
                         translate(view: org.spongepowered.api.data.DataView): java.lang.Object;
                        /**
                         * Serializes the provided object to a {@link DataContainer}.
                         */
                        // @ts-ignore
                         translate(obj: java.lang.Object): org.spongepowered.api.data.DataContainer;
                        /**
                         * Serializes the {@code T} object and applies the provided
                         * data to the provided {@link DataView} instead of creating
                         * a new {@link DataContainer}, reducing nested information.
                         */
                        // @ts-ignore
                         addTo(obj: java.lang.Object, dataView: org.spongepowered.api.data.DataView): org.spongepowered.api.data.DataView;
                    }
                }
            }
        }
    }
}
