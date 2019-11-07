declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Parrot extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the current {@link ParrotData} being represented by
                             * this {@link Parrot}.
                             */
                            // @ts-ignore
                             getParrotData(): org.spongepowered.api.data.manipulator.mutable.entity.ParrotData;
                            /**
                             * Gets the {@link Value} for the {@link ParrotVariant} of this
                             * {@link Parrot}.
                             */
                            // @ts-ignore
                             variant(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
