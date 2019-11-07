// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface ThrownPotion extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets a copy of the {@link RepresentedItemData} used by this potion.
                         */
                        // @ts-ignore
                         getPotionItemData(): org.spongepowered.api.data.manipulator.mutable.RepresentedItemData;
                        /**
                         * Gets the {@link Value} for the represented {@link ItemStack} as an
                         * {@link ItemStackSnapshot}.
                         */
                        // @ts-ignore
                         item(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
