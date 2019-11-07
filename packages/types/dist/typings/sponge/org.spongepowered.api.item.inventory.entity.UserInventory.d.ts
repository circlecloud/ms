// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace entity {
                        // @ts-ignore
                        interface UserInventory extends org.spongepowered.api.item.inventory.type.CarriedInventory {
                            /**
                             * Gets the main inventory including the Hotbar.
                             */
                            // @ts-ignore
                             getMain(): org.spongepowered.api.item.inventory.entity.MainPlayerInventory;
                            /**
                             * Gets the hotbar inventory.
                             */
                            // @ts-ignore
                             getHotbar(): org.spongepowered.api.item.inventory.entity.Hotbar;
                            /**
                             * Gets the main inventory excluding the Hotbar.
                             */
                            // @ts-ignore
                             getMainGrid(): org.spongepowered.api.item.inventory.type.GridInventory;
                            /**
                             * Gets the equipment inventory.
                             */
                            // @ts-ignore
                             getEquipment(): org.spongepowered.api.item.inventory.equipment.EquipmentInventory;
                            /**
                             * Gets the offhand inventory.
                             */
                            // @ts-ignore
                             getOffhand(): org.spongepowered.api.item.inventory.Slot;
                        }
                    }
                }
            }
        }
    }
}
