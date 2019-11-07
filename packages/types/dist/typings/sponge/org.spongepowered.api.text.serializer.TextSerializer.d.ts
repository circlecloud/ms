declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                    interface TextSerializer extends org.spongepowered.api.CatalogType {
                        /**
                         * Returns a string representation of the provided {@link Text} in a format
                         * that will be accepted by this {@link TextSerializer}'s
                         * {@link #deserialize(String)} method.
                         */
                        // @ts-ignore
                         serialize(text: org.spongepowered.api.text.Text): string;
                        /**
                         * Returns a string representation of only the provided {@link Text}
                         * (without any children) in a format that will be accepted by this
                         * {@link TextSerializer}'s {@link #deserialize(String)} method.
                         */
                        // @ts-ignore
                         serializeSingle(text: org.spongepowered.api.text.Text): string;
                        /**
                         * Returns a {@link Text} instance from an appropriately formatted string.
                         */
                        // @ts-ignore
                         deserialize(input: string): org.spongepowered.api.text.Text;
                        /**
                         * Tries to return a {@link Text} instance from the provided input string.
                         * However, if the input string is not of a valid format, the returned
                         * {@link Text} object will be of the raw input, rather than throwing an
                         * exception.
                         */
                        // @ts-ignore
                         deserializeUnchecked(input: string): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
