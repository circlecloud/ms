declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface TradeOfferGenerator extends org.spongepowered.api.item.merchant.TradeOfferListMutator {
                        /**
                         * Gets a new {@link Builder} to create a new {@link TradeOfferGenerator}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder;
                        // @ts-ignore
                         accept(owner: org.spongepowered.api.item.merchant.Merchant, tradeOffers: any[] /*java.util.List*/, random: any): void;
                    }
                }
            }
        }
    }
}
