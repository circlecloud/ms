// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface VillagerRegistry {
                        /**
                         * Gets an immutable {@link Multimap} of the {@link Career}'s registered
                         * {code level} to {@link TradeOfferListMutator}s. Note that the map is
                         * immutable and cannot be modified directly.
                         */
                        // @ts-ignore
                         getTradeOfferLevelMap(career: org.spongepowered.api.data.type.Career): any;
                        /**
                         * Gets the available {@link TradeOfferListMutator}s for the desired
                         * {@link Career} and {@code level}.
                         */
                        // @ts-ignore
                         getMutatorsForCareer(career: org.spongepowered.api.data.type.Career, level: number): java.util.Collection;
                        /**
                         * Adds the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level.
                         */
                        // @ts-ignore
                         addMutator(career: org.spongepowered.api.data.type.Career, level: number, mutator: org.spongepowered.api.item.merchant.TradeOfferListMutator): org.spongepowered.api.item.merchant.VillagerRegistry;
                        /**
                         * Adds the provided {@link TradeOfferListMutator}s for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level.
                         */
                        // @ts-ignore
                         addMutators(career: org.spongepowered.api.data.type.Career, level: number, mutator: org.spongepowered.api.item.merchant.TradeOfferListMutator, mutators: org.spongepowered.api.item.merchant.TradeOfferListMutator): org.spongepowered.api.item.merchant.VillagerRegistry;
                        /**
                         * Sets the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level. Any previously provided {@link TradeOfferListMutator}s will
                         * be erased.
                         */
                        // @ts-ignore
                         setMutators(career: org.spongepowered.api.data.type.Career, level: number, mutators: java.util.List): org.spongepowered.api.item.merchant.VillagerRegistry;
                        /**
                         * Sets the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level. Any previously provided {@link TradeOfferListMutator}s will
                         * be erased.
                         */
                        // @ts-ignore
                         setMutators(career: org.spongepowered.api.data.type.Career, mutatorMap: any): org.spongepowered.api.item.merchant.VillagerRegistry;
                        /**
                         * Generates a new {@link List} of {@link TradeOffer}s based on the
                         * provided {@link Career}, {@code level}, and {@link Random}.
                         */
                        // @ts-ignore
                         generateTradeOffers(merchant: org.spongepowered.api.item.merchant.Merchant, career: org.spongepowered.api.data.type.Career, level: number, random: java.util.Random): java.util.Collection;
                        /**
                         * Populates the provided {@link List} of {@link TradeOffer}s with
                         * potentially new {@link TradeOffer}s based on the
                         * {@link TradeOfferListMutator}s and {@code level}. If there are no
                         * {@link TradeOfferListMutator}s registered for the desired level
                         * and {@link Career}, the list remains unmodified.
                         */
                        // @ts-ignore
                         populateOffers(merchant: org.spongepowered.api.item.merchant.Merchant, currentOffers: java.util.List, career: org.spongepowered.api.data.type.Career, level: number, random: java.util.Random): java.util.List;
                    }
                }
            }
        }
    }
}
