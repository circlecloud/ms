declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface ChangeEntityEquipmentEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the previously equipped {@link ItemStack} as an
                         * {@link ItemStackSnapshot}.
                         * <p>The previously equipped item may have been empty.</p>
                         */
                        // @ts-ignore
                         getOriginalItemStack(): java.util.Optional;
                        /**
                         * Gets the new {@link ItemStack} that is being equipped in the relative
                         * armor slot.
                         * <p>The itemstack may not exist or the slot is being emptied.</p>
                         */
                        // @ts-ignore
                         getItemStack(): java.util.Optional;
                        /**
                         * Gets the {@link Transaction} of {@link ItemStackSnapshot}s for this event.
                         */
                        // @ts-ignore
                         getTransaction(): org.spongepowered.api.data.Transaction;
                        // @ts-ignore
                         getTargetInventory(): org.spongepowered.api.item.inventory.Slot;
                    }
                }
            }
        }
    }
}
