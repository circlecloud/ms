declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface WeightedCollectionValue extends org.spongepowered.api.data.value.mutable.CollectionValue {
                            /**
                             * Selects a random value from this list based on their weight.
                             * <p>If the list is empty then null will be returned.</p>
                             */
                            // @ts-ignore
                             get(random: any): any[] /*java.util.List*/;
                        }
                    }
                }
            }
        }
    }
}
