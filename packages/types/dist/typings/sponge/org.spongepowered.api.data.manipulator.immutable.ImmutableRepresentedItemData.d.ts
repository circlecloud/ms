declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableRepresentedItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                            /**
                             * Gets the {@link ImmutableValue} for the represented {@link ItemStack}
                             * as an {@link ItemStackSnapshot}.
                             */
                            // @ts-ignore
                             item(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                        }
                    }
                }
            }
        }
    }
}
