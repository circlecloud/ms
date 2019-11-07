declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        // @ts-ignore
                        interface ZombiePigman extends org.spongepowered.api.entity.living.monster.Zombie {
                            /**
                             * Gets a copy of the {@link AngerableData} for this {@link ZombiePigman}.
                             */
                            // @ts-ignore
                             getAngerData(): org.spongepowered.api.data.manipulator.mutable.entity.AngerableData;
                            /**
                             * Gets the {@link MutableBoundedValue value} of the current "anger" level
                             * of this {@link ZombiePigman pigzombie}.
                             */
                            // @ts-ignore
                             angerLevel(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
