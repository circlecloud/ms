// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    // @ts-ignore
                    interface Boat extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets whether this boat is currently in water.
                         */
                        // @ts-ignore
                         isInWater(): boolean;
                        /**
                         * Gets the maximum speed that this boat is allowed to travel at.
                         * <p>The Default value is 0.4.</p>
                         */
                        // @ts-ignore
                         getMaxSpeed(): number;
                        /**
                         * Sets the maximum speed that this boat is allowed to travel at.
                         * <p>The Default value is 0.4.</p>
                         */
                        // @ts-ignore
                         setMaxSpeed(maxSpeed: number): void;
                        /**
                         * Gets whether or not the boat is able to move freely on land.
                         */
                        // @ts-ignore
                         canMoveOnLand(): boolean;
                        /**
                         * Gets whether or not the boat is able to move freely on land.
                         */
                        // @ts-ignore
                         setMoveOnLand(moveOnLand: boolean): void;
                        /**
                         * Gets the rate at which occupied boats decelerate.
                         */
                        // @ts-ignore
                         getOccupiedDeceleration(): number;
                        /**
                         * Sets the rate at which occupied boats decelerate.
                         */
                        // @ts-ignore
                         setOccupiedDeceleration(occupiedDeceleration: number): void;
                        /**
                         * Gets the rate at which unoccupied boats decelerate.
                         */
                        // @ts-ignore
                         getUnoccupiedDeceleration(): number;
                        /**
                         * Sets the rate at which unoccupied boats decelerate.
                         */
                        // @ts-ignore
                         setUnoccupiedDeceleration(unoccupiedDeceleration: number): void;
                    }
                }
            }
        }
    }
}
