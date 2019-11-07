// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    namespace TradeOfferGenerator {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the {@link ItemStackGenerator} for creating the primary item
                             * to be bought by the merchant.
                             */
                            // @ts-ignore
                             setPrimaryItemGenerator(generator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Sets the second {@link ItemStackGenerator} for creating the secondary
                             * item to be bought by the merchant.
                             */
                            // @ts-ignore
                             setSecondItemGenerator(generator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Sets the buying {@link ItemStackGenerator} for creating the selling
                             * item that players are buying.
                             */
                            // @ts-ignore
                             setSellingGenerator(sellingGenerator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Sets the chance when {@link Random#nextDouble()} is called where
                             * if the double is greater than the desired experience chance, the
                             * generated {@link TradeOffer} will grant experience upon a
                             * successful trade.
                             */
                            // @ts-ignore
                             experienceChance(experienceChance: number): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Sets the {@link VariableAmount} of starting uses for the generated
                             * {@link TradeOffer}.
                             */
                            // @ts-ignore
                             startingUses(amount: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Sets the {@link VariableAmount} of maximum uses of the generated
                             * {@link TradeOffer}.
                             */
                            // @ts-ignore
                             maxUses(amount: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                            /**
                             * Builds a new {@link TradeOfferGenerator}.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.merchant.TradeOfferGenerator;
                        }
                    }
                }
            }
        }
    }
}
