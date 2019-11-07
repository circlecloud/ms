declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface Ageable extends org.spongepowered.api.entity.living.Creature {
                        /**
                         * Sets the scaling to be 1 if this entity is an adult and 0.5 if it is
                         * a baby.
                         */
                        // @ts-ignore
                         setScaleForAge(): void;
                        /**
                         * Gets the {@link AgeableData} that represents age determining whether an
                         * {@link Entity} is a child or an adult.
                         */
                        // @ts-ignore
                         getAgeData(): org.spongepowered.api.data.manipulator.mutable.entity.AgeableData;
                        /**
                         * Gets the {@link MutableBoundedValue} for the "age" state.
                         */
                        // @ts-ignore
                         age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets the {@link Value} for the "adult" state.
                         */
                        // @ts-ignore
                         adult(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
