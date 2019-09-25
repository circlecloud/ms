declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableActiveItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the item stack snapshot of the item that is currently being used.
                                 * <p>If there is no item, the snapshot will be empty. You can check this
                                 * with {@link ItemStackSnapshot#isEmpty()}.</p>
                                 */
                                // @ts-ignore
                                 activeItem(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
