declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            // @ts-ignore
                            interface DurabilityData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "durability" remaining.
                                 * The durability is a number signifying how many "uses' remain on the
                                 * item. When the durability reaches 0, usually, the item breaks.
                                 */
                                // @ts-ignore
                                 durability(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link Value} for the "unbreakable" state of the
                                 * {@link ItemStack}. While the {@link ItemStack} is "unbreakable",
                                 * the durability can not change.
                                 */
                                // @ts-ignore
                                 unbreakable(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
