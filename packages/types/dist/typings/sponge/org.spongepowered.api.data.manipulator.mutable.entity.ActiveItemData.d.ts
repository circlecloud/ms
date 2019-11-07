// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface ActiveItemData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the item stack snapshot of the item that is currently being used.
                                 * <p>If there is no item, the snapshot will be empty. You can check this
                                 * with {@link ItemStackSnapshot#isEmpty()}.</p>
                                 */
                                // @ts-ignore
                                 activeItem(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
