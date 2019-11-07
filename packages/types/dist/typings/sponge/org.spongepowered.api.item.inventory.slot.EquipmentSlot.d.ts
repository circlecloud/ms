// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        // @ts-ignore
                        interface EquipmentSlot extends org.spongepowered.api.item.inventory.slot.FilteringSlot {
                            /**
                             * Check whether the supplied equipment type can be inserted into this slot.
                             * Returning false from this method implies that {@link #offer} <b>would
                             * always return false</b> for items of this type.
                             */
                            // @ts-ignore
                             isValidItem(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): boolean;
                        }
                    }
                }
            }
        }
    }
}
