declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            // @ts-ignore
                            interface HideData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for the "enchantments hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideEnchantments(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "attributes hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideAttributes(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "unbreakable hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideUnbreakable(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "can destroy hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideCanDestroy(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "can place hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideCanPlace(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "miscellaneous hidden" state of an itemstack.
                                 */
                                // @ts-ignore
                                 hideMiscellaneous(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
