declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class EquipmentSlotType extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType)
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create an EquipmentSlotType property which matches EquipmentSlotType
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.EquipmentSlotType;
                            /**
                             * Create an EquipmentSlotType property which matches EquipmentSlotType
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.EquipmentSlotType;
                        }
                    }
                }
            }
        }
    }
}
