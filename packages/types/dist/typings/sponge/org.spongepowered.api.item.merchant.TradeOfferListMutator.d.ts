declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface TradeOfferListMutator {
                        /**
                         * Mutates the provided {@link List list} of {@link TradeOffer}s
                         * with the provided {@link Merchant} and {@link Random} to provide
                         * possible contextualized information.
                         */
                        // @ts-ignore
                         accept(owner: org.spongepowered.api.item.merchant.Merchant, tradeOffers: java.util.List, random: java.util.Random): void;
                    }
                }
            }
        }
    }
}
