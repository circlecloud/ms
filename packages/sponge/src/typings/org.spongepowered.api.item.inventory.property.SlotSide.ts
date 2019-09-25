declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class SlotSide extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new SlotSide property for matching the specified value.
                             */
                            constructor(value: org.spongepowered.api.util.Direction)
                            /**
                             * Create a new SlotSide property for matching the specified value with the
                             * specified operator.
                             */
                            constructor(value: org.spongepowered.api.util.Direction, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new SlotSide property for matching the specified value with the
                             * specified operator.
                             */
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create a SlotSide property which matches SlotSide properties with equal
                             * value.
                             */
                            // @ts-ignore
                            public static of(value: any): org.spongepowered.api.item.inventory.property.SlotSide;
                            /**
                             * Create a SlotSide property which matches SlotSide properties with unequal
                             * value.
                             */
                            // @ts-ignore
                            public static not(value: any): org.spongepowered.api.item.inventory.property.SlotSide;
                        }
                    }
                }
            }
        }
    }
}
