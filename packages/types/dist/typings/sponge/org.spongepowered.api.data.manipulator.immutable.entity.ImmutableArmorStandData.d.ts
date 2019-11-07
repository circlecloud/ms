declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableArmorStandData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Returns whether this armor stand is considered a "marker" where if
                                 * it is a "marker", then the armor stand is not rendered itself, but
                                 * the equipment it has would still be rendered.
                                 */
                                // @ts-ignore
                                 marker(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Returns whether this armor stand is a small armor stand or not.
                                 */
                                // @ts-ignore
                                 small(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Returns whether this armor stand shows arms or not.
                                 * <p>Arms that do not show may also not show an item in hand.</p>
                                 */
                                // @ts-ignore
                                 arms(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets whether this armor stand has a visible base plate or not.
                                 */
                                // @ts-ignore
                                 basePlate(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
