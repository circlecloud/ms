declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        // @ts-ignore
                        interface SidedSlot extends org.spongepowered.api.item.inventory.Slot {
                            /**
                             * Gets whether this slot can accept the specified item from the specified
                             * direction.
                             */
                            // @ts-ignore
                             canAccept(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean;
                            /**
                             * Attempts to insert the supplied stack into this inventory from the
                             * specified direction.
                             */
                            // @ts-ignore
                             offer(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean;
                            /**
                             * Gets whether automation can extract the specified item from the specified
                             * direction.
                             */
                            // @ts-ignore
                             canGet(stack: org.spongepowered.api.item.inventory.ItemStack, from: org.spongepowered.api.util.Direction): boolean;
                        }
                    }
                }
            }
        }
    }
}
