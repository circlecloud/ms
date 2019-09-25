declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface Merchant extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.item.inventory.Carrier, org.spongepowered.api.world.Locatable {
                        /**
                         * Gets the currently trading customer with this merchant.
                         */
                        // @ts-ignore
                         getCustomer(): any;
                        /**
                         * Sets the currently trading customer with this merchant.
                         * <p>If the humanoid entity is available, a new trading window may open
                         * with this merchant.</p>
                         */
                        // @ts-ignore
                         setCustomer(humanoid: org.spongepowered.api.entity.living.Humanoid): void;
                        /**
                         * Gets a copy of the used {@link TradeOfferData} containing all available
                         * {@link TradeOffer}s this {@link Merchant} may use.
                         */
                        // @ts-ignore
                         getTradeOfferData(): org.spongepowered.api.data.manipulator.mutable.entity.TradeOfferData;
                    }
                }
            }
        }
    }
}
