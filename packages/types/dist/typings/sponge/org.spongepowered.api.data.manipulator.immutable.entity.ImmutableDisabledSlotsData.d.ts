// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableDisabledSlotsData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Controls slots that players can't take items from.
                                 */
                                // @ts-ignore
                                 takingDisabled(): org.spongepowered.api.data.value.immutable.ImmutableSetValue;
                                /**
                                 * Controls slots that players can't place items into.
                                 */
                                // @ts-ignore
                                 placingDisabled(): org.spongepowered.api.data.value.immutable.ImmutableSetValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
