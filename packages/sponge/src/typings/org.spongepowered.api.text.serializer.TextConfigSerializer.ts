declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                     class TextConfigSerializer extends org.spongepowered.api.data.persistence.AbstractDataBuilder {
                        /**
                         * Creates a new {@link TextConfigSerializer}. Normally this should not
                         * need to be created more than once.
                         */
                        constructor()
                        // @ts-ignore
                        public deserialize(type: any, value: any /*ConfigurationNode*/): org.spongepowered.api.text.Text;
                        // @ts-ignore
                        public serialize(type: any, obj: org.spongepowered.api.text.Text, value: any /*ConfigurationNode*/): void;
                        // @ts-ignore
                        protected buildContent(container: org.spongepowered.api.data.DataView): any;
                    }
                }
            }
        }
    }
}
