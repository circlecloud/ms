// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    // @ts-ignore
                    interface EconomyService extends org.spongepowered.api.service.context.ContextualService {
                        /**
                         * Retrieves the default {@link Currency} used by the {@link EconomyService}.
                         */
                        // @ts-ignore
                         getDefaultCurrency(): org.spongepowered.api.service.economy.Currency;
                        /**
                         * Returns the {@link Set} of supported {@link Currency} objects that are
                         * implemented by this EconomyService.
                         * <p>The economy service provider may only support one currency, in which
                         * case {@link #getDefaultCurrency()} will be the only member of the set.</p>
                         * <p>The set returned is a read-only a view of all currencies available in
                         * the EconomyService.</p>
                         */
                        // @ts-ignore
                         getCurrencies(): java.util.Set;
                        /**
                         * Returns whether a {@link UniqueAccount} exists with the specified {@link UUID}.
                         */
                        // @ts-ignore
                         hasAccount(uuid: java.util.UUID): boolean;
                        /**
                         * Returns whether an {@link Account} with the specified identifier exists.
                         * <p>Depending on the implementation, the {@link Account} may be a
                         * {@link UniqueAccount} or a {@link VirtualAccount}.
                         */
                        // @ts-ignore
                         hasAccount(identifier: string): boolean;
                        /**
                         * Gets the {@link UniqueAccount} for the user with the specified {@link UUID}.
                         * <p>If an account does not already exists with the specified {@link UUID},
                         * it will be created.</p>
                         * <p>Creation might fail if the provided {@link UUID} does not correspond to
                         * an actual player, or for an implementation-defined reason.</p>
                         */
                        // @ts-ignore
                         getOrCreateAccount(uuid: java.util.UUID): java.util.Optional;
                        /**
                         * Gets the {@link VirtualAccount} with the specified identifier.
                         * <p>Depending on the implementation, the {@link Account} may be a
                         * {@link UniqueAccount} or a {@link VirtualAccount}.</p>
                         * <p>If an account does not already exists with the specified identifier,
                         * it will be created.</p>
                         * <p>Creation may fail for an implementation-defined reason.</p>
                         */
                        // @ts-ignore
                         getOrCreateAccount(identifier: string): java.util.Optional;
                    }
                }
            }
        }
    }
}
