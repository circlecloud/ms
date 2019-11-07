// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface HealthData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Returns the health amount.
                                 * <p>The range of the health depends on the object on which this
                                 * method is defined. For players in Minecraft, the nominal range is
                                 * between 0 and 20, inclusive, but the range can be adjusted.</p>
                                 * <p>Convention dictates that health does not follow below 0 but this
                                 * convention may be broken.</p>
                                 */
                                // @ts-ignore
                                 health(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the current maximum health.
                                 * <p>The maximum health set here may affect the attribute increasing
                                 * health points. The base health should be minded that it may be lower
                                 * than the total maximum health of this entity.</p>
                                 */
                                // @ts-ignore
                                 maxHealth(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
