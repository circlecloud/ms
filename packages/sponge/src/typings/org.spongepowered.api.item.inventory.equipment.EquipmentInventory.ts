declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace equipment {
                        // @ts-ignore
                        interface EquipmentInventory extends org.spongepowered.api.item.inventory.type.OrderedInventory, org.spongepowered.api.item.inventory.type.CarriedInventory {
                            /**
                             * Gets and remove the stack for the specified equipment type in this
                             * Inventory.
                             */
                            // @ts-ignore
                             poll(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): any;
                            /**
                             * Gets and remove the items from the stack for the specified equipment type
                             * in this Inventory.
                             */
                            // @ts-ignore
                             poll(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, limit: number): any;
                            /**
                             * Gets and remove the stack for the specified equipment type in this
                             * Inventory.
                             */
                            // @ts-ignore
                             poll(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): any;
                            /**
                             * Gets and remove the items from the stack for the specified equipment type
                             * in this Inventory.
                             */
                            // @ts-ignore
                             poll(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, limit: number): any;
                            /**
                             * Gets without removing the stack for the specified equipment type in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): any;
                            /**
                             * Gets without removing the items from the stack for the specified
                             * equipment type in this Inventory.
                             */
                            // @ts-ignore
                             peek(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, limit: number): any;
                            /**
                             * Gets without removing the stack for the specified equipment type in this
                             * Inventory.
                             */
                            // @ts-ignore
                             peek(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): any;
                            /**
                             * Gets without removing the items from the stack for the specified
                             * equipment type in this Inventory.
                             */
                            // @ts-ignore
                             peek(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, limit: number): any;
                            /**
                             * Sets the item for the specified equipment type.
                             */
                            // @ts-ignore
                             set(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Sets the item for the specified equipment type.
                             */
                            // @ts-ignore
                             set(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult;
                            /**
                             * Gets the {@link Slot} for the specified equipment type.
                             */
                            // @ts-ignore
                             getSlot(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): any;
                            /**
                             * Gets the {@link Slot} for the specified equipment type.
                             */
                            // @ts-ignore
                             getSlot(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): any;
                        }
                    }
                }
            }
        }
    }
}
