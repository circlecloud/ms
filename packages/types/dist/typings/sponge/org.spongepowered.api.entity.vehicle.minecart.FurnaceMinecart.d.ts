// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        // @ts-ignore
                        interface FurnaceMinecart extends org.spongepowered.api.entity.vehicle.minecart.Minecart {
                            /**
                             * Gets the current fuel time in ticks.
                             * <p>Usually, the fuel time will decay until reaching 0. At zero, the fuel
                             * minecart will decelerate to a stop.</p>
                             */
                            // @ts-ignore
                             getFuel(): number;
                            /**
                             * Sets the fuel time in ticks.
                             * <p>Usually, the fuel time will decay until reaching 0. At zero, the fuel
                             * minecart will decelerate to a stop.</p>
                             */
                            // @ts-ignore
                             setFuel(fuel: number): void;
                        }
                    }
                }
            }
        }
    }
}
