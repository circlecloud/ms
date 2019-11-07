// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace transaction {
                        // @ts-ignore
                        interface TransferResult extends org.spongepowered.api.service.economy.transaction.TransactionResult {
                            /**
                             * Gets the {@link Account} that an amount of a {@link Currency} is being transferred to.
                             * <p>{@link #getAccount()} can be used to get the {@link Account} that the currency
                             * is being transferred from.</p>
                             */
                            // @ts-ignore
                             getAccountTo(): org.spongepowered.api.service.economy.account.Account;
                        }
                    }
                }
            }
        }
    }
}
