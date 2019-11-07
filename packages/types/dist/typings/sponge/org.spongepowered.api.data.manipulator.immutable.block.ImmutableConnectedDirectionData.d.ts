declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            // @ts-ignore
                            interface ImmutableConnectedDirectionData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableSetValue} for the currently "connected"
                                 * {@link Direction}s.
                                 */
                                // @ts-ignore
                                 connectedDirections(): org.spongepowered.api.data.value.immutable.ImmutableSetValue;
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#NORTH} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedNorth(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#SOUTH} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedSouth(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#EAST} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedEast(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#WEST} is
                                 * "connected".
                                 */
                                // @ts-ignore
                                 connectedWest(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
