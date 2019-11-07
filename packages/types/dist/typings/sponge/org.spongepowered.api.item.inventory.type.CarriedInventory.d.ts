// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface CarriedInventory extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Returns the Carrier of this Inventory. It can be an entity, block, or
                             * other object.
                             */
                            // @ts-ignore
                             getCarrier(): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
