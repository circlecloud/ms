// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface Equipable extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.item.inventory.Carrier {
                    /**
                     * Gets whether this entity can equip equipment of the specified type (eg.
                     * whether calling {@link #equip} will fail because the entity doesn't
                     * have this type of slot.
                     */
                    // @ts-ignore
                     canEquip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): boolean;
                    /**
                     * Gets whether this entity can equip the supplied equipment in its slot of
                     * the specified type (eg. whether calling {@link #equip} with the specified
                     * slot type and item will succeed)
                     */
                    // @ts-ignore
                     canEquip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType, equipment: org.spongepowered.api.item.inventory.ItemStack): boolean;
                    /**
                     * Gets the item currently equipped by this entity in the specified slot.
                     */
                    // @ts-ignore
                     getEquipped(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): java.util.Optional;
                    /**
                     * Sets the item currently equipped by the entity in the specified slot, if
                     * the entity has such a slot.
                     * <p>Supplying null will unequip any currently equipped item.</p>
                     */
                    // @ts-ignore
                     equip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType, equipment: org.spongepowered.api.item.inventory.ItemStack): boolean;
                }
            }
        }
    }
}
