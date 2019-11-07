declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    // @ts-ignore
                    interface Recipe extends org.spongepowered.api.CatalogType {
                        /**
                         * A general result of this recipe. This result may be customized depending
                         * on the context.
                         */
                        // @ts-ignore
                         getExemplaryResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                    }
                }
            }
        }
    }
}
