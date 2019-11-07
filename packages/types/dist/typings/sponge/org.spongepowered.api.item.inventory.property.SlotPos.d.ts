// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class SlotPos extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new SlotPos property for matching the specified value.
                             */
                            // @ts-ignore
                            constructor(value: any /*Vector2i*/)
                            /**
                             * Create a new SlotPos property for matching the specified value.
                             */
                            // @ts-ignore
                            constructor(x: number, y: number)
                            /**
                             * Create a new SlotPos property for matching the specified value with the
                             * specified operator.
                             */
                            // @ts-ignore
                            constructor(value: any /*Vector2i*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new SlotPos property for matching the specified value with the
                             * specified operator.
                             */
                            // @ts-ignore
                            constructor(x: number, y: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Gets the X position of this slot within the queried parent.
                             */
                            // @ts-ignore
                            public getX(): number;
                            /**
                             * Gets the Y position of this slot within the queried parent.
                             */
                            // @ts-ignore
                            public getY(): number;
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with equal
                             * value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with equal
                             * value.
                             */
                            // @ts-ignore
                            public static of(x: number, y: number): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with unequal
                             * value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * greater than or equal to this value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotPos;
                        }
                    }
                }
            }
        }
    }
}
