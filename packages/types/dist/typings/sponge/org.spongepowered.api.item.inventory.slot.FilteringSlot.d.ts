declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        // @ts-ignore
                        interface FilteringSlot extends org.spongepowered.api.item.inventory.Slot {
                            /**
                             * Check whether the supplied item can be inserted into this slot. Returning
                             * false from this method implies that {@link #offer} <b>would always return
                             * false</b> for this item.
                             */
                            // @ts-ignore
                             isValidItem(stack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                            /**
                             * Check whether the supplied item can be inserted into this slot. Returning
                             * false from this method implies that {@link #offer} <b>would always return
                             * false</b> for items of this type.
                             */
                            // @ts-ignore
                             isValidItem(type: org.spongepowered.api.item.ItemType): boolean;
                        }
                    }
                }
            }
        }
    }
}
