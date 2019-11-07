declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace weather {
                    // @ts-ignore
                    interface WeatherEffect extends org.spongepowered.api.entity.Entity {
                        /**
                         * Returns whether this weather effect is an effect and doesn't deal damage.
                         */
                        // @ts-ignore
                         isEffect(): boolean;
                        /**
                         * Sets whether this weather effect is an effect and doesn't deal damage.
                         */
                        // @ts-ignore
                         setEffect(effect: boolean): void;
                        /**
                         * Gets a copy of the {@link ExpirableData} for this weather entity.
                         */
                        // @ts-ignore
                         getExpiringData(): org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData;
                        /**
                         * Gets the {@link MutableBoundedValue} for the amount of "ticks" remaining
                         * before the "expiration" occurs.
                         */
                        // @ts-ignore
                         expireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    }
                }
            }
        }
    }
}
