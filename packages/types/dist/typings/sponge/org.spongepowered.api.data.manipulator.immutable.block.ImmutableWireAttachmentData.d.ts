// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            // @ts-ignore
                            interface ImmutableWireAttachmentData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the current {@link ImmutableMapValue} for the available
                                 * {@link Direction}s and associated{@link WireAttachmentType}s.
                                 */
                                // @ts-ignore
                                 wireAttachments(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#NORTH}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentNorth(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#SOUTH}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentSouth(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#EAST}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentEast(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#WEST}'s
                                 * {@link WireAttachmentType}.
                                 */
                                // @ts-ignore
                                 wireAttachmentWest(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
