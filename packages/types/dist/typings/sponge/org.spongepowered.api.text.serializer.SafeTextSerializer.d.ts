declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                    interface SafeTextSerializer extends org.spongepowered.api.text.serializer.TextSerializer {
                        // @ts-ignore
                         deserialize(input: string): org.spongepowered.api.text.Text;
                        // @ts-ignore
                         deserializeUnchecked(input: string): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
