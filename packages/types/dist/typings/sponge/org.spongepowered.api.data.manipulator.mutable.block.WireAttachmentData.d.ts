// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            // @ts-ignore
                            interface WireAttachmentData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the current {@link MapValue} for the available {@link Direction}s
                                 * and associated{@link WireAttachmentType}s.
                                 */
                                // @ts-ignore
                                 wireAttachments(): org.spongepowered.api.data.value.mutable.MapValue;
                                /**
                                 * Gets the {@link Value} for the {@link Direction#NORTH}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentNorth(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the {@link Direction#SOUTH}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentSouth(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the {@link Direction#EAST}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentEast(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the {@link Direction#WEST}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentWest(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
