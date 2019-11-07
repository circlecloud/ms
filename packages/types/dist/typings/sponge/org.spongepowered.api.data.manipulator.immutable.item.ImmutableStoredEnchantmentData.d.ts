// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            // @ts-ignore
                            interface ImmutableStoredEnchantmentData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData {
                                /**
                                 * Gets the {@link ImmutableListValue} of {@link Enchantment}s stored
                                 * such that it can be applied to an {@link ItemStack}.
                                 */
                                // @ts-ignore
                                 enchantments(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
