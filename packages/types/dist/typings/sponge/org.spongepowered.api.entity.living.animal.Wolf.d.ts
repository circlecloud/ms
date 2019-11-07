declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Wolf extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the current {@link AggressiveData} for this
                             * {@link Wolf}.
                             */
                            // @ts-ignore
                             getAggressiveData(): org.spongepowered.api.data.manipulator.mutable.entity.AggressiveData;
                            /**
                             * Gets if this {@link Wolf} is currently aggressive, as a {@link Value}.
                             */
                            // @ts-ignore
                             aggressive(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets a copy of the current {@link DyeableData} for this
                             * {@link Wolf}'s collar.
                             */
                            // @ts-ignore
                             getCollarColorData(): org.spongepowered.api.data.manipulator.mutable.DyeableData;
                            /**
                             * Gets the {@link Wolf}'s {@link DyeColor} of it's collar.
                             */
                            // @ts-ignore
                             collarColor(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
