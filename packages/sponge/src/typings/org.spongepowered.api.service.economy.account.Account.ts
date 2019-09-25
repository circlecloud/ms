declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace account {
                        // @ts-ignore
                        interface Account extends org.spongepowered.api.service.context.Contextual {
                            /**
                             * Gets the display name for this account.
                             * <p>This should be used by plugins to get a human-readable name for an
                             * account, regardless of the specific type ({@link UniqueAccount} or
                             * {@link VirtualAccount}).</p>
                             * <p>Its contents are dependent on the provider of {@link EconomyService}.
                             * For example, an economy plugin could allow players to configure the
                             * display name of their account</p>.
                             */
                            // @ts-ignore
                             getDisplayName(): org.spongepowered.api.text.Text;
                            /**
                             * Gets the default balance of this account for the specified
                             * {@link Currency}.
                             * <p>The default balance is used when the balance is retrieved for the
                             * first time for a given {@link Currency} on this account, or if no
                             * balance is available for the {@link Context}s used when retrieving
                             * a balance.</p>
                             */
                            // @ts-ignore
                             getDefaultBalance(currency: org.spongepowered.api.service.economy.Currency): any;
                            /**
                             * Returns whether this account has a set balance for the specified
                             * {@link Currency}, with the specified {@link Context}s.
                             * <p>If this method returns <code>false</code>, then
                             * {@link #getDefaultBalance(Currency)} will be used when
                             * retrieving a balance for the specified {@link Currency} with
                             * the specified {@link Context}s.</p>
                             */
                            // @ts-ignore
                             hasBalance(currency: org.spongepowered.api.service.economy.Currency, contexts: any[] /*java.util.Set*/): boolean;
                            /**
                             * Returns whether this account has a set balance for the specified
                             * {@link Currency}, with the current active contexts.
                             * <p>If this method returns <code>false</code>, then
                             * {@link #getDefaultBalance(Currency)} will be used when retrieving
                             * a balance for the specifid {@link Currency} with
                             * the current active contexts</p>.
                             */
                            // @ts-ignore
                             hasBalance(currency: org.spongepowered.api.service.economy.Currency): boolean;
                            /**
                             * Returns a {@link BigDecimal} representative of the balance stored within this
                             * {@link Account} for the {@link Currency} given and the set of {@link Context}s.
                             * <p>The default result when the account does not have a balance of the
                             * given {@link Currency} should be {@link BigDecimal#ZERO}.</p>
                             * <p>The balance may be unavailable depending on the set of
                             * {@link Context}s used.</p>
                             */
                            // @ts-ignore
                             getBalance(currency: org.spongepowered.api.service.economy.Currency, contexts: any[] /*java.util.Set*/): any;
                            /**
                             * Returns a {@link BigDecimal} representative of the balance stored
                             * within this {@link Account} for the {@link Currency} given, with
                             * the current active contexts.
                             * <p>The default result when the account does not have a balance of the
                             * given {@link Currency} will be {@link #getDefaultBalance(Currency)}.</p>
                             */
                            // @ts-ignore
                             getBalance(currency: org.spongepowered.api.service.economy.Currency): any;
                            /**
                             * Returns a {@link Map} of all currently set balances the account holds
                             * within the set of {@link Context}s.
                             * <p>Amounts may differ depending on the {@link Context}s specified and
                             * the implementation. The set of {@link Context}s may be empty.</p>
                             * <p>{@link Currency} amounts which are 0 may or may not be included in
                             * the returned mapping.</p>
                             * <p>Changes to the returned {@link Map} will not be reflected in
                             * the underlying {@link Account}. See
                             * {@link #setBalance(Currency, BigDecimal, Cause, Set)}  to set values.</p>
                             */
                            // @ts-ignore
                             getBalances(contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                            /**
                             * Returns a {@link Map} of all currently set balances the account holds
                             * within the current active {@link Context}s.2
                             * <p>Amounts may differ depending on the {@link Context}s specified and
                             * the implementation. The set of {@link Context}s may be empty.</p>
                             * <p>{@link Currency} amounts which are 0 may or may not be included in
                             * the returned mapping.</p>
                             * <p>Changes to the returned {@link Map} will not be reflected in
                             * the underlying {@link Account} and may result in runtime exceptions
                             * depending on implementation. See
                             * {@link #setBalance(Currency, BigDecimal, Cause, Set)}  to set values.</p>
                             */
                            // @ts-ignore
                             getBalances(): Map<any, any> /*java.util.Map*/;
                            /**
                             * Sets the balance for this account to the specified amount for
                             * the specified {@link Currency}, with the specified set of {@link Context}s.
                             * <p>Negative balances may or may not be supported depending on
                             * the {@link Currency} specified and the implementation.</p>
                             */
                            // @ts-ignore
                             setBalance(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Sets the balance for this account to the specified amount for the
                             * specified {@link Currency}, with the current active {@link Context}s.
                             * <p>Negative balances may or may not be supported depending on
                             * the {@link Currency} specified and the implementation.</p>
                             */
                            // @ts-ignore
                             setBalance(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Resets the balances for all {@link Currency}s used on this account
                             * to their default values ({@link #getDefaultBalance(Currency)}),
                             * using the specified {@link Context}s.
                             */
                            // @ts-ignore
                             resetBalances(cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                            /**
                             * Resets the balances for all {@link Currency}s used on this account to
                             * their default values ({@link #getDefaultBalance(Currency)}), using
                             * the current active {@link Context}.
                             */
                            // @ts-ignore
                             resetBalances(cause: org.spongepowered.api.event.cause.Cause): Map<any, any> /*java.util.Map*/;
                            /**
                             * Resets the balance for the specified {@link Currency} to its default
                             * value ({@link #getDefaultBalance(Currency)}), using
                             * the specified {@link Context}s.
                             */
                            // @ts-ignore
                             resetBalance(currency: org.spongepowered.api.service.economy.Currency, cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Resets the balance for the specified {@link Currency} to its default
                             * value ({@link #getDefaultBalance(Currency)}),
                             * using the current active {@link Context}s.
                             */
                            // @ts-ignore
                             resetBalance(currency: org.spongepowered.api.service.economy.Currency, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Deposits the specified amount of the specified {@link Currency} to
                             * this account, using the specified {@link Context}s.
                             */
                            // @ts-ignore
                             deposit(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Deposits the given amount of the specified {@link Currency} to
                             * this account, using the current active {@link Context}s.
                             */
                            // @ts-ignore
                             deposit(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Withdraws the specified amount of the specified {@link Currency} from
                             * this account, using the specified {@link Context}s.
                             */
                            // @ts-ignore
                             withdraw(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Withdraws the specified amount of the specified {@link Currency} from
                             * this account, using the current active {@link Context}s.
                             */
                            // @ts-ignore
                             withdraw(currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult;
                            /**
                             * Transfers the specified amount of the specified {@link Currency}
                             * from this account the destination account,
                             * using the specified {@link Context}s.
                             * <p>This operation is a merged {@link #withdraw(Currency, BigDecimal, Cause, Set)}
                             * from this account with a {@link #deposit(Currency, BigDecimal, Cause, Set)}
                             * into the specified account.</p>
                             */
                            // @ts-ignore
                             transfer(to: org.spongepowered.api.service.economy.account.Account, currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause, contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.economy.transaction.TransferResult;
                            /**
                             * Transfers the specified amount of the specified {@link Currency}
                             * from this account the destination account,
                             * using the current active {@link Context}s.
                             * <p>This operation is a merged {@link #withdraw(Currency, BigDecimal, Cause, Set)}
                             * from this account with a {@link #deposit(Currency, BigDecimal, Cause, Set)}
                             * into the specified account.</p>
                             */
                            // @ts-ignore
                             transfer(to: org.spongepowered.api.service.economy.account.Account, currency: org.spongepowered.api.service.economy.Currency, amount: any, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransferResult;
                        }
                    }
                }
            }
        }
    }
}
