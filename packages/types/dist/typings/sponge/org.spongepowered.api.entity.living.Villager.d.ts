// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface Villager extends org.spongepowered.api.entity.living.Ageable, org.spongepowered.api.item.merchant.Merchant {
                        /**
                         * Returns true if this villager is currently trading with another
                         * {@link Humanoid}. A villager is normally
                         * unable to trade with multiple HumanEntities at the same time.
                         */
                        // @ts-ignore
                         isTrading(): boolean;
                        /**
                         * Gets a copy of the current {@link CareerData} for this {@link Villager}
                         * entity.
                         */
                        // @ts-ignore
                         getCareerData(): org.spongepowered.api.data.manipulator.mutable.entity.CareerData;
                        /**
                         * Gets the current {@link Career} of this villager.
                         */
                        // @ts-ignore
                         career(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
