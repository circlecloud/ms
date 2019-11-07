declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface RideableHorse extends org.spongepowered.api.entity.living.animal.Horse {
                            /**
                             * Gets a copy of the {@link HorseData} representing this {@link RideableHorse}.
                             */
                            // @ts-ignore
                             getHorseData(): org.spongepowered.api.data.manipulator.mutable.entity.HorseData;
                            /**
                             * Gets the style of the horse.
                             */
                            // @ts-ignore
                             style(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets the color of the horse.
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
