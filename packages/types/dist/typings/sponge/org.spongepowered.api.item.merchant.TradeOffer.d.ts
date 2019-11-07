declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface TradeOffer extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to build a {@link TradeOffer}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.merchant.TradeOffer.Builder;
                        /**
                         * Gets the first buying item.
                         * <p>The first buying item is an item that the customer is selling to the
                         * merchant in exchange for {@link #getSellingItem()}.</p>
                         */
                        // @ts-ignore
                         getFirstBuyingItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        /**
                         * Returns whether this trade offer has a second item the merchant is buying
                         * from the customer.
                         */
                        // @ts-ignore
                         hasSecondItem(): boolean;
                        /**
                         * <p>Gets the second buying item.</p>
                         * <p>The second buying item is an item that the customer is selling to the
                         * merchant, along with the {@link #getFirstBuyingItem()}, in exchange for
                         * {@link #getSellingItem()}.</p>
                         */
                        // @ts-ignore
                         getSecondBuyingItem(): java.util.Optional;
                        /**
                         * Gets the selling item the {@link Merchant} will give to the customer
                         * often in exchange for a single item or sometimes, two items from the
                         * following methods: {@link #getFirstBuyingItem()} and
                         * {@link #getSecondBuyingItem}.
                         */
                        // @ts-ignore
                         getSellingItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                        /**
                         * <p>Gets the current uses of this offer.</p>
                         * <p>Usually, the uses of an offer are limited by the amount of
                         * {@link #getMaxUses()}. Once the uses reaches the max uses, the offer may
                         * temporarily become disabled.</p>
                         */
                        // @ts-ignore
                         getUses(): number;
                        /**
                         * <p>Gets the current maximum uses of this offer.</p>
                         * <p>Usually, the uses of an offer are limited by the amount of maximum
                         * uses. Once the uses reaches the max uses, the offer may temporarily
                         * become disabled.</p>
                         */
                        // @ts-ignore
                         getMaxUses(): number;
                        /**
                         * Checks if this trade offer has indeed passed the time of which the uses
                         * surpassed the maximum uses.
                         */
                        // @ts-ignore
                         hasExpired(): boolean;
                        /**
                         * Gets whether this trade offer will grant experience upon usage or not.
                         */
                        // @ts-ignore
                         doesGrantExperience(): boolean;
                    }
                }
            }
        }
    }
}
