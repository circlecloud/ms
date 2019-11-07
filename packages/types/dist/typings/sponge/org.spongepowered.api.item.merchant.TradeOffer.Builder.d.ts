declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    namespace TradeOffer {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            /**
                             * <p>Sets the first selling item of the trade offer to be
                             * generated.</p>
                             * <p>Trade offers require at least one item to be generated.</p>
                             */
                            // @ts-ignore
                             firstBuyingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Sets the second selling item of the trade offer to be generated.
                             */
                            // @ts-ignore
                             secondBuyingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Sets the selling item of the trade offer to be generated.
                             */
                            // @ts-ignore
                             sellingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Sets the existing uses of the trade offer to be generated. A trade
                             * offer will become unusable when the uses surpasses the max uses.
                             */
                            // @ts-ignore
                             uses(uses: number): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Sets the maximum uses the generated trade offer will have. A trade
                             * offer will become unusable when the uses surpasses the max uses.
                             */
                            // @ts-ignore
                             maxUses(maxUses: number): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Sets the trade offer to be generated to grant experience upon use.
                             */
                            // @ts-ignore
                             canGrantExperience(experience: boolean): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Creates a new TradeOffer instance with the current state of the
                             * builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.merchant.TradeOffer;
                            /**
                             * Sets all the settings of this builder with the provided trade offer
                             * as a blueprint.
                             */
                            // @ts-ignore
                             from(offer: org.spongepowered.api.item.merchant.TradeOffer): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                            /**
                             * Clears all settings of this builder.
                             */
                            // @ts-ignore
                             reset(): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                        }
                    }
                }
            }
        }
    }
}
