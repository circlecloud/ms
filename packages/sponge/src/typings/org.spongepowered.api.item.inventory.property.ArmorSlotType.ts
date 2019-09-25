declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class ArmorSlotType extends org.spongepowered.api.item.inventory.property.EquipmentSlotType {
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             */
                            constructor(value: org.spongepowered.api.item.inventory.equipment.WornEquipmentType)
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             */
                            constructor(value: org.spongepowered.api.item.inventory.equipment.WornEquipmentType, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             */
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create an ArmourSlotType property which matches ArmourSlotType properties
                             * with equal value.
                             */
                            // @ts-ignore
                            public static of(value: any): org.spongepowered.api.item.inventory.property.ArmorSlotType;
                            /**
                             * Create an ArmourSlotType property which matches ArmourSlotType properties
                             * with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: any): org.spongepowered.api.item.inventory.property.ArmorSlotType;
                        }
                    }
                }
            }
        }
    }
}
