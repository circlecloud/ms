// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        // @ts-ignore
                        interface Minecart extends org.spongepowered.api.entity.Entity {
                            /**
                             * Gets whether or not the minecart is currently on a valid rail block.
                             */
                            // @ts-ignore
                             isOnRail(): boolean;
                            /**
                             * Gets the absolute maximum speed that this cart is allowed to travel at.
                             * <p>The default value is 0.4.</p>
                             */
                            // @ts-ignore
                             getSwiftness(): number;
                            /**
                             * Sets the absolute maximum speed that this cart is allowed to travel at.
                             * <p>The default value is 0.4.</p>
                             */
                            // @ts-ignore
                             setSwiftness(swiftness: number): void;
                            /**
                             * Gets the maximum speed that this cart is allowed to travel at the instant
                             * this method is called.
                             * <p>This differs from {@link Minecart#getSwiftness()} in that its value is
                             * affected by the block/rail beneath the cart. However, it is still
                             * impacted and limited by the cart's swiftness.</p>
                             */
                            // @ts-ignore
                             getPotentialMaxSpeed(): number;
                            /**
                             * Gets whether or not the minecart slows down faster without a passenger.
                             */
                            // @ts-ignore
                             doesSlowWhenEmpty(): boolean;
                            /**
                             * Sets whether or not the minecart slows down faster without a passenger.
                             */
                            // @ts-ignore
                             setSlowWhenEmpty(slowWhenEmpty: boolean): void;
                            /**
                             * Gets the velocity modifier applied when the minecart is airborne.
                             */
                            // @ts-ignore
                             getAirborneVelocityMod(): any /*Vector3d*/;
                            /**
                             * Sets the velocity modifier applied when the minecart is airborne.
                             */
                            // @ts-ignore
                             setAirborneVelocityMod(airborneVelocityMod: any /*Vector3d*/): void;
                            /**
                             * Gets the velocity modifier applied when the minecart is not on rails.
                             */
                            // @ts-ignore
                             getDerailedVelocityMod(): any /*Vector3d*/;
                            /**
                             * Sets the velocity modifier applied when the minecart is not on rails.
                             */
                            // @ts-ignore
                             setDerailedVelocityMod(derailedVelocityMod: any /*Vector3d*/): void;
                        }
                    }
                }
            }
        }
    }
}
