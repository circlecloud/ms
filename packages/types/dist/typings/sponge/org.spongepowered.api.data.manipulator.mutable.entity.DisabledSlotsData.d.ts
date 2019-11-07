// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface DisabledSlotsData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Controls slots that players can't take items from.
                                 */
                                // @ts-ignore
                                 takingDisabled(): org.spongepowered.api.data.value.mutable.SetValue;
                                /**
                                 * Controls slots that players can't place items into.
                                 */
                                // @ts-ignore
                                 placingDisabled(): org.spongepowered.api.data.value.mutable.SetValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
