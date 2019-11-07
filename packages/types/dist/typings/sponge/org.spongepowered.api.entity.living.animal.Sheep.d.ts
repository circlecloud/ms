// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Sheep extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link Sheep} entity.
                             */
                            // @ts-ignore
                             getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData;
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link Sheep}.
                             */
                            // @ts-ignore
                             color(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
