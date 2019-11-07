declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface IgniteEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original amount of fire ticks the entity will remain on fire.
                         */
                        // @ts-ignore
                         getOriginalFireTicks(): number;
                        /**
                         * Gets the amount of ticks the entity will remain on fire.
                         */
                        // @ts-ignore
                         getFireTicks(): number;
                        /**
                         * Sets the amount of ticks the entity will remain on fire.
                         */
                        // @ts-ignore
                         setFireTicks(fireTicks: number): void;
                    }
                }
            }
        }
    }
}
