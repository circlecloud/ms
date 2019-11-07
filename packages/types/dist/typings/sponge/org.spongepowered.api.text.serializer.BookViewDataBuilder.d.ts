declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                     class BookViewDataBuilder extends org.spongepowered.api.data.persistence.AbstractDataBuilder {
                        /**
                         * Constructs a new {@link BookViewDataBuilder} to build
                         * {@link BookView}s.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional;
                        // @ts-ignore
                        public deserialize(type: any, value: any /*ConfigurationNode*/): org.spongepowered.api.text.BookView;
                        // @ts-ignore
                        public serialize(type: any, bookView: org.spongepowered.api.text.BookView, value: any /*ConfigurationNode*/): void;
                    }
                }
            }
        }
    }
}
