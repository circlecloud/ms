declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface ArmorStandData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Returns whether this armor stand is rendered invisible and simply a
                                 * "marker". The inventory contents and nameplate will still show, but
                                 * the body itself of the armor stand will not be visible.
                                 */
                                // @ts-ignore
                                 marker(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Returns whether this armor stand is a small armor stand or not.
                                 */
                                // @ts-ignore
                                 small(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Returns whether this armor stand shows arms or not.
                                 * <p>Arms that do not show may also not show an item in hand.</p>
                                 */
                                // @ts-ignore
                                 arms(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets whether this armor stand has a visible base plate or not.
                                 */
                                // @ts-ignore
                                 basePlate(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
