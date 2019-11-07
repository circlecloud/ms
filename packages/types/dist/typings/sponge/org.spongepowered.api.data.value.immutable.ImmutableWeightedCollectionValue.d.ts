// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableWeightedCollectionValue extends org.spongepowered.api.data.value.immutable.ImmutableCollectionValue {
                            /**
                             * Selects a random value from this list based on their weight.
                             * <p>If the list is empty then null will be returned.</p>
                             */
                            // @ts-ignore
                             get(random: java.util.Random): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
