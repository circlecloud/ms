// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        // @ts-ignore
                        interface Endermite extends org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets a copy of the {@link ExpirableData} for this endermite.
                             */
                            // @ts-ignore
                             getExpirableData(): org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData;
                            /**
                             * Gets the {@link MutableBoundedValue} for the amount of "ticks"
                             * remaining before the "expiration" occurs.
                             */
                            // @ts-ignore
                             expireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
