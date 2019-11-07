// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            // @ts-ignore
                            interface ConnectedDirectionData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link SetValue} for the currently "connected"
                                 * {@link Direction}s.
                                 */
                                // @ts-ignore
                                 connectedDirections(): org.spongepowered.api.data.value.mutable.SetValue;
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#NORTH} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedNorth(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#SOUTH} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedSouth(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#EAST} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedEast(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#WEST} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedWest(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
