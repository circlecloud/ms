// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            // @ts-ignore
                            interface StoredEnchantmentData extends org.spongepowered.api.data.manipulator.mutable.ListData {
                                /**
                                 * Gets the {@link ListValue} of {@link Enchantment}s stored such
                                 * that it can be applied to an {@link ItemStack}.
                                 */
                                // @ts-ignore
                                 enchantments(): org.spongepowered.api.data.value.mutable.ListValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
